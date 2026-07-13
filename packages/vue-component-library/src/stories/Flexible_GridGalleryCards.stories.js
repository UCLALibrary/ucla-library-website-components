import FlexibleGridGalleryCards from '@/lib-components/Flexible/GridGalleryCards'

export default {
  title: 'FLEXIBLE / Grid Gallery Cards',
  component: FlexibleGridGalleryCards,
}

const mock = {
  id: '40361',
  sectionTitle: 'Section Title: Grid Gallery Cards',
  sectionSummary: '<p>Section Summary: Grid Gallery Cards</p>',
  gridGalleryCards: [
    {
      id: '40362',
      contentLink: [
        {
          contentType: 'article',
          headlineText: 'La Niña',
          snippet: '<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>',
          to: 'about/news/la-niña',
          heroImage: [
            {
              image: [
                {
                  id: '20637',
                  src: 'https://static.library.ucla.edu/craftassetstest/LaNina-Jet-Wintertime-Pattern.jpg',
                  height: 1997,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 2560w',
                  alt: 'La Nina Jet Wintertime Pattern',
                  focalPoint: [0.5, 0.5],
                },
              ],
            },
          ],
        },
      ],
      featured: 'false',
    },
    {
      id: '40363',
      featured: 'true',
      headlineText: 'This is a featured content',
      snippet: '<p>Virtual library demo</p>',
      image: [
        {
          id: '40342',
          src: 'https://static.library.ucla.edu/craftassetstest/images/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg',
          height: 1870,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 2560w',
          alt: 'Virtual screening room toll sea',
          focalPoint: [0.5, 0.5],
        },
      ],
      externalLink: 'http://www.google.com',
    },
  ],
  typeHandle: 'gridGalleryCards',
}

const mockInternalContentArticleExternalArticleAndExternalContent = {
  id: "4986283",
  typeHandle: "gridGalleryCards",
  sectionSummary: null,
  sectionTitle: "Grid Gallery Cards -- Internal Content - Article,  Internal Content - ExternalArticle & External Article",
  gridGalleryCards: [
    {
      id: "4990384",
      contentLink: [
        {
          contentType: "article",
          headlineText: "So Many Squirrels",
          snippet: "<p><strong>Internal Content - Article</strong><br/>There are between 200 and 300 million squirrels in the world. There are 40 million in the United States. ;) In Alaska there are 466 squirrels for every 1 person. ;)</p>",
          to: "about/news/testnews",
          heroImage: [
            {
              image: [
                {
                  id: "2900571",
                  src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/fox-squirrel.jpeg",
                  height: 1699,
                  width: 2560,
                  srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/fox-squirrel.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/fox-squirrel.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/fox-squirrel.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/fox-squirrel.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/fox-squirrel.jpeg 2560w",
                  alt: "Fox squirrel",
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ]
        }
      ],
      featured: "false"
    },
    {
      id: "4986469",
      contentLink: [
        {
          contentType: "externalArticle",
          headlineText: "Water Polo",
          snippet: "<p><strong>Internal Content - External Article</strong><br/> A highly competitive, fast-paced aquatic sport that builds elite endurance, speed, and teamwork.</p>",
          to: "https:/www.the562.org/2022/11/17/girls-water-polo-preview-long-beach-poly-jackrabbits-2",
          heroImage: [
            {
              image: [
                {
                  id: "4981835",
                  src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/water-polo-1.jpg",
                  height: 1358,
                  width: 2560,
                  srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/water-polo-1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/water-polo-1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/water-polo-1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/water-polo-1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/water-polo-1.jpg 2560w",
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ]
        }
      ],
      featured: "false"
    },
    {
      id: "4990143",
      featured: "false",
      headlineText: "Bears Lovers of Sierra Madre",
      snippet: "<p><strong>External Article</strong><br/> Sierra Madre is a major hotspot for bear encounters. The bears frequently wander down from the Angeles National Forest in search of food and water.</p>",
      image: [
        {
          id: "4990141",
          src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/bear.jpeg",
          height: 1707,
          width: 2560,
          srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/bear.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/bear.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/bear.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/bear.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/bear.jpeg 2560w",
          alt: null,
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      to: "https://www.bearloverssm.com/"
    }
  ]
}

export function Default() {
  return {
    data() {
      return {
        block: mock,
      }
    },
    components: { FlexibleGridGalleryCards },
    template: `
        <flexible-grid-gallery-cards
            :block="block"
        />
    `,
  }
}

export function InternalContentArticleExternalArticleAndExternalContent() {
  return {
    data() {
      return {
        block: mockInternalContentArticleExternalArticleAndExternalContent,
      }
    },
    components: { FlexibleGridGalleryCards },
    template: `
        <flexible-grid-gallery-cards
            :block="block"
        />
    `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
