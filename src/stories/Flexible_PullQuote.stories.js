import FlexiblePullQuote from '@/lib-components/Flexible/PullQuote'

export default {
  title: 'FLEXIBLE / Pull Quote',
  component: FlexiblePullQuote,
}

const mock = {
  content: [
    {
      text: 'There are three ways to ultimate success: <a href="https://blog.iamsecond.com/mister-rogers">The first way is to be kind</a>. The second way is to be kind. The third way is to be kind.',
      attribution: 'Mr. Rodgers',
    },
    {
      text: 'Better is the enemy of good.',
      attribution: 'Voltaire',
    },
  ],
}

export function Default() {
  return {
    data() {
      return { block: mock }
    },
    components: { FlexiblePullQuote },
    template: `
        <flexible-pull-quote
            :block="block"
        />
    `,
  }
}

const mockNoAttribution = {
  content: [
    {
      text: 'Human greatness does not lie in wealth or power, but in character and goodness. People are just people, and all people have faults and shortcomings, but all of us are born with a <a href="https://www.good.is/">basic goodness</a>.',
    },
  ],
}

export function NoAttribution() {
  return {
    data() {
      return { block: mockNoAttribution }
    },
    components: { FlexiblePullQuote },
    template: `
      <flexible-pull-quote
          :block="block"
      />
    `,
  }
}
