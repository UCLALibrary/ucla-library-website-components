import { computed } from 'vue'
import RefineSearchPanel from '../lib-components/RefineSearchPanel.vue'
import YearRangeFilter from '../lib-components/YearRangeFilter.vue'
import './FilterDropdown.stories.css'
import router from '@/router'


export default {
  title: 'Funkhaus / RefineSearchPanel',
  component: RefineSearchPanel,
  argTypes: {
    filters: {
      control: 'object',
      description: 'Array of filter objects with name, slotName, and optional options'
    }
  }
}

// Shared filter data
const subjectFilter = {
  name: 'Subject',
  slotName: 'subject',
  facetField: 'subject_tesim',
  options: [
    { label: 'History', value: 'history', count: 15420 },
    { label: 'Literature', value: 'literature', count: 8930 },
    { label: 'Science', value: 'science', count: 12650 },
    { label: 'Art', value: 'art', count: 7820 },
    { label: 'Philosophy', value: 'philosophy', count: 4560 }
  ],
  showAll: true
}

const resourceTypeFilter = {
  name: 'Resource Type',
  slotName: 'resourceType',
  facetField: 'resource_type_tesim',
  options: [
    { label: 'Still Image', value: 'still-image', count: 21958 },
    { label: 'Moving Image', value: 'moving-image', count: 8012 },
    { label: 'Text', value: 'text', count: 33486 },
    { label: 'Sound Recording', value: 'sound-recording', count: 12796 },
    { label: 'Cartographic', value: 'cartographic', count: 3615 },
    { label: 'Notated Music', value: 'notated-music', count: 744 },
    { label: 'Sound Recording-Nonmusical', value: 'sound-recording-nonmusical', count: 528 },
    { label: 'Sound Recording-Musical', value: 'sound-recording-musical', count: 388 },
    { label: 'Mixed Material', value: 'mixed-material', count: 104 },
    { label: 'Three Dimensional Object', value: 'three-dimensional-object', count: 68 }
  ],
  showAll: true
}

const genreFilter = {
  name: 'Genre',
  slotName: 'genre',
  facetField: 'genre_tesim',
  options: [
    { label: 'Fiction', value: 'fiction', count: 12340 },
    { label: 'Non-fiction', value: 'non-fiction', count: 18760 },
    { label: 'Biography', value: 'biography', count: 8920 },
    { label: 'Academic', value: 'academic', count: 15680 },
    { label: 'Reference', value: 'reference', count: 5430 }
  ],
  showAll: true
}

// Default filters with options for all filters
const defaultFilters = [
  subjectFilter,
  resourceTypeFilter,
  genreFilter,
  {
    name: 'Location',
    slotName: 'location',
    facetField: 'location_tesim',
    options: [
      { label: 'United States', value: 'united-states', count: 45670 },
      { label: 'Europe', value: 'europe', count: 23450 },
      { label: 'Asia', value: 'asia', count: 18920 },
      { label: 'Africa', value: 'africa', count: 8760 },
      { label: 'South America', value: 'south-america', count: 5430 }
    ],
    showAll: true
  },
  {
    name: 'Names',
    slotName: 'names',
    facetField: 'names_tesim',
    options: [
      { label: 'Smith, John', value: 'smith-john', count: 2340 },
      { label: 'Johnson, Mary', value: 'johnson-mary', count: 1890 },
      { label: 'Williams, Robert', value: 'williams-robert', count: 1560 },
      { label: 'Brown, Sarah', value: 'brown-sarah', count: 1230 },
      { label: 'Davis, Michael', value: 'davis-michael', count: 980 }
    ],
    showAll: true
  },
  {
    name: 'Date Range',
    slotName: 'dateRange',
    showAll: true
  },
  {
    name: 'Collection',
    slotName: 'collection',
    facetField: 'collection_tesim',
    options: [
      { label: 'Digital Collections', value: 'digital', count: 45670 },
      { label: 'Archives', value: 'archives', count: 23450 },
      { label: 'Special Collections', value: 'special', count: 18920 },
      { label: 'Rare Books', value: 'rare-books', count: 8760 },
      { label: 'Manuscripts', value: 'manuscripts', count: 5430 }
    ],
    showAll: true
  },
  {
    name: 'Repository',
    slotName: 'repository',
    facetField: 'repository_tesim',
    options: [
      { label: 'Main Library', value: 'main-library', count: 45670 },
      { label: 'Research Library', value: 'research-library', count: 23450 },
      { label: 'Special Collections', value: 'special-collections', count: 18920 },
      { label: 'Digital Archive', value: 'digital-archive', count: 8760 },
      { label: 'University Archives', value: 'university-archives', count: 5430 }
    ],
    showAll: true
  },
  {
    name: 'Program',
    slotName: 'program',
    options: [
      { label: 'Undergraduate', value: 'undergraduate', count: 45670 },
      { label: 'Graduate', value: 'graduate', count: 23450 },
      { label: 'Research', value: 'research', count: 18920 },
      { label: 'Community', value: 'community', count: 8760 },
      { label: 'Faculty', value: 'faculty', count: 5430 }
    ],
    showAll: true
  }
]

