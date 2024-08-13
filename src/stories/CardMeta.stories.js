import { computed } from 'vue'
import CardMeta from '@/lib-components/CardMeta'

// Storybook default settings
export default {
  title: 'Card Meta',
  component: CardMeta
}

const mockDefault = {
  to: '/visit/foo/bar/',
  category: 'Ullamco',
  title: 'Seven seas of the ancient world',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: '2021-11-26T11:00:00-08:00',
  text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the <strong>Aegean</strong>, <em>Adriatic</em>, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf. <a href="https://www.scotchandscones.com/shortbread-history/">Test Link.</a></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
  locations: [
    { title: 'Powellarium', to: '/location/bar' },
    { title: 'Research Library (Charles E. Young)', to: '/location/baz' },
  ],
  sectionHandle: 'event',
  bylineOne: 'Byline 1',
  bylineTwo: 'Byline 2'
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { ...mockDefault }
    },
    components: { CardMeta },
    template: `
      <card-meta
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :bylineOne="bylineOne"
          :bylineTwo="bylineTwo"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
  }
}

export function Ongoing() {
  return {
    data() {
      return { ...mockDefault }
    },
    components: { CardMeta },
    template: `
      <card-meta
          :to="to"
          :category="category"
          :title="title"
          :ongoing=true
          :text="text"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
  }
}

// FTVA STORIES

export function FtvaWithBlockTagsAndIntro() {
  return {
    data() {
      return {
        event: {
          title: 'Step Up (2006)',
          introduction: '<p><em>UCLA Film &amp; Television Archive</em> and the <strong>Hammer Museum</strong> are proud to introduce <em>Graeme Ferguson</em></p><p>Ferguson who not only is the inventor of the IMAX format but also made a name for himself as a young cinematographer. He was known for working in the cinéma vérité style when he was asked to direct a documentary about the Arctic and Antarctic for the Expo 67 world’s fair in Montreal. He traveled for a year filming the movie, which included footage of Inuit life and the aurora borealis. </p>',
          tagLabels: [
            { title: 'Guest speaker' }, { title: '35mm' }
          ],
          guestSpeaker: '<p><a href=\"https://en.wikipedia.org/wiki/Graeme_Ferguson_(filmmaker)\">Graeme Ferguson</a> Ivan <em>Graeme Ferguson</em> CM (October 7, 1929 – May 8, 2021) was a Canadian filmmaker and inventor who co-invented the IMAX film format.</p>',
        },
        series: {
          title: 'The Step Up Movie Series'
        }
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta },
    template: `
      <card-meta
        :category="series.title"
        :title="event.title"
        :guestSpeaker="event.guestSpeaker"
        :tagLabels="event.tagLabels"
        :introduction="event.introduction"
      />
  `,
  }
}

export function FtvaWithAlternativeTitle() {
  return {
    data() {
      return {
        event: {
          title: 'Step Up (2006)',
          alternativeTitle: 'The Central Region',
          language: 'en',
          introduction: '<p><em>UCLA Film &amp; Television Archive</em> and the <strong>Hammer Museum</strong> are proud to introduce <em>Graeme Ferguson</em></p><p>Ferguson who not only is the inventor of the IMAX format but also made a name for himself as a young cinematographer. He was known for working in the cinéma vérité style when he was asked to direct a documentary about the Arctic and Antarctic for the Expo 67 world’s fair in Montreal. He traveled for a year filming the movie, which included footage of Inuit life and the aurora borealis. </p>',
          tagLabels: [
            { title: 'Guest speaker' }, { title: '35mm' }
          ],
          guestSpeaker: '<p><a href=\"https://en.wikipedia.org/wiki/Graeme_Ferguson_(filmmaker)\">Graeme Ferguson</a> Ivan <em>Graeme Ferguson</em> CM (October 7, 1929 – May 8, 2021) was a Canadian filmmaker and inventor who co-invented the IMAX film format.</p>',
        },
        series: {
          title: 'The Step Up Movie Series'
        }
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta },
    template: `
      <card-meta
        :category="series.title"
        :title="event.title"
        :alternativeFullName="event.alternativeTitle"
        :guestSpeaker="event.guestSpeaker"
        :tagLabels="event.tagLabels"
        :introduction="event.introduction"
      />
  `,
  }
}

export function FtvaOnlyCategoryAndTitle() {
  return {
    data() {
      return {
        event: {
          title: 'Step Up 2 - The Streets (2008)',
        },
        series: {
          title: 'The Step Up Movie Series'
        }
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta },
    template: `
      <card-meta
        :category="series.title"
        :title="event.title"
      />
  `,
  }
}
