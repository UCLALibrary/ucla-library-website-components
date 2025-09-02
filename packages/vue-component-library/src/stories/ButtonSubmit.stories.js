import SvgIconEye from 'ucla-library-design-tokens/assets/svgs/icon-eye.svg'
import { computed } from 'vue'
import ButtonSubmit from '@/lib-components/ButtonSubmit'

export default {
  title: 'Funkhaus / Button Submit',
  component: ButtonSubmit,
}

const methods = {
  onSubmit() {
    alert('Button clicked!')
  },
}

// Variations of stories below
export function Default() {
  return {
    components: { ButtonSubmit },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    methods,
    template: '<button-submit @click="onSubmit" />',
  }
}

export function WithCustomIcon() {
  return {
    components: { ButtonSubmit },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        customIcon: SvgIconEye,
      }
    },
    methods,
    template: `
            <button-submit @click="onSubmit">
                <template #default>
                    <component :is="customIcon" />
                </template>
            </button-submit>
        `,
  }
}

// Variant: No theme provided (falls back to base styles)
export function NoThemeProvided() {
  return {
    components: { ButtonSubmit },
    methods,
    template: '<button-submit @click="onSubmit" />',
  }
}
