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
