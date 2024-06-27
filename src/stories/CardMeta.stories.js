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

const mockEventTagsAndIntroduction = {
  event: {
    eventTitle: 'Step Up',
    ftvaEventIntroduction: 'In-person: The Scenes Talk with Duane Adler',
    ftvaEventFilters: [
      { title: 'Guest speaker' }, { title: '35mm' }
    ],
    text: '<p>Step Up is an American romantic dance franchise created by Duane Adler. The franchise includes six films and a television series. The films have received a generally mixed critical reception, while being a box office success with a collective total of $651 million.</p>',
  },
  series: {
    title: "Step Up Movie Series"
  }
}

const mockEventSeries = {
  event:{
    eventTitle: 'Origin of a Meal',
    ftvaEventIntroduction: 'In-person: chef and restaurateur Alice Waters.',
    ftvaEventFilters: [
      { title: 'Guest speaker' }, { title: '35mm' }
    ],
    text: '<p>From a meal composed of eggs, canned tuna and bananas, Luc Moullet goes up the chain that led these foods to his plate: supermarket managers, wholesalers, importers, manufacturers, workers, etc. are interviewed to help us understand how it all works.</p>',
  },
  series: {
    title: "TEST Series: The Step Up Movie Series"
  }
}

const mockOnlyCategoryAndTitle = {
  event:{
    eventTitle: 'Origin of a Meal',
  },
  series: {
    title: "TEST Series: The Step Up Movie Series"
  }
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
// with tag / blocktag
// with share button
// with centered title text
// there is technically a 4th variation with only the category/subtitle and title showing (not pictured)

export function WithBlockTagsAndIntro() {
  return {
    data() {
      return { ...mockEventTagsAndIntroduction }
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
      return { ...mockOnlyCategoryAndTitle }
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
      return { ...mockOnlyCategoryAndTitle }
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
        <button-link label="Share" to="/share" />
      </card-meta>
  `,
  }
}


export function Slot() {
  return {
    data() {
      return {
        image: API.image,
        to: '/visit/foo/bar/',
        title: 'Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit',
        category: 'Torquent',
        breadcrumb: 'Torquent',
        startDate: '1995-12-16T03:24:00',
        endDate: '1995-12-17T03:24:00',
        prompt: 'Cursus Quis',
        alignRight: false,
        sectionHandle: '',
      }
    },
    components: { BannerFeatured, HeadingArrow },
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

// export function CenteredTitleText() {
//   return {
//     data() {
//       return { ...mockEventSeries }
//     },
//     components: { CardMeta },
//     template: `
//       <card-meta
//         :category="event.category"
//         :title="event.title"
//         :text="event.text"
//       />
//   `,
//   }
// }
