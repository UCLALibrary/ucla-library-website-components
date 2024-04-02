// Import mock api data
import StoryRouter from 'storybook-vue-router'
import * as API from '@/stories/mock-api.json'
import BlockStaffArticleList from '@/lib-components/BlockStaffArticleList'

// Storybook default settings
export default {
  title: 'BLOCK / Staff / Article / List',
  component: BlockStaffArticleList,
  decorators: [
    StoryRouter(
      {},
      {
        routes: [
          {
            path: '/about/foo/bar/',
            component: BlockStaffArticleList,
          },
          {
            path: '/staff/Justo-Magna',
            component: BlockStaffArticleList,
          },
          {
            path: '/staff/Luctus-Suscipit',
            component: BlockStaffArticleList,
          },
        ],
      }
    ),
  ],
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
