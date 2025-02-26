<script>
export default {
  name: 'ImpactNumberCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    impactNumber: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <li class="impact-number-card">
    <div class="card">
      <div
        v-if="impactNumber"
        class="impact-number"
        v-html="impactNumber"
      />
      <div v-if="title" class="title" v-html="title" />
    </div>
    <div v-if="text" class="text" v-html="text" />
  </li>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_impact-number-card.scss";
@import "@/styles/ftva/_impact-number-card.scss";
</style>
