import { computed } from 'vue'

// Import component
import { mock as mockMediaWithText } from './mock/BlockMediaWithText'
import SectionWrapper from '@/lib-components/SectionWrapper'

import BlockMediaWithText from '@/lib-components/BlockMediaWithText'
import DividerWayFinder from '@/lib-components/DividerWayFinder'
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'

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
const mockFtva = [
  {
    id: '2847944',
    to: 'events/la-région-centrale-03-08-24',
    title: 'TEST - La Région Centrale Screening',
    startDate: '2027-03-31T07:00:00+00:00',
    endDate: null,
    image: {
      id: '3131261',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w',
      alt: 'A woman writing on a window.',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    id: '3145808',
    to: 'events/step-up-3-07-19-25',
    title: 'TEST - Step Up 3D (2010) Sequel to 2008\'s Step Up 2: The Streets and the third installment in the Step Up film series',
    startDate: '2028-03-31T07:00:00+00:00',
    image: null
  },
  {
    id: '3145784',
    to: 'events/step-up-2-07-07-25',
    title: 'TEST - Step Up 2: The Streets (2008)',
    startDate: '2026-03-31T07:00:00+00:00',
    image: {
      id: '3157357',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/step2.jpg',
      height: 1705,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/step2.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/step2.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/step2.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/step2.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/step2.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
]

export function FtvaUpcomingEvents() {
  return {
    data() {
      return {
        parsedFtvaEventSeries: mockFtva
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, SectionTeaserCard },
    template: `
      <SectionWrapper
        section-title="Upcoming events in this series"
        theme="paleblue"
      >
        <SectionTeaserCard

          :items="parsedFtvaEventSeries"
        />
      </SectionWrapper>
  `,
  }
}
