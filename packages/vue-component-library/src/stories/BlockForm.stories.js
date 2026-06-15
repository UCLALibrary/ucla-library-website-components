import { computed } from 'vue'
import BlockForm from '@/lib-components/BlockForm'

// Import mock api data
import BlockFormData from '@/stories/mock/BlockFormData.json'

// Storybook default settings
export default {
  title: 'BLOCK / Form',
  component: BlockForm,
}

// The blockform data is tied to eventid, we cannot change eventid and keep the same form, so if you are updating form , also update the eventid and other details
// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
        eventId: computed(() => '12333405'),
        blockFormData: computed(() => BlockFormData.mock1),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        libcalWaitlist: computed(() => '1'),
        registrationType: computed(() => 'in-person'),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const AppsTeamFormTemplate = (args) => {
  void args
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
        eventId: computed(() => '12333409'),
        blockFormData: computed(() => BlockFormData.mock2),
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

export const AppsTeamForm = AppsTeamFormTemplate.bind({})
AppsTeamForm.args = {}


const CLICCInstructionalUseFormTemplate = (args) => {
  void args
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
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

export const CLICCInstructionalUseForm = CLICCInstructionalUseFormTemplate.bind({})
CLICCInstructionalUseForm.args = {}


const LibrarySpecialCollectionsTemplate = (args) => {
  void args
  return {
    data() {
      return { BlockFormData }
    },
    provide() {
      return {
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

export const LibrarySpecialCollections = LibrarySpecialCollectionsTemplate.bind({})
LibrarySpecialCollections.args = {}


const FTVATestTemplate = (args) => {
  void args
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

export const FTVATest = FTVATestTemplate.bind({})
FTVATest.args = {}


const TerryAllenTemplate = (args) => {
  void args
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

export const TerryAllen = TerryAllenTemplate.bind({})
TerryAllen.args = {}


const TextBallotTemplate = (args) => {
  void args
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

export const TextBallot = TextBallotTemplate.bind({})
TextBallot.args = {}


const UCLALibraryTemplate = (args) => {
  void args
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

export const UCLALibrary = UCLALibraryTemplate.bind({})
UCLALibrary.args = {}


const FTVAFormTemplate = (args) => {
  void args
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
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export const FTVAForm = FTVAFormTemplate.bind({})
FTVAForm.args = {}

