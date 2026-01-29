<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useElasticSearch } from '@/composables/useElasticSearch'

const searchQuery = ref('')

const {
  loading,
  error,
  results,
  performSearch: performElasticsearchSearch,
} = useElasticSearch()

function handleSearch() {
  performElasticsearchSearch({
    queryText: searchQuery.value,
    page: 1,
    pageSize: 10,
  })
}

function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter')
    handleSearch()
}

// Auto-fetch on mount (empty search = match_all)
onMounted(() => {
  performElasticsearchSearch({
    queryText: '',
    page: 1,
    pageSize: 10,
  })
})

/**
 * Format a value for display
 */
function formatValue(value: unknown): string {
  if (value === null || value === undefined)
    return 'null'
  if (typeof value === 'object')
    return JSON.stringify(value, null, 2)
  return String(value)
}

/**
 * Check if value is an object or array
 */
function isComplexValue(value: unknown): boolean {
  return typeof value === 'object' && value !== null
}
</script>

<template>
  <div class="elasticsearch-data-viewer">
    <h2>Elasticsearch Data Viewer</h2>

    <!-- Search Input -->
    <div class="search-section">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="search-input"
        @keypress="handleKeyPress"
      >
      <button
        type="button"
        class="search-button"
        :disabled="loading"
        @click="handleSearch"
      >
        Search
      </button>
      <button
        v-if="searchQuery"
        type="button"
        class="clear-button"
        @click="
          searchQuery = ''
          performElasticsearchSearch({
            queryText: '',
            page: 1,
            pageSize: 10,
          })
        "
      >
        Clear
      </button>
    </div>

    <div v-if="loading" class="status status--loading">
      Loading data...
    </div>

    <div v-if="error" class="status status--error">
      <strong>Error:</strong> {{ error.message }}
    </div>

    <div v-if="results && !loading" class="data-container">
      <!-- Response Metadata -->
      <div class="section">
        <h3>Response Metadata</h3>
        <div class="key-value-list">
          <div class="key-value-item">
            <span class="key">Total Documents:</span>
            <span class="value">{{
              results.hits.total.value
            }}</span>
          </div>
          <div class="key-value-item">
            <span class="key">Returned:</span>
            <span class="value">{{
              results.hits.hits.length
            }}</span>
          </div>
          <div class="key-value-item">
            <span class="key">Search Time:</span>
            <span class="value">{{ results.took }}ms</span>
          </div>
        </div>
      </div>

      <!-- Documents -->
      <div class="section">
        <h3>Documents ({{ results.hits.hits.length }})</h3>
        <div
          v-for="(hit, index) in results.hits.hits"
          :key="hit._id"
          class="document"
        >
          <h4>
            Document {{ Number(index) + 1 }} (ID: {{ hit._id }})
          </h4>

          <!-- Document Metadata -->
          <div class="key-value-list">
            <div class="key-value-item">
              <span class="key">_index:</span>
              <span class="value">{{ hit._index }}</span>
            </div>
            <div v-if="hit._score" class="key-value-item">
              <span class="key">_score:</span>
              <span class="value">{{
                hit._score.toFixed(2)
              }}</span>
            </div>
          </div>

          <!-- Source Data -->
          <div class="source-data">
            <h5>_source (All Fields)</h5>
            <div class="key-value-list">
              <div
                v-for="[key, value] in Object.entries(
                  hit._source,
                )"
                :key="key"
                class="key-value-item"
              >
                <span class="key">{{ key }}:</span>
                <span
                  v-if="!isComplexValue(value)"
                  class="value"
                >{{ formatValue(value) }}</span>
                <pre v-else class="value value--complex">{{
                                    formatValue(value)
                }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full JSON Response -->
      <details class="section">
        <summary>
          <h3>Full JSON Response</h3>
        </summary>
        <pre class="json-output">{{
                    JSON.stringify(results, null, 2)
        }}</pre>
      </details>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.elasticsearch-data-viewer {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        sans-serif;
    line-height: 1.6;

    h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #212121;
    }

    .search-section {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 8px;

        .search-input {
            flex: 1;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            outline: none;

            &:focus {
                border-color: #005587;
            }
        }

        .search-button,
        .clear-button {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.2s;

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }

        .search-button {
            background-color: #005587;
            color: white;

            &:hover:not(:disabled) {
                background-color: #003d6b;
            }
        }

        .clear-button {
            background-color: #757575;
            color: white;

            &:hover {
                background-color: #616161;
            }
        }
    }

    .status {
        padding: 1.5rem;
        margin-bottom: 2rem;
        border-radius: 8px;
        font-size: 1.1rem;

        &--loading {
            background-color: #e3f2fd;
            color: #1565c0;
        }

        &--error {
            background-color: #ffebee;
            color: #c62828;
        }
    }

    .data-container {
        .section {
            margin-bottom: 3rem;
            padding: 1.5rem;
            background-color: #fafafa;
            border: 1px solid #e0e0e0;
            border-radius: 8px;

            h3 {
                margin-top: 0;
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
                color: #005587;
            }

            h4 {
                margin-top: 0;
                margin-bottom: 1rem;
                font-size: 1.2rem;
                color: #424242;
            }

            h5 {
                margin-top: 1.5rem;
                margin-bottom: 1rem;
                font-size: 1rem;
                color: #666;
                font-weight: 600;
            }
        }

        .document {
            margin-bottom: 2rem;
            padding: 1.5rem;
            background-color: white;
            border: 1px solid #e0e0e0;
            border-radius: 6px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        .key-value-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .key-value-item {
            display: flex;
            gap: 1rem;
            padding: 0.75rem;
            background-color: #f9f9f9;
            border-left: 3px solid #005587;
            border-radius: 4px;

            .key {
                font-weight: 600;
                color: #005587;
                min-width: 150px;
                flex-shrink: 0;
            }

            .value {
                color: #212121;
                word-break: break-word;
                flex: 1;

                &--complex {
                    background-color: #f5f5f5;
                    padding: 1rem;
                    border-radius: 4px;
                    overflow-x: auto;
                    font-size: 0.9rem;
                    line-height: 1.5;
                }
            }
        }

        .source-data {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 2px solid #e0e0e0;
        }

        .json-output {
            background-color: #263238;
            color: #aed581;
            padding: 1.5rem;
            border-radius: 6px;
            overflow-x: auto;
            font-size: 0.9rem;
            line-height: 1.6;
            font-family: "Courier New", "Monaco", "Menlo", monospace;
        }

        details {
            summary {
                cursor: pointer;
                list-style: none;

                h3 {
                    display: inline;
                }

                &::-webkit-details-marker {
                    display: none;
                }

                &::before {
                    content: "▶ ";
                    display: inline-block;
                    margin-right: 0.5rem;
                    transition: transform 0.2s;
                }
            }

            &[open] summary::before {
                transform: rotate(90deg);
            }
        }
    }
}
</style>
