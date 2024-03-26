// TEST ARTICLE - ALL FPB - So Many Squirrels

import { mockExternal, mockInternalArticle, mockInternalCollection, mockInternalEndowment, mockInternalEvent, mockInternalExhibition, mockInternalSeries, mockInternalWorkshop } from './mock/Flexible_CardWithImage'
import FlexibleCardWithImage from '@/lib-components/Flexible/CardWithImage'

export default {
  title: 'FLEXIBLE / Card With Image',
  component: FlexibleCardWithImage,
}

// External Content
export function Default() {
  return {
    data() {
      return { block: mockExternal }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - EVENT
export function InternalContentEvent() {
  return {
    data() {
      return {
        block: mockInternalEvent,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - Exhibition
export function InternalContentExhibiton() {
  return {
    data() {
      return {
        block: mockInternalExhibition
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - WORKSHOP
export function InternalWorkshop() {
  return {
    data() {
      return {
        block: mockInternalWorkshop,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - SERIES
export function InternalSeries() {
  return {
    data() {
      return {
        block: mockInternalSeries,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - ARTICLE
export function InternalArticle() {
  return {
    data() {
      return {
        block: mockInternalArticle,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - ENDOWMENT
export function InternalEndowment() {
  return {
    data() {
      return {
        block: mockInternalEndowment,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - COLLECTION
export function InternalCollection() {
  return {
    data() {
      return {
        block: mockInternalCollection,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}
