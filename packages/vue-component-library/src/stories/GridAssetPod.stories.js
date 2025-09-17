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
