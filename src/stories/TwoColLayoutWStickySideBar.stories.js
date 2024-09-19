import { computed } from 'vue'
import CardMeta from "@/lib-components/CardMeta.vue"
import BlockEventDetail from "@/lib-components/BlockEventDetail.vue"
import BlockInfo from "@/lib-components/BlockInfo.vue"
import TwoColLayoutWStickySideBar from "@/lib-components/TwoColLayoutWStickySideBar.vue"
import RichText from "@/lib-components/RichText.vue"

// Storybook default settings
export default {
  title: 'LAYOUT / 2 Column Layout with Sticky Sidebar',
  components: TwoColLayoutWStickySideBar,
}

// export function Default() {
//   return {
//     components: { TwoColLayoutWStickySideBar },
//     template: '<TwoColLayoutWStickySideBar />',
//   }
// }

// const mockEventDetailPageData = {
// }

const mockSeriesPageData = {
    title: 'Page.Title',
    text: 'Page.eventDescription, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',   
    introduction: 'Page.ftvaEventIntroduction, Shorter intro text here.',
    guestSpeaker: 'Page.guestSpeaker, Guest Speaker Name',
    richText: 'page.richText, page rich-text content here on some pages',
    startDate: '2021-09-01', // FIX
    endDate: '2021-09-30', // FIX
    ongoing: false,
    location: [], // 'Page.location, Location Name', // TODO FIX
    ftvaTicketInformation: [],
}
          
//TODO split out a basic default story or change this title
export function Default() {
    return {
    // TODO RENABLE IS MODIBLE AFTER WRITING SWITHCING LOGIC
    //   setup() {
    //   // globalStore for isMobile?
    //   onMounted(() => {
    //     const globalStore = useGlobalStore()

    //     const updateWinWidth = () => {
    //       globalStore.winWidth = window.innerWidth
    //     }

    //     // Set initial winWidth
    //     updateWinWidth()

    //     window.addEventListener('resize', updateWinWidth)

    //     // Clean up
    //     onBeforeUnmount(() => {
    //       window.removeEventListener('resize', updateWinWidth)
    //     })
    //   })
    // },
    data() {
      return {
       page: mockSeriesPageData
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { TwoColLayoutWStickySideBar, CardMeta, RichText, BlockInfo, BlockEventDetail },
      template: `<TwoColLayoutWStickySideBar>
                    <template v-slot:primary-top>
                        <CardMeta
                            category="Series"
                            :title="page?.title"
                            :text="page?.eventDescription"
                            :introduction="page?.ftvaEventIntroduction"
                            :guest-speaker="page?.guestSpeaker"
                        />
                        <RichText
                            v-if="page?.richText"
                            :rich-text-content="page?.richText"
                        />
                    </template>
                    <template v-slot:sidebar>
                        <BlockEventDetail
                            data-test="event-details"
                            :start-date="page?.startDate"
                            :end-date="page?.endDate"
                            :ongoing="page?.ongoing"
                            :locations="page?.location" />
                        <BlockInfo
                            v-if="page?.ftvaTicketInformation && page?.ftvaTicketInformation.length > 0"
                            data-test="ticket-info"
                            :ftva-ticket-information="page?.ftvaTicketInformation" />
                    </template>
                </TwoColLayoutWStickySideBar>`
  }
}