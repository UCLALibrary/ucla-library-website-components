import { computed } from 'vue'
import { socialList } from './mock/SocialList'
import BlockEventDetail from '@/lib-components/BlockEventDetail.vue'
import BlockInfo from '@/lib-components/BlockInfo.vue'
import ButtonDropdown from '@/lib-components/ButtonDropdown.vue'
import CardMeta from '@/lib-components/CardMeta.vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'
import FlexibleBlocks from '@/lib-components/FlexibleBlocks.vue'
import RichText from '@/lib-components/RichText.vue'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'
import TwoColLayoutWStickySideBar from '@/lib-components/TwoColLayoutWStickySideBar.vue'

// Storybook default settings
export default {
  title: 'LAYOUT / 2 Column Layout with Sticky Sidebar',
  components: TwoColLayoutWStickySideBar,
}

// Mock data for Event Series Page components
const reallyLongRichText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
const mockSeriesPageData = {
  title: 'Page.Title',
  eventDescription: 'Page.eventDescription, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  ftvaEventIntroduction: 'Page.ftvaEventIntroduction, Shorter intro text here.',
  guestSpeaker: 'Page.guestSpeaker, Guest Speaker Name',
  richText: `page.richText, page rich-text content here on some pages.${reallyLongRichText}`,
  startDate: '2021-09-01',
  endDate: '2021-09-30',
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
                        <CardMeta
                            category="Series"
                            :title="page?.title"
                            :text="page?.eventDescription"
                            :introduction="page?.ftvaEventIntroduction"
                            :guest-speaker="page?.guestSpeaker"
                        />
                    </template>
                    <template v-slot:primaryMid>
                        <RichText
                            v-if="page?.richText"
                            :rich-text-content="page?.richText"
                        />
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

// Mock data for Event Detail Page components
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
  ],
  acknowledements: 'page.acknowledgements text here', // [SIC] this is the way it's spelled in the query
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
            <CardMeta
                :category="page.category"
                :title="page?.title"
                :tag-labels="page?.tagLabels"
                :introduction="page?.acknowledements"
                :guest-speaker="page?.guestSpeaker"
            />
            <RichText
                v-if="page?.eventDescription"
                :rich-text-content="page?.eventDescription"
            />
        </template>
        <template v-slot:primaryBottom>
            <DividerWayFinder />
        </template>
        <template v-slot:sidebarTop>
                <BlockEventDetail
                    data-test="event-details"
                    :start-date="page?.startDateWithTime"
                    :time="page?.startDateWithTime"
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

