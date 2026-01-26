import { ref } from 'vue'

/**
 * useElasticsearchSearch composable
 * ----------------------------------------
 * A composable for performing Elasticsearch searches with support for:
 * - Query text search
 * - Filters (terms, date ranges, etc.)
 * - Pagination
 * - Sorting
 *
 * ---
 * ### ⚙️ Parameters
 *
 * @param {string} queryText - The search query text
 * @param {QueryFilters} filters - Object mapping field names to arrays of filter values
 * @param {number} page - Current page number (1-indexed)
 * @param {number} pageSize - Number of results per page
 * @param {string | object[]} sort - Sort option (string for simple sort, array for complex)
 *
 * ---
 * ### 🧩 Returns
 *
 * @returns {object} - Object containing:
 * - loading: Ref<boolean> - Loading state
 * - error: Ref<Error | null> - Error state
 * - results: Ref<any> - Full Elasticsearch response
 * - total: Ref<number> - Total number of results
 * - hits: Ref<any[]> - Array of search hits
 * - performSearch: Function - Function to execute search
 */

// Type definitions for filters - maps field names to arrays of filter values
export interface QueryFilters {
  [key: string]: string[]
}

// Configuration for Elasticsearch connection
export interface ElasticsearchConfig {
  host?: string
  index?: string
  apiKey?: string
}

// Options for performing a search
export interface SearchOptions {
  queryText?: string // The search query text
  filters?: QueryFilters // Filters to apply (e.g., resourceType: ['book', 'article'])
  page?: number // Page number (1-indexed)
  pageSize?: number // Number of results per page
  sort?: string | object[] // Sort option (string like "Title (A-Z)" or custom sort object)
  maxResults?: number // Optional: Maximum total results to return (limits search)
}

// Default configuration loaded from environment variables
// Set these in your .env file:
// VITE_ELASTICSEARCH_HOST=https://elastical.library.ucla.edu
// VITE_ELASTICSEARCH_INDEX=central-search
// VITE_ELASTICSEARCH_API_KEY=your-api-key
const DEFAULT_CONFIG: ElasticsearchConfig = {
  host: import.meta.env.VITE_ELASTICSEARCH_HOST,
  index: import.meta.env.VITE_ELASTICSEARCH_INDEX,
  apiKey: import.meta.env.VITE_ELASTICSEARCH_API_KEY,
}

/**
 * Convert QueryFilters to Elasticsearch filter clauses
 *
 * Takes a filters object like { resourceType: ['book', 'article'] }
 * and converts it to Elasticsearch terms queries:
 * [{ terms: { resourceType: ['book', 'article'] } }]
 */
function buildFilterClauses(filters: QueryFilters): object[] {
  const filterClauses: object[] = []

  // Process each filter field
  Object.entries(filters).forEach(([fieldName, values]) => {
    if (values && values.length > 0) {
      // Filter out empty values and "All" options (these mean "no filter")
      const validValues = values.filter(
        v => v && v.trim() !== '' && v.toLowerCase() !== 'all formats'
      )

      // If we have valid values, create a terms query for this field
      if (validValues.length > 0) {
        filterClauses.push({
          terms: {
            [fieldName]: validValues, // Elasticsearch terms query matches any of these values
          },
        })
      }
    }
  })

  return filterClauses
}

/**
 * Convert sort option string to Elasticsearch sort clause
 *
 * Maps user-friendly sort options (like "Title (A-Z)") to Elasticsearch sort objects.
 * UCLA's Elasticsearch uses plural field names (titles, creators) with .keyword subfields for sorting.
 *
 * @param sort - Sort option string or already-formatted sort array
 * @returns Elasticsearch sort clause array, or empty array for default relevance sort
 */
function buildSortClause(sort: string | object[] | undefined): object[] | undefined {
  if (!sort)
    return undefined

  // If already an array, return as-is (allows custom sort objects)
  if (Array.isArray(sort))
    return sort

  // Map user-friendly sort options to Elasticsearch sort clauses
  // Note: UCLA uses plural fields like 'titles' instead of 'title'
  // The .keyword subfield is used for exact string matching/sorting
  const sortMap: Record<string, object[]> = {
    'Relevance': [], // Empty array = default relevance sorting (by _score)
    'Date (Newest First)': [
      { _score: { order: 'desc' } }, // First by relevance
      { date: { order: 'desc', missing: '_last' } } // Then by date, newest first
    ],
    'Date (Oldest First)': [
      { date: { order: 'asc', missing: '_last' } } // Oldest first
    ],
    'Title (A-Z)': [
      { 'titles.keyword': { order: 'asc', missing: '_last' } } // Sort by title keyword field
    ],
    'Title (Z-A)': [
      { 'titles.keyword': { order: 'desc', missing: '_last' } }
    ],
    'Author (A-Z)': [
      { 'creators.keyword': { order: 'asc', missing: '_last' } }
    ],
    'Author (Z-A)': [
      { 'creators.keyword': { order: 'desc', missing: '_last' } }
    ],
  }

  const sortClause = sortMap[sort]

  // If no mapping found, return empty array (default relevance sort)
  if (!sortClause) {
    console.warn(`Unknown sort option: ${sort}, using default relevance sort`)
    return []
  }

  return sortClause
}

