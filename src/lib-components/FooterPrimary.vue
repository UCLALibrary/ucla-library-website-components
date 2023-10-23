<script>
// Helpers
import { mapState } from 'pinia'

// SVGs
import SvgLogoUclaLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import SvgMoleculeHalf from 'ucla-library-design-tokens/assets/svgs/molecule-half.svg'
import SvgArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import { useGlobalStore } from '@/stores/GlobalStore'
import SmartLink from '@/lib-components/SmartLink'
import formatLinkTarget from '@/utils/formatLinkTarget'

export default {
  name: 'FooterPrimary',

  components: {
    SmartLink,
    SvgLogoUclaLibrary,
    SvgMoleculeHalf,
    SvgArrowRight,
  },
  props: {
    form: {
      type: Boolean,
      default: true,
    },
    isMicrosite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(useGlobalStore, ['footerPrimary']),
    classes() {
      return this.form ? ['container'] : ['container no-form']
    },
    parsedSocialItems() {
      if (Object.keys(this.footerPrimary).length !== 0) {
        return this.footerPrimary.nodes[0].children
      }
      else {
        // eslint-disable-next-line no-console
        console.log(
          `Pinia state data not present: is it client side:${process.client}`
        )
      }
      return []
    },
    parsedPressItems() {
      if (Object.keys(this.footerPrimary).length !== 0) {
        return this.footerPrimary.nodes[1].children
      }
      else {
        // eslint-disable-next-line no-console
        console.log(
          `Pinia state data for footer primary not present, it could be because navigation is not setup for the website: is it client side:${process.client}`
        )
      }
      return []
    },
  },
  methods: {
    formatTarget(target) {
      return formatLinkTarget(target)
    }
  }
}
</script>

