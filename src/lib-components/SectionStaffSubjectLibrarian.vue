<!-- <script
  setup
  lang="ts"
>
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// TYPESCRIPT
import type { BlockStaffListItemType, MediaItemType } from '@/types/types'

// CHILD COMPONENTS
import BlockStaffSubjectLibrarian from '@/lib-components/BlockStaffSubjectLibrarian.vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import RichText from '@/lib-components/RichText.vue'

export interface FilmographyListItemType {
  image: MediaItemType[]
  titleGeneral: string
  description: string
  roles: string
  year: string
  filmLink: {
    uri: string
    slug: string
  }[]
}

// PROPS
// this component is @deprecated!
// do not add new props or new implementations, it is being @deprecated as part of APPS-3132
const { items, tableHeaders } = defineProps({
  items: {
    type: Array as PropType<BlockStaffListItemType[] | FilmographyListItemType[]>,
    default: () => [],
  },
  tableHeaders: {
    type: Array,
    default: () => [],
  },
})

// If item has a subjectArea, we assume it's a staff item
function isStaffItem(item: BlockStaffListItemType | FilmographyListItemType): item is BlockStaffListItemType {
  return Object.prototype.hasOwnProperty.call(item as BlockStaffListItemType, 'subjectArea')
}

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['section-staff-subject-librarian', theme?.value || '']
})
</script>

<template>
  <table :class="classes">
    <caption>
      Subject Librarians
    </caption>
    <thead>
      <tr>
        <th v-for="(header, index) in tableHeaders" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <template v-if="(items.length !== 0) && isStaffItem(items[0])">
        <BlockStaffSubjectLibrarian
          v-for="(item, index) in items as BlockStaffListItemType[]"
          :key="`${index}-${item.subjectArea}`" :subject-area="item.subjectArea" :name-first="item.nameFirst"
          :name-last="item.nameLast" :to="item.to" :alternative-name="item.alternativeName" :language="item.language"
          :job-title="item.jobTitle" :departments="item.departments" :locations="item.locations" :email="item.email"
          :phone="item.phone" :consultation="item.consultation" class="subject-librarian-item"
        />
      </template>
      <template v-else>
        <BlockStaffSubjectLibrarian
          v-for="(item, index) in items as FilmographyListItemType[]"
          :key="`${index}-${item.titleGeneral}`" :num-extra-cells="4" class="subject-librarian-item"
        >
          <template #column1>
            <div class="responsive-image">
              <ResponsiveImage :media="item.image[0]" />
            </div>
          </template>
          <template #column2>
            <h1>
              <smart-link class="film-title" :to="item.filmLink[0].uri">
                {{ item.titleGeneral }}
              </smart-link>
            </h1>
            <RichText :rich-text-content="item.description" />
          </template>
          <template #column3>
            <p class="subtitle">
              {{ item.roles }}
            </p>
          </template>
          <template #column4>
            <p class="subtitle">
              {{ item.year }}
            </p>
          </template>
        </BlockStaffSubjectLibrarian>
      </template>
    </tbody>
  </table>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_section-staff-subject-librarian.scss";
@import "@/styles/ftva/_section-staff-subject-librarian.scss";
</style> -->
