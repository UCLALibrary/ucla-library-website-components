import { computed } from 'vue'

// Import component
import BlockCardThreeColumn from '@/lib-components/BlockCardThreeColumn'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Card Three Column',
  component: BlockCardThreeColumn
}

const mockDefault = {
  to: 'series/todd-solondz-series',
  startDate: '2025-12-13T06:30:00+00:00',
  image: API.image,
  category: 'ULLAMCO',
  title: 'TEST - Todd Solondz Series',
  endDate: '2025-12-13T05:45:00+00:00',
  tagLabels: [
    {
      title: 'Guest speaker'
    },
    {
      title: '35mm',
      isHighlighted: true
    }
  ],
}

const mockSingleDigitDate = {
  to: 'series/todd-solondz-series',
  startDate: '2026-02-03T06:30:00+00:00',
  image: API.image,
  category: 'ULLAMCO',
  title: 'TEST - Todd Solondz Series',
  endDate: '2026-04-08T05:45:00+00:00',
  tagLabels: [
    {
      title: 'Guest speaker'
    },
    {
      title: '35mm',
      isHighlighted: true
    }
  ],
}

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image="image"
        :image-aspect-ratio="100"
        :title="title"
        :tagLabels="tagLabels"
        :startTime="parsedTime"
      />`,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const SingleDigitDateTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockSingleDigitDate }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image="image"
        :image-aspect-ratio="100"
        :title="title"
        :tagLabels="tagLabels"
        :startTime="parsedTime"
      />`,
  }
}

export const SingleDigitDate = SingleDigitDateTemplate.bind({})
SingleDigitDate.args = {}


const LongTitleTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image="image"
        :image-aspect-ratio="100"
        title="What I Really Do Is Magic: Edith Head and Hollywood Costume Design"
        :tagLabels="tagLabels"
      />`,
  }
}

export const LongTitle = LongTitleTemplate.bind({})
LongTitle.args = {}


const NoImageTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image=null
        :image-aspect-ratio="100"
        title="What I Really Do Is Magic: Edith Head and Hollywood Costume Design"
        :tagLabels="tagLabels"
      />`,
  }
}

export const NoImage = NoImageTemplate.bind({})
NoImage.args = {}


const CategoryTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image="image"
        :image-aspect-ratio="100"
        :category="category"
        :title="title"
        :tagLabels="tagLabels"
      />`,
  }
}

export const Category = CategoryTemplate.bind({})
Category.args = {}

