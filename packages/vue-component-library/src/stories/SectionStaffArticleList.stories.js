import { computed } from 'vue'

import SectionStaffArticleList from '@/lib-components/SectionStaffArticleList'
import * as API from '@/stories/mock-api.json'
import { mockArticles, mockCollections, mockFTVABlogListing, mockFilmamkers, mockGeneralContent } from '@/stories/mock/FTVASearchResultsData.js'

// Storybook default settings
export default {
  title: 'SECTION / Staff / Article / List',
  component: SectionStaffArticleList,
}

const mockDefault = [
  {
    image: API.image,
    to: 'https://www.pbs.org/wgbh/nova/article/six-snippets-squirrel-science/',
    category: 'Communications',
    title: 'So Many Squirrels',
    date: '1995-12-17T03:24:00',
    authors: [{ title: 'Phyllis Blackshear', id: 123 }],
    description:
            '<p>The squirrel family includes tree squirrels, ground squirrels, and <a href=\'https://natashaskitchen.com/french-dip-pastrami-sandwich-recipe/\'>Fflying squirrels</a>.</p>',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    date: '2020-12-17T03:24:00',
    authors: [
      { title: 'Justo Magna', id: 123 },
      { title: 'Luctus Suscipit', id: 124 },
    ],
    description:
            'The lamb morsels in this Lamb Stew just melt in your mouth and so do the potatoes. This recipe is uncomplicated (a one-pot meal!) and it simmers in the oven for awhile so every bite is completely delicious. The lengthy (and care free) baking time creates a most satisfying broth consistency. Even if you have no clue what the old days were like, this lamb stew will take you there!',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Mauris Rhoncus Aenean Vel Elit Scelerisque Mauris Pellentesque Pulvinar Rhoncus Aenean Vel Elit Scelerisque',
    date: '1998-12-17T03:24:00',
    authors: [
      { title: 'Justo Magna', id: 123 },
      { title: 'Luctus Suscipit', id: 124 },
    ],
    description:
            '<p>Homemade Marinara Sauce doesn’t get any easier! This requires just a handful of ingredients and 20 minutes on the stove for a memorable Italian Marinara. Everyone needs a great pasta sauce in their recipe collection and this one is a keeper.</p>',
  },
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    components: { SectionStaffArticleList },
    template: `
      <section-staff-article-list
        :items="items"
        section-title="Articles"
      />
  `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const mockCurrentEntriesWithDates = [
  {
    to: 'a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
    title: 'A Film Series for You: Celebrating Giant Robot‚Äôs 30th Anniversary',
    image: API.image,
    description: 'This deep into the post-print era it may be hard for some to understand how something as ephemeral as a magazine could change the world. That may be especially true when the magazine hasn‚Äôt been in print for over a decade. But from its first issue as a Xeroxed zine in 1994 to its final run as a full-page glossy in 2011, Giant Robot did just that.',
    startDate: '2024-11-01T19:30:00',
    endDate: '2024-11-17T19:30:00',
    ongoing: false,
    sectionHandle: 'ftvaEventSeries',
  },
  {
    to: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
    title: 'A Film Series for You',
    image: API.image,
    description: 'This deep into the post-print era it may be hard for some to understand.',
    startDate: '2024-08-17T19:30:00',
    endDate: '2024-08-17T19:30:00',
    ongoing: false,
    sectionHandle: 'ftvaEventSeries',
  },
  {
    to: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
    title: 'An Ongoing Film Series for You',
    image: API.image,
    description: 'This deep into the post-print era it may be hard for some to understand. Someday, if you study hard enough you might be able to inderstand. Unless that it, you are particularly dense.',
    startDate: '2024-05-07T19:30:00',
    endDate: null,
    ongoing: true,
    sectionHandle: 'ftvaEventSeries',
  }
]

export function FtvaCurrentEntriesWithDates() {
  return {
    data() {
      return { items: mockCurrentEntriesWithDates }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
    <component is="style" type="text/css">
      .stories-ftva-current-entries .ftva.block-staff-article-item {
      .meta {
          margin: 0;
        }
  }
        @media screen and (max-width: 834px) {
          .stories-ftva-current-entries .ftva.block-staff-article-item .image, .stories-ftva-articles .ftva.block-staff-article-item .molecule-no-image {
            --image-min-width: 240px;
          }
            .stories-ftva-current-entries .ftva.block-staff-article-item .title {
            -webkit-line-clamp: 2;
            }
          }
          @media screen and (max-width: 750px) {
      .stories-ftva-current-entries.ftva.section-staff-article-list { 
        background-color: #e7edf2; 
        padding: 0 16px;

        .ftva.block-staff-article-item {
          margin-bottom: 16px;
        }

        .ftva.block-staff-article-item .image {
          --image-aspect-ratio: 16/9;
          aspect-ratio: 16/9;
          height: auto;
          margin-bottom: 0;
          
          .sizer {
            padding-bottom: 0 !important;
          }
        }
        
        .meta {
          margin: 0;
          padding: 20px;

          .title {
            font-size: 21px;
          }

          .ftva-description {
            display: none;
          }
          
          .ftva-date {
            font-size: 20px;
          }
        }
      }
        </component>
      <section-staff-article-list
        :items="items"
        section-title="Event Series"
        class="stories-ftva-current-entries"
      />
  `,
  }
}

export function FtvaNoSectionTitle() {
  return {
    data() {
      return { items: mockCurrentEntriesWithDates }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
    <component is="style" type="text/css">
    .stories-ftva-event-series .ftva.block-staff-article-item {
      .meta {
          margin: 0;
        }
  }
    @media screen and (max-width: 834px) {
      .stories-ftva-event-series .ftva.block-staff-article-item .image, .stories-ftva-articles .ftva.block-staff-article-item .molecule-no-image {
        --image-min-width: 240px;
      }
        .stories-ftva-event-series .ftva.block-staff-article-item .title {
            -webkit-line-clamp: 2;
            }
    }
    @media screen and (max-width: 750px) {
      .stories-ftva-event-series.ftva.section-staff-article-list { 
        background-color: #e7edf2; 
        padding: 0 16px;

        .ftva.block-staff-article-item {
          margin-bottom: 16px;
        }

        .ftva.block-staff-article-item .image {
          --image-aspect-ratio: 16/9;
          aspect-ratio: 16/9;
          height: auto;
          margin-bottom: 0;
          
          .sizer {
            padding-bottom: 0 !important;
          }
        }
        
        .meta {
          margin: 0;
          padding: 20px;

          .title {
            font-size: 21px;
          }

          .ftva-description {
            display: none;
          }
          
          .ftva-date {
            font-size: 20px;
          }
        }
      }
    </component>
      <section-staff-article-list class="stories-ftva-event-series"
        :items="items"
      />
  `,
  }
}

export function FtvaSearchResultsArticle() {
  return {
    data() {
      return { items: mockArticles }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
        <component is="style" type="text/css">
    .stories-ftva-search-articles .ftva.block-staff-article-item {
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
      @media screen and (max-width: 834px) {
      
        .stories-ftva-search-articles .ftva.block-staff-article-item .title {
            -webkit-line-clamp: 2;
            }
    }
      @media only screen and (max-width: 750px) {
      .stories-ftva-search-articles.ftva.section-staff-article-list .block-staff-article-list {
     padding: 16px; }
      .stories-ftva-search-articles.ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item {
      border-radius: 0;
      .meta{
           padding: 0;
        gap: 8px;
        .category {
      font-size: 18px;
      }
      .title {
      -webkit-line-clamp: unset;
      }
            .ftva-description {
              margin-bottom: 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              font-size: 16px;
              line-height: 1.5;
            }
              .ftva-date {
              font-size: 18px;
              font-weight: 500;
              font-family: Karbon;
              margin-top: 4px;
              }
          }
      }
     .ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item{
      &:not(:last-child) {
            border-bottom: 1px solid #e7edf2;
            margin-bottom: 20px;
            padding-bottom: 20px;
          }
      }
        .stories-ftva-search-articles .ftva.block-staff-article-item {
        
        
          figure,
          .molecule-no-image {
            display: none;
          }
        }
      }
        
        </component>
      <section-staff-article-list class="stories-ftva-search-articles"
        :items="items"
      />
  `,
  }
}

export function FtvaSearchResultsCollections() {
  return {
    data() {
      return { items: mockCollections }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
        <component is="style" type="text/css">
    .stories-ftva-search-collections .ftva.block-staff-article-item {
     --image-min-width: 240px;

        .meta {
          margin: 0;
        }
      .ftva-date {
       display: none;
      }
    }
      @media only screen and (max-width: 750px) {
      .stories-ftva-search-collections.ftva.section-staff-article-list .block-staff-article-list {
     padding: 16px; }
       .stories-ftva-search-collections.ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item {
       border-radius: 0;
      .meta{
        padding: 0;
        gap: 8px;
        .category {
      font-size: 18px;
      }
            .ftva-description {
              margin-bottom: 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              font-size: 16px;
              line-height: 1.5;
            }
          }
      }
     .ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item{
      &:not(:last-child) {
            border-bottom: 1px solid #e7edf2;
            margin-bottom: 20px;
            padding-bottom: 20px;
          }
      }
        .stories-ftva-search-collections .ftva.block-staff-article-item {
        
          figure,
          .molecule-no-image {
            display: none;
          }
        }
      }
        </component>
      <section-staff-article-list class="stories-ftva-search-collections"
        :items="items"
      />
  `,
  }
}

export function FtvaSearchResultsGC() {
  return {
    data() {
      return { items: mockGeneralContent }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
    <component is="style" type="text/css">
    .stories-ftva-general-content .ftva.block-staff-article-item {
       --image-min-width: 240px;

        .meta {
          margin: 0;
        }
      .ftva-date {
       display: none;
      }
    }
     @media only screen and (max-width: 750px) {
     .stories-ftva-general-content.ftva.section-staff-article-list .block-staff-article-list {
     padding: 16px; }
     .stories-ftva-general-content.ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item {
      .meta{
      padding: 0;
      gap: 8px;
      .category {
      font-size: 18px;
      }
            .ftva-description {
              margin-bottom: 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              font-size: 16px;
              line-height: 1.5;
            }
          }
      }
     .ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item{
      &:not(:last-child) {
            border-bottom: 1px solid #e7edf2;
            margin-bottom: 20px;
            padding-bottom: 20px;
          }
      }
        .stories-ftva-general-content .ftva.block-staff-article-item {
          border-radius: 0;
          
          figure,
          .molecule-no-image {
            display: none;
          }
        }
      }
    </component>
      <section-staff-article-list class="stories-ftva-general-content"
        :items="items"
      />
  `,
  }
}

export function FtvaFilmMakers() {
  return {
    data() {
      return { items: mockFilmamkers }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
    <component is="style" type="text/css">
         .stories-ftva-film-makers .ftva.block-staff-article-item {
           --image-min-width: 180px;
           --image-aspect-ratio: 1;
           
           .image {
              height: var(--image-min-width);
           }

          .ftva-description {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        }
        @media screen and (max-width: 750px) {
          .stories-ftva-film-makers.ftva.section-staff-article-list {
            padding: 16px;

            .ftva.block-staff-article-item {
              flex-direction: row;
              border-bottom: 1px solid #e7edf2;
              border-radius: 0;
              padding-bottom: var(--space-xl);
              margin-bottom: var(--space-xl);

              .molecule-no-image,
              .image {
                min-width: 100px;
                max-width: 100px;
                height: 100px;
                margin-right: var(--space-l);
                margin-bottom: 0;
              }

              .media {
                border-radius: 0;
              }

              .meta {
                width: calc(60% - var(--space-xl));
                padding: 0;
                height: unset;
              }
              
              .title {
                font-size: 21px;
                line-height: 1.2;
              }

              .ftva-description {
                display: none;
              }
            }
          }
        }
      </component>
      <section-staff-article-list class="stories-ftva-film-makers"
        :items="items"
      />
  `,
  }
}
export function FtvaBlogList() {
  return {
    data() {
      return { items: mockFTVABlogListing }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionStaffArticleList },
    template: `
    <component is="style" type="text/css">
    .stories-ftva-articles .ftva.block-staff-article-item {
        .ftva-date {
          color: #676767;
          font-family: "proxima-nova", Helvetica, Arial, sans-serif;;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          text-transform: unset;
        }
  }
        @media screen and (max-width: 450px) {
          .stories-ftva-articles .ftva.block-staff-article-item .image,
          .molecule-no-image {
            --image-aspect-ratio: 16/9;
            aspect-ratio: 16/9;

            .sizer {
            padding-bottom: 0 !important;
            }
          }
        }
        @media screen and (max-width: 750px) {
        .stories-ftva-articles.ftva.section-staff-article-list { 
          background-color: #e7edf2; 
          padding: 0 16px;
        }
        .stories-ftva-articles.ftva.section-staff-article-list .block-staff-article-list .block-staff-article-item {
          overflow: hidden;
          margin-bottom: 16px;
        }
          .stories-ftva-articles .ftva.block-staff-article-item .image, .stories-ftva-articles .ftva.block-staff-article-item .molecule-no-image {
            min-width: 100%;
            height: auto;
            margin: 0;
          }
          .stories-ftva-articles .ftva.block-staff-article-item .meta {
            height: auto;
            padding: 30px;
            margin: 0;
          }
          .stories-ftva-articles .ftva.block-staff-article-item .category {
            font-size: 18px;
            margin-bottom: -14px;
            line-height: 1.4;
          }
          .stories-ftva-articles .ftva.block-staff-article-item .title {
            font-size: 21px;
            line-height: 1.2;
          }
          .stories-ftva-articles .ftva.block-staff-article-item .meta .ftva-description {
            display:none;
          }
        }
          @media screen and (max-width: 834px) {
          .stories-ftva-articles .ftva.block-staff-article-item .image, .stories-ftva-articles .ftva.block-staff-article-item .molecule-no-image {
            --image-min-width: 240px;
          }
          }
        @media screen and (max-width: 1024px) {
         .stories-ftva-articles .ftva.block-staff-article-item .meta .ftva-description {
            display:none;
          }
        }
        
       
      </component>
      <section-staff-article-list class="stories-ftva-articles"
        :items="items" :section-title="'FTVA Blog Listing'"
      />
  `,
  }
}
