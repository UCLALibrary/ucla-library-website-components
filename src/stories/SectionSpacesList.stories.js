// Import component
import SectionSpacesList from '@/lib-components/SectionSpacesList.vue'

// Storybook default settings
export default {
  title: 'SECTION / Spaces / List',
  component: SectionSpacesList,
}

const mock = [
  {
    to: 'https://calendar.library.ucla.edu',
    title: 'Internal Portico',
    location: 'Fames Turpis Building',
    text: 'Etiam faucibus tellus quis magna finibus auctor. Fusce sagittis vel lectus sed ullamcorper. Proin faucibus nibh ut purus consequat lobortis. Aenean eu fermentum leo, vitae egestas eros. Vivamus urna nibh, porttitor in egestas eu, eleifend ac felis. Praesent sed tristique nibh. Nulla dignissim purus at metus consequat, vitae pharetra orci efficitur. Vivamus facilisis massa vel ipsum vestibulum, porta efficitur dolor aliquam.',
    buttonUrl: 'http://google.com',
  },
  {
    to: 'https://www.gettyimages.com/photos/cute-llamas',
    title: 'External Von Junz',
    location: 'Debordist Room',
    text: 'If one examines Marxist class, one is faced with a choice: either reject Baudrillardist simulation or conclude that the significance of the artist is social comment. The premise of Debordist situation implies that the law is capable of significance. Therefore, any number of constructions concerning a self-sufficient reality may be found.',
    buttonUrl: 'http://google.com',
  },
  {
    to: '',
    title: 'Null Beefeater Numpty',
    location: 'Pennyboy Cottage',
    text: 'Gosh beefeater numpty scouser rambunctious a bottle of plonk know your onions, cornish pasty spend a penny cheerio down the local mush. What a mug one off blimey a comely wench nose rag ponce gobsmacked pennyboy cottage pie, ey up fake tan spam fritters marvelous chippy hedgehog chav.',
    buttonUrl: 'http://google.com',
  },
]

export function Default() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionSpacesList },
    template: `
      <section-spaces-list
        :items="items"
      />
  `,
  }
}

export function Expandable() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionSpacesList },
    template: `
      <section-spaces-list
        :items="items"
        nShown="2"
      />
  `,
  }
}
