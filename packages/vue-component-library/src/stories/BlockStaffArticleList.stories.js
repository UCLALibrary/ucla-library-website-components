import { computed } from 'vue'

// UTILS
import formatDates from '@/utils/formatEventDates'
import formatSeriesDates from '@/utils/formatEventSeriesDates'

// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockStaffArticleList from '@/lib-components/BlockStaffArticleList'

// Storybook default settings
export default {
  title: 'BLOCK / Staff / Article / List',
  component: BlockStaffArticleList,
}

const mock = {
  image: API.image,
  to: '/about/foo/bar/',
  category: 'Ullamco',
  title: 'Fames ac turpis egestas sed tempus lorem ipsum',
  date: '1995-12-17T03:24:00',
  authors: [{ title: 'Justo Magna', id: 123 }],
  description:
        'Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.',
}

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mock }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const MultipleAuthorsTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
        authors: [
          { title: 'Justo Magna', id: 'article-1' },
          { title: 'Luctus Suscipit', id: 'article-2' },
        ],
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
  }
}

export const MultipleAuthors = MultipleAuthorsTemplate.bind({})
MultipleAuthors.args = {}


const LongTitleTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
        authors: [
          { id: 'article-1', title: 'Justo Magna' },
          { id: 'article-2', title: 'Luctus Suscipit' },
        ],
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          title="Mauris Rhoncus Aenean Vel Elit Scelerisque Mauris Pellentesque Pulvinar Rhoncus Aenean Vel Elit Scelerisque"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
  }
}

export const LongTitle = LongTitleTemplate.bind({})
LongTitle.args = {}


const LongDescriptionTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
        authors: [
          {
            title: 'Justo Magna',
            id: 'article1',
            slug: '/staff/Justo-Magna',
          },
          {
            title: 'Luctus Suscipit',
            id: 'article2',
            slug: '/staff/Luctus-Suscipit',
          },
        ],
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          description="Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien."
      />
  `,
  }
}

export const LongDescription = LongDescriptionTemplate.bind({})
LongDescription.args = {}


const NoImageTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mock, image: {} }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :date="date"
          :authors="authors"
          :description="description"
      />
  `,
  }
}

export const NoImage = NoImageTemplate.bind({})
NoImage.args = {}


const NoAuthorOrDateTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mock }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          title="Mauris Rhoncus Aenean Vel Elit Scelerisque MaurisP"

          description="Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien."
      />
  `,
  }
}

export const NoAuthorOrDate = NoAuthorOrDateTemplate.bind({})
NoAuthorOrDate.args = {}

const mockDateRange2 = {
  to: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
  title: 'Restored Animation Classics, but With a Title That Goes Into the Second Line',
  image: API.image,
  category: 'Ullamco',
  description: 'After receiving her B.A. from Mount Holyoke College, Gay Abel-Bey earned her M.F.A. in Film from UCLA. She was granted The Dorothy Arzner Award for high recognition of a dramatic piece by a woman for her thesis film, Fragrance (1991).',
  startDate: '2024-11-01T19:30:00',
  endDate: '2024-11-17T19:30:00',
  ongoing: false,
  sectionHandle: 'ftvaEventSeries',
}

const FtvaDateRangeTemplate = (args) => {
  void args
  return {

    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :title="title"
      >
      <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false)"
            #customFTVADate
          >

              {{ parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false) }}

          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaDateRange = FtvaDateRangeTemplate.bind({})
FtvaDateRange.args = {}


const FtvaCategoryTemplate = (args) => {
  void args
  return {

    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :to="to"
          :category="category"
          :title="title"
      >
       <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false)"
            #customFTVADate
          >
            <span class="ftva-date">
              {{ parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false) }}
            </span>
          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaCategory = FtvaCategoryTemplate.bind({})
FtvaCategory.args = {}


const FtvaSameStartEndDateTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          title="The Pink Cloud + Shorts"
     >
      <template
            #customFTVADescription
          >

            Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt.
            Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt.
            Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt.
            Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt.
            Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt.
            Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt.

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', '2024-11-01T19:30:00', '2024-11-01T19:30:00', ongoing ?? false)"
            #customFTVADate
          >

              {{ parseDate(sectionHandle ?? '', '2024-11-01T19:30:00', '2024-11-01T19:30:00', ongoing ?? false) }}

          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaSameStartEndDate = FtvaSameStartEndDateTemplate.bind({})
FtvaSameStartEndDate.args = {}

const mockOngoing = {
  to: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
  title: 'An Ongoing Film Series for You',
  image: API.image,
  description: 'This deep into the post-print era it may be hard for some to understand. Someday, if you study hard enough you might be able to inderstand. Unless that it, you are particularly dense.',
  startDate: '2024-11-01T19:30:00',
  endDate: null,
  ongoing: true,
  sectionHandle: 'ftvaEventSeries',
}
const FtvaOngoingTemplate = (args) => {
  void args
  return {
    data() {
      return { ...mockOngoing }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :title="title"
      >
      <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false)"
            #customFTVADate
          >
            <span class="ftva-date">
              {{ parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false) }}
            </span>
          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaOngoing = FtvaOngoingTemplate.bind({})
FtvaOngoing.args = {}


const FtvaArticlesListingTemplate = (args) => {
  void args
  return {

    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
     <component is="style" type="text/css">
      .articles-listing.ftva.block-staff-article-item {
        .ftva-date {
          color: #676767;
          font-family: "proxima-nova", Helvetica, Arial, sans-serif;;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          text-transform: unset;
        }
      }
     </component>
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          class="articles-listing"
      >
       <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false)"
            #customFTVADate
          >
            <span class="ftva-date">
              {{ parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false) }}
            </span>
          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaArticlesListing = FtvaArticlesListingTemplate.bind({})
FtvaArticlesListing.args = {}

const FtvaEventSeriesListingTemplate = (args) => {
  void args
  return {

    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
    <component is="style" type="text/css">
      .event-series-listing.ftva.block-staff-article-item {
        .meta {
          margin: 36px 0;
        }
      }
     </component>
      <block-staff-article-list
          :image="image"
          :to="to"
          :title="title"
          class="event-series-listing"
      >
       <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false)"
            #customFTVADate
          >
            <span class="ftva-date">
              {{ parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false) }}
            </span>
          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaEventSeriesListing = FtvaEventSeriesListingTemplate.bind({})
FtvaEventSeriesListing.args = {}

const FtvaFilmmakersListingTemplate = (args) => {
  void args
  return {

    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
    <component is="style" type="text/css">
      .filmmakers-listing.ftva.block-staff-article-item {
        --image-min-width: 180px;
        --image-aspect-ratio: 1;

        .ftva-description {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
     </component>
      <block-staff-article-list
          :image="image"
          :to="to"
          :title="title"
          class="filmmakers-listing"
      >
       <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaFilmmakersListing = FtvaFilmmakersListingTemplate.bind({})
FtvaFilmmakersListing.args = {}

const FtvaSearchResultsTemplate = (args) => {
  void args
  return {

    data() {
      return { ...mockDateRange2 }
    },
    methods: {
      parseDate(sectionHandle, startDate, endDate, ongoing) {
        console.log(sectionHandle, startDate, endDate, ongoing)

        if (ongoing)
          return 'Ongoing'
        if (sectionHandle === 'ftvaEvent')
          return formatDates(startDate, startDate, 'shortWithYear')
        if (sectionHandle === 'ftvaEventSeries')
          return formatSeriesDates(startDate, endDate, 'shortWithYear')

        return null
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffArticleList },
    template: `
    <component is="style" type="text/css">
      .search-results.ftva.block-staff-article-item {
        --image-min-width: 240px;

        .meta {
          margin: 0;
        }

        .ftva-date {
          color: #676767;
          font-family: "proxima-nova", Helvetica, Arial, sans-serif;;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          text-transform: unset;
        }
      }
     </component>
      <block-staff-article-list
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          class="search-results"
      >
       <template
            v-if="description"
            #customFTVADescription
          >

            {{ description }}

      </template>
      <template
            v-if="parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false)"
            #customFTVADate
          >
            <span class="ftva-date">
              {{ parseDate(sectionHandle ?? '', startDate ?? '', endDate ?? '', ongoing ?? false) }}
            </span>
          </template>
      </block-staff-article-list>
  `,
  }
}

export const FtvaSearchResults = FtvaSearchResultsTemplate.bind({})
FtvaSearchResults.args = {}

