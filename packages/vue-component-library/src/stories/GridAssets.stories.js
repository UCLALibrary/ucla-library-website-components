import { computed } from 'vue'
import GridAssets from '../lib-components/GridAssets.vue'

export default {
  title: 'Funkhaus / GridAssets',
  component: GridAssets,
}

// Sample data for the stories
const sampleItems1 = [
  {
    id: '1',
    href: '/asset-1',
    image: {
      src: 'https://picsum.photos/400/300?random=1',
      alt: 'Sample image 1',
      width: 400,
      height: 300
    },
    title: 'Digital Collection Item 1',
    description: 'This is a sample description for the first digital collection item.',
    date: '2024-01-15'
  },
  {
    id: '2',
    href: '/asset-2',
    image: {
      src: 'https://picsum.photos/400/300?random=2',
      alt: 'Sample image 2',
      width: 400,
      height: 300
    },
    title: 'Digital Collection Item 2',
    description: 'This is a sample description for the second digital collection item.',
    date: '2024-01-20'
  },
  {
    id: '3',
    href: '/asset-3',
    image: {
      src: 'https://picsum.photos/400/300?random=3',
      alt: 'Sample image 3',
      width: 400,
      height: 300
    },
    title: 'Digital Collection Item 3',
    description: 'This is a sample description for the third digital collection item.',
    date: '2024-01-25'
  }
]

const sampleItems2 = [
  {
    id: '4',
    href: '/asset-4',
    image: {
      src: 'https://picsum.photos/400/300?random=4',
      alt: 'Half-length portrait of comedian Danny Thomas with pills he takes for his voice',
      width: 400,
      height: 300
    },
    title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
    description: 'PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.',
    date: 'November 1, 1963'
  },
  {
    id: '5',
    href: '/asset-5',
    image: {
      src: 'https://picsum.photos/400/300?random=5',
      alt: 'Half-length portrait of San Fernando Valley State College sociologist Dr. Lewis Yablonsky',
      width: 400,
      height: 300
    },
    title: '1/2 length portrait of San Fernando Valley State College sociologist Dr. Lewis Yablonsky, 1965',
    description: 'SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin \'curbs\'',
    date: 'November 7, 1965'
  },
  {
    id: '6',
    href: '/asset-6',
    image: {
      src: 'https://picsum.photos/400/300?random=6',
      alt: '3/4 length portrait of singer Lionel Richie',
      width: 400,
      height: 300
    },
    title: '3/4 length portrait of singer Lionel Richie, 1984',
    description: 'Lionel Richie: He\'ll headline the Closing Ceremony',
    date: 'August 10, 1984'
  },
  {
    id: '7',
    href: '/asset-7',
    image: {
      src: 'https://picsum.photos/400/300?random=7',
      alt: '3/4 length portrait of Walburga Oesterreich',
      width: 400,
      height: 300
    },
    title: '3/4 length portrait of Walburga Oesterreich, circa 1930',
    description: 'Handwriting on negative states \'Mrs. Walburga Oesterreich\' In 1922 Walburga Oesterreich\'s husband Fred Oesterreich was shot and killed supposedly by a burglar in their Los Angeles, Calif. home.',
    date: '1930'
  },
  {
    id: '8',
    href: '/asset-8',
    image: {
      src: 'https://picsum.photos/400/300?random=8',
      alt: '3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel',
      width: 400,
      height: 300
    },
    title: '3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel in Los Angeles, Calif., 1967',
    description: 'ROBOT COURTESY-Betty Myrah gets a mechanized coffee break with a 3,500-pound \'portable\' robot pouring in the most acceptable manner.',
    date: 'October 3, 1967'
  },
  {
    id: '9',
    href: '/asset-9',
    image: {
      src: 'https://picsum.photos/400/300?random=9',
      alt: '5th grade boy pinning diaper on baby doll in family life class',
      width: 400,
      height: 300
    },
    title: '5th grade boy pinning diaper on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965',
    description: 'PRACTICE SESSION-Rickey Flocken fumbles with safety pin as he attempts to cinch diaper around doll. Project is part of health class at Torrance school',
    date: 'March 24, 1965'
  },
  {
    id: '10',
    href: '/asset-10',
    image: {
      src: 'https://picsum.photos/400/300?random=10',
      alt: '9-year-old Tracy Austin holding her tennis rackets at Los Angeles Junior Tennis Tournament',
      width: 400,
      height: 300
    },
    title: '9-year-old Tracy Austin holding her tennis rackets at Los Angeles Junior Tennis Tournament, 1972',
    description: 'CHAMPI Tracy Austin is just 9 years old but she\'s already a champion. In fact, the Rolling Hills youngster is a double champ. She best Shelly Stillman of Encinitas, 6-4, 6-0, for the 12-and-under title in the L.A.',
    date: 'July 24, 1972'
  },
  {
    id: '11',
    href: '/asset-11',
    image: {
      src: 'https://picsum.photos/400/300?random=11',
      alt: 'Tracy Austin playing in the Los Angeles Junior Tennis Tournament',
      width: 400,
      height: 300
    },
    title: 'Tracy Austin playing in the Los Angeles Junior Tennis Tournament, 1972',
    description: '9-year-old Tracy Austin playing in the Los Angeles Junior Tennis Tournament, 1972',
    date: 'July 24, 1972'
  },
  {
    id: '12',
    href: '/asset-12',
    image: {
      src: 'https://picsum.photos/400/300?random=12',
      alt: '11 year-old actress Margaret O\'Brien seated on suitcase holding a doll at Los Angeles Union Station',
      width: 400,
      height: 300
    },
    title: '11 year-old actress Margaret O\'Brien seated on suitcase holding a doll at Los Angeles Union Station, 1948',
    description: 'HOME AGAIN-Margaret O\'Brien, 11-year-old film star returns to Southland from 22 days of travel abroad. She holds a doll which was given her on visit to Paris.',
    date: 'May 24, 1948'
  }
]

export function Default() {
  return {
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { GridAssets },
    template: '<grid-assets :items="items" />',
    data() {
      return {
        items: sampleItems1
      }
    }
  }
}

export function Extended() {
  return {
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { GridAssets },
    template: '<grid-assets :items="items" />',
    data() {
      return {
        items: sampleItems2
      }
    }
  }
}
