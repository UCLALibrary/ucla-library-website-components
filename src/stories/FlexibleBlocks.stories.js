import FlexibleBlocks from '@/lib-components/FlexibleBlocks'
import SectionWrapper from '@/lib-components/SectionWrapper'
import DividerGeneral from '@/lib-components/DividerGeneral'

import { mock as mockCardWithImage } from '@/stories/mock/Flexible_CardWithImage.js'
import { mock as mockHighlight } from '@/stories/mock/Flexible_Highlight.js'
import { Gallery as mockMediaGallery, GalleryHalfWidth as mockMediaGalleryHalfWidth } from '@/stories/mock/Media.js'
import { mockSingle as mockMediaWithText } from '@/stories/mock/Flexible_MediaWithText.js'
import { mock as mockRichText } from '@/stories/mock/Flexible_RichText.js'
import { mockTwoCards as mockSimpleCards } from '@/stories/mock/Flexible_SimpleCards.js'

export default {
  title: 'Flexible Blocks',
  component: FlexibleBlocks
}

export function Default() {
  return {
    data() {
      return {
        blocks: [
          mockSimpleCards,
          mockMediaGallery,
          mockMediaWithText,
          mockMediaGalleryHalfWidth,
        ],
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}

export function GrayBackgrounds() {
  return {
    data() {
      return {
        blocks: [
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleCardWithImage</h4>',
          },
          mockCardWithImage,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleHighlight</h4>',
          },
          mockHighlight,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleMediaGallery</h4>',
          },
          mockMediaGallery,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleMediaGalleryHalfWidth</h4>',
          },
          mockMediaGalleryHalfWidth,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleMediaWithText</h4>',
            mediaGalleryStyle: 'halfWidth',
            sectionTitle: 'Pine Needles Half Width',
            richTextSimplified:
              'Pine needles range in size from 3 to 5 inches and are a deep forest green color. The long, thin needles vary slightly from variety to variety, depending on the region in which they grow. Pine needles have a strong pine scent, and a biting resinous flavor.  They are leaves. They do the same job that broad leaves do—capture sunlight, “inhale” carbon dioxide, and “exhale” oxygen—providing the tree with food and air for us to breath.',
          },
          mockMediaWithText,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleRichText</h4>',
          },
          mockRichText,
          {
            typeHandle: 'rich-text',
            richText: '<h4>But the final block is always white</h4>',
          },
          mockRichText,
        ],
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}

export function DividerBetweenWhiteBlocks() {
  return {
    data() {
      return {
        blocks: [mockMediaWithText, mockSimpleCards],
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}
