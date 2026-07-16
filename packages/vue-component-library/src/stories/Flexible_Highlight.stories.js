import { mockExternalContent, mockInternalContentArticleAndExternalArticle, mockInternalContentEndowmentAndCollectionAndGeneralContentPage, mockInternalContentEventAndExhibition, mockInternalContentMeapArticleAndProject, mockInternalContentWorshopSeriesAndEventSeries } from './mock/Flexible_Highlight'
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

export function InternalContentWorshopSeriesAndEventSeries() {
  return {
    data() {
      return {
        block: mockInternalContentWorshopSeriesAndEventSeries,
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

export function InternalContentMeapArticleAndProject() {
  return {
    data() {
      return {
        block: mockInternalContentMeapArticleAndProject,
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
