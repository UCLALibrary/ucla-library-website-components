import { ref, watch } from 'vue'
import ButtonShowDynamic from '@/lib-components/ButtonShowDynamic'

export default {
  title: 'Funkhaus / Button Show Dynamic',
  component: ButtonShowDynamic,
  argTypes: {
    isExpanded: { control: 'boolean' },
    labelOpen: { control: 'text' },
    labelClose: { control: 'text' },
    show: { control: 'boolean' },
    stopPropagation: { control: 'boolean' },
    ariaHidden: { control: 'boolean' },
    variant: { control: { type: 'select' }, options: ['default', 'minimal'] },
    transitionSpeed: {
      control: { type: 'select' },
      options: ['normal', 'fast'],
    },
  },
}

const Template = args => ({
  components: { ButtonShowDynamic },
  setup() {
    const isExpanded = ref(args.isExpanded)

    watch(
      () => args.isExpanded,
      (next) => {
        isExpanded.value = next
      }
    )

    const handleClick = (event) => {
      isExpanded.value = !isExpanded.value
      if (args.onClick)
        args.onClick(event)
    }

    return { args, isExpanded, handleClick }
  },
  template: `
    <div style="padding: 24px;">
      <button-show-dynamic
        v-bind="args"
        :is-expanded="isExpanded"
        @click="handleClick"
      />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  isExpanded: false,
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  show: true,
  stopPropagation: false,
  ariaHidden: true,
  variant: 'default',
  transitionSpeed: 'normal',
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const Minimal = Template.bind({})
Minimal.args = {
  ...Default.args,
  variant: 'minimal',
  labelOpen: 'Collapse',
  labelClose: 'Expand',
  transitionSpeed: 'fast',
}
