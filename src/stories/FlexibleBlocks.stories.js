import FlexibleBlocks from '@/lib-components/FlexibleBlocks'
import SectionWrapper from '@/lib-components/SectionWrapper'
import DividerGeneral from '@/lib-components/DividerGeneral'

import { mock as mockCardWithImage } from '@/stories/mock/Flexible_CardWithImage.js'
import { mock as mockHighlight } from '@/stories/mock/Flexible_Highlight.js'
import { Gallery as mockMediaGallery, GalleryHalfWidth as mockMediaGalleryHalfWidth } from '@/stories/mock/Media.js'
import { mockSingle as mockMediaWithText } from '@/stories/mock/Flexible_MediaWithText.js'
import { mock as mockRichText } from '@/stories/mock/Flexible_RichText.js'
import { mockTwoCards as mockSimpleCards } from '@/stories/mock/Flexible_SimpleCards.js'

export default {
  title: 'Flexible Blocks',
  component: FlexibleBlocks
}

const mockData = [
  {
    id: '36410',
    typeHandle: 'pullQuote',
    pullQuote: [
      {
        text: '<p>Frankly Darling, I don\'t give a damn</p>',
        attribution: null
      }
    ]
  },
  {
    id: '43546',
    typeHandle: 'richText',
    richText: '<p><strong>Show me</strong> those <a href="#spaces">spaces</a>, please and thank you?</p>\n<p>And how about the <a href="/visit/locations/powell-library#services-resources">services and resources in powell</a>?</p>\n<p><a href="https://test-craft.library.ucla.edu/help/services-resources/ask-us">Link to entry</a></p>',
    sectionTitle: 'Testing anchor links'
  },
  {
    id: '58867',
    typeHandle: 'cardWithImage',
    sectionTitle: 'Card with Image testing for background',
    sectionSummary: '<p><span><strong>Using the Image Card</strong> module you can <em>easily add a beautiful image</em> card with extra information like title, content, customized read more button, and an icon on the webpage. Moreover, can create <a href="https://diviextended.com/documentation/divi-plus/image-card/" target="_blank" rel="noreferrer noopener">Divi blurb layouts</a> using an image and icon together.</span></p>',
    cardWithImage: [
      {
        id: '58868',
        typeHandle: 'internalContent',
        contentLink: [
          {
            id: '39641',
            contentType: 'collection',
            to: 'collections/explore/vintage-clock-collection',
            title: 'Vintage Clock Collection',
            text: '<p>Seth Thomas Regulator, an E. Howard Regulator, an Ithaca Double-Dial Calendar, a big Waterbury Jeweler\'s Regulator, a Longcase, Tallcase or "Grandfather\'s" Clock</p>',
            articleByline2: '2022-09-20T17:07:00-07:00',
            heroImage: [
              {
                id: '48296',
                image: [
                  {
                    id: '48295',
                    src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/clock1.jpg',
                    height: 1920,
                    width: 2560,
                    srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/clock1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/clock1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/clock1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/clock1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/clock1.jpg 2560w',
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
        ]
      },
      {
        id: '58869',
        typeHandle: 'internalContent',
        contentLink: [
          {
            id: '43197',
            contentType: 'article',
            to: 'about/news/test-news-title-test-for-bannertext',
            title: 'Test - News Title - Test for BannerText',
            text: '<p>Test Summary is a short sentence describing the article</p>',
            articleCategory: [
              {
                title: 'Announcement'
              },
              {
                title: 'Collections'
              }
            ],
            articleByline2: '2022-10-12T10:22:00-07:00',
            associatedLocations: [
              {
                id: '11612',
                title: 'UCLA Film & Television Archive',
                to: 'visit/locations/film-television-archive'
              }
            ],
            heroImage: []
          }
        ]
      },
      {
        id: '58870',
        typeHandle: 'internalContent',
        contentLink: []
      }
    ]
  },
  {
    id: '58914',
    typeHandle: 'highlight',
    sectionTitle: 'Highlight test for background color',
    sectionSummary: '<p><strong>Ombré</strong> (literally "shaded" in French) is the blending of one color <a href="https://en.wikipedia.org/wiki/Hue" title="Hue">hue</a> to another, usually moving <a href="https://en.wikipedia.org/wiki/Tints_and_shades" class="mw-redirect" title="Tints and shades">tints and shades</a> from light to dark.</p>',
    highlight: [
      {
        id: '58915',
        typeHandle: 'internalContent',
        contentLink: [
          {
            id: '38526',
            contentType: 'impactReportStory',
            to: 'impact/2022/test-main-story',
            title: 'TEST_After Covid Triggered a Campus Closure, UCLA Library Reimagined Its Services',
            text: '<p>Undergraduates reflect on successfully completing their research projects while learning remotely.</p>',
            articleByline2: '2022-09-16T14:21:00-07:00',
            heroImage: [
              {
                id: '38529',
                image: [
                  {
                    id: '38528',
                    src: 'https://static.library.ucla.edu/craftassetstest/images/ucla-impact-report-feature-story-animation.mp4',
                    height: null,
                    width: null,
                    srcset: '',
                    alt: 'twinkle lights in bedroom fade into Powell with yellow light eminating from laptop screen',
                    focalPoint: [
                      0.5,
                      0.5
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '58916',
        typeHandle: 'internalContent',
        contentLink: [
          {
            id: '41243',
            contentType: 'collection',
            to: 'collections/explore/halloween-costumes',
            title: 'TEST - Collection - Halloween Costumes',
            text: '<p><strong>Halloween costumes</strong> are <em>traditionally based </em>on frightening <a href="https://www.rottentomatoes.com/tv/supernatural" target="_blank" rel="noreferrer noopener">supernatural</a> or folkloric beings. By the 1930s costumes based on characters in media such as film, literature, and radio were popular.</p>',
            articleByline2: '2022-09-22T12:53:00-07:00',
            heroImage: [
              {
                id: '48064',
                image: [
                  {
                    id: '49061',
                    src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/catcostume.jpg',
                    height: 2238,
                    width: 2560,
                    srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/catcostume.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/catcostume.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/catcostume.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/catcostume.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/catcostume.jpg 2560w',
                    alt: 'Cat in a taco costume',
                    focalPoint: [
                      0.5,
                      0.5
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '58952',
    typeHandle: 'richText',
    richText: '<p>The appearance of a gradient not only varies by the color themselves,\n but also by the color space the calculation is performed in. The \nproblem usually becomes important for two reasons:\n</p>\n<ul><li><a href="https://en.wikipedia.org/wiki/Gamma_correction" title="Gamma correction">Gamma correction</a>\n to a color space. With a typical γ of around 2, it is easy to see that a\n gamma-enabled color space will blend darker than a linear-intensity \ncolor space, since the sum of squares of two numbers is never more than \nthe square of their sum. The effect is most apparent in blending <a href="https://en.wikipedia.org/wiki/Complementary_colors" title="Complementary colors">complementary colors</a> like red and green, with the middle color being a dark color instead of the expected yellow.<sup><a href="https://en.wikipedia.org/wiki/Color_gradient#cite_note-12">[12]</a></sup><sup><a href="https://en.wikipedia.org/wiki/Color_gradient#cite_note-13">[13]</a></sup> The radial and conic examples on this page clearly exhibit this error.</li>\n<li>Handling of other perceptual properties. In <a href="https://en.wikipedia.org/wiki/Information_visualization" title="Information visualization">information visualization</a>,\n it is undesirable to have a supposedly "flat" gradient show \nnon-monotonic variations in lightness and saturation along the way. This\n is because human vision emphasizes these qualities, causing bias or \nconfusion in interpretation.<sup><a href="https://en.wikipedia.org/wiki/Color_gradient#cite_note-Zeileis2019-14">[14]</a></sup></li></ul><p>A "linear" blend would match physical light blending and has been the standard in <a href="https://en.wikipedia.org/wiki/Game_engine" title="Game engine">game engines</a> for a long time.<sup><a href="https://en.wikipedia.org/wiki/Color_gradient#cite_note-15">[15]</a></sup> On the web, however, it has long been neglected for both color gradients and image scaling.<sup><a href="https://en.wikipedia.org/wiki/Color_gradient#cite_note-16">[16]</a></sup> Such a blend still has a subtle difference from one done in a perceptually-uniform color space.<sup><a href="https://en.wikipedia.org/wiki/Color_gradient#cite_note-17">[17]</a></sup></p>',
    sectionTitle: 'Rich text test for divider'
  }
]

export function Default() {
  return {
    data() {
      return {
        blocks: [
          mockSimpleCards,
          mockMediaGallery,
          mockMediaWithText,
          mockMediaGalleryHalfWidth,
        ],
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}

export function GrayBackgrounds() {
  return {
    data() {
      return {
        blocks: [
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleCardWithImage</h4>',
          },
          mockCardWithImage,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleHighlight</h4>',
          },
          mockHighlight,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleMediaGallery</h4>',
          },
          mockMediaGallery,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleMediaGalleryHalfWidth</h4>',
          },
          mockMediaGalleryHalfWidth,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleMediaWithText</h4>',
            mediaGalleryStyle: 'halfWidth',
            sectionTitle: 'Pine Needles Half Width',
            richTextSimplified:
              'Pine needles range in size from 3 to 5 inches and are a deep forest green color. The long, thin needles vary slightly from variety to variety, depending on the region in which they grow. Pine needles have a strong pine scent, and a biting resinous flavor.  They are leaves. They do the same job that broad leaves do—capture sunlight, “inhale” carbon dioxide, and “exhale” oxygen—providing the tree with food and air for us to breath.',
          },
          mockMediaWithText,
          {
            typeHandle: 'rich-text',
            richText: '<h4>FlexibleRichText</h4>',
          },
          mockRichText,
          {
            typeHandle: 'rich-text',
            richText: '<h4>But the final block is always white</h4>',
          },
          mockRichText,
        ],
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}

export function DividerBetweenWhiteBlocks() {
  return {
    data() {
      return {
        blocks: [mockMediaWithText, mockSimpleCards],
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}

export function LocationDetailBioMed() {
  return {
    data() {
      return {
        blocks: mockData,
      }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
  }
}
