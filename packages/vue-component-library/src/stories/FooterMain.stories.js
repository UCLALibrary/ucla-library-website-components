import { computed } from 'vue'
import FooterMain from '@/lib-components/FooterMain'
import { useGlobalStore } from '@/stores/GlobalStore'

export default {
  title: 'FOOTER / Main',
  component: FooterMain,
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

export function Default() {
  return {
    components: { FooterMain },
    template: `
        <footer-main />`,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function FTVAFooter() {
  return {
    components: { FooterMain },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
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
    template: `
        <footer-main />`,
  }
}
