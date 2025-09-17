import { computed, ref } from 'vue'
import SearchFieldComposite from '@/lib-components/SearchFieldComposite.vue'

import * as API from '@/stories/mock-api.json'

export default {
  title: 'Funkhaus / Search Field Composite',
  component: SearchFieldComposite,
  argTypes: {
    initialValue: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    dropdownModelValue: { control: 'text' },
    dropdownOptions: { control: 'array' },
    showDivider: { control: 'boolean' },
    backgroundImage: { control: 'object' },
    backgroundText: { control: 'text' },
  },
}

function Template(args) {
  return {
    components: { SearchFieldComposite },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      const dropdownValue = ref(args.dropdownModelValue)
      const submittedValue = ref('')

      const handleSearchSubmit = (value) => {
        submittedValue.value = value
        console.log('Search submitted:', value)
      }

      const handleDropdownUpdate = (value) => {
        dropdownValue.value = value
        console.log('Dropdown updated:', value)
      }

      return {
        args,
        dropdownValue,
        submittedValue,
        handleSearchSubmit,
        handleDropdownUpdate,
      }
    },
    template: `
      <div>
        <SearchFieldComposite
          v-bind="args"
          v-model:dropdown-model-value="dropdownValue"
          @submit="handleSearchSubmit"
          @update:dropdown-model-value="handleDropdownUpdate"
        />
        <div style="margin-top: 3em; padding: 10px; background: #f5f5f5; border-radius: 4px;">

            This string is not part of the component, but is used to demonstrate the functionality of the <strong>SearchFieldComposite</strong> component.
          <p><strong>Submitted Value:</strong> {{ submittedValue }}</p>
          <p><strong>Dropdown Value:</strong> {{ dropdownValue }}</p>
        </div>
      </div>
    `,
  }
}

export const Default = Template.bind({})
Default.args = {
  initialValue: '',
  placeholder: 'Search the library...',
}

export const WithDropdown = Template.bind({})
WithDropdown.args = {
  initialValue: '',
  placeholder: 'Search in...',
  dropdownModelValue: 'All Collections',
  dropdownOptions: [
    'All Collections',
    'Books & E-books',
    'Articles & Journals',
    'Databases',
    'Digital Collections',
    'Archives & Special Collections',
  ],
  dropdownPlaceholder: 'Select category',
}

export const WithDivider = Template.bind({})
WithDivider.args = {
  initialValue: '',
  placeholder: 'Search with divider...',
  dropdownModelValue: 'All Collections',
  dropdownOptions: [
    'All Collections',
    'Books & E-books',
    'Articles & Journals',
    'Databases',
  ],
  showDivider: true,
}

export const WithBackgroundImage = Template.bind({})
WithBackgroundImage.args = {
  initialValue: '',
  placeholder: 'Search with background...',
  dropdownModelValue: 'All Collections',
  dropdownOptions: [
    'All Collections',
    'Books & E-books',
    'Articles & Journals',
    'Databases',
  ],
  showDivider: true,
  backgroundImage: API.image,
  backgroundText: `Poster celebrating the 100 years of the legal abolition of three centuries of slavery in Brazil (1888-1988) <br>
Collections: Soweto Black Organization, Modern Endangered Archives Program`,
}

export const WithBackgroundImageNoText = Template.bind({})
WithBackgroundImageNoText.args = {
  initialValue: '',
  placeholder: 'Search with background image only...',
  dropdownModelValue: 'All Collections',
  dropdownOptions: [
    'All Collections',
    'Books & E-books',
    'Articles & Journals',
    'Databases',
  ],
  backgroundImage: API.image,
}

export const EmptyBackgroundImage = Template.bind({})
EmptyBackgroundImage.args = {
  initialValue: '',
  placeholder: 'No background image...',
  dropdownModelValue: 'All Collections',
  dropdownOptions: [
    'All Collections',
    'Books & E-books',
    'Articles & Journals',
    'Databases',
  ],
  backgroundImage: {},
}
