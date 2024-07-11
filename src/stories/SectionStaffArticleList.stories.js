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
