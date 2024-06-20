import { computed } from 'vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder'

export default {
  title: 'DIVIDER / Way Finder',
  component: DividerWayFinder,
}

// MOCK DATA
const MockVisit = {
  color: 'visit',
}

const MockAbout = {
  color: 'about',
}

const MockHelp = {
  color: 'help',
}

const MockIsHalfWidthHelp = {
  color: 'help',
  isHalfWidth: true
}

const MockFtva = {
  color: 'ftva',
}

// STORIES
export function Default() {
  return {
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export function Visit() {
  return {
    data() {
      return {
        ...MockVisit,
      }
    },
    provide() {
      return {
        theme: computed(() => 'visit'),
      }
    },
    components: { DividerWayFinder },
    template: `<divider-way-finder :color='color'/>`,
  }
}

export function About() {
  return {
    data() {
      return {
        ...MockAbout,
      }
    },
    provide() {
      return {
        theme: computed(() => 'about'),
      }
    },
    components: { DividerWayFinder },
    template: `<divider-way-finder :color='color'/>`,
  }
}

export function Help() {
  return {
    data() {
      return {
        ...MockHelp,
      }
    },
    provide() {
      return {
        theme: computed(() => 'help'),
      }
    },
    components: { DividerWayFinder },
    template: `<divider-way-finder :color='color'/>`,
  }
}

export function IsHalfWidthHelp() {
  return {
    data() {
      return {
        ...MockIsHalfWidthHelp,
      }
    },
    provide() {
      return {
        theme: computed(() => 'help'),
      }
    },
    components: { DividerWayFinder },
    template: `
    <divider-way-finder
      :color='color'
      :isHalfWidth='isHalfWidth'
    />`,
  }
}

export function FTVA() {
  return {
    data() {
      return {
        ...MockFtva,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { DividerWayFinder },
    template: `<divider-way-finder :color='color'/>`,
  }
}
