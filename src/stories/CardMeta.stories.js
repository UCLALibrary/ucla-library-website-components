import { computed } from 'vue'
import CardMeta from '@/lib-components/CardMeta'
import ButtonLink from '@/lib-components/ButtonLink'

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

export function WithBlockTagsAndIntro() {
  return {
    data() {
      return {
        event: {
          eventTitle: 'Step Up (2006)',
          ftvaEventIntroduction: 'In-person: The Scenes Talk with Duane Adler',
          ftvaEventFilters: [
            { title: 'Guest speaker' }, { title: '35mm' }
          ],
          text: '<p>Step Up is an American romantic dance franchise created by Duane Adler. The franchise includes six films and a television series. The films have received a generally mixed critical reception, while being a box office success with a collective total of $651 million.</p>',
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
        :title="event.eventTitle"
        :tagLabels="event.ftvaEventFilters"
        :introduction="event.ftvaEventIntroduction"
        :text="event.text"
      />
  `,
  }
}

export function OnlyCategoryAndTitle() {
  return {
    data() {
      return {
        event: {
          eventTitle: 'Step Up 2 - The Streets (2008)',
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
        :title="event.eventTitle"
      />
  `,
  }
}

export function ShareButton() {
  return {
    data() {
      return {
        event: {
          eventTitle: 'Step Up 3D (2010)',
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
    components: { CardMeta, ButtonLink },
    template: `
      <card-meta
        :category="series.title"
        :title="event.eventTitle"
      >
        <button-link label="Share" to="/share" />
      </card-meta>
  `,
  }
}