// Long filters with many options
const longFilters = [
  {
    name: 'Very Long Filter Name That Might Wrap and Should Be Handled Gracefully',
    slotName: 'longName',
    options: Array.from({ length: 5 }, (_, i) => ({
      label: `This is an extremely long option name ${i + 1} that should test how the component handles text wrapping and layout`,
      value: `long-option-${i + 1}`,
      count: Math.floor(Math.random() * 10000)
    })),
    showAll: true
  },
  {
    name: 'Another Extremely Long Filter Name That Should Be Handled Gracefully in the UI',
    slotName: 'anotherLongName',
    options: Array.from({ length: 5 }, (_, i) => ({
      label: `Option ${i + 1} with very long descriptive text that might cause layout issues`,
      value: `another-long-option-${i + 1}`,
      count: Math.floor(Math.random() * 5000)
    })),
    showAll: true
  }
]

export function Default() {
  router.push({ query: { page: '2' } })
  return {
    components: { RefineSearchPanel, YearRangeFilter },
    data() {
      return {
        filters: defaultFilters,
        selectedOptions: {},
        dateRange: {
          minValue: 1950,
          maxValue: 2000
        },
        eventLog: []
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    methods: {
      onSelectionChange(selections) {
        this.selectedOptions = selections
        const totalSelections = Object.values(selections).reduce((sum, arr) => sum + arr.length, 0)
        this.addToLog('📊 Selection Changed', `Total selections: ${totalSelections}`)
      },
      onOptionSelected(filterName, option) {
        this.addToLog('✅ Option Selected', `${filterName} → ${option.label}`)
      },
      onOptionDeselected(filterName, option) {
        this.addToLog('❌ Option Deselected', `${filterName} → ${option.label}`)
      },
      onDateRangeChange(range) {
        // For the story, only log; do not mutate props
        this.addToLog('📅 Date Range Changed', `${range.min} - ${range.max}`)
      },
      addToLog(type, message) {
        const timestamp = new Date().toLocaleTimeString()
        this.eventLog.unshift({ type, message, timestamp })
        // Keep only last 5 events
        if (this.eventLog.length > 5)
          this.eventLog = this.eventLog.slice(0, 5)
      }
    },
    template: `
      <div class="story-container">
        <RefineSearchPanel 
          title='REFINE SEARCH' 
          :filters="filters"
          @selection-change="onSelectionChange"
          @option-selected="onOptionSelected"
          @option-deselected="onOptionDeselected"
        >
          <!-- Custom slot for the date range filter -->
          <template #dateRange="{ filter, selectedOptions, toggleOption }">
            <div class="slot-content">
              <YearRangeFilter
                :min-value="dateRange.minValue"
                :max-value="dateRange.maxValue"
                :step="1"
                :disabled="false"
                @change="onDateRangeChange"
              />
            </div>
          </template>
        </RefineSearchPanel>
        
        <!-- Display selected options -->
        <div class="selected-options-container">
          <h4 class="selected-options-title">Selected Options Object:</h4>
          <pre class="selected-options-json">{{ JSON.stringify(selectedOptions, null, 2) }}</pre>
          <div class="date-range-display">
            <strong class="date-range-label">URL Query:</strong>
            <pre class="selected-options-json">{{ JSON.stringify($route && $route.query ? $route.query : {}, null, 2) }}</pre>
          </div>
        </div>

        <!-- Event Log -->
        <div class="event-log-container">
          <h4 class="event-log-title">
            <span class="event-log-icon">📋</span>
            Event Log
            <span class="event-log-counter">{{ eventLog.length }} events</span>
          </h4>
          <div class="event-log-content">
            <div v-for="(event, index) in eventLog" :key="index" class="event-item">
              <div class="event-header">
                <span class="event-type">{{ event.type }}</span>
                <span class="event-timestamp">{{ event.timestamp }}</span>
              </div>
              <div class="event-message">{{ event.message }}</div>
            </div>
            <div v-if="eventLog.length === 0" class="event-log-empty">
              <div class="event-log-empty-icon">🎯</div>
              <div class="event-log-empty-text">No events yet. Interact with the filters to see events here.</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

export function Long() {
  return {
    components: { RefineSearchPanel },
    data() {
      return { filters: longFilters }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
      <div class="story-container-wide">
        <RefineSearchPanel title='REFINE LONG SEARCH' :filters="filters" />
      </div>
    `
  }
}

// Sample filters including a date filter that will use the YearRangeFilter
const filtersWithDateRange = [
  subjectFilter,
  {
    name: 'Resource Type',
    slotName: 'resourceType',
    options: resourceTypeFilter.options.slice(0, 5), // Use first 5 options
    showAll: true
  },
  {
    name: 'Date Range',
    slotName: 'dateRange',
    // No options - this will use the slot
  },
  genreFilter
]

export function WithYearRangeFilter() {
  return {
    components: { RefineSearchPanel, YearRangeFilter },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        filters: filtersWithDateRange,
        selectedOptions: {},
        dateRange: {
          minValue: 1950,
          maxValue: 2000
        }
      }
    },
    methods: {
      onSelectionChange(selections) {
        this.selectedOptions = selections
      },
      onOptionSelected(filterName, option) {
        // Option selected event
      },
      onOptionDeselected(filterName, option) {
        // Option deselected event
      },
      onDateRangeChange(range) {
        // In this story, do not feed back into props; just log or handle externally
      }
    },
    template: `
      <div class="story-container">
        <RefineSearchPanel 
          title='REFINE SEARCH' 
          :filters="filters"
          @selection-change="onSelectionChange"
          @option-selected="onOptionSelected"
          @option-deselected="onOptionDeselected"
        >
          <!-- Custom slot for the date range filter -->
          <template #dateRange="{ filter, selectedOptions, toggleOption }">
            <div class="slot-content">
              <YearRangeFilter
                :min-value="dateRange.minValue"
                :max-value="dateRange.maxValue"
                :step="1"
                :disabled="false"
                @change="onDateRangeChange"
              />
            </div>
          </template>
        </RefineSearchPanel>
        <div class="selected-options-container">
          <h4 class="selected-options-title">Selected Options Object:</h4>
          <pre class="selected-options-json">{{ JSON.stringify(selectedOptions, null, 2) }}</pre>
          <div class="date-range-display">
            <strong class="date-range-label">URL Query:</strong>
            <pre class="selected-options-json">{{ JSON.stringify($route && $route.query ? $route.query : {}, null, 2) }}</pre>
          </div>
          
        </div>
      </div>
    `
  }
}

