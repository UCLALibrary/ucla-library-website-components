<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import format from 'date-fns/format'
import BannerFeatured from '@/lib-components/BannerFeatured.vue'
import type { LocationItemType } from '@/types/types'
import type { FlexibleBannerFeatured } from '@/types/flexible_types'

// Helpers
import getPrompt from '@/utils/getPrompt'
import stripMeapFromURI from '@/utils/stripMeapFromURI'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleBannerFeatured>,
    default: () => {},
  },
})

const parseImage = computed(() => {
  let imageObj = {}
  // console.log(`FROM BANNERFEATURED:${block.content[0]}`)
  if (
    block.content[0].contentLink
        && block.content[0].contentLink.length > 0
        && block.content[0].contentLink[0].heroImage
        && block.content[0].contentLink[0].heroImage.length > 0
  )
    imageObj = block.content[0].contentLink[0].heroImage[0].image[0]
  else if (block.content[0].image)
    imageObj = block.content[0].image[0]

  // console.log(`image obj: ${JSON.stringify(imageObj)}`)
  return imageObj
})

const parsedAlignment = computed(() => {
  return block.content[0].alignment === 'right'
})

const parsePrompt = computed(() => {
  let prompt = ''
  if (block.content[0].contentType)
    prompt = getPrompt(block.content[0].contentType)
  else
    prompt = getPrompt(block.content[0].contentLink[0].contentType)

  return prompt
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

const parsedCategory = computed(() => {
  let category = ''
  if (block.content && block.content[0].category)
    return block.content[0].category

  if (block.content && block.content[0].contentLink) {
    const contentType
            = block.content[0].contentLink[0].contentType.toLowerCase()
    switch (true) {
      case contentType.includes('article'):
        category = block.content[0].contentLink[0].articleCategory
          .map((obj) => {
            return obj.title
          })
          .toString()
        break
      case contentType.includes('project'):
        category = block.content[0].contentLink[0].projectCategory
        break

            /* case contentType.includes("event"):
          category =
              this.block.content[0].contentLink[0].eventCategory
          break */
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
  let output = ''
  if (
    block.content
        && block.content[0].contentLink
        && block.content[0].contentLink[0].contentType === 'event'
  )
    output = block.content[0].contentLink[0].eventDescription
  else output = block.content[0].contentLink[0].summary

  return output
})
</script>

<template>
  <div v-if="block && block.content">
    <BannerFeatured
      v-if="block && block.content && block.content[0].contentLink"
      class="flexible-banner-featured"
      :media="parseImage"
      :to="`/${stripMeapFromURI(block.content[0].contentLink[0].to)}`"
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
      :alignment="parsedAlignment"
      :section-handle="block.content[0].sectionHandle"
    />
  </div>
</template>

<style lang="scss" scoped></style>
