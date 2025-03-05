<script>
// NOTE: refactoring this component entirely into composition API w/ typescript broke menu styles
// The reason could not be diagnosed, so for now we have have used setup() tag to add the theme without refactoring the whole component

// Helpers
import SmartLink from '@/lib-components/SmartLink'
import { useTheme } from '@/composables/useTheme'

export default {
  name: 'NavMenuItem',
  components: {
    SmartLink,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isOpened: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const theme = useTheme()
    return {
      theme
    }
  },
  computed: {
    classes() {
      return [
        this.item.classes,
        'nav-menu-item',
        { 'is-active': this.isActive },
        { 'is-opened': this.isOpened },
        this.theme || '',
      ]
    },
    parsedChildren() {
      return this.item.children.map((obj) => {
        return {
          ...obj,
          classes: `sub-menu-link ${obj.classes || ''}`,
        }
      })
    },
  },
}
</script>

<template>
  <li :class="classes">
    <button class="section-name" v-html="item.name" />
    <slot /> <!-- can be used to insert '>' icons etc, into the row -->
    <ul class="sub-menu">
      <li v-for="child in parsedChildren" :key="child.id" class="sub-menu-item">
        <SmartLink :class="child.classes" :to="child.to" :link-target="child.target">
          {{ child.name }}
        </SmartLink>
      </li>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-menu-item.scss";
@import "@/styles/ftva/_nav-menu-item.scss";
</style>
