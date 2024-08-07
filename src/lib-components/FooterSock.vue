<script>
// Helpers
import { mapState } from 'pinia'
import SmartLink from '@/lib-components/SmartLink'
import { useGlobalStore } from '@/stores/GlobalStore'

export default {
  name: 'FooterSock',
  components: {
    SmartLink,
  },
  computed: {
    ...mapState(useGlobalStore, ['footerSock']),
    year() {
      const current_year = new Date().getFullYear()
      return current_year
    },
    parsedSockItems() {
      if (Object.keys(this.footerSock).length !== 0) {
        return this.footerSock.nodes
      }
      else {
        // eslint-disable-next-line no-console
        console.log(
          `Pinia state data for footer sock not present if navigation is not setup for the website: is it client side:${process.client}`
        )
      }
      return []
    },
  },
}
</script>

<template>
  <div class="footer-sock">
    <div class="container">
      <div class="regents">
        &#169; {{ year }} Regents of the University of California
      </div>

      <ul class="links">
        <li v-for="item in parsedSockItems" :key="item.id" class="item">
          <SmartLink class="link" :to="item.to" :link-target="item.target">
            {{ item.name }}
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-sock {
  --unit-content-width: #{$container-l-cta}px;

  background-color: var(--color-white);
  padding: var(--space-l) var(--unit-gutter);

  .container {
    max-width: var(--unit-content-width);
    margin: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    .links {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: center;
      gap: 48px;

      list-style-type: none;
    }

    .link {
      text-decoration: underline;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 4px;
      text-decoration-color: var(--color-default-cyan-03);
      display: inline-block;
      line-height: 1.25;
      color: var(--color-black);

      position: relative;
      @include min-clickable-area;
    }

    .regents {
      color: var(--color-secondary-grey-04);
      letter-spacing: 0.01em;
    }
  }

  // Hover states
  @media #{$has-hover} {
    &:hover {

      .link:hover,
      .link:focus {
        color: var(--color-primary-blue-03);
      }
    }
  }

  // Breakpoints
  @media (max-width: 1120px) {
    .container {
      flex-direction: column;
      gap: 32px;

      .links {
        justify-content: space-between;
        align-content: center;
        gap: 32px;
        order: 1;
      }

      .regents {
        order: 2;
      }
    }
  }

  @media #{$small} {
    padding: var(--unit-gutter);

    .container {
      align-content: flex-start;
      align-items: flex-start;
      gap: 48px;

      .links {
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        margin: 0;
        gap: 24px;
      }
    }
  }
}
</style>
