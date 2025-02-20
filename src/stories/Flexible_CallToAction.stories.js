import { computed } from 'vue'
import FlexibleCallToAction from '@/lib-components/Flexible/CallToAction'

const mock = {
  id: '16983',
  typeHandle: 'callToAction',
  callToAction: [
    {
      id: '16984',
      titleCta: 'Call to Action',
      summary: 'A Call to Action',
      icon: 'svg-call-to-action-find',
      buttonText: 'Click Me Please',
      buttonUrl: 'http://google.com',
      backgroundColor: 'false',
    },
  ],
}

export default {
  title: 'FLEXIBLE / Call To Action',
  component: FlexibleCallToAction,
}

export function Default() {
  return {
    data() {
      return { block: mock }
    },
    components: { FlexibleCallToAction },
    template: `
        <flexible-call-to-action
            :block="block"
        />
    `,
  }
}


const mockFTVA = {
  id: '16983',
  typeHandle: 'callToAction',
  callToAction: [
    {
      id: '16984',
      titleCta: 'Call to Action',
      summary: 'A Call to Action',
      icon: 'svg-call-to-action-find',
      buttonText: 'Click Me Please',
      buttonUrl: 'http://google.com',
      backgroundColor: 'false',
    },
  ],
}



export function FtvaLight() {
  return {
    data() {
      return { block: mockFTVA }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleCallToAction },
    template: `
        <flexible-call-to-action
            :block="block"
        />
    `,
  }
}
