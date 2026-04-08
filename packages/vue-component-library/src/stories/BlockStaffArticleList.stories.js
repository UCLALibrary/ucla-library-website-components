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

// description is exactly 200 characters
const mock = {
  image: API.image,
  to: '/about/foo/bar/',
  category: 'Ullamco',
  title: 'Fames ac turpis egestas sed tempus lorem ipsum',
  date: '1995-12-17T03:24:00',
  authors: [{ title: 'Justo Magna', id: 123 }],
  description:
        'Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien sade risus imperdiet.',
}

// Variations of stories below
export function Default() {
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

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function MultipleAuthors() {
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

export function LongTitle() {
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

export function LongDescription() {
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
          description="Mauris rhoncus aeneane vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh present tristique. Quis imperdet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa."
      />
  `,
  }
}

export function NoImage() {
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

// description 200 characters - using class description-summary-only
export function NoAuthorOrDate() {
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
          description="Mauris rhoncus aeneane vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh present tristique. Quis imperdet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa."
      />
  `,
  }
}

// description 200 characters
const mockDateRange2 = {
  to: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
  title: 'Restored Animation Classics, but With a Title That Goes Into the Second Line',
  image: API.image,
  category: 'Ullamco',
  description: 'After receiving her B.A. from Mount Holyoke College, Gay Abel-Bey earned her M.F.A. in Film from UCLA. She was granted The Dorothy Arzner Award for recognition of a dramatic piece for her thesis film.',
  startDate: '2024-11-01T19:30:00',
  endDate: '2024-11-17T19:30:00',
  ongoing: false,
  sectionHandle: 'ftvaEventSeries',
}

export function FtvaDateRange() {
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

export function FtvaCategory() {
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

export function FtvaSameStartEndDate() {
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
            Two friends hike along a breathtaking coastline, sharing quiet moments and meaningful conversations as the landscape shifts around them. Emotions surface and deepen with every step they take together.

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
// description is 369 characters
const mockOngoing = {
  to: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
  title: 'An Ongoing Film Series for You',
  image: API.image,
  description: 'In the post-print era, it can be hard to imagine how print once shaped life. But by considering the skill, care, and dedication behind it, you can begin to understand the craft that defined the past. While technology has transformed how we create and share information, the legacy of that dedication still influences our standards of design, clarity, and meaning today.',
  startDate: '2024-11-01T19:30:00',
  endDate: null,
  ongoing: true,
  sectionHandle: 'ftvaEventSeries',
}
export function FtvaOngoing() {
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

export function FtvaArticlesListing() {
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
export function FtvaEventSeriesListing() {
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
export function FtvaFilmmakersListing() {
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
export function FtvaSearchResults() {
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
