// Storybook default settings
import FooterPrimary from '@/lib-components/FooterPrimary'
import { computed } from 'vue'

export default {
  title: 'FOOTER / Primary',
  component: FooterPrimary
}

const mock = {
  socialItems: [
    {
      id: '11777',
      name: 'Twotter',
      to: 'https://twitter.com/',
      classes: null,
      target: '1',
    },
    {
      id: '11778',
      name: 'Fatebook',
      to: 'https://www.facebook.com/',
      classes: null,
      target: '1',
    },
    {
      id: '11779',
      name: 'Instagrim',
      to: 'https://www.instagram.com/',
      classes: null,
      target: '1',
    },
    {
      id: '11780',
      name: 'FooTube',
      to: 'https://www.youtube.com/',
      classes: null,
      target: '1',
    },
  ],

  pressItems: [
    {
      id: '11781',
      name: 'Dress Doom',
      to: 'https://test-craft.library.ucla.edu/press-room',
      classes: null,
      target: '',
    },
    {
      id: '11782',
      name: 'Careers at USC',
      to: 'https://test-craft.library.ucla.edu/careers-at-ucla',
      classes: null,
      target: '',
    },
  ],
}

// Library Website Nuxt Stories
export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { FooterPrimary },
    template: '<footer-primary :social-items="socialItems" :press-items="pressItems" :form="true" />',
  }
}

export function NoForm() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { FooterPrimary },
    template: '<footer-primary :social-items="socialItems" :press-items="pressItems" :form="false" />',
  }
}

export function MicroSite() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { FooterPrimary },
    template: '<footer-primary :social-items="socialItems" :press-items="pressItems" :form="false" :is-microsite="true"/>',
  }
}

// FTVA Stories
export function FTVAFooter() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FooterPrimary },
    template: '<footer-primary :form="true" />',
  }
}
