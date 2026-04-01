// Import mock api data
import { computed } from 'vue'
import * as API from '@/stories/mock-api.json'
import GridAssetPod from '@/lib-components/GridAssetPod.vue'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import DefinitionList from '@/lib-components/DefinitionList.vue'
import DividerGeneral from '@/lib-components/DividerGeneral.vue'

// Import block asset pod styles
import './GridAssetPod.scss'

// Two-column layout variant (BentoPod)
import BentoPod from '@/lib-components/BentoPod.vue'

export default {
  title: 'Funkhaus / Grid Asset Pod',
  component: GridAssetPod,
}

function createCardWithImageItems(count = 5) {
  return Array.from({ length: count }, (_, i) => ({
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Seven seas of the ancient world',
    alternativeFullName: '陳餘敏卿纪念基金',
    language: 'zh',
    startDate: '2022-03-31T07:00:00+00:00',
    endDate: '2021-11-26T11:00:00-08:00',
    text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the Aegean, Adriatic, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf</p>',
    imageAspectRatio: 60,
    ...(i === 0 && {
      locations: [
        { title: 'Powellarium', to: '/location/bar' },
        {
          title: 'Research Library (Charles E. Young)',
          to: '/location/baz',
        },
      ],
    }),
    bylineOne: null,
    bylineTwo: null,
    sectionHandle: 'event',
  }))
}

function Template(args) {
  return {
    data() {
      return {
        props: {
          items: args.items || createCardWithImageItems(10),
          isGridLayout: args.isGridLayout || false,
          hasTransition: args.hasTransition || false,
        },
      }
    },
    methods: {
      handleChangeLayout() {
        this.props.isGridLayout = !this.props.isGridLayout
      },
    },
    components: {
      GridAssetPod,
      BlockCardWithImage,
      ResponsiveImage,
      SmartLink,
      DefinitionList,
    },
    provide() {
      return {
        theme: computed(() => args.theme || 'dlc'),
      }
    },
    template: `
            <div> 
                <button @click="handleChangeLayout" style="margin-bottom: 20px; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
                    Change Layout
                </button>
                <grid-asset-pod v-bind="props">
                    <template #default="{ item }">
                        <block-card-with-image
                            :image="item.image"
                            :to="item.to"
                            :category="item.category"
                            :title="item.title"
                            :start-date="item.startDate"
                            :end-date="item.endDate"
                            :text="item.text"
                            :image-aspect-ratio="item.imageAspectRatio"
                            :locations="item.locations"
                            :alternativeFullName="item.alternativeFullName"
                            :language="item.language"
                            :section-handle="item.sectionHandle"
                            :date-created="item.dateCreated"
                            :byline-one="item.bylineOne"
                            :byline-two="item.bylineTwo"
                            :color="item.color"
                        />
                    </template>
                </grid-asset-pod>
            </div>
        `,
  }
}

