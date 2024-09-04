import { computed } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'

// Storybook default settings
export default {
  title: 'GLOBAL / Smart Link',
  component: SmartLink,
}

function Template(args) {
  return {
    components: { SmartLink },
    setup() {
      return { args }
    },
    template: '<smart-link v-bind="args">Link goes here</smart-link>',
  }
}

// Variations of stories below
export const Default = Template.bind({})
Default.args = {
  to: '/',
}

export function ExternalLink() {
  return {
    components: { SmartLink },
    template: `
    <smart-link
      to="http://www.ucla.edu"
      linkTarget="_blank"
    >
      This will render as a external link
    </smart-link>
  `,
  }
}

export function FTVALink() {
  return {
    components: { SmartLink },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
    <smart-link
      to="http://www.ucla.edu"
    >
      Some Link <span style="font-size:1.5em;"> &#8250;</span>
    </smart-link>
  `,
  }
}
