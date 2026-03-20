<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import format from 'date-fns/format'
import BannerFeatured from '@/lib-components/BannerFeatured.vue'
import type { LocationItemType } from '@/types/types'
import type { FlexibleBannerFeatured } from '@/types/flexible_types'

// HELPERS
import getPrompt from '@/utils/getPrompt'
import stripMeapFromURI from '@/utils/stripMeapFromURI'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleBannerFeatured>,
    default: () => {},
  },
})

const parseImage = computed(() => {
  const c = block?.content?.[0]
  if (!c)
    return {}
  if (
    c.contentLink
        && c.contentLink.length > 0
        && c.contentLink[0].heroImage
        && c.contentLink[0].heroImage.length > 0
  )
    return c.contentLink[0].heroImage[0].image[0]
  if (c.image?.[0])
    return c.image[0]
  return {}
})

const parsedAlignment = computed(() => {
  return block?.content?.[0]?.alignment === 'right'
})

const parsePrompt = computed(() => {
  const c = block?.content?.[0]
  if (!c)
    return ''
  if (c.contentType)
    return getPrompt(c.contentType)
  if (c.contentLink?.[0]?.contentType)
    return getPrompt(c.contentLink[0].contentType)
  return ''
})

const parsedLocations = computed(() => {
  let locations: LocationItemType[] = []

  if (block.content && block.content[0].contentLink) {
    const contentType
            = block.content[0].contentLink[0].contentType.toLowerCase()

    switch (true) {
      case contentType.includes('article'):
        locations = block.content[0].contentLink[0].articleLocations
        break

      case contentType.includes('project'):
        locations = block.content[0].contentLink[0].projectLocations
        break

      case contentType.includes('event'):
        locations = block.content[0].contentLink[0].articleLocations
        break
    }
  }
  if (block.content && block.content[0].location)
    locations.push(block.content[0].location)

  return locations
})

// CATEGORY / EYEBROW
const parsedCategory = computed(() => {
  let category = ''

  // EXTERNAL
  if (block.content && block.content[0].category)
    return block.content[0].category

  // INTERNAL
  if (block.content && block.content[0].contentLink) {
    const contentType = block.content[0].contentLink[0].contentType
    const workshopOrSeries
            = block.content[0].contentLink[0].workshopOrEventSeriesType

    switch (true) {
      case contentType.includes('article'):
        category = block.content[0].contentLink[0].articleCategory
          .map((obj) => {
            return obj.title
          })
          .toString()
        break

      case contentType.includes('collection'):
        category = block.content[0].contentLink[0].physicalDigital[0]
        break

      case contentType.includes('project'):
      case contentType.includes('event'):
      case contentType.includes('exhibition'):
      case contentType.includes('endowment'):
        category = contentType
        break

      case contentType.includes('impactReportStory'):
        category = 'Spotlight'
        break

      case contentType.includes('meapProject'):
        category = 'Meap Project'
        break

      case contentType.includes('meapArticle'):
        category = 'Meap Article'
        break

      case workshopOrSeries.includes('help/services-resources'):
        category = 'Workshop'
        break

      case workshopOrSeries.includes('visit/events-exhibitions'):
        category = 'Event Series'
        break
    }
  }

  return category
})

const parsedTypeHandle = computed(() => {
  // This will be passed on the page level

  return block.sectionTitle ? block.sectionTitle : parsedCategory.value
})

const parsedStartDate = computed(() => {
  let startDate = ''
  if (
    block.content
        && block.content[0].contentLink
        && block.content[0].contentLink[0].startDateWithTime
  )
    startDate = block.content[0].contentLink[0].startDateWithTime
  else if (
    block.content
        && block.content[0].contentLink
        && block.content[0].contentLink[0].startDate
  )
    startDate = block.content[0].contentLink[0].startDate

  return startDate
})

const parsedEndDate = computed(() => {
  let endDate = ''
  if (
    block.content
        && block.content[0].contentLink
        && block.content[0].contentLink[0].endDateWithTime
  )
    endDate = block.content[0].contentLink[0].endDateWithTime
  else if (
    block.content
        && block.content[0].contentLink
        && block.content[0].contentLink[0].endDate
  )
    endDate = block.content[0].contentLink[0].endDate

  return endDate
})

const parseByLine = computed(() => {
  const output = []

  if (block.content && block.content[0].contentLink) {
    const entry_type
            = block.content[0].contentLink[0].contentType.toLowerCase()

    const articleByline1 = block.content[0].contentLink[0].articleByline1

    const projectByline1 = block.content[0].contentLink[0].projectByline1

    const formatDate = format(
      new Date(block.content[0].contentLink[0].articleByline2),
      'MMMM d, Y'
    )

    switch (true) {
      case entry_type.includes('article'):
        if (articleByline1) {
          articleByline1.forEach(obj => output.push(obj.title))
          output.push(formatDate)
        }
        else {
          output.push(formatDate)
        }
        break
      case entry_type.includes('project'):
        if (projectByline1)
          output.push(projectByline1[0].title)

        break
    }
  }

  if (
    block.content
        && (block.content[0].byline1 || block.content[0].byline2)
  ) {
    output.push(block.content[0].byline1)
    output.push(block.content[0].byline2)
  }

  return output
})

const parsedDescription = computed(() => {
  const c = block?.content?.[0]
  if (!c)
    return ''
  if (c.contentLink?.[0]?.contentType === 'event')
    return c.contentLink[0].eventDescription ?? ''
  if (c.contentLink?.[0])
    return c.contentLink[0].summary ?? ''
  return c.summary ?? ''
})
</script>

<template>
  <!-- EXTERNAL -->
  <div v-if="block && block.content">
    <BannerFeatured
      v-if="block && block.content && block.content[0].contentLink"
      class="flexible-banner-featured"
      :media="parseImage"
      :to="stripMeapFromURI(block.content[0].contentLink[0].to)"
      :title="block.content[0].contentLink[0].title"
      :breadcrumb="parsedTypeHandle"
      :byline="parseByLine"
      :description="parsedDescription"
      :prompt="parsePrompt"
      :locations="parsedLocations"
      :category="parsedCategory"
      :start-date="parsedStartDate"
      :end-date="parsedEndDate"
      :section-handle="block.content[0].contentLink[0].contentType"
    />

    <!-- INTERNAL -->
    <BannerFeatured
      v-if="block && block.content && !block.content[0].contentLink"
      class="flexible-banner-featured"
      :media="parseImage"
      :to="stripMeapFromURI(block.content[0].to)"
      :title="block.content[0].title"
      :breadcrumb="parsedTypeHandle"
      :byline="parseByLine"
      :description="block.content[0].summary"
      :prompt="parsePrompt"
      :locations="parsedLocations"
      :category="parsedCategory"
      :align-right="parsedAlignment"
      :section-handle="block.content[0].sectionHandle"
      :secondary-buttons="block.content[0]?.secondaryButtons ?? []"
    />
  </div>
</template>

<style lang="scss" scoped>
.flexible-banner-featured {
    :deep(.breadcrumb) {
        z-index: 30;
    }

    :deep(.slot) {
        z-index: 30;
    }
}
</style>
