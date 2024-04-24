import BlockCallToActionTwoUp from '@/lib-components/BlockCallToActionTwoUp'

export default {
  title: 'BLOCK / Call to Action Two Up',
  component: BlockCallToActionTwoUp,
}

const items = [
  {
    svgName: 'svg-call-to-action-find',
    title: 'Lorem ipsum dolor sit amet?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem ipsum dolor',
    to: '/help/foo/bar/',
    isDark: 'false',
  },
  {
    svgName: 'svg-call-to-action-chat',
    title: 'Dolor sit amet Ipsum',
    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Ipsum dolor amet',
    to: '/help/foo/bar/',
    isDark: 'true',
  },
]

export function Default() {
  return {
    data() {
      return {
        items,
      }
    },
    components: { BlockCallToActionTwoUp },
    template: `
        <block-call-to-action-two-up
            :items="items"
        />
    `,
  }
}
