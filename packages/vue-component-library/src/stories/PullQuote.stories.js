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

const DefaultTemplate = (args) => {
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

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const mockNoAttribution = {
  text: 'If I could reach up and hold a star for every time you have made me smile, <a href="https://earthsky.org/astronomy-essentials/visible-planets-tonight-mars-jupiter-venus-saturn-mercury/">the entire evening sky</a> would be in the palm of my hand.',
}

const NoAttributionTemplate = (args) => {
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

export const NoAttribution = NoAttributionTemplate.bind({})
NoAttribution.args = {}

const FTVADefaultTemplate = (args) => {
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

export const FTVADefault = FTVADefaultTemplate.bind({})
FTVADefault.args = {}

const FTVADefaultNoAttributionTemplate = (args) => {
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

export const FTVADefaultNoAttribution = FTVADefaultNoAttributionTemplate.bind({})
FTVADefaultNoAttribution.args = {}
