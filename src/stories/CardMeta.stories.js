import { computed } from 'vue'
import CardMeta from '@/lib-components/CardMeta'

// Storybook default settings
export default {
  title: 'Card Meta',
  component: CardMeta
}

const mock = {
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
      return { ...mock }
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
      return { ...mock }
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

export function OnlyCategoryAndTitle() {
  return {
    data() {
      return { ...mockOnlyCategoryAndTitle }
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

export function EventTagsAndIntroduction() {
  return {
    data() {
      return { ...mockEventTagsAndIntroduction }
    },
    components: { CardMeta },
    template: `
      <card-meta
        :category="category"
        :title="eventTitle"
        :tagLabel="ftvaEventFilters"
        :introduction="ftvaEventIntroduction"
        :text="eventDescription"
      />
  `,
  }
}

const mockEventTagsAndIntroduction = {
  to: '/visit/foo/bar/',
  eventTitle: 'Origin of a Meal',
  ftvaEventIntroduction: 'In-person: chef and restaurateur Alice Waters.',
  ftvaEventFilters: [
    { title: 'Guest speaker' }, { title: '35mm' }
  ],
  text: '<p>From a meal composed of eggs, canned tuna and bananas, Luc Moullet goes up the chain that led these foods to his plate: supermarket managers, wholesalers, importers, manufacturers, workers, etc. are interviewed to help us understand how it all works.</p>',
}

// const mockEventSeries = {
//   event:{
//     eventTitle: 'Origin of a Meal',
//     ftvaEventIntroduction: 'In-person: chef and restaurateur Alice Waters.',
//     ftvaEventFilters: [
//       { title: 'Guest speaker' }, { title: '35mm' }
//     ],
//     text: '<p>From a meal composed of eggs, canned tuna and bananas, Luc Moullet goes up the chain that led these foods to his plate: supermarket managers, wholesalers, importers, manufacturers, workers, etc. are interviewed to help us understand how it all works.</p>',
//   }
//   series: {
//     title: "TEST Series: The Step Up Movie Series"
//   }
// }

// export function EventSeriesCategory() {
//   return {
//     data() {
//       return { ...mockEventSeries }
//     },
//     components: { CardMeta },
//     template: `
//       <card-meta
//           :category="series.title"
//           :title="event.eventTitle"
//           :text="event.eventDescription"
//           :section-handle="event.sectionHandle"
//       />
//   `,
//   }
// }

// export function ShareButton() {
//   return {
//     data() {
//       return { ...mockEventSeries }
//     },
//     components: { CardMeta },
//     template: `
//       <card-meta
//           :title="event.eventTitle"
//           :text="event.eventDescription"
//       />
//   `,
//   }
// }

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