<template>
  <div class="footer-primary">
    <SvgMoleculeHalf class="molecule-half-svg" aria-hidden="true" />
    <div :class="classes">
      <div class="footer-links">
        <a v-if="isMicrosite" href="https://www.library.ucla.edu" target="_blank" class="logo-ucla">
          <SvgLogoUclaLibrary class="logo-svg" />
          <span class="visually-hidden">UCLA Library Home</span>
        </a>
        <smart-link v-else to="/" class="logo-ucla">
          <SvgLogoUclaLibrary class="logo-svg" />
          <span class="visually-hidden">UCLA Library Home</span>
        </smart-link>
        <ul class="socials">
          <li v-for="item in parsedSocialItems" :key="item.id" class="social-item">
            <a :href="item.to" :target="formatTarget(item.target)" a>
              {{ item.name }}
            </a>
          </li>
        </ul>

        <ul v-if="parsedPressItems" class="press-links">
          <li v-for="item in parsedPressItems" :key="item.id" class="press-item">
            <smart-link :to="item.to" :link-target="item.target">
              {{ item.name }}
            </smart-link>
          </li>
        </ul>
      </div>

      <form v-if="form" id="mc-embedded-subscribe-form"
        action="https://ucla.us7.list-manage.com/subscribe/post?u=31248d1f341b8eede1b46cb33&amp;id=40fdd1db46&amp;f_id=0034f7e4f0"
        method="post" name="mc-embedded-subscribe-form" class="validate form" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll" class="form-header">
          <h2 class="title">
            Stay updated
          </h2>

          <p class="statement">
            Subscribe to get the latest updates on what's happening
            with UCLA Library.
          </p>
        </div>

        <div class="input-block">
          <div class="field mc-field-group">
            <input id="mce-EMAIL" name="EMAIL" type="email" value="" placeholder="email@ucla.edu" class="input-email"
              required>
            <label for="mce-EMAIL" class="label">
              Email Address
            </label>
          </div>

          <div id="mce-responses" class="clear">
            <div id="mce-error-response" class="response" style="display: none" />
            <div id="mce-success-response" class="response" style="display: none" />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input type="text" name="b_31248d1f341b8eede1b46cb33_40fdd1db46" tabindex="-1" value="">
          </div>

          <button id="mc-embedded-subscribe" class="button-submit" name="subscribe" type="submit">
            Subscribe
            <SvgArrowRight class="arrow-svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-primary {
  --unit-content-width: #{$container-l-cta}px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  background-color: var(--color-primary-blue-03);
  border-bottom: 4px solid var(--color-primary-yellow-01);
  position: relative;
  z-index: 0;
  padding: var(--unit-gutter);

  .molecule-half-svg {
    position: absolute;
    z-index: 10;
    opacity: 0.5;
    top: 50%;
    left: -55px;
    height: 287px;
    transform: rotate(180deg) translateY(50%);

    ::v-deep .svg__fill-bottom,
    ::v-deep .svg__fill-top {
      fill: var(--color-primary-blue-02);
      opacity: 0.25;
    }

    ::v-deep .svg__fill-accent {
      fill: var(--color-primary-blue-02);
      opacity: 0.55;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 128px;

    width: 100%;
    max-width: var(--unit-content-width);
    position: relative;
    z-index: 20;
    margin: 0 auto;

    &.no-form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: center;
    }

    // Footer Links - Left / Top
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .logo-svg {
        height: auto;
        width: 304px;
        max-width: 100%;

        ::v-deep path {
          fill: var(--color-white);
        }
      }

      .socials {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;

        color: var(--color-white);
        text-decoration: none;
        list-style-type: none;
        z-index: 10;

        .social-item {
          line-height: 1em;
          padding-right: 8px;
          padding-left: 8px;

          &:first-child {
            padding-left: 0;
          }

          border-right: 1px solid var(--color-white);

          &:last-child {
            border-right: 0;
          }
        }
      }

      // socials

      .press-links {
        display: inline-flex;
        flex-direction: column;
        align-self: flex-start;
        gap: 16px;
      }

      .press-item {
        align-self: flex-start;
        text-transform: uppercase;
        color: var(--color-white);
        list-style-type: none;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.1em;
        border-bottom: 2px solid var(--color-primary-yellow-01);
        line-height: 1.2;

        .is-link {
          position: relative;

          @include min-clickable-area;
        }
      }
    }

    // footer-links

    // Form - Right / Bottom
    .form {
      color: var(--color-white);
      padding-top: 16px;

      input {
        background-color: transparent;
      }

      input:placeholder-shown+label {
        cursor: text;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(0, 2.125rem) scale(1.25);
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
      }

      input:focus::placeholder,
      input:focus::-webkit-input-placeholder {
        opacity: 1;
        color: white;
      }

      input:not(:placeholder-shown)+label,
      input:focus+label {
        color: var(--color-help-green-02);
        font-size: 16px;
        font-weight: 500;
        transform: translate(0, -8px) scale(1);
        cursor: pointer;
      }

      .field {
        display: flex;
        flex-flow: column-reverse;
        width: 100%;
      }

      label,
      input {
        transition: all 0.2s;
        touch-action: manipulation;
      }

      input {
        @include step-0;
        line-height: 1.2;
        color: white;
        border: 0;
        border-radius: 4px;
        padding: 8px 12px;
        -webkit-appearance: none;
        cursor: text;
      }

      input:focus {
        outline: 0;
        background-color: rgba(#fff, 0.1);
        color: var(--color-white);
      }

      .form-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
      }

      .title {
        @include step-3;
      }

      .statement {
        @include step-0;
        margin: 0;
      }

      .input-block {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: flex-end;
        padding-bottom: 8px;

        position: relative;
        border-bottom: 2px solid var(--color-help-green-03);
        font-family: var(--font-primary);

        .description {
          position: absolute;
          top: 0;
          color: var(--color-help-green-03);
          font-size: 16px;
          opacity: 0;
          transition: opacity 400ms ease-in-out;
        }

        .button-submit {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-content: center;
          align-items: center;
          height: 40px;
          padding-left: 16px;

          color: var(--color-white);
          @include button;
        }

        .arrow-svg {
          path {
            stroke: var(--color-white);
            color: var(--color-white);
          }
        }
      }
    }
  }

  // Hover states
  @media #{$has-hover} {
    &:hover {

      .social-item a:hover,
      .social-item a:focus {
        color: var(--color-primary-yellow-01);
      }

      .press-item a:hover,
      .press-item a:focus {
        color: var(--color-primary-yellow-01);
        text-decoration: none;
      }
    }
  }

  // Breakpoints
  @media #{$medium} {
    padding: var(--unit-gutter);

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-content: flex-end;
      align-items: flex-end;
      gap: 32px;

      &.no-form {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: flex-end;
        align-items: flex-end;
      }

      .form {
        width: 100%;

        .form-header {
          margin-bottom: 24px;
        }
      }

      .footer-links {
        flex-wrap: nowrap;
        align-items: flex-end;

        .social-item:last-child {
          padding-right: 0;
        }

        .press-item {
          align-self: flex-end;
        }

        .press-links {
          align-self: flex-end;
        }
      }
    }
  }

  @media #{$small} {
    padding-top: 48px;
    padding-bottom: 48px;

    .container {
      gap: 48px;

      .form {
        .statement {
          line-height: 1.4;
          font-size: 16px;
        }

        .form-header {
          margin-bottom: 16px;
        }

        .field {
          width: calc(100% - 108px);
        }
      }
    }
  }

  @media (max-width: 375px) {
    .container {
      align-items: center;
    }
  }
}
</style>
