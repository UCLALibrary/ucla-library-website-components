import { computed } from 'vue'

import SectionStaffArticleList from '@/lib-components/SectionStaffArticleList'
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Staff / Article / List',
  component: SectionStaffArticleList,
}

const mockDefault = [
  {
    image: API.image,
    to: 'https://www.pbs.org/wgbh/nova/article/six-snippets-squirrel-science/',
    category: 'Communications',
    title: 'So Many Squirrels',
    date: '1995-12-17T03:24:00',
    authors: [{ title: 'Phyllis Blackshear', id: 123 }],
    description:
            '<p>The squirrel family includes tree squirrels, ground squirrels, and <a href=\'https://natashaskitchen.com/french-dip-pastrami-sandwich-recipe/\'>Fflying squirrels</a>.</p>',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    date: '2020-12-17T03:24:00',
    authors: [
      { title: 'Justo Magna', id: 123 },
      { title: 'Luctus Suscipit', id: 124 },
    ],
    description:
            'The lamb morsels in this Lamb Stew just melt in your mouth and so do the potatoes. This recipe is uncomplicated (a one-pot meal!) and it simmers in the oven for awhile so every bite is completely delicious. The lengthy (and care free) baking time creates a most satisfying broth consistency. Even if you have no clue what the old days were like, this lamb stew will take you there!',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Mauris Rhoncus Aenean Vel Elit Scelerisque Mauris Pellentesque Pulvinar Rhoncus Aenean Vel Elit Scelerisque',
    date: '1998-12-17T03:24:00',
    authors: [
      { title: 'Justo Magna', id: 123 },
      { title: 'Luctus Suscipit', id: 124 },
    ],
    description:
            '<p>Homemade Marinara Sauce doesn’t get any easier! This requires just a handful of ingredients and 20 minutes on the stove for a memorable Italian Marinara. Everyone needs a great pasta sauce in their recipe collection and this one is a keeper.</p>',
  },
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    components: { SectionStaffArticleList },
    template: `
      <section-staff-article-list
        :items="items"
        section-title="Articles"
      />
  `,
  }
}

const mockCurrentEntriesWithDates = [
  {
    to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
    title: "A Film Series for You: Celebrating Giant Robot‚Äôs 30th Anniversary",
    image: API.image,
    description: "This deep into the post-print era it may be hard for some to understand how something as ephemeral as a magazine could change the world. That may be especially true when the magazine hasn‚Äôt been in print for over a decade. But from its first issue as a Xeroxed zine in 1994 to its final run as a full-page glossy in 2011, Giant Robot did just that.",
    startDate: "2024-11-01T19:30:00",
    endDate: "2024-11-17T19:30:00",
    ongoing: false
  },
  {
    to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
    title: "A Film Series for You",
    image: API.image,
    description: "This deep into the post-print era it may be hard for some to understand.",
    startDate: "2024-08-17T19:30:00",
    endDate: "2024-08-17T19:30:00",
    ongoing: false
  },
  {
    to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
    title: "An Ongoing Film Series for You",
    image: API.image,
    description: "This deep into the post-print era it may be hard for some to understand. Someday, if you study hard enough you might be able to inderstand. Unless that it, you are particularly dense.",
    startDate: "2024-05-07T19:30:00",
    endDate: null,
    ongoing: true
  }
]




export function FtvaCurrentEntriesWithDates() {
  return {
    data() {
      return { items: mockCurrentEntriesWithDates }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
      <section-staff-article-list
        :items="items"
        section-title="Articles"
      />
  `,
  }
}
