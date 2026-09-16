import { mockExternalContent, mockInternalContentArticleAndExternalArticle, mockInternalContentEndowmentAndCollectionAndGeneralContentPage, mockInternalContentEventAndExhibition, mockInternalContentWorkshopSeriesAndEventSeries } from './mock/Flexible_Highlight'
import FlexibleHighlight from '@/lib-components/Flexible/Highlight'

export default {
  title: 'FLEXIBLE / Highlight',
  component: FlexibleHighlight,
}

export function Default() {
  return {
    data() {
      return {
        block: mockInternalContentEventAndExhibition,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export function InternalContentWorkshopSeriesAndEventSeries() {
  return {
    data() {
      return {
        block: mockInternalContentWorkshopSeriesAndEventSeries,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export function InternalContentArticleAndExternalArticle() {
  return {
    data() {
      return {
        block: mockInternalContentArticleAndExternalArticle,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export function InternalContentEndowmentAndCollectionAndGeneralContentPage() {
  return {
    data() {
      return {
        block: mockInternalContentEndowmentAndCollectionAndGeneralContentPage,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export function ExternalContent() {
  return {
    data() {
      return {
        block: mockExternalContent,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