export function FTVABlogDetail() {
  return {
    data() {
      return {
        page: {
          title: 'TEST - Coronae Borealis Nova',
          postDate: '2024-09-20T00:49:00-07:00',
          contributor: 'Vaonis',
          aboutTheAuthor: `
            <p><strong><em><a href="https://vaonis.com/about-us">Vaonis</a></em></strong> 
            stemmed from a powerful ambition to revolutionize the practice of Astronomy 
            and shake up its codes. We believe Astronomy should be more accessible to everyone. 
            To achieve this, we had to follow unexplored pathways.</p>`,
          blocks: [
            {
              typeHandle: 'callToAction',
              id: '3266217',
              callToAction: [
                {
                  id: '3266218',
                  titleCta: 'Blaze Star explosion expected to happen in September: How to see the rare nova event',
                  summary: 'A star system 3,000 lightyears away is set to become visible to the naked eye this year, in an event that will see its apparent brightness temporarily increase.',
                  icon: 'svg-call-to-action-find',
                  buttonText: 'Read More',
                  buttonUrl: 'https://www.skyatnightmagazine.com/space-science/t-coronae-borealis-nova',
                  backgroundColor: 'false'
                }
              ]
            },
            {
              typeHandle: 'horizontalDivider',
              id: '3266221',
              horizontalDivider: true
            },
            {
              typeHandle: 'impactNumberCards',
              id: '3266222',
              sectionSummary: '<h1>Astronomers Await Rare Nova Explosion</h1>',
              sectionTitle: null,
              impactNumberCards: [
                {
                  id: '3266223',
                  title: 'Light-years',
                  text: 'Blaze Star, is a binary star and a recurrent nova about 3,000 light-years away in the constellation Corona Borealis.',
                  impactNumber: '3000'
                },
                {
                  id: '3266224',
                  title: 'Magnitude',
                  text: 'So bright it will be visible on Earth with the naked eye',
                  impactNumber: '10'
                }
              ]
            },
            {
              typeHandle: 'mediaGallery',
              dataId: '3266536',
              sectionTitle: 'Once every 80 years',
              sectionSummary: '<p><em>If predictions are correct, a key outburst star could put on a show in early 2024.</em></p>',
              mediaGallery: [
                {
                  dataId: '3266537',
                  captionTitle: 'Recurrent Nova',
                  captionText: 'If predictions are correct, a key outburst star could put on a show in early 2024.',
                  sortOrder: 1,
                  item: [
                    {
                      dataId: '3266312',
                      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Recurrent-nova_0-1.jpg',
                      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Recurrent-nova_0-1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Recurrent-nova_0-1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Recurrent-nova_0-1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Recurrent-nova_0-1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Recurrent-nova_0-1.jpg 2560w',
                      height: 1946,
                      width: 2560,
                      title: 'Recurrent nova 0 1',
                      focalPoint: [
                        0.5,
                        0.5
                      ],
                      kind: 'image',
                      type: 'image/jpeg',
                      alt: null
                    }
                  ]
                },
                {
                  dataId: '3266538',
                  captionTitle: null,
                  captionText: 'This finder chart covers about as much sky as the field of view in a typical pair of 7-power binoculars',
                  sortOrder: 2,
                  item: [
                    {
                      dataId: '3266330',
                      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/T-CrB-finder-ST-larger.jpg',
                      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/T-CrB-finder-ST-larger.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/T-CrB-finder-ST-larger.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/T-CrB-finder-ST-larger.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/T-CrB-finder-ST-larger.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/T-CrB-finder-ST-larger.jpg 2560w',
                      height: 2301,
                      width: 2560,
                      title: 'T Cr B finder ST larger',
                      focalPoint: [
                        0.5,
                        0.5
                      ],
                      kind: 'image',
                      type: 'image/jpeg',
                      alt: null
                    }
                  ]
                }
              ]
            },
            {
              typeHandle: 'mediaWithText',
              dataId: '3266539',
              sectionTitle: 'Coronae Borealis last made a splash just after World War II',
              sectionSummary: '<p>Does its current restive state hint at an imminent outburst?</p>',
              mediaWithText: [
                {
                  titleLink: 'Rare Stellar Explosion Will Ignite a “New Star”',
                  description: 'The star system will become bright enough to see with the naked eye for several days before it dims again for about 80 years.',
                  coverImage: [
                    {
                      dataId: '3266535',
                      src: 'https://static.library.ucla.edu/craftassetstest/_fullscreen/NASA-Accretion_Disk_Binary_System_ST.jpg',
                      srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/NASA-Accretion_Disk_Binary_System_ST.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/NASA-Accretion_Disk_Binary_System_ST.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/NASA-Accretion_Disk_Binary_System_ST.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/NASA-Accretion_Disk_Binary_System_ST.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/NASA-Accretion_Disk_Binary_System_ST.jpg 2560w',
                      height: 1682,
                      width: 2560,
                      title: 'NASA Accretion Disk Binary System ST',
                      focalPoint: [
                        0.5,
                        0.5
                      ],
                      kind: 'image',
                      type: 'image/jpeg',
                      alt: null
                    }
                  ],
                  buttonText: null,
                  buttonUrl: null,
                  embedCode: '<p>&lt;iframe width="560" height="315" src="<a href="https://www.youtube.com/embed/ZIn_XDVTqmQ?si=1iP6WNczGZjUKz8X" title="YouTube video player"></a></p>',
                  typeMedia: 'video'
                }
              ]
            },
            {
              typeHandle: 'simpleCards',
              id: '3266626',
              sectionTitle: 'Film Series about other stuff',
              sectionSummary: '<p>There will always be something going on at the Hammer. Checkout these great series we have coming up.</p>',
              cards: [
                {
                  id: '3266627',
                  typeHandle: 'internalServiceOrResource',
                  contentLink: [
                    {
                      id: '3260303',
                      uri: 'series/a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
                      slug: 'a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
                      title: 'A Film Series for You: Celebrating Giant Robot‚Äôs 30th Anniversary'
                    }
                  ]
                },
                {
                  id: '3266628',
                  typeHandle: 'internalServiceOrResource',
                  contentLink: [
                    {
                      id: '3260317',
                      uri: 'series/summer-sci-fi',
                      slug: 'summer-sci-fi',
                      title: 'Summer Sci-Fi'
                    }
                  ]
                },
                {
                  id: '3266629',
                  typeHandle: 'internalServiceOrResource',
                  contentLink: [
                    {
                      id: '3197229',
                      uri: 'series/series-with-no-upcoming-events',
                      slug: 'series-with-no-upcoming-events',
                      title: 'Series with no upcoming events'
                    }
                  ]
                }
              ]
            },
            {
              typeHandle: 'pullQuote',
              id: '3266541',
              pullQuote: [
                {
                  text: '<p>I alone am to blame for being remiss in my duties, nevertheless, I still have the feeling that T could have shown me more consideration<em>. </em>We had been friends for many years; on thousands of nights I had watched over it as it slept, and then it arose in my hour of weakness as I nodded at my post. I still am watching it but now it is with a wary eye. There is no warmth between us any more.</p>',
                  attribution: 'Leslie C. Peltier'
                }
              ]
            },
            {
              typeHandle: 'richText',
              richText: '<p>The stars are behaving similarly to the way they did in the time leading up to the last explosion, so it will happen within the next few months.</p>\n<p>Imagine a star, typically visible only through a telescope, that might suddenly brighten so intensely it becomes visible to the naked eye, as if a brand new celestial body has emerged in the heavens. This is precisely what is about to happen with <strong>T Coronae Borealis</strong>, located 2,600 years away from our planet. Classified as <strong>symbiotic binary star</strong>, its luminosity undergoes fluctuations over time. These abrupt surges in brightness termed “novae” – Latin for “new” – manifest when the star erupts in brilliance beyond its radiance.</p>',
              sectionTitle: 'When will the star explosion happen?'
            },
          ],
        },
        articleCategories: 'Interview, Astronomy, Celestial Events',
        socialList,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, TwoColLayoutWStickySideBar, CardMeta, ButtonDropdown, DividerWayFinder, FlexibleBlocks },
    template: `
      <div>
        <SectionWrapper theme='paleblue'>Previous Section Content</SectionWrapper>
        <TwoColLayoutWStickySideBar>
          <template v-slot:primaryTop>
            <CardMeta
              data-test="text-block"
              :category="articleCategories"
              :title="page.title"
              :byline-one="page.contributor"
              :date-created="page.postDate"
              :text="page.aboutTheAuthor"
              section-handle="ftvaArticle"
            >
              <template #sharebutton>
                <ButtonDropdown
                  button-title="Share"
                  :has-icon="true"
                  :dropdown-list="socialList.dropdownList"
                />
              </template>
            </CardMeta>
            <DividerWayFinder class="remove-top-margin" />
            <FlexibleBlocks
              class="flexible-content"
              :blocks="page.blocks"
            />
          </template>
          <template v-slot:sidebarTop />
        </TwoColLayoutWStickySideBar>
        <SectionWrapper theme='paleblue'>Next Section Content</SectionWrapper>
      </div>
    `,
  }
}
