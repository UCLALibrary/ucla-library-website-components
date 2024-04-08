<script lang="ts" setup>
import type { PropType } from 'vue'
import NavPrimary from '@/lib-components/NavPrimary.vue'
import NavSecondary from '@/lib-components/NavSecondary.vue'
import type { NavPrimaryItemType, NavSecondaryItemType } from '@/types/types'

const { primaryItems, secondaryItems } = defineProps({
  primaryItems: {
    type: Array as PropType<NavPrimaryItemType[]>,
    default: () => [],
  },
  secondaryItems: {
    type: Array as PropType<NavSecondaryItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <header class="header-sticky">
    <NavPrimary :items="primaryItems" class="primary" />

    <NavSecondary :items="secondaryItems" class="secondary" />
  </header>
</template>

<style lang="scss" scoped>
.header-sticky {
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-secondary-grey-02);

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .primary {
        --unit-height: 64px;
        padding: 0 18px;
        justify-content: flex-start;
        width: unset;

        :deep(.section-name) {
            color: var(--color-black);
            font-family: var(--font-primary);
            font-size: 15px;
            font-weight: 600;
        }

        :deep(.support-links) {
            .item-top {
                color: var(--color-black);
                font-family: var(--font-primary);
                font-size: 15px;
            }
        }

        :deep(.background-white) {
            border-bottom: unset;
            height: unset;
        }

        :deep(.background-blue) {
            width: 1920px;
        }
    }

    .secondary {
        border-bottom: unset;
        margin-top: 10px;
        justify-content: flex-start;
        padding: 0 20px;
    }
}
</style>
