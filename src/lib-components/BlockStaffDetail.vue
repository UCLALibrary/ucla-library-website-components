<script
  lang="ts"
  setup
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// TYPESCRIPT
import SvgHeadingArrow from 'ucla-library-design-tokens/assets/svgs/graphic-chevron-right.svg'
import type { AcademicDepartmentsItemType, AlternativeNameItemType, DepartmentItemType, LocationItemType, MediaItemType, TopicsItemType } from '@/types/types'

// SVGs

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import RichText from '@/lib-components/RichText.vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'

// PROPS & DATA
const props = defineProps({
  image: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
  to: {
    type: String,
    default: '',
  },
  staffName: {
    type: String,
    default: '',
  },
  nameLast: {
    type: String,
    default: '',
  },
  nameFirst: {
    type: String,
    default: '',
  },
  alternativeName: {
    type: Array as PropType<AlternativeNameItemType[]>,
    default: () => [],
  },
  jobTitle: {
    type: String,
    default: '',
  },
  departments: {
    type: Array as PropType<DepartmentItemType[]>,
    default: () => [],
  },
  // merge this with ask-me-about data and then sort it
  academicDepartments: {
    type: Array as PropType<AcademicDepartmentsItemType[]>,
    default: () => [],
  },
  // topics is the ask-me-about data
  topics: {
    // ask-me-about
    type: Array as PropType<TopicsItemType[]>,
    default: () => [],
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  consultation: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  pronouns: {
    type: String,
    default: '',
  },
  biography: {
    type: String,
    default: '',
  }
})

const parsedImage = computed(() => {
  if (props.image.length)
    return props.image[0].src
})

const parsedPronouns = computed(() => {
  return `Pronouns: ${props.pronouns}`
})

const parsedStaffName = computed(() => {
  return `${props.nameFirst} ${props.nameLast}`
})

const parsedAlternativeFullName = computed(() => {
  return props.alternativeName[0].fullName
})

const parsedLanguage = computed(() => {
  return props.alternativeName[0].languageAltName
})

const mergeSortTopics = computed(() => {
  return props.topics
    .concat(props.academicDepartments)
    .sort((a, b) =>
      a.title.toUpperCase() > b.title.toUpperCase()
        ? 1
        : b.title.toUpperCase() > a.title.toUpperCase()
          ? -1
          : 0
    )
})
</script>

<template>
  <div class="block-staff-detail">
    <!-- HeadingStaff  -->
    <div class="heading-staff">
      <SvgHeadingArrow />
      <div class="header">
        <h1 class="staffName">
          {{ parsedStaffName }}
          <span
            v-if="alternativeName.length"
            :lang="parsedLanguage"
          >
            {{ parsedAlternativeFullName }}
          </span>
        </h1>
        <div
          v-if="pronouns"
          class="pronouns"
        >
          {{ parsedPronouns }}
        </div>
      </div>
    </div>

    <div class="section-staff-bio">
      <div :class="image ? 'body-contact' : 'body-contact no-image'">
        <ResponsiveImage
          v-if="parsedImage"
          :media="parsedImage"
          :aspect-ratio="100"
          class="image"
        />

        <div class="info-container">
          <div class="staff-info">
            <div
              class="job-title"
              v-html="jobTitle"
            />

            <ul
              v-if="departments.length"
              class="departments"
            >
              <li
                v-for="(department, index) in departments"
                :key="index"
                class="department"
              >
                {{ department.title }}
              </li>
            </ul>
            <ul
              v-if="locations.length"
              class="location-group"
            >
              <li
                v-for="(location, index) in locations"
                :key="`location-${index}`"
                class="location"
              >
                <IconWithLink
                  :text="location.title"
                  icon-name="svg-icon-location"
                  :to="`/${location.to}`"
                />
              </li>
            </ul>
          </div>
          <div class="contact-info-list">
            <div class="contact-info">
              <IconWithLink
                :text="email"
                icon-name="svg-icon-email"
                :to="`mailto:${email}`"
              />
            </div>
            <div
              v-if="phone"
              class="contact-info"
            >
              <IconWithLink
                :text="phone"
                icon-name="svg-icon-phone"
                :to="`tel:${phone}`"
              />
            </div>
            <div
              v-if="consultation"
              class="contact-info"
            >
              <IconWithLink
                text="Book a consultation"
                icon-name="svg-icon-consultation"
                :to="consultation"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="body-bio">
        <!-- SectionStaffBio -->
        <DividerWayFinder
          v-if="topics.length || academicDepartments.length"
          class="divider divider-first"
          color="about"
        />
        <div
          v-if="topics.length || academicDepartments.length"
          class="ask-me-about"
        >
          <h2 class="section-title">
            Ask Me About
          </h2>
          <RichText>
            <ul class="list topics">
              <li
                v-for="topic in mergeSortTopics"
                :key="topic.id"
                v-html="topic.title"
              />
            </ul>
          </RichText>
        </div>

        <!-- RICH TEXT -->
        <DividerWayFinder
          v-if="biography"
          class="divider divider-first"
          color="about"
        />
        <div
          v-if="biography"
          class="biography"
        >
          <h2 class="section-title">
            Biography
          </h2>
          <RichText :rich-text-content="biography" />
        </div>
      </div>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.block-staff-detail {
  max-width: calc($container-l-main + 128) + px;

  .heading-staff {
    width: 100%;
    margin-left: -96px;
    margin-bottom: var(--space-m);

    display: flex;
    align-items: center;
    flex-flow: row;
    //justify-content: center;
    //align-items: normal;
    height: 80px;
    gap: 12px;
  }

  .svg__graphic-chevron-right {
    flex-shrink: 0;
    flex-basis: 80px;

    .svg__stroke--wayfinder {
      stroke: var(--color-about-purple-03);
    }
  }

  .staffName {
    letter-spacing: 0.01em;
    color: var(--color-primary-blue-03);
    @include step-4;
    width: 100%;
  }

  .pronouns {
    @include step-0;
    line-height: 1;
    color: var(--color-secondary-grey-05);
    display: inline;
  }

  // CONTACT
  .body-contact {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    height: 352px;
    gap: var(--space-l) var(--space-xl);
    @include step-0;

    .image {
      width: 100%;
      max-width: 352px;
      height: auto;
      margin: var(--space-m) 0;
    }

    .info-container {
      flex-flow: row;
      width: calc(100% - 400px);
    }

    .staff-info {
      border-bottom: 2px dotted var(--color-secondary-grey-02);
      padding-bottom: var(--space-m);
    }

    .contact-info-list {
      padding-top: var(--space-m);
    }

    .contact-info {
      color: var(--color-primary-blue-03);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: var(--space-xs);
      margin-bottom: var(--space-xs);

      &:last-child {
        margin-bottom: 0;
      }
    }

    .divider {
      width: 100%;
    }
  }

  .job-title,
  .department,
  .location-link {
    @include step-0;
  }

  .location-group,
  .departments {
    margin: 6px 0 calc(var(--space-xs) + 6px);
    list-style: none;
    color: var(--color-secondary-grey-05);
  }

  .department {
    display: block;
  }

  .location {
    display: block;
  }

  .department {
    padding-bottom: 12px;
  }

  .location-group {
    color: var(--color-primary-blue-03);
    margin-bottom: 0;

    .location-link {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: var(--space-xs);
    }
  }

  .location-title,
  .contact-info {
    @include button;
  }

  .location-link .svg,
  .contact-info .svg {
    flex-shrink: 0;
  }

  .job-title {
    margin: 6px 0 calc(var(--space-xs) + 6px);
  }

  .no-image-divider {
    margin: var(--space-xl) auto;
    max-width: $container-l-main + px;
  }

  // Hover states
  @media #{$has-hover} {
    .location-link:hover {
      @include link-hover;
    }
  }

  // BODY
  .section-staff-bio {
    max-width: $container-l-main + px;
    margin: 0 auto var(--space-2xl);
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    // SectionStaffBio
    .body-bio {
      width: 100%;

      .divider {
        padding: 0;
      }

      >div:last-child {
        margin-bottom: 0;
      }

      .ask-me-about {
        margin-bottom: var(--space-2xl);

        ul {
          margin: 0;
        }
      }

      .section-title {
        margin-bottom: var(--space-m);
        @include step-3;
        color: var(--color-primary-blue-03);
      }

      .topics li {
        margin: 0;
      }

      :deep(.rich-text p:last-child) {
        margin-bottom: 0;
      }
    }
  }

  .body-contact.no-image {
    height: unset;

    .info-container {
      width: 100%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1300px) {
    padding: 0 var(--unit-gutter);

    .heading-staff {
      margin-left: 0;
      gap: var(--space-xs);
      justify-content: flex-start;
    }

    .svg__graphic-chevron-right {
      width: 40px;
      height: 40px;
      flex-basis: 40px;
      margin-top: 6px;
      margin-left: -40px;
    }

    .location-link .svg,
    .contact-info .svg {
      width: 28px;
      height: 28px;
    }

    .department,
    .location-group .location-title {
      line-height: 1;
    }
  }

  @media #{$medium} {
    width: 100%;
    padding: 0 var(--unit-gutter);

    .heading-staff {
      margin-left: 0;
      justify-content: flex-start;
      gap: var(--space-xs);
    }

    .svg__graphic-chevron-right {
      width: 40px;
      height: 40px;
      flex-basis: 40px;
      margin-top: 6px;
    }

    .departments,
    .location-group {
      display: flex;
      flex-direction: column;
      gap: 0 var(--space-xs);

      .department {
        border: 0;
        padding: 0;
        margin-bottom: 8px;
      }
    }

    .contact-info .svg,
    .location-link .svg {
      width: 28px;
      height: 28px;
    }

    .section-staff-bio {
      .info-container {
        width: 100%;
      }

      .body-contact {
        height: unset;
        flex-grow: 0;

        .image {
          max-width: 328px;
          margin-top: 0px;
        }

        .contact-info-list {
          margin-top: var(--space-m);
        }
      }
    }
  }

  @media #{$small} {
    .svg__graphic-chevron-right {
      display: none;
    }

    .heading-staff {
      height: unset;
    }

    .job-title,
    .departments,
    .location-group {
      margin-bottom: 8px;
    }

    .job-title {
      // line-height: $line-height--1;
    }

    .section-staff-bio {
      .body-contact {
        flex-basis: 100%;
        width: 100%;
        flex-grow: 0;

        .image {
          max-width: 100%;
        }
      }

      .body-bio {
        width: 100%;
      }
    }
  }
}
</style>
