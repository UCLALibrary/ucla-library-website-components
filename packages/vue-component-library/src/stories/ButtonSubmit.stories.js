import ButtonSubmit from "@/lib-components/ButtonSubmit"
import SvgIconLocker from "ucla-library-design-tokens/assets/svgs/icon-locker.svg"
import { computed } from "vue"

export default {
    title: "Funkhaus / ButtonSubmit",
    component: ButtonSubmit,
}

const methods = {
    onSubmit() {
        alert("Button clicked!")
    },
}

// Variations of stories below
export function Default() {
    return {
        components: { ButtonSubmit },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        methods: methods,
        template: `<button-submit @click="onSubmit" />`,
    }
}

export function WithCustomIcon() {
    return {
        components: { ButtonSubmit },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        data() {
            return {
                customIcon: SvgIconLocker,
            }
        },
        methods: methods,
        template: `
      <button-submit @click="onSubmit">
        <template #default>
          <component :is="customIcon" />
        </template>
      </button-submit>
    `,
    }
}
