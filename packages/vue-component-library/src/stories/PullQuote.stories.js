import { computed } from 'vue'
import PullQuote from '../lib-components/PullQuote'

export default {
  title: 'Pull Quote',
  component: PullQuote,
}

const mock = {
  text: 'You get to decide where your time goes. You can either spend it <strong>moving forward</strong>, or you can spend it <a href="https://dothethings.com/always-putting-out-fires-in-business/">putting out fires</a>. You decide. And if you don’t decide, <em>others will decide for you</em>.',
  attribution: 'Tony Morgan',
}

const mockNoAttribution = {
  text: 'If I could reach up and hold a star for every time you have made me smile, <a href="https://earthsky.org/astronomy-essentials/visible-planets-tonight-mars-jupiter-venus-saturn-mercury/">the entire evening sky</a> would be in the palm of my hand.',
}

export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { PullQuote },
    template: `
        <pull-quote
            :text="text"
            :attribution="attribution"
        />
    `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
  design: [
    {
      type: 'figma',
      name: 'Large',
    url: 'https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=19233-3376&t=MEcwK4Lx0N8ktXZr-4'
    },
    {
      type: 'figma',
      name: 'Medium',
      url: 'https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=1044-18893&t=MEcwK4Lx0N8ktXZr-4'
    },
    {
      type: 'figma',
      name: 'Small',
      url: 'https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=1044-18893&t=MEcwK4Lx0N8ktXZr-4'
    }
  ]
}

export function NoAttribution() {
  return {
    data() {
      return {
        ...mockNoAttribution,
      }
    },
    components: { PullQuote },
    template: `
        <pull-quote
            :text="text"
        />
    `,
  }
}

NoAttribution.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=19288-76&t=MEcwK4Lx0N8ktXZr-4'
  }
}

export function FTVADefault() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { PullQuote },
    template: `
        <pull-quote
            :text="text"
            :attribution="attribution"
        />
    `,
  }
}

FTVADefault.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=19356-95&t=MEcwK4Lx0N8ktXZr-4'
  }
}

export function FTVADefaultNoAttribution() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { PullQuote },
    template: `
        <pull-quote
            :text="text"
        />
    `,
  }
}

FTVADefaultNoAttribution.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=19356-96&t=MEcwK4Lx0N8ktXZr-4'
  }
}
