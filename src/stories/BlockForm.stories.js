import BlockForm from '@/lib-components/BlockForm'
import { computed } from 'vue'

// Import mock api data
import BlockFormData from '@/stories/mock/BlockFormData.json'

// Storybook default settings
export default {
  title: 'BLOCK / Form',
  component: BlockForm,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return{
        eventId: computed(() => '12333405'),
        blockFormData: computed(() => BlockFormData.mock1),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        libcalWaitlist: computed(() => '1'),
        registrationType: computed(() => 'online'),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function AdvancedResearch() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return{
        eventId:  computed(() => '12333409'),
        blockFormData:  computed(() =>  BlockFormData.mock2),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType:  computed(() => 'online'),
        libcalWaitlist:  computed(() => null),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function CLICCInstructionalUseForm() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return{
        eventId: computed(() => '12333413'),
        blockFormData: computed(() => BlockFormData.mock3),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'both'),
        libcalWaitlist: computed(() => null),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function LibrarySpecialCollections() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return{
        eventId: computed(() => '12333417'),
        blockFormData: computed(() => BlockFormData.mock4),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'online'),
        libcalWaitlist: computed(() => null),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function FTVATest() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
        eventId: computed(() => '12333419'),
        blockFormData: computed(() => BlockFormData.mock5),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'in-person'),
        libcalWaitlist: computed(() => '1'),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function TerryAllen() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
        eventId: computed(() => '12333423'),
        blockFormData: computed(() => BlockFormData.mock6),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'online'),
        libcalWaitlist: computed(() => null),
        }
      },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function TextBallot() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
        eventId: computed(() => '12333425'),
        blockFormData: computed(() => BlockFormData.mock7),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'in-person'),
        libcalWaitlist: computed(() => null),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function UCLALibrary() {
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
        eventId: computed(() => '12333491'),
        blockFormData: computed(() => BlockFormData.mock8),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'both'),
        libcalWaitlist: computed(() => null),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}