export const Default = Template.bind({})
Default.args = {
  items: createCardWithImageItems(10),
  isGridLayout: false,
  hasTransition: false,
  theme: 'dlc',
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const WithTransition = Template.bind({})
WithTransition.args = {
  items: createCardWithImageItems(10),
  isGridLayout: false,
  hasTransition: true,
  theme: 'dlc',
}

// BlockAssetPod variant
function createBlockAssetPodItems(count = 5) {
  return Array.from({ length: count }, (_, i) => ({
    media: API.image,
    to: '/visit/foo/bar/',
    title: 'Seven seas of the ancient world',

    date: 'November 1, 1949',
    metadata: {
      description:
                'PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.',
      date: 'November 1, 1949',
      resourceType: 'Book',
      collection: ['Still Image'],
      locations: [
        'Los Angeles Times Photographic Collection OpenUCLA Collections',
      ],
    },
  }))
}

const blockAssetPodItems = [
  {
    media: API.image,
    to: '/visit/foo/bar/',
    title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
    date: '1963',
    metadata: {
      description:
                'PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.',
      date: 'November 1, 1949',
      resourceType: 'Book',
      collection: ['Still Image'],
      locations: [
        'Los Angeles Times Photographic Collection OpenUCLA Collections',
      ],
    },
  },
  {
    media: API.image,
    to: '/visit/foo/bar/',
    title: '1/2 length portrait of San Fernando Valley State College sociologist Dr. Lewis Yablonsky, 1965',
    date: 'November 7, 1965',
    metadata: {
      description:
                'SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin "curb."',
      date: 'November 7, 1965',
      resourceType: 'Book',
      collection: ['Still Image'],
      locations: [
        'Los Angeles Times Photographic Collection OpenUCLA Collections',
      ],
    },
  },
  {
    media: API.image,
    to: '/visit/foo/bar/',
    title: '3/4 length portrait of singer Lionel Richie, 1984',
    date: 'August 10, 1984',
    metadata: {
      description: 'Lionel Richie: He\'ll headline the Closing Ceremony',
      date: 'August 10, 1984',
      resourceType: 'Book',
      collection: ['Still Image'],
      locations: [
        'Los Angeles Times Photographic Collection OpenUCLA Collections',
      ],
    },
  },
  {
    media: API.image,
    to: '/visit/foo/bar/',
    title: '3/4 length portrait of Walburga Oesterreich, circa 1930',
    date: '1930',
    metadata: {
      description: 'Handwriting on negative states "Mrs.Walburga Oesterreich" In 1922 Walburga Oesterreich’s husband Fred Oesterreich was shot and killed supposedly by a burglar in their Los Angeles, Calif. home.',
      date: '1930',
      resourceType: 'Book',
      collection: ['Still Image'],
      locations: [
        'Los Angeles Times Photographic Collection OpenUCLA Collections',
      ],
    },
  },
]

function BlockAssetPodTemplate(args) {
  return {
    data() {
      return {
        props: {
          items: args.items || [],
          isGridLayout: args.isGridLayout || false,
          hasTransition: args.hasTransition || false,
        },
      }
    },
    methods: {
      handleChangeLayout() {
        this.props.isGridLayout = !this.props.isGridLayout
      },
    },
    components: {
      GridAssetPod,
      ResponsiveImage,
      SmartLink,
      DefinitionList,
      DividerGeneral,
    },
    provide() {
      return {
        theme: computed(() => args.theme || 'dlc'),
      }
    },
    template: `
            <div> 
                <button @click="handleChangeLayout" style="margin-bottom: 20px; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
                    Change Layout
                </button>
                <grid-asset-pod v-bind="props">
                    <template #default="{ item }">
                    
                        <SmartLink
                            :to="item.to"
                            role="article"
                            :aria-label="\`View \${item.title}\`"
                            class="dlc block-asset-pod"
                        >
                            <ResponsiveImage
                                :media="item.media"
                                :alt="\`\${item.title} preview\`"
                                class="image"
                            />

                            <div class="meta">
                                <h3 class="title">
                                    {{ item.title }}
                                </h3>

                                <DefinitionList
                                    v-if="item.metadata && Object.keys(item.metadata).length > 0"
                                    :meta-data-object="item.metadata"
                                    orientation="horizontal"
                                    class="metadata-list"
                                />

                                <p class="date">
                                    {{ item.date }}
                                </p>
                            </div>
                        </SmartLink>

                        <DividerGeneral
                          class="divider-general"
                          is-bold
                        />
                    </template>
                </grid-asset-pod>
            </div>
        `,
  }
}

export const BlockAssetPodVariant = BlockAssetPodTemplate.bind({})
BlockAssetPodVariant.args = {
  items: createBlockAssetPodItems(10),
  isGridLayout: false,
  hasTransition: false,
  theme: 'dlc',
}

export const BlockAssetPodVariantWithTransition = BlockAssetPodTemplate.bind({})
BlockAssetPodVariantWithTransition.args = {
  items: blockAssetPodItems.concat(blockAssetPodItems),
  isGridLayout: false,
  hasTransition: true,
  theme: 'dlc',
}

function TwoColumnLayoutToShowcaseBentoPodTemplate(args) {
  return {
    components: { GridAssetPod, BentoPod },
    provide() {
      return {
        theme: computed(() => args.theme || 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: `
      <GridAssetPod :items="args.items" layout="two-column">
        <template #default="{ item }">
          <BentoPod
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :items="item.items"
            class="bento-pod"
          />
        </template>
      </GridAssetPod>
    `,
  }
}

export const TwoColumnLayoutToShowcaseBentoPod = TwoColumnLayoutToShowcaseBentoPodTemplate.bind({})
TwoColumnLayoutToShowcaseBentoPod.args = {
  items: [
    {
      id: '1',
      title: 'Featured Collections',
      description: 'Explore our most significant and frequently accessed collections',
      items: [
        {
          title: 'Los Angeles Times Photographic Archive',
          to: '/collections/lat-photos',
          meta: {
            type: 'Photographs',
            date: 'January 15, 2024',
            program: 'News & Media',
          },
        },
        {
          title: 'Charles E. Young Research Library Papers',
          to: '/collections/young-library',
          meta: {
            type: 'Archives',
            date: 'February 20, 2024',
            program: 'Research',
          },
        },
        {
          title: 'Oral History Collection',
          to: '/collections/oral-history',
          meta: {
            type: 'Audio',
            date: 'March 10, 2024',
            program: 'History',
          },
        },
        {
          title: 'Medieval Manuscripts',
          to: '/collections/medieval',
          meta: {
            type: 'Manuscripts',
            date: 'April 5, 2024',
            program: 'Rare Books',
          },
        },
        {
          title: 'LGBTQIA+ Activism Papers',
          to: '/collections/lgbtq-activism',
          meta: {
            type: 'Archives',
            date: 'May 18, 2024',
            program: 'Social Movements',
          },
        },
        {
          title: 'Japanese American Incarceration Materials',
          to: '/collections/japanese-american',
          meta: {
            type: 'Documents',
            date: 'June 2, 2024',
            program: 'History',
          },
        },
        {
          title: 'UCLA Yearbooks Collection',
          to: '/collections/yearbooks',
          meta: {
            type: 'Publications',
            date: 'July 12, 2024',
            program: 'University Archives',
          },
        },
        {
          title: 'Westwood Village Historical Records',
          to: '/collections/westwood',
          meta: {
            type: 'Documents',
            date: 'August 8, 2024',
            program: 'Local History',
          },
        },
      ],
    },
    {
      id: '2',
      title: 'Digital Archives',
      description: 'Digitized materials and born-digital collections available online',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        },
      ],
    },
    {
      id: '3',
      title: 'Research Resources',
      description: 'Essential tools and databases for academic research',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        },
      ],
    },
    {
      id: '4',
      title: 'Research Resources',
      description: 'Essential tools and databases for academic research',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        },
      ],
    },
    {
      id: '5',
      title: 'Digital Archives',
      description: 'Digitized materials and born-digital collections available online',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        },
        {
          title: 'Historical Photographs',
          to: '/digital/photographs',
          meta: {
            type: 'Photographs',
            date: 'November 5, 2024',
            program: 'Visual Resources',
          },
        },
        {
          title: 'Rare Book Digital Library',
          to: '/digital/rare-books',
          meta: {
            type: 'Books',
            date: 'November 18, 2024',
            program: 'Special Collections',
          },
        },
      ],
    },
    {
      id: '6',
      title: 'Special Collections',
      description: 'Rare and unique materials from our special collections',
      items: [
        {
          title: 'Early California Documents',
          to: '/collections/early-california',
          meta: {
            type: 'Documents',
            date: 'December 1, 2024',
            program: 'California History',
          },
        },
        {
          title: 'Vintage Photography Collection',
          to: '/collections/vintage-photos',
          meta: {
            type: 'Photographs',
            date: 'December 5, 2024',
            program: 'Visual Arts',
          },
        },
        {
          title: 'Manuscript Music Scores',
          to: '/collections/music-scores',
          meta: {
            type: 'Manuscripts',
            date: 'December 10, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Rare Maps and Atlases',
          to: '/collections/rare-maps',
          meta: {
            type: 'Maps',
            date: 'December 15, 2024',
            program: 'Cartography',
          },
        },
        {
          title: 'Historical Correspondence',
          to: '/collections/correspondence',
          meta: {
            type: 'Letters',
            date: 'December 20, 2024',
            program: 'History',
          },
        },
        {
          title: 'Artists\' Books Collection',
          to: '/collections/artists-books',
          meta: {
            type: 'Books',
            date: 'December 25, 2024',
            program: 'Art',
          },
        },
      ],
    },
  ],
  theme: 'dlc',
}
