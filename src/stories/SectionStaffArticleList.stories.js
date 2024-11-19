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
    id: "3440739",
    typeHandle: "eventSeries",
    sectionHandle: "ftvaEventSeries",
    to: "series/holiday-series-on-one-day",
    title: "Non-Religious Celebrators of Christmas",
    description: "<p>Fun, non-religious Christmas movies</p>",
    image: API.image,
    startDate: "2024-12-23T00:00:00",
    endDate: "2024-12-23T00:00:00",
    ongoing: false
  },
  {
    id: "3370267",
    typeHandle: "eventSeries",
    sectionHandle: "ftvaEventSeries",
    to: "series/gymnastic-movie-series",
    title: null,
    description: "<p>Gymnastics Movies for Kids That Inspire Athletic Dreams</p>",
    image: API.image,
    startDate: "2024-04-07T00:00:00",
    endDate: null,
    ongoing: true
  },
  {
    id: "3260303",
    typeHandle: "eventSeries",
    sectionHandle: "ftvaEventSeries",
    to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
    title: null,
    description: "This deep into the post-print era it may be hard for some to understand how something as ephemeral as a magazine could change the world. That may be especially true when the magazine hasn‚Äôt been in print for over a decade. But from its first issue as a Xeroxed zine in 1994 to its final run as a full-page glossy in 2011, Giant Robot did just that. Founded by UCLA alumni Eric Nakamura, Giant Robot began, simply enough, as a vehicle for Nakamura and co-editor Martin Wong to write about the stuff they liked ‚Äî whether other people liked it or not. Its first three issues featured articles on sumo wrestling, underground filmmaker Jon Moritsugu, Hello Kitty, Hong Kong movie soundtracks, Pizzicato Five and the delights of Southern California‚Äôs Cambodian-run donut shops. Mixed in with the reviews and profiles were personal essays about being Asian American in a wider culture that didn‚Äôt know or care about any of those things. Steeped in Nakamura‚Äôs DIY, punk rock ethic, Giant Robot quickly attracted a like-minded readership. Its eclectic focus on alternative Asian and Asian American culture was so fresh and so unique that many of the artists, filmmakers, musicians and writers that it profiled, such as Daniel Wu and Ayako Fujitani, asked to become contributors themselves. Maggie Cheung, Jenny Shimizu, Jet Li and Margaret Cho graced its cover as well as work by visual artists such as Yoshitomo Nara and Takashi Murakami. Before its run was over, what Giant Robot thought was cool when no else did ‚Äî ramen, Jackie Chan, Japanese candy ‚Äî was suddenly everywhere. The magazine‚Äôs work and spirit lives on at the Giant Robot retail store on Sawtelle Blvd. in Los Angeles and the GR2 art gallery across the street. The Archive is thrilled to celebrate Giant Robot‚Äôs history and legacy with this special film series co-curated with Eric Nakamura.",
    image: API.image,
    startDate: "2025-11-01T19:30:00",
    endDate: "2025-11-17T19:30:00",
    ongoing: false
  },
]

export function CurrentEntriesWithDates() {
  return {
    data() {
      return { items: mockCurrentEntriesWithDates }
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
