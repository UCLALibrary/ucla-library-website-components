import { computed } from 'vue'
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
  isDark: true,
}

export const SmallCTA = Template.bind({})
SmallCTA.args = {
  ...mock,
  title: 'Small CTA: Lorem ipsum dolor sit amet?',
  isDark: false,
  isSmallSize: true,
}

export const SmallCTADark = Template.bind({})
SmallCTADark.args = {
  ...mock,
  title: 'Small CTA Dark Blue: Lorem ipsum dolor sit amet?',
  isDark: true,
  isSmallSize: true,
}

export const GlobalAskALibrarian = Template.bind({})
GlobalAskALibrarian.args = {
  isGlobal: true,
}

export const GlobalMeapCTA = Template.bind({})
GlobalMeapCTA.args = {
  isMeapGlobal: true,
}

const mockFTVA = {
  svgName: 'svg-call-to-action-info',
  title: 'View Information',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

function TemplateFTVA(args) {
  return {
    setup() {
      return { args }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCallToAction },
    template: '<block-call-to-action v-bind="args"/>',
  }
}

export const FTVA_CTA_Default = TemplateFTVA.bind({})
FTVA_CTA_Default.args = {
  ...mockFTVA,
  svgName: 'svg-call-to-action-chat'
}

function TemplateFTVASlim(args) {
  return {
    setup() {
      return { args }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCallToAction },
    template: '<block-call-to-action v-bind="args" :is-centered="false"/>',
  }
}

export const FTVASlimCTATitled = TemplateFTVASlim.bind({})
FTVASlimCTATitled.args = {
  ...mockFTVA,
  text: '<p>For more information, or to arrange on-site research viewing, please contact the <a href="https://www.cinema.ucla.edu/archive-research-study-center" target="_blank" rel="noreferrer noopener">Archive Research and Study Center (ARSC)</a></p>',
}

export const FTVASlimCTANoTitle = TemplateFTVASlim.bind({})
FTVASlimCTANoTitle.args = {
  ...mockFTVA,
  title: '',
  text: '<p>Download a sample list of available titles and additional research resources at UCLA in <a href="https://www.cinema.ucla.edu/archive-research-study-center" target="_blank" rel="noreferrer noopener">PDF format (2MB)</a></p>',
}
