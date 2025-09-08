import { computed, ref } from 'vue'
import FilterDropdown from '@/lib-components/FilterDropdown.vue'

export default {
  title: 'Funkhaus / FilterDropdown',
  component: FilterDropdown,
  argTypes: {
    filters: {
      control: 'object',
      description: 'Array of filter objects with name, slotName, and optional options'
    }
  }
}

// Default filters with options for all filters
const defaultFilters = [
  { 

    name: 'Subject', 
    slotName: 'subject',
    options: [
      { label: 'History', value: 'history', count: 15420 },
      { label: 'Literature', value: 'literature', count: 8930 },
      { label: 'Science', value: 'science', count: 12650 },
      { label: 'Art', value: 'art', count: 7820 },
      { label: 'Philosophy', value: 'philosophy', count: 4560 }
    ],
    showAll: true
  },
  { 
    name: 'Resource Type', 
    slotName: 'resourceType', 
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
  },
  { 
    name: 'Genre', 
    slotName: 'genre',
    options: [
      { label: 'Fiction', value: 'fiction', count: 12340 },
      { label: 'Non-fiction', value: 'non-fiction', count: 18760 },
      { label: 'Biography', value: 'biography', count: 8920 },
      { label: 'Academic', value: 'academic', count: 15680 },
      { label: 'Reference', value: 'reference', count: 5430 }
    ],
    showAll: true
  },
  { 
    name: 'Location', 
    slotName: 'location',
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
    name: 'Date', 
    slotName: 'date',
    options: [
      { label: '2020-2024', value: '2020-2024', count: 12340 },
      { label: '2015-2019', value: '2015-2019', count: 18760 },
      { label: '2010-2014', value: '2010-2014', count: 15680 },
      { label: '2005-2009', value: '2005-2009', count: 12340 },
      { label: 'Before 2005', value: 'before-2005', count: 45670 }
    ],
    showAll: true
  },
  { 
    name: 'Collection', 
    slotName: 'collection',
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
  return {
    components: { FilterDropdown },
    data() {
      return { filters: defaultFilters }
    },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <FilterDropdown title='REFINE SEARCH' :filters="filters" />
      </div>
    `
  }
}

export function Long() {
  return {
    components: { FilterDropdown },
    data() {
      return { filters: longFilters }
    },
    template: `
      <div style="max-width: 500px; margin: 20px;">
        <FilterDropdown title='REFINE LONG SEARCH' :filters="filters" />
      </div>
    `
  }
}