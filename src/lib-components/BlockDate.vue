<script>
import SvgArrowDown from 'ucla-library-design-tokens/assets/svgs/graphic-chevron-right.svg'

export default {
  name: 'BlockDate',
  components: {
    SvgArrowDown,
  },
  // TODO See ticket in internal system for notes on this. TLDR: Use JS date objects
  // Then have date-fns format function as computed to show date and day
  props: {
    date: {
      type: String,
      default: '',
    },
    day: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div class="block-date">
    <SvgArrowDown class="svg" />
    <div class="date">
      {{ date }}
    </div>
    <div class="day">
      {{ day }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-date {
    width: 274px;
    height: 232px;
    border-radius: var(--rounded-slightly-all);
    background-color: var(--color-primary-blue-01);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .svg {
        // height: 60px;
        transform: rotate(90deg) scale(0.9, 0.9);

        .svg__stroke--wayfinder {
            stroke: var(--color-visit-fushia-03);
        }
    }

    .date {
        font-size: 80px;
        color: var(--color--black);
        margin-bottom: 5px;
    }

    .day {
        font-size: 18px;
        color: var(--color-primary-blue-03);
    }
}
</style>