/**
 * Build Elasticsearch query with filters
 *
 * Creates the main query object that Elasticsearch will execute.
 * - If queryText is provided, uses query_string query for full-text search
 * - If no queryText, uses match_all to return all documents
 * - If filters are provided, wraps everything in a bool query with filters
 *
 * @param queryText - The search query text
 * @param filters - Filters to apply
 * @returns Elasticsearch query object
 */
function buildQuery(queryText: string, filters: QueryFilters): object {
  const filterClauses = buildFilterClauses(filters)

  // Build main query: either search for text or match all documents
  const mainQuery = queryText.trim()
    ? {
        query_string: {
          query: queryText, // Full-text search across all fields
        },
      }
    : { match_all: {} } // No search text = return all documents

  // If we have filters, wrap in bool query to combine search + filters
  if (filterClauses.length > 0) {
    return {
      bool: {
        must: [mainQuery], // Must match the search query
        filter: filterClauses, // Must also match all filters
      },
    }
  }

  // No filters, just return the main query
  return mainQuery
}

/**
 * Elasticsearch search composable
 */
export function useElasticsearchSearch(config?: ElasticsearchConfig) {
  const esConfig = { ...DEFAULT_CONFIG, ...config }

  const loading = ref(false)
  const error = ref<Error | null>(null)
  const results = ref<any>(null)
  const total = ref(0)
  const hits = ref<any[]>([])

  /**
   * Perform Elasticsearch search
   *
   * Makes a POST request to Elasticsearch with the search query, filters, pagination, and sorting.
   * Handles the response and updates reactive state (loading, error, results, total, hits).
   */
  async function performSearch(options: SearchOptions = {}) {
    const {
      queryText = '',
      filters = {},
      page = 1,
      pageSize = 10,
      sort,
      maxResults,
    } = options

    // Set loading state
    loading.value = true
    error.value = null

    try {
      // Build the Elasticsearch API URL
      const url = `${esConfig.host}/${esConfig.index}/_search`
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      }

      // Add API key authentication if provided
      if (esConfig.apiKey)
        headers['Authorization'] = `ApiKey ${esConfig.apiKey}`

      // Build the query and sort clauses
      const query = buildQuery(queryText, filters)
      const sortClause = buildSortClause(sort)

      // IMPORTANT: Elasticsearch has a hard limit: from + size <= 10000
      // This means you can't paginate beyond result 10,000
      // Cap the 'from' value to respect this limit
      const maxFrom = 10000 - pageSize
      const from = Math.min((page - 1) * pageSize, maxFrom)

      // Build the request body
      const requestBody: any = {
        query, // The search query (with filters)
        size: pageSize, // Number of results to return
        from, // Starting offset (for pagination)
        _source: true, // Return the full source documents
      }

      // Configure total count tracking
      // If maxResults is set, limit how many results Elasticsearch counts
      // Otherwise, get the exact total count (can be slow for very large result sets)
      if (maxResults)
        requestBody.track_total_hits = maxResults
      else
        requestBody.track_total_hits = true // Get exact total count

      // Add sorting if specified (empty array = default relevance sort)
      if (sortClause && sortClause.length > 0)
        requestBody.sort = sortClause

      // Make the API request
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
      })

      // Handle errors
      if (!response.ok) {
        let errorMessage = `API error: ${response.status} ${response.statusText}`
        try {
          const errorData = await response.json()
          console.error('Elasticsearch error response:', errorData)
          if (errorData.error)
            errorMessage += ` - ${JSON.stringify(errorData.error)}`
        }
        catch (e) {
          // If we can't parse error, use default message
        }
        throw new Error(errorMessage)
      }

      // Parse the response
      const data = await response.json()
      results.value = data

      // Extract the total count from the response
      // Elasticsearch can return total as a number or an object with value/relation
      let calculatedTotal = 0
      if (typeof data.hits?.total === 'number')
        calculatedTotal = data.hits.total
      else if (data.hits?.total?.value)
        calculatedTotal = data.hits.total.value

      // Cap the total if maxResults is specified
      if (maxResults && calculatedTotal > maxResults)
        total.value = maxResults
      else
        total.value = calculatedTotal

      // Store the actual hits (search results)
      hits.value = data.hits?.hits || []
    }
    catch (err) {
      // Handle errors: store error and clear results
      error.value = err instanceof Error ? err : new Error(String(err))
      console.error('Error fetching data:', err)
      results.value = null
      total.value = 0
      hits.value = []
    }
    finally {
      // Always clear loading state
      loading.value = false
    }
  }

  return {
    loading,
    error,
    results,
    total,
    hits,
    performSearch,
  }
}
