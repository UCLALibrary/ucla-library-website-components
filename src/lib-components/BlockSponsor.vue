<script>
import SmartLink from '@/lib-components/SmartLink.vue'

export default {
  name: 'BlockSponsor',
  components: {
    SmartLink,
  },
  props: {
    funderLogo: {
      type: Array,
      default: () => [],
    },
    funderName: {
      type: String,
      default: '',
    },
    funderUrl: {
      type: String,
      default: '',
    },
  },
  computed: {
    parsedFunderLogo() {
      return this.funderLogo[0]
    },
  },
}
</script>

<template>
  <SmartLink :to="funderUrl" link-target="_blank">
    <img
      :src="parsedFunderLogo.src"
      :alt="funderName"
      class="block-sponsor"
    >
  </SmartLink>
</template>

<style lang="scss" scoped>
.block-sponsor {
    max-height: 80px;
}
</style>
