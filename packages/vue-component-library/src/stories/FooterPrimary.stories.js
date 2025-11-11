// Storybook default settings
import { computed } from 'vue'
import FooterPrimary from '@/lib-components/FooterPrimary'
import { useGlobalStore } from '@/stores/GlobalStore'

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

const mockFTVAFooterPrimary = {
  socialItems: [
    {
      id: '4343807',
      name: 'Facebook',
      to: 'https://www.facebook.com/UCLAFTVArchive/',
      classes: null,
      target: '1'
    },
    {
      id: '4343808',
      name: 'Instagram',
      to: 'https://www.instagram.com/uclaftvarchive/',
      classes: null,
      target: '1'
    },
    {
      id: '4343809',
      name: 'Bluesky',
      to: 'https://bsky.app/profile/uclaftvarchive.bsky.social',
      classes: null,
      target: '1'
    },
    {
      id: '4343810',
      name: 'YouTube',
      to: 'https://www.youtube.com/channel/UCKwx-Ugwnha7SvfyiHBV9iQ',
      classes: '',
      target: '1'
    },
    {
      id: '4343811',
      name: 'Letterboxd',
      to: 'https://letterboxd.com/uclaftvarchive/',
      classes: null,
      target: '1'
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

export const FTVAFooter = () => ({
  components: { FooterPrimary },
  setup() {
    const store = useGlobalStore()

    // Replace only the piece you need for this story
    store.$patch({
      footerPrimary: {
        ...store.footerPrimary,
        nodes: [
          { children: mockFTVAFooterPrimary.socialItems },
          { children: mockFTVAFooterPrimary.pressItems },
        ],
      },
    })
    // If your component loops multiple groups, but FTVA only has socials,
    // that's fine—there just won't be a "press" group in this story.
    return {}
  },
  provide() {
    // Your theme injection
    return { theme: computed(() => 'ftva') }
  },
  template: '<footer-primary :form="true" />',
})
