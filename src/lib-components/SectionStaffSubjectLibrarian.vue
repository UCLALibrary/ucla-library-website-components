<script
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
        <th
          v-for="(header, index) in tableHeaders"
          :key="index"
        >
          {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <template v-if="(items.length !== 0) && isStaffItem(items[0])">
        <BlockStaffSubjectLibrarian
          v-for="(item, index) in items as BlockStaffListItemType[]"
          :key="`${index}-${item.subjectArea}`"
          :subject-area="item.subjectArea"
          :name-first="item.nameFirst"
          :name-last="item.nameLast"
          :to="item.to"
          :alternative-name="item.alternativeName"
          :language="item.language"
          :job-title="item.jobTitle"
          :departments="item.departments"
          :locations="item.locations"
          :email="item.email"
          :phone="item.phone"
          :consultation="item.consultation"
          class="subject-librarian-item"
        />
      </template>
      <template v-else>
        <BlockStaffSubjectLibrarian
          v-for="(item, index) in items as FilmographyListItemType[]"
          :key="`${index}-${item.titleGeneral}`"
          :num-extra-cells="4"
        >
          <template #column1>
            <div class="responsive-image" style="width: 100px; height: 100px;">
              <ResponsiveImage :media="item.image[0]" />
            </div>
          </template>
          <template #column2>
            <smart-link :to="item.filmLink[0].uri">
              {{ item.titleGeneral }}
            </smart-link>
            {{ item.description }}
          </template>
          <template #column3>
            {{ item.roles }}
          </template>
          <template #column4>
            {{ item.year }}
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
.section-staff-subject-librarian {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  max-width: $container-l-main + px;
  margin: 0 auto var(--space-2xl);

  caption {
    @include visually-hidden;
  }

  thead tr {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: var(--space-xl);

    width: 100%;
    color: var(--color-primary-blue-05);
    @include step-0;
    font-weight: normal;
    border-bottom: 2px dotted var(--color-secondary-grey-02);
    padding-bottom: 10px;

    th {
      display: flex;
      flex: 1 1 0px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;

      font-weight: 500;
    }
  }

  .subject-librarian-item {
    border-bottom: 2px dotted var(--color-secondary-grey-02);
  }

  @media #{$small} {
    thead {
      height: 1px;
      width: 1px;
      position: absolute;
      overflow: hidden;
      top: -10px;
    }
  }
}
</style>
