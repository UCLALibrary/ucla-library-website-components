import { computed } from 'vue'
import FlexibleInfo from '@/lib-components/Flexible/Info'

/**
 * Flexible block component that renders data with BlockCallToAction if the typehandle is `infoBlock`; renders data with BlockInfo if the typehandle is `contactInfoBlock`
 *
 */

const mockInfoBlock = {
  id: '3700149',
  typeHandle: 'infoBlock',
  infoBlock: [
    {
      typeHandle: 'infoBlock',
      icon: 'svg-call-to-action-ftva-info',
      text: '<p><strong>The Internet Movie Database</strong> <a href="https://www.imdb.com/" target="_blank" rel="noreferrer noopener">IMDb</a> is an <em>online database</em> containing <del>zebras</del>, </p>\n<ul><li>information and statistics about movies</li><li>TV shows and video games as well as actors</li><li>directors</li><li>other film industry professional<br /></li></ul>\n<p>The world\'s most popular and authoritative source for movie, TV and celebrity content, designed to help fans explore the world of movies and shows.',
      heading: 'Info Block Imdb - Film Archive'
    }
  ]
}

export default {
  title: 'FLEXIBLE / Info',
  component: FlexibleInfo,
}

export function FTVAInfoBlock() {
  return {
    data() {
      return { block: mockInfoBlock }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleInfo },
    template: `
        <flexible-info
            :block="block"
        />
    `,
  }
}

const mockContactInfoBlock = {
  id: '3726206',
  typeHandle: 'infoBlock',
  infoBlock: [
    {
      typeHandle: 'contactInfoBlock',
      id: '3726207',
      email: 'archive@email.com',
      phone: '+1 323-555-1234',
      address: '<p translate="no">\n<span class="address-line1">722 California Ave</span><br>\n<span class="locality">Glendale</span>, <span class="administrative-area">CA</span> <span class="postal-code">90210</span><br>\n<span class="country">United States</span>\n</p>'
    }
  ]
}

export function FTVAContactInfoBlock() {
  return {
    data() {
      return { block: mockContactInfoBlock }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleInfo },
    template: `
        <flexible-info
            :block="block"
        />
    `,
  }
}
