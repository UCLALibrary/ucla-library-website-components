<script setup lang="ts">
import { computed, ref } from 'vue'
import SearchField from './SearchField.vue'
import ButtonDropdownSearch from './ButtonDropdownSearch.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import DividerGeneral from './DividerGeneral.vue'
import type { MediaItemType } from '@/types/types'

interface SearchFieldCompositeProps {
  // Search field props
  initialValue?: string
  placeholder?: string
  disabled?: boolean
  wrapperClass?: string
  clearIcon?: boolean
  clearOnEsc?: boolean
  blurOnEsc?: boolean
  selectOnFocus?: boolean
  shortcutKey?: string

  // Dropdown search props
  dropdownOptions?: string[]
  dropdownModelValue?: string

  // Divider props
  showDivider?: boolean

  // Background image props
  backgroundImage?: MediaItemType
  backgroundText?: string
}

const props = withDefaults(defineProps<SearchFieldCompositeProps>(), {
  initialValue: '',
  placeholder: 'Search...',
  disabled: false,
  wrapperClass: 'search-input-wrapper',
  clearIcon: true,
  clearOnEsc: true,
  blurOnEsc: true,
  selectOnFocus: true,
  shortcutKey: '/',
  dropdownOptions: () => [],
  dropdownModelValue: '',
  showDivider: false,
})

const emit = defineEmits<{
  'update:dropdownModelValue': [value: string]
  submit: [value: string]
  dropdownChange: [value: string]
}>()

const dropdownValue = ref(props.dropdownModelValue)

// Methods
function handleSearchSubmit(value: string) {
  emit('submit', value)
}

function handleDropdownChange(value: string) {
  dropdownValue.value = value
  emit('update:dropdownModelValue', value)
  emit('dropdownChange', value)
}

// Computeds
const hasDropdownOptions = computed(() => {
  return props.dropdownOptions && props.dropdownOptions.length > 0
})

const hasBackgroundImage = computed(() => {
  return (
    props.backgroundImage
        && typeof props.backgroundImage === 'object'
        && props.backgroundImage.src
  )
})

const classes = computed(() => {
  return [
    'search-field-composite',

    {
      'has-dropdown': hasDropdownOptions.value,
      'has-divider': props.showDivider && !hasBackgroundImage.value,
      'has-background': hasBackgroundImage.value,
    },
  ]
})
</script>

<template>
  <div :class="classes">
    <!-- Background Image (if provided) -->
    <ResponsiveImage
      v-if="hasBackgroundImage"
      :media="backgroundImage!"
      class="background-image"
    />
    <p
      v-if="hasBackgroundImage && backgroundText"
      class="background-text"
      v-html="backgroundText"
    />

    <div class="search-components">
      <SearchField
        :initial-value="initialValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :wrapper-class="wrapperClass"
        :clear-icon="clearIcon"
        :clear-on-esc="clearOnEsc"
        :blur-on-esc="blurOnEsc"
        :select-on-focus="selectOnFocus"
        :shortcut-key="shortcutKey"
        class="search-field"
        @submit="handleSearchSubmit"
      />

      <ButtonDropdownSearch
        v-if="hasDropdownOptions"
        :options="dropdownOptions"
        :model-value="dropdownValue"
        :is-long="false"
        class="button-dropdown-search"
        @update:model-value="handleDropdownChange"
      />
    </div>

    <DividerGeneral
      v-if="showDivider && !hasBackgroundImage"
      :is-tertiary="true"
      class="divider-general"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-field-composite {
    position: relative;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    width: 100%;

    .background-image {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        pointer-events: none;
    }
    .background-text {
        z-index: 20;
        position: absolute;
        top: unset;
        left: 0;
        right: 0;
        bottom: 10px;

        font-family: var(--font-secondary);
        color: var(--color-white);
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
        text-align: center;
        letter-spacing: 0.16px;
    }

    .search-components {
        position: relative;
        z-index: 20;
        display: flex;
        align-items: center;
        width: 100%;

        flex-direction: row;
    }
    .search-field {
        flex: 1;
    }
    .divider-general {
        margin-block: 14px;
        max-width: unset;
        width: 100%;

        &.is-tertiary {
            border-color: var(--color-default-cyan-03);
        }
    }

    // With background image
    &.has-background {
        height: 50vh;

        .search-components,
        .divider-general,
        .background-text {
            max-width: min(80%, 1200px);
            width: 100%;
            margin: 0 auto;
            padding-inline: 32px;
        }
    }

    @media #{$medium} {
        .button-dropdown-search {
            :deep(.dropdown-field) {
                height: 53px;
            }
        }
    }

    @media #{$small} {
        .search-components {
            flex-direction: column;
            gap: 12px;
        }
        .button-dropdown-search {
            width: 100%;

            :deep(.dropdown-field) {
                height: 45px;
            }
        }
        .search-field {
            width: 100%;
        }

        .background-text {
            bottom: 50px;
        }

        // With background image
        &.has-background {
            height: 100vh;

            .search-components,
            .divider-general,
            .background-text {
                max-width: 100%;
                width: 100%;
                margin: 0 auto;
                padding-inline: 24px;
            }
        }
    }
}
</style>
