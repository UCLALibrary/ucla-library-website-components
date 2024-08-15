// Import component
import { mock as mockMediaWithText } from './mock/BlockMediaWithText'
import SectionWrapper from '@/lib-components/SectionWrapper'
import BlockHours from '@/lib-components/BlockHours'
import BlockMediaWithText from '@/lib-components/BlockMediaWithText'
import DividerGeneral from '@/lib-components/DividerGeneral'
import DividerWayFinder from '@/lib-components/DividerWayFinder'

const propsForMediaWithText = {
  sectionHeader: mockMediaWithText.mediaWithText[0].titleLink,
  shortDescription: mockMediaWithText.mediaWithText[0].description,
  buttonText: mockMediaWithText.mediaWithText[0].buttonText,
  buttonUrl: mockMediaWithText.mediaWithText[0].buttonUrl,
  mediaLink: mockMediaWithText.mediaWithText[0].linkToMedia,
  item: mockMediaWithText.mediaWithText[0].coverImage,
  typeMedia: mockMediaWithText.mediaWithText[0].typeMedia,
}

// Storybook default settings
export default {
  title: 'Section Wrapper',
  component: SectionWrapper,
}

export function Default() {
  return {
    data() {
      return {
        sectionTitle: 'Section Title',
        sectionSummary:
                '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
  `,
  }
}

export function NoMeta() {
  return {
    data() {
      return {
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper>
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
`,
  }
}

export function GrayTheme() {
  return {
    data() {
      return {
        sectionTitle: 'Section Title',
        sectionSummary:
                '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary" theme="gray">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
  `,
  }
}

export function Nested() {
  return {
    components: { SectionWrapper },
    template: `
    <section-wrapper sectionTitle="level 2 (auto)">
        <section-wrapper sectionTitle="level 3 (auto)">
        </section-wrapper>
        <section-wrapper sectionTitle="level 3 (auto)">
            <section-wrapper sectionTitle="level 4 (auto)" />
        </section-wrapper>
        <section-wrapper sectionTitle="level 3 (auto)" />
        <section-wrapper level=6 sectionTitle="level 6 (via prop)">
            <section-wrapper sectionTitle="level 7 (auto)" />
        </section-wrapper>
    </section-wrapper>
  `,
  }
}

export function Divider() {
  return {
    data() {
      return {
        sectionTitle: 'Section Title',
        sectionSummary:
                '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText, DividerWayFinder },
    template: `
    <div>
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    <section-wrapper theme="divider">
        <divider-way-finder color="help" />
    </section-wrapper>
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    </div>
  `,
  }
}

export function Hours() {
  return {
    data() {
      return {
      }
    },
    components: { SectionWrapper, BlockHours, DividerGeneral },
    template: `
    <section-wrapper sectionTitle="Using the Library" sectionSummary="SEL/Boelter is located at 8270 Boelter Hall, accessible via the northeast elevator or stairs. SEL/Geology is located at 4697 Geology Building, accessible via the east elevator or stairs.">
      <block-hours lid="4702" />
      <DividerGeneral class="divider-general"/>
    </section-wrapper>
    `,
  }
}