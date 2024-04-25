import BlockCallToAction from '@/lib-components/BlockCallToAction'

export default {
  title: 'BLOCK / Call to Action',
  component: BlockCallToAction,
}

function Template(args) {
  return {
    setup() {
      return { args }
    },
    components: { BlockCallToAction },
    template: '<block-call-to-action v-bind="args"/>',
  }
}

const mock = {
  svgName: 'svg-call-to-action-find',
  title: 'Lorem ipsum dolor sit amet?',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  name: 'Lorem ipsum dolor',
  to: '/help/foo/bar/',
}

// Variations of stories below

export const Default = Template.bind({})
Default.args = {
  ...mock,
}

export const DarkBlue = Template.bind({})
DarkBlue.args = {
  ...mock,
  title: 'Dark Blue: Lorem ipsum dolor sit amet?',
  isDark: 'true',
  isSmallSize: 'false',
}

export const SmallCTA = Template.bind({})
SmallCTA.args = {
  ...mock,
  title: 'Small CTA: Lorem ipsum dolor sit amet?',
  isDark: 'false',
  isSmallSize: 'true',
}

export const SmallCTADark = Template.bind({})
SmallCTADark.args = {
  ...mock,
  title: 'Small CTA Dark Blue: Lorem ipsum dolor sit amet?',
  isDark: 'true',
  isSmallSize: 'true',
}

export const GlobalAskALibrarian = Template.bind({})
GlobalAskALibrarian.args = {
  isGlobal: 'true',
}

export const GlobalMeapCTA = Template.bind({})
GlobalMeapCTA.args = {
  isMeapGlobal: 'true',
}
