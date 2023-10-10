<script>
// Helper functions
import formatLinkTarget from '@/utils/formatLinkTarget'
import isRelativeLink from '@/utils/isRelativeLink'

export default {
  name: 'SmartLink',

  props: {
    to: {
      type: String,
      default: '',
    },
    linkTarget: {
      type: String,
      default: '',
    },
    isDownload: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    parsedTarget() {
      console.log(this.linkTarget, this.to)
      console.log("format link target value:", formatLinkTarget(this.linkTarget, this.to))
      return formatLinkTarget(this.linkTarget, this.to)
    },
    isRelative() {
      console.log("in is relative", this.to)
      console.log("in is relative value", isRelativeLink(this.to))
      return !!isRelativeLink(this.to)
    },
  },
}
</script>

<template>
  <router-link v-if="isRelative && !isDownload && !parsedTarget" class="smart-link is-router-link" :to="to">
    <slot />
  </router-link>

  <a v-else-if="isDownload" :href="to" class="smart-link is-link" download>
    <slot />
  </a>

  <a v-else-if="to" :href="to" :target="parsedTarget" class="smart-link is-link">
    <slot />
  </a>

  <button v-else class="smart-link is-link">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.link-icon {
  &:hover {
    @include link-hover;
  }
}
</style>
