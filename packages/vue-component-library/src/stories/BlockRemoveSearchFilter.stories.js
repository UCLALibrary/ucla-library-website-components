import { computed } from 'vue'
import BlockRemoveSearchFilter from '@/lib-components/BlockRemoveSearchFilter'
import router from '@/router'

export default {
  title: 'SEARCH / Block Remove Search Filter',
  component: BlockRemoveSearchFilter,
  decorators: [
    () => ({
      router,
      template: '<story />',
    }),
  ],
}

const mock = {
  title: ' Default Amenities'
}

// Variations of stories below
export function Default() {
  router.push('/abc/ccc')
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            :title="title"
        />
    `,
  }
}

export function Help() {
  router.push('/help/ddd')
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="Help"
            color="help"
        />
    `,
  }
}

export function Visit() {
  router.push('/visit/eee')
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="Visit"
        />
    `,
  }
}

export function About() {
  router.push('/about/fff')
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="About"
        />
    `,
  }
}

function FTVATemplate(args) {
  router.push('/')
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      return { args }
    },
    components: { BlockRemoveSearchFilter },
    template: '<block-remove-search-filter v-bind="args" />',
  }
}

export const FTVA = FTVATemplate.bind({})
FTVA.args = {
  title: 'FTVA',
  iconName: 'SvgIconGuest',
}

export const FTVASelected = FTVATemplate.bind({})
FTVASelected.args = {
  title: 'FTVA',
  iconName: 'SvgIconGuest',
  isSelected: 'true'
}
