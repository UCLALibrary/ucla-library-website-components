import { computed } from 'vue'

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

const mockDateRange = {
  to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
  title: "A Film Series for You: Celebrating Giant Robot‚Äôs 30th Anniversary",
  image: API.image,
  description: "This deep into the post-print era it may be hard for some to understand how something as ephemeral as a magazine could change the world. That may be especially true when the magazine hasn‚Äôt been in print for over a decade. But from its first issue as a Xeroxed zine in 1994 to its final run as a full-page glossy in 2011, Giant Robot did just that.",
  startDate: "2024-11-01T19:30:00",
  endDate: "2024-11-17T19:30:00",
  ongoing: false
}

const mockDateRange2 = {
  to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
  title: "A Film Series for You",
  image: API.image,
  description: "This deep into the post-print era it may be hard for some to understand.",
  startDate: "2024-11-01T19:30:00",
  endDate: "2024-11-17T19:30:00",
  ongoing: false
}

const mockOngoing = {
  to: "series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary",
  title: "An Ongoing Film Series for You",
  image: API.image,
  description: "This deep into the post-print era it may be hard for some to understand.",
  startDate: "2024-11-01T19:30:00",
  endDate: null,
  ongoing: true
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
          description="Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien."
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

          description="Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien."
      />
  `,
  }
}

export function FtvaDateRange() {
  return {
    data() {
      return { ...mockDateRange2 }
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
          :description="description"
          startDate="2024-11-01T19:30:00"
          endDate="2024-11-17T19:30:00"
          ongoing=false
      />
  `,
  }
}

export function FtvaStartEndDateSame() {
  return {
    data() {
      return { ...mockDateRange2 }
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
          description="Two friends hike amidst a stunning coastal backdrop, conversations are had, things are felt."
          startDate="2024-11-01T19:30:00"
          endDate="2024-11-01T19:30:00"
          ongoing=false
      />
  `,
  }
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
    components: { BlockStaffArticleList },
    template: `
      <block-staff-article-list
          :image="image"
          :to="to"
          :title="title"
          :description="description"
          :startDate="startDate"
          :endDate="endDate"
          :ongoing="ongoing"
      />
  `,
  }
}
