<script setup>
import { computed, inject, provide } from 'vue'
import SectionHeader from '@/lib-components/SectionHeader.vue'
import RichText from '@/lib-components/RichText.vue'
import kebabCase from '@/utils/kebabCase'

const props = defineProps({
  sectionTitle: {
    type: String,
    default: '',
  },
  sectionSummary: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'white',
  },
  level: {
    type: Number,
    default: 0,
  },
  noMargins: {
    type: Boolean,
    default: false,
  },
})
console.log('SectionWrapper code initialized')
const parentLevel = inject('sectionLevel', 1)
const ancestorSetMargins = inject('ancestorSetMargins', false)
// console.log('ancestorSetMargins', ancestorSetMargins)

const levelComputed = computed(() => {
  // console.log('SectionWrapper levelComputed', Number(props.level || parentLevel + 1))
  return Number(props.level || parentLevel + 1)
})
const setMargins = computed(() => {
  console.log('SectionWrapper setMargins', props.noMargins || ancestorSetMargins)
  return !(props.noMargins || ancestorSetMargins)
})

// Provide must be called synchronously in setup()
provide('sectionLevel', levelComputed.value)
provide('ancestorSetMargins', ancestorSetMargins || setMargins.value)

const classes = computed(() => {
  return [
    'section-wrapper',
    `section-wrapper${levelComputed.value}`,
    `theme-${props.theme}`,
    { 'top-level': setMargins.value },
  ]
})

const getId = computed(() => {
  // console.log('SectionWrapper getId', kebabCase(props.sectionTitle))
  return kebabCase(props.sectionTitle)
})
</script>

<template>
  <section :class="classes">
    <a
      v-if="sectionTitle"
      :id="getId"
    />
    <div
      v-if="sectionTitle"
      class="section-header"
    >
      <SectionHeader
        v-if="sectionTitle"
        class="section-title"
        v-text="sectionTitle"
      />

      <RichText
        v-if="sectionSummary"
        class="section-summary"
        v-html="sectionSummary"
      />
    </div>

    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section-wrapper {
  >.section-header {
    margin-bottom: var(--space-xl);

    >.section-title {
      color: var(--color-primary-blue-03);
      line-height: 1.2;
      margin-bottom: var(--space-m);
    }

    .section-summary {
      @include step-0;
      padding-right: 0;

      :deep(p:not(:last-child)) {
        margin-bottom: var(--space-m);
      }

      :deep(p:last-child) {
        margin: 0;
      }
    }
  }

  &.top-level {
    --color-theme: var(--color-white);

    &.theme-gray {
      --color-theme: var(--color-secondary-grey-01);
      padding: var(--space-2xl) var(--unit-gutter);

      :deep(.byline-group) {
        color: var(--color-secondary-grey-05);
      }
    }

    &.theme-white {
      padding: 0 var(--unit-gutter);
      margin: var(--space-2xl) auto;

      &.section-banner {
        margin-top: 0;

        >:deep(*) {
          max-width: $container-xl-banner + px;
        }
      }

      &.section-no-top-margin {
        margin-top: 0;
      }

      .section-featured-banner {
        max-width: $container-l-cta + px;
      }
    }

    &.theme-divider {
      padding: 0 var(--unit-gutter);
    }

    padding: var(--space-2xl) var(--unit-gutter);
    margin: 0 auto;
    background-color: var(--color-theme);

    // Configure spacing of child components (individual components might override things like max-width)
    >:deep(*) {
      max-width: #{$container-l-main}px;
      padding: 0;
      margin-left: auto;
      margin-right: auto;

      &.block-call-to-action {
        max-width: var(--block-width);
        padding: var(--space-2xl);
      }
    }

    > :first-child:not(.divider-way-finder) {
      margin-top: 0;
    }

    > :last-child:not(.divider-way-finder) {
      margin-bottom: 0;
    }
  }
}
</style>
