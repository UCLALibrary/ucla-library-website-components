import { computed } from 'vue'
import FlexibleCallToAction from '@/lib-components/Flexible/CallToAction'

const mock = {
  id: '16983',
  typeHandle: 'callToAction',
  callToAction: [
    {
      id: '16984',
      titleCta: 'Default Call to Action',
      summary: 'A call to action is a marketing term for any text designed to prompt an immediate response or encourage an immediate sale such as brochures, flyers, catalogs, email campaigns.',
      icon: 'svg-call-to-action-find',
      buttonText: 'Click Me Please',
      buttonUrl: 'http://google.com',
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

const mockDark = {
  id: '16983',
  typeHandle: 'callToAction',
  callToAction: [
    {
      id: '16984',
      titleCta: 'DARK Call to Action',
      summary: 'Many marketing materials, such as brochures, flyers, catalogs, email campaigns, also make use of a call to action. Such instructions are designed to show consumers how to take the next step and create a sense of urgency around the offer.',
      icon: 'svg-call-to-action-find',
      buttonText: 'Click Me Darkly Please',
      buttonUrl: 'http://google.com',
      backgroundColor: 'true',
    },
  ],
}

export function CTADark() {
  return {
    data() {
      return { block: mockDark }
    },
    components: { FlexibleCallToAction },
    template: `
        <flexible-call-to-action
            :block="block"
        />
    `,
  }
}

const mockFTVALight = {
  id: '16983',
  typeHandle: 'callToAction',
  callToAction: [
    {
      titleCta: 'FTVA Light Call to Action',
      summary: '<p>A call to action is a marketing term for any text designed to prompt an immediate response or encourage an immediate sale. A CTA most often refers to the use of words or phrases that can be incorporated into sales scripts, advertising messages, or web pages, which compel an audience to act in a specific way. Many marketing materials, such as brochures, flyers, catalogs, email campaigns, also make use of a call to action. Such instructions are designed to show consumers how to take the next step and create a sense of urgency around the offer.</p>',
      backgroundColor: 'false',
      buttonText: 'Click Me Please',
      buttonUrl: 'http://google.com',
    },
  ],
}

export function FTVALight() {
  return {
    data() {
      return { block: mockFTVALight }
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

const mockFTVADark = {
  id: '16983',
  typeHandle: 'callToAction',
  callToAction: [
    {
      titleCta: 'FTVA Dark Call to Action',
      summary: '<p>A CTA most often refers to the use of words or phrases that can be incorporated into sales scripts, advertising messages, or web pages, which compel an audience to act in a specific way. A call to action is a marketing term for any text designed to prompt an immediate response or encourage an immediate sale. Many marketing materials, such as brochures, flyers, catalogs, email campaigns, also make use of a call to action. Such instructions are designed to show consumers how to take the next step and create a sense of urgency around the offer.</p>',
      backgroundColor: 'true',
      buttonText: 'Please Click Me Please',
      buttonUrl: 'http://google.com',
    },
  ],
}

export function FTVADark() {
  return {
    data() {
      return { block: mockFTVADark }
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
