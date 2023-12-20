import BlockForm from '@/lib-components/BlockForm'

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
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock0,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      libcalWaitlist: '',
      registrationType: 'both',
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function DefaultType2() {
  return {
    data() {
      return { BlockFormData }
    },
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock1,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'both',
      libcalWaitlist: null,
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
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock2,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'online',
      libcalWaitlist: '0',
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function TestFormTerryAllen() {
  return {
    data() {
      return { BlockFormData }
    },
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock3,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'in-person',
      libcalWaitlist: '1',
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function TestFormFTVA() {
  return {
    data() {
      return { BlockFormData }
    },
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock4,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'in-person',
      libcalWaitlist: '',
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
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock5,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'in-person',
      libcalWaitlist: null,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}

export function UCLALibraryEventRegistration() {
  return {
    data() {
      return { BlockFormData }
    },
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock6,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'in-person',
      libcalWaitlist: '1',
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
  }
}
