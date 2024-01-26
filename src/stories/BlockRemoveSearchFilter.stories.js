import BlockRemoveSearchFilter from '@/lib-components/BlockRemoveSearchFilter'

export default {
  title: 'SEARCH / Block Remove Search Filter',
  component: BlockRemoveSearchFilter,
}

const mock = {
  title: ' Default Amenities',
  filterType: 'location || departments || subjects || categories',
  color: 'default',
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            :title="title"
            :color="color"
        />
    `,
  }
}

export function Help() {
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
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="Visit"
            color="visit"
        />
    `,
  }
}

export function About() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="About"
            color="about"
        />
    `,
  }
}

export function FocusTest() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
          :title="title"
          :filterType="filterType"
        /><br>
        <block-remove-search-filter
          title="Help"
          color="help"
        /><br>
        <block-remove-search-filter
            title="Visit"
            color="visit"
        /><br>
        <block-remove-search-filter
            title="About"
            color="about"
        />
    `,
  }
}
