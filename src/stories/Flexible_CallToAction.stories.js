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
      titleCta: 'FTVA Call to Action',
      summary: '<p>Cat ipsum dolor sit amet, check cat door for ambush 10 times before coming in or gnaw the corn cob, but woops must get rid run around house maybe it comes off woops left brown marks on floor human can clean now. Kitty kitty thinking longingly about tuna brine yet stinky cat for chase ball of string but attack the child. Scream for no reason at 4 am. Hide head under blanket so no one can see more napping, more napping all the napping is exhausting and roll over and sun my belly.</p>',
      backgroundColor: 'false',
      buttonText: 'Click Me Please',
      buttonUrl: 'http://google.com',
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
