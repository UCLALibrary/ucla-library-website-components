<template>
  <li class="block-staff-list">
    <responsive-image
      :image="image"
      :aspect-ratio="100"
      sizes="300px"
      class="image"
    />
    <div
      v-if="!image"
      class="no-image"
    >
      <svg-heading-arrow class="icon-heading-arrow" />
    </div>

    <div class="meta">
      <div class="name-title">
        <h3 class="staff-name">
          <smart-link :to="to">
            {{ staffName }}

            <span
              v-if="alternativeFullName"
              :lang="language"
            >
              {{ alternativeFullName }}</span>
          </smart-link>
        </h3>
        <div
          class="job-title"
          v-html="jobTitle"
        />
        <ul
          v-if="departments.length"
          class="departments"
        >
          <li class="department">
            {{ lastDepartment }}
          </li>
        </ul>
      </div>

      <div class="contact-info">
        <div class="email">
          <icon-with-link
            :text="email"
            icon-name="svg-icon-email"
            :to="`mailto:${email}`"
          />
        </div>

        <div
          v-if="phone"
          class="phone"
        >
          <icon-with-link
            :text="phone"
            icon-name="svg-icon-phone"
            :to="`tel:${phone}`"
          />
        </div>

        <div
          v-if="consultation"
          class="consultation"
        >
          <icon-with-link
            :text="`Book a consultation`"
            icon-name="svg-icon-consultation"
            :to="consultation"
          />
        </div>

        <div
          v-if="locations.length"
          class="locations"
        >
          <icon-with-link
            v-for="(location, index) in locations"
            :key="`${index}`"
            :text="location.title"
            icon-name="svg-icon-location"
            :to="location.uri"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import _isEmpty from "lodash/isEmpty"
import SvgHeadingArrow from "ucla-library-design-tokens/assets/svgs/graphic-chevron-right.svg"
import ResponsiveImage from "@/lib-components/ResponsiveImage"
import SmartLink from "@/lib-components/SmartLink.vue"

export default {
  name: "BlockStaffList",
  components: {
    SvgHeadingArrow,
    ResponsiveImage,
    SmartLink,
    IconWithLink: () =>
      import("@/lib-components/IconWithLink.vue").then((d) => d.default),
  },
  props: {
    to: {
      type: String,
      default: "",
    },
    image: {
      type: Object,
      default: () => { },
    },
    staffName: {
      type: String,
      default: "",
    },
    alternativeFullName: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: "",
    },
    jobTitle: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    departments: {
      type: Array,
      default: () => [],
    },
    consultation: {
      type: String,
      default: "",
    },
    locations: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    lastDepartment() {
      return this.departments[this.departments.length - 1].title
    },
  },
}
</script>

<style
  lang="scss"
  scoped
>
.block-staff-list {
  --image-size: 272px;

  display: flex;
  flex-direction: row;
  gap: var(--space-xl);

  @include step-0;
  line-height: $line-height--1;
  background-color: var(--color-white);
  border: 2px solid var(--color-primary-blue-01);
  border-radius: var(--rounded-slightly-all);

  padding: var(--space-xl);
  position: relative;
  @include animate-normal;

  .image {
    flex-shrink: 0;
    width: var(--image-size);
  }

  .no-image {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;

    border: 1px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);
    width: var(--image-size);
    height: var(--image-size);

    .icon-heading-arrow {
      margin: 0 auto;

      .svg__stroke--wayfinder {
        stroke: var(--color-about-purple-03);
      }
    }
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-m);

    .name-title {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .staff-name {
      @include step-2;
      color: var(--color-primary-blue-03);

      a {
        @include card-clickable-area;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .job-title {
      color: var(--color-black);
    }

    .departments {
      display: flex;
      flex-direction: column;

      list-style: none;
    }

    .department {
      color: var(--color-secondary-grey-04);
    }
  }

  .contact-info {
    z-index: 10;
  }

  .contact-info a {
    @include button;
  }

  .email,
  .phone,
  .consultation {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-xs);

    color: var(--color-primary-blue-03);

    .icon {
      flex-shrink: 0;
    }
  }

  .locations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  // Hover states
  @media #{$has-hover} {

    .staff-name a:hover,
    .is-link:hover {
      @include link-hover;
    }

    &:hover {
      @include card-horizontal-hover;
      border-color: var(--color-about-purple-01);
    }
  }

  // Breakpoints
  @media #{$medium} {
    align-items: center;

    .image,
    .no-image {
      --image-size: 220px;
      flex-shrink: 0;
    }

    .job-title,
    .department,
    .contact-info {
      font-size: 18px;
    }

    .contact-info .icon {
      width: 28px;
      height: 28px;
    }
  }

  @media #{$small} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    border: 0;

    &.block-staff-list-item {
      border-bottom: 2px dotted var(--color-secondary-grey-02);
      padding-left: 0;
      padding-right: 0;

      &:last-child {
        border-bottom: 0;
      }
    }

    .image,
    .no-image {
      display: none;
    }

    .meta {
      width: 100%;
    }
  }
}
</style>
