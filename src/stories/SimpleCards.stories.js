import { computed } from 'vue'
import SimpleCards from '@/lib-components/SimpleCards'

export default {
  title: 'SECTION / Simple Cards',
  component: SimpleCards,
}

const mockTwoCards = {
  id: '13783',
  sectionTitle: 'Fix Potholes',
  sectionSummary:
        '<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote. It is a frightening thought to imagine the ground below your feet or house suddenly collapsing and forming a big hole in the ground.</p>',
  cards: [
    {
      id: '6622',
      text: '<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>',
      title: 'Connecting from Off-Campus',
      slug: 'connecting-from-off-campus',
      to: 'help/services-resources/connecting-from-off-campus',
      type: 'resource',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
  ],
}

// Variations of stories below
// -------2----------------
export function Default() {
  return {
    data() {
      return { ...mockTwoCards }
    },
    components: { SimpleCards },
    template: `
        <simple-cards
            :items="cards"
            :section-title="sectionTitle"
            :section-summary="sectionSummary"
        />
    `,
  }
}

// -------3----------------
const mockThreeCards = {
  id: '13783',
  sectionTitle: 'Fix Potholes',
  sectionSummary:
        '<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>',
  cards: [
    {
      id: '8203',
      text: '<p>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT.</p>',
      title: 'Library Prize for Undergraduate Research',
      slug: 'library-prize-for-undergraduate-research',
      to: 'about/awards-grants/library-prize-for-undergraduate-research',
    },
    {
      id: '6622',
      text: '<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>',
      title: 'Connecting from Off-Campus',
      slug: 'connecting-from-off-campus',
      to: 'help/services-resources/connecting-from-off-campus',
      type: 'resource',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
  ],
}

export function ThreeCards() {
  return {
    data() {
      return { ...mockThreeCards }
    },
    components: { SimpleCards },
    template: `
        <simple-cards
            :items="cards"
            :section-title="sectionTitle"
            :section-summary="sectionSummary" />
    `,
  }
}

// -------4----------------

const mockFourCards = {
  id: '13783',
  typeHandle: 'simpleCards',
  sectionTitle: 'Fix Potholes',
  sectionSummary:
        '<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>',
  cards: [
    {
      id: '8203',
      text: '<p>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT. It is a frightening thought to imagine the ground below your feet or house suddenly collapsing and forming a big hole in the ground.</p>',
      title: 'Library Prize for Undergraduate Research',
      slug: 'library-prize-for-undergraduate-research',
      to: 'about/awards-grants/library-prize-for-undergraduate-research',
    },
    {
      id: '6622',
      text: '<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>',
      title: 'Connecting from Off-Campus',
      slug: 'connecting-from-off-campus',
      to: 'help/services-resources/connecting-from-off-campus',
      type: 'resource',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
    {
      id: '6407',
      text: '<p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>',
      title: 'A new research guide ',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
  ],
}

export function FourCards() {
  return {
    data() {
      return { ...mockFourCards }
    },
    components: { SimpleCards },
    template: `
    <simple-cards
        :items="cards"
        :section-title="sectionTitle"
        :section-summary="sectionSummary" />
    `,
  }
}

// -------5----------------

const mockFiveCards = {
  id: '13783',
  typeHandle: 'simpleCards',
  sectionTitle: 'Fix Potholes',
  sectionSummary:
        '<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>',
  cards: [
    {
      id: '8203',
      text: '<p>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT. Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>',
      title: 'Library Prize for Undergraduate Research',
      slug: 'library-prize-for-undergraduate-research',
      to: 'about/awards-grants/library-prize-for-undergraduate-research',
    },
    {
      id: '6622',
      text: '<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>',
      title: 'Connecting from Off-Campus',
      slug: 'connecting-from-off-campus',
      to: 'help/services-resources/connecting-from-off-campus',
      type: 'resource',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
  ],
}

export function FiveCards() {
  return {
    data() {
      return { ...mockFiveCards }
    },
    components: { SimpleCards },
    template: `
    <simple-cards
        :items="cards"
        :section-title="sectionTitle"
        :section-summary="sectionSummary" />
    `,
  }
}

// -------6----------------

const mockSixCards = {
  id: '13783',
  cards: [
    {
      id: '8203',
      text: '<p>The Library Prize for Undergraduate Research recognizes and honors excellence in undergraduate research at UCLA. The application period for the 2022 Library Prize for Undergraduate Research closes on March 30, 2022 at 11:59 p.m. PT.</p>',
      title: 'Library Prize for Undergraduate Research',
      slug: 'library-prize-for-undergraduate-research',
      to: 'about/awards-grants/library-prize-for-undergraduate-research',
    },
    {
      id: '6622',
      text: '<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>',
      title: 'Connecting from Off-Campus',
      slug: 'connecting-from-off-campus',
      to: 'help/services-resources/connecting-from-off-campus',
      type: 'resource',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
    {
      id: '6407',
      text: '<p>A research guide</p>',
      title: 'A new research guide',
      slug: 'a-new-research-guide',
      to: null,
      externalResourceUrl: 'http://libguides.library.ucla.edu',
    },
  ],
}

export function SixCards() {
  return {
    data() {
      return { ...mockSixCards }
    },
    components: { SimpleCards },
    template: `
    <simple-cards
        :items="cards"
        section-title="Test Services and Resources Cards"
        section-summary="Test summary page, for Services and Resources Card" />
    `,
  }
}

// -------FTVA-------------
export function FTVADefault() {
  return {
    data() {
      return { ...mockTwoCards }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SimpleCards },
    template: `
        <simple-cards
            :items="cards"
            :section-title="sectionTitle"
            :section-summary="sectionSummary"
        />
    `,
  }
}
