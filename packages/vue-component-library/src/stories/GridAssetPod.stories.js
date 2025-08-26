// Import mock api data
import { computed } from 'vue'
import * as API from '@/stories/mock-api.json'
import GridAssetPod from '@/lib-components/GridAssetPod.vue'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage'

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
    components: { GridAssetPod, BlockCardWithImage },
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