export function MultipleCustomSlots() {
  return {
    components: { RefineSearchPanel, YearRangeFilter },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        filters: [
          {
            name: 'Date Range',
            slotName: 'dateRange',
          },
          {
            name: 'Price Range',
            slotName: 'priceRange',
          },
          {
            name: 'Subject',
            slotName: 'subject',
            options: [
              { label: 'History', value: 'history', count: 15420 },
              { label: 'Literature', value: 'literature', count: 8930 },
              { label: 'Science', value: 'science', count: 12650 }
            ],
            showAll: true
          }
        ],
        selectedOptions: {},
          dateRange: { minValue: 1950, maxValue: 2000 },
          priceRange: { minValue: 100, maxValue: 500 }
      }
    },
    methods: {
      onSelectionChange(selections) {
        this.selectedOptions = selections
      },
      onDateRangeChange(range) {
        // Only log/handle externally in a real app
      },
      onPriceRangeChange(range) {
        // Only log/handle externally in a real app
      }
    },
    template: `
      <div class="story-container">
        <RefineSearchPanel 
          title='ADVANCED FILTERS' 
          :filters="filters"
          @selection-change="onSelectionChange"
        >
          <!-- Date Range Slot -->
          <template #dateRange="{ filter, selectedOptions, toggleOption }">
            <div class="slot-content">
              <YearRangeFilter
                :min-value="dateRange.minValue"
                :max-value="dateRange.maxValue"
                :step="1"
                @change="onDateRangeChange"
              />
            </div>
          </template>

          <!-- Price Range Slot -->
          <template #priceRange="{ filter, selectedOptions, toggleOption }">
            <div class="slot-content">
              <YearRangeFilter
                :min-value="priceRange.minValue"
                :max-value="priceRange.maxValue"
                :step="10"
                @change="onPriceRangeChange"
              />
            </div>
          </template>
        </RefineSearchPanel>
        <div class="selected-options-container">
          <h4 class="selected-options-title">URL Query:</h4>
          <pre class="selected-options-json">{{ JSON.stringify($route && $route.query ? $route.query : {}, null, 2) }}</pre>
        </div>
      </div>
    `
  }
}

