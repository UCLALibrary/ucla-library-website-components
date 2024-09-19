import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import BlockEventDetail from "@/lib-components/BlockEventDetail.vue"
import BlockInfo from "@/lib-components/BlockInfo.vue"
import ButtonDropdown from "@/lib-components/ButtonDropdown.vue"
import CardMeta from "@/lib-components/CardMeta.vue"
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'
import RichText from "@/lib-components/RichText.vue"
import SectionWrapper from "@/lib-components/SectionWrapper.vue"
import TwoColLayoutWStickySideBar from "@/lib-components/TwoColLayoutWStickySideBar.vue"

// Storybook default settings
export default {
  title: 'LAYOUT / 2 Column Layout with Sticky Sidebar',
  components: TwoColLayoutWStickySideBar,
}

const reallyLongRichText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
// MOVE TO FILE?
const mockSeriesPageData = {
    title: 'Page.Title',
    eventDescription: 'Page.eventDescription, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',   
    ftvaEventIntroduction: 'Page.ftvaEventIntroduction, Shorter intro text here.',
    guestSpeaker: 'Page.guestSpeaker, Guest Speaker Name',
    richText: 'page.richText, page rich-text content here on some pages.' + reallyLongRichText,
    startDate: '2021-09-01', // FIX
    endDate: '2021-09-30', // FIX
    ongoing: false,
    location: [
    {
      id: '195746',
      title: 'Billy Wilder Theater',
      url: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater',
      uri: 'locations/billy-wilder-theater'
    },
    {
      id: '195746',
      title: 'Other Location',
      url: 'https://test-craft.library.ucla.edu/locations/other-locations',
      uri: 'locations/somelocation'
    }
  ]
}

const ftvaTicketInformation = [
    {
        title: 'Admission is free',
    },
    {
        title: 'Seats are assigned on a first come, first served basis',
    },
    {
        title: 'The box office opens one hour before the event',
    },
]
        
export function EventSeries() {
    return {
    data() {
      return {
          page: mockSeriesPageData,
          ftvaTicketInformation
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { TwoColLayoutWStickySideBar, CardMeta, RichText, BlockInfo, BlockEventDetail, SectionWrapper },
        template: `<div>
                <SectionWrapper theme='paleblue'>Previous Section Content</SectionWrapper>
                <TwoColLayoutWStickySideBar>
                    <template v-slot:primaryTop>
                        <SectionWrapper>
                        <CardMeta
                            category="Series"
                            :title="page?.title"
                            :text="page?.eventDescription"
                            :introduction="page?.ftvaEventIntroduction"
                            :guest-speaker="page?.guestSpeaker"
                        />
                        </SectionWrapper>
                    </template>
                    <template v-slot:primaryMid>
                        <SectionWrapper>
                        <RichText
                            v-if="page?.richText"
                            :rich-text-content="page?.richText"
                        />
                        </SectionWrapper>
                    </template>
                    <template v-slot:sidebarTop>
                        <BlockEventDetail
                            data-test="event-details"
                            :start-date="page?.startDate"
                            :end-date="page?.endDate"
                            :ongoing="page?.ongoing"
                            :locations="page?.location" />
                    </template>
                    <template v-slot:sidebarBottom>
                        <BlockInfo
                            v-if="ftvaTicketInformation && ftvaTicketInformation.length > 0"
                            data-test="ticket-info"
                            :ftva-ticket-information="ftvaTicketInformation" />
                    </template>
                </TwoColLayoutWStickySideBar>
                <SectionWrapper theme='paleblue'>Next Section Content</SectionWrapper>
                </div>`
  }
}


const mockEventDetailPageData = {
    id: '2847944',
    typeHandle: 'ftvaEvent',
    title: 'La Région Centrale 03-08-24',
    tagLabels: [
    {
      title: 'Guest speaker'
    },
    {
      title: '35mm'
    }
  ],
    startDateWithTime: '2024-03-09T03:30:00+00:00',
    category: 'Series Title Here',
    endTime: '20:30:00',
    location: [
        {
        id: '195746',
        title: 'Billy Wilder Theater',
        url: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater',
        uri: 'locations/billy-wilder-theater'
        },
        {
        id: '195746',
        title: 'Other Location',
        url: 'https://test-craft.library.ucla.edu/locations/other-locations',
        uri: 'locations/somelocation'
        }
    ]
}
// for Add to Calendar Button
const mockCalendarData = {
  isEvent: true,
  title: 'La Région Centrale Screening',
  startDateWithTime: '2025-07-08T02:30:00+00:00',
  endTime: '20:30:00',
  location: [
    {
      title: 'Billy Wilder Theater',
      campusMapId: null,
      publicUrl: 'https://www.cinema.ucla.edu/billy-wilder-theater',
      address: []
    }
  ],
  eventDescription: '<p>Admission is free. No advance reservations. Your seat will be assigned to you when you pick up your ticket at the box office. Seats are assigned on a first come, first served basis. The box office opens one hour before the event.</p>\n<p>La Région Centrale</p>\n<p>Canada, 1971</p>\n<p>The late avant-garde master Michael Snow’s work explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident. He worked in many mediums and his films playfully and prolifically rethink the parameters while requiring audiences to actively participate in this work. La Région Centrale is a three-hour-long film that calls attention to the mechanics of filmmaking, using a computer-programmed, motorized tripod that rotates the camera 360 degrees in any direction, repeatedly, without dialogue or any other subject beyond the landscape, over the course of a day.'
}

export function FTVAEventDetail() {
    return {
    data() {
      return {
        page: mockEventDetailPageData,
        ftvaTicketInformation,
        mockCalendarData
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { TwoColLayoutWStickySideBar, ButtonDropdown, CardMeta, DividerWayFinder, RichText, BlockInfo, BlockEventDetail, SectionWrapper },
    template: `<div>
        <SectionWrapper theme='paleblue'>Previous Section Content</SectionWrapper>
        <TwoColLayoutWStickySideBar>
        <template v-slot:primaryTop>
            <SectionWrapper>
                <CardMeta
                    :category="page.category"
                    :title="page?.title"
                    :tag-labels="page?.tagLabels"
                    :introduction="page?.ftvaEventIntroduction"
                    :guest-speaker="page?.guestSpeaker"
                />
                <RichText
                    v-if="page?.richText"
                    :rich-text-content="page?.richText"
                 />
            </SectionWrapper>
        </template>
        <template v-slot:primaryBottom>
            <SectionWrapper>
                 <DividerWayFinder />
            </SectionWrapper>
        </template>
        <template v-slot:sidebarTop>
                <BlockEventDetail
                    data-test="event-details"
                    :start-date="page?.startDate"
                    :end-date="page?.endDate"
                    :ongoing="page?.ongoing"
                    :locations="page?.location"
                />
                <ButtonDropdown v-bind="mockCalendarData" />
                <BlockInfo
                    v-if="ftvaTicketInformation && ftvaTicketInformation.length > 0"
                    data-test="ticket-info"
                    :ftva-ticket-information="ftvaTicketInformation"
                />
        </template>
        </TwoColLayoutWStickySideBar>
        <SectionWrapper theme='paleblue'>Next Section Content</SectionWrapper>
        </div>`
  }
}