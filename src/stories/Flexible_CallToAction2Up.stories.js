import FlexibleCtaBlock2Up from '@/lib-components/Flexible/CtaBlock2Up.vue'

const mock = {
  typeHandle: 'ctaBlock2Up',
  ctaBlock2Up: [
    {
      text: 'Parking passes for Cats & Kittens only. Day use, weekly, monthly and annual passes are available now.',
      name: 'Get Parking Passes',
      to: 'http://cat-kitten-parking.com',
      title: 'Cat & Kitten Parking Passes',
      svgName: 'svg-call-to-action-find',
      isDark: 'false',
    },
    {
      text: 'Advanced Ancient Greek for Dogs. Teach your dog the useful language of ancient Greek so you can communicate together more effectively.',
      name: 'Sign Up for Class',
      to: 'http://ancient-greek-for-dogs.com',
      title: 'Ancient Greek for Dogs',
      svgName: 'svg-call-to-action-money',
      isDark: 'true',
    },
  ],
}

export default {
  title: 'FLEXIBLE / Call To Action 2 Up',
  component: FlexibleCtaBlock2Up,
}

export function Default() {
  return {
    data() {
      return { block: mock }
    },
    components: { FlexibleCtaBlock2Up },
    template: `
        <flexible-cta-block-2-up
            :block="block"
        />
    `,
  }
}
