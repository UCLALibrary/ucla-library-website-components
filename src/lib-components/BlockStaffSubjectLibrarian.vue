<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

// TYPESCRIPT
import type { AcademicDepartmentsItemType, AlternativeNameItemType, DepartmentItemType, StaffLocationItemType } from '@/types/types'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'

// PROPS & DATA
const props = defineProps({
  subjectArea: {
    type: String,
    default: '',
  },
  to: {
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
  jobTitle: {
    type: String,
    default: '',
  },
  departments: {
    type: Array as PropType<DepartmentItemType[]>,
    default: () => [],
  },
  academicDepartments: {
    type: Array as PropType<AcademicDepartmentsItemType[]>,
    default: () => [],
  },
  locations: {
    type: Array as PropType<StaffLocationItemType[]>,
    default: () => [],
  },
  alternativeName: {
    type: Array as PropType<AlternativeNameItemType[]>,
    default: () => [],
  },
  uri: {
    type: String,
    default: '',
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
  /* instead of / in addition to using the above props, you can set a number of extra cells to put data in */
  numExtraCells: {
    type: Number,
    default: 0,
  },
})

const lastDepartment = computed(() => {
  const dept = props.departments
  return dept[dept.length - 1].title
})

const parsedAlternativeFullName = computed(() => {
  return props.alternativeName[0].fullName
})

const parsedLanguage = computed(() => {
  return props.alternativeName[0].languageAltName
})

const parsedStaffName = computed(() => {
  return `${props.nameFirst} ${props.nameLast}`
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['block-staff-subject-librarian', theme?.value || '']
})
</script>

<template>
  <tr :class="classes">
    <!-- SUBJECT AREA -->
    <td v-if="subjectArea || nameFirst" class="academic-department">
      {{ subjectArea }}
    </td>

    <!-- NAME -->
    <td v-if="nameFirst || nameLast" class="librarian-block">
      <SmartLink
        v-if="props.alternativeName.length === 0 || props.alternativeName === null" :to="to"
        class="staff-name"
      >
        {{ parsedStaffName }}
      </SmartLink>

      <SmartLink v-else :to="to" class="staff-name">
        {{ parsedStaffName }}
        <span v-if="props.alternativeName && props.alternativeName != null" :lang="parsedLanguage">
          {{ parsedAlternativeFullName }}</span>
      </SmartLink>
      <div class="job-title" v-html="jobTitle" />

      <ul v-if="departments.length" class="departments">
        <li class="department">
          {{ lastDepartment }}
        </li>
      </ul>

      <div v-if="locations.length">
        <IconWithLink
          v-for=" location in locations " :key="`location-${location.id}`" :text="location.title ?? ''"
          icon-name="svg-icon-location" :to="`/${location.to}`"
        />
      </div>
    </td>

    <!-- CONTACT INFO -->
    <td v-if="email || nameFirst" class="contact-info">
      <div class="email">
        <IconWithLink :text="email" icon-name="svg-icon-email" :to="`mailto:${email}`" />
      </div>

      <div v-if="phone" class="phone">
        <IconWithLink :text="phone" icon-name="svg-icon-phone" :to="`tel:${phone}`" />
      </div>

      <div v-if="consultation" class="consultation">
        <IconWithLink text="Book a consultation" icon-name="svg-icon-consultation" :to="consultation" />
      </div>
    </td>
    <template v-if="props.numExtraCells !== 0">
      <td v-for="i in props.numExtraCells" :key="i">
        <slot :name="`column${i}`" />
      </td>
    </template>
  </tr>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-staff-subject-librarian.scss";
@import "@/styles/ftva/_block-staff-subject-librarian.scss";
</style>
