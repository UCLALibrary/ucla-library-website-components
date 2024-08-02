<script lang="ts" setup>
// UTILS
import { computed } from 'vue'

// import { mapState } from 'pinia'

// SVGs
import SvgLogoUclaLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import SvgLogoFTVA from 'ucla-library-design-tokens/assets/svgs/icon-ftva-footerlogo.svg'
import SvgMoleculeHalf from 'ucla-library-design-tokens/assets/svgs/molecule-half.svg'
import SvgArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import SvgCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import SvgYtIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-footer_yt.svg'
import SvgIgIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-footer_ig.svg'
import SvgXIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-footer_x.svg'
import SvgFbIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-footer_fb.svg'
import formatLinkTarget from '@/utils/formatLinkTarget'
import { useGlobalStore } from '@/stores/GlobalStore'
import { useTheme } from '@/composables/useTheme'

// CHILD COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// PROPS
const props = defineProps({
  form: {
    type: Boolean,
    default: true,
  },
  isMicrosite: {
    type: Boolean,
    default: false,
  },
})
const formIcons = {
  arrowRight: SvgArrowRight,
  caretRight: SvgCaretRight,
}
const socialMediaIcons = {
  youtube: SvgYtIcon,
  Youtube: SvgYtIcon,
  YouTube: SvgYtIcon, // handle edge case
  instagram: SvgIgIcon,
  Instagram: SvgIgIcon,
  twitter: SvgXIcon,
  Twitter: SvgXIcon,
  x: SvgXIcon,
  X: SvgXIcon, // handle either X or Twitter
  facebook: SvgFbIcon,
  Facebook: SvgFbIcon
}

// THEME
const theme = useTheme()
const wrapperClasses = computed(() => ['footer-primary', theme?.value || ''])
const classes = computed(() => {
  return props.form ? ['container'] : ['container no-form']
})
// const parsedNewsletterStatement = computed(() => {
//   if (theme?.value === 'ftva') {
//     return `Subscribe to receive the latest updates on what's happening at the Film & Television Archive.`
//   }
//   return `Subscribe to get the latest updates on what's happening with UCLA Library.`
// })
const parsedFooterThemeSettings = computed(() => {
  // ftva
  if (theme?.value === 'ftva') {
    return {
      statement: 'Subscribe to receive the latest updates on what\'s happening at the Film & Television Archive.',
      label: 'Submit',
      icon: formIcons.caretRight,
      socialMediaIcons: true
    }
  }
  // defaults
  return {
    statement: 'Subscribe to get the latest updates on what\'s happening with UCLA Library.',
    label: 'Subscribe',
    icon: formIcons.arrowRight,
    socialMediaIcons: false
  }
})

// GLOBALSTORE DATA
const globalStore = useGlobalStore()
const parsedSocialItems = computed(() => {
  if (Object.keys(globalStore.footerPrimary).length !== 0) {
    return globalStore.footerPrimary.nodes[0].children
  }
  else {
    // eslint-disable-next-line no-console
    console.log(
      // @ts-expect-error
      `Pinia state data not present: is it client side:${process.client}`
    )
  }
  return []
})
const parsedPressItems = computed(() => {
  if (Object.keys(globalStore.footerPrimary).length !== 0) {
    return globalStore.footerPrimary.nodes[1].children
  }
  else {
    // eslint-disable-next-line no-console
    console.log(
      // @ts-expect-error
      `Pinia state data not present: is it client side:${process.client}`
    )
  }
  return []
})
const parsedFooterLogo = computed(() => {
  if (theme?.value === 'ftva')
    return SvgLogoFTVA

  return SvgLogoUclaLibrary
})

// METHODS
function formatTarget(target: string) {
  return formatLinkTarget(target)
}
</script>

<template>
  <div :class="wrapperClasses">
    <SvgMoleculeHalf
      v-if="!theme"
      class="molecule-half-svg"
      aria-hidden="true"
    />
    <div :class="classes">
      <div class="footer-links">
        <a
          v-if="isMicrosite"
          href="https://www.library.ucla.edu"
          target="_blank"
          class="logo-ucla"
        >
          <component :is="parsedFooterLogo" class="logo-svg" />
          <span class="visually-hidden">UCLA Library Home</span>
        </a>
        <SmartLink
          v-else
          to="/"
          class="logo-ucla"
        >
          <component :is="parsedFooterLogo" class="logo-svg" />
          <span class="visually-hidden">UCLA Library Home</span>
        </SmartLink>
        <ul class="socials">
          <li
            v-for="item in parsedSocialItems"
            :key="item.id"
            class="social-item"
          >
            <a
              :href="item.to"
              :target="formatTarget(item.target)"
            >
              <component :is="(socialMediaIcons as any)[item.name]" v-if="parsedFooterThemeSettings?.socialMediaIcons" />
              <template v-else>{{ item.name }}</template>
            </a>
          </li>
        </ul>

        <ul
          v-if="parsedPressItems"
          class="press-links"
        >
          <li
            v-for="item in parsedPressItems"
            :key="item.id"
            class="press-item"
          >
            <SmartLink
              :to="item.to"
              :link-target="item.target"
            >
              {{ item.name }}
            </SmartLink>
          </li>
        </ul>
      </div>

      <form
        v-if="form"
        id="mc-embedded-subscribe-form"
        action="https://ucla.us17.list-manage.com/subscribe/post?u=cb3f880892df52211b236bdee&amp;id=ce2bece15c&amp;f_id=00edc2e1f0"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate form"
        target="_blank"
        novalidate
      >
        <div
          id="mc_embed_signup_scroll"
          class="form-header"
        >
          <h2 class="title">
            Stay updated
          </h2>

          <p class="statement">
            {{ parsedFooterThemeSettings.statement }}
          </p>
        </div>

        <div class="input-block">
          <div class="field mc-field-group">
            <input
              id="mce-EMAIL"
              name="EMAIL"
              type="email"
              value=""
              placeholder="email@ucla.edu"
              class="input-email"
              required
            >
            <label
              for="mce-EMAIL"
              class="label"
            >
              Email Address
            </label>
          </div>

          <div
            id="mce-responses"
            class="clear"
          >
            <div
              id="mce-error-response"
              class="response"
              style="display: none"
            />
            <div
              id="mce-success-response"
              class="response"
              style="display: none"
            />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
          <div
            style="position: absolute; left: -5000px"
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_31248d1f341b8eede1b46cb33_40fdd1db46"
              tabindex="-1"
              value=""
            >
          </div>

          <button
            id="mc-embedded-subscribe"
            class="button-submit"
            name="subscribe"
            type="submit"
          >
            {{ parsedFooterThemeSettings.label }}
            <component :is="parsedFooterThemeSettings.icon" class="arrow-svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "ucla-library-design-tokens/scss/_tokens-ftva";
@import "@/styles/default/_footer-primary.scss";
@import "@/styles/ftva/_footer-primary.scss";
</style>
