<script>
import Vue from "vue"
import NavMenuItem from "../src/lib-components/NavMenuItem.vue"
import * as API from "@/stories/mock-api.json"
// Uncomment import and local "components" registration if library is not registered globally.
// import { UclaLibraryWebsiteComponentSample } from '@/entry.esm';
import * as API from "@/stories/mock-api.json"

export default Vue.extend({
    name: "ServeDev",
    computed: {
        parsedLinkItems() {
            return [
                {
                    text: "Course Reserves",
                    url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
                    target: "_blank",
                },
                {
                    text: "UCLA Research Guides",
                    url: "https://guides.library.ucla.edu/",
                    target: "",
                },
                {
                    text: "Databases A-Z",
                    url: "https://guides.library.ucla.edu/az.php",
                    target: "_blank",
                },
            ]
        },
        parsedAdvancedSearchLink() {
            return {
                text: "Advanced Search",
                url: "https://www.library.ucla.edu/search",
                target: "_blank",
            }
        },
        parsedNavPrimary() {
            return [
                { ...API.primaryNavlinks[0] },
                {
                    ...API.primaryNavlinks[0],
                    name: "Visit",
                    url: "/visit/",
                },
                {
                    ...API.primaryNavlinks[0],
                    name: "About",
                    url: "/about/",
                },
                { ...API.primaryNavlinks[3] },
            ]
        },
        parsedNavSecondary() {
            return [...API.links, { ...API.links[0] }]
        },
        bannerHeaderData() {
            return {
                image: {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                },
                to: "/help/foo/bar/",
                title: "Curabitur Tortor Pellentesque Nibh Aenean",
                category: "Lectus",
                startDate: "1995-12-17T03:24:00",
                endDate: "1995-12-17T03:24:00",
                byline: ["Cursus Quis"],
                locations: [
                    {
                        id: "523",
                        title: "Powell Library",
                        to: "visit/locations/powell-library",
                    },
                    {
                        id: "3062",
                        title: "Online",
                        to: "visit/locations/online",
                    },
                ],
                prompt: "Cursus Quis",
                alignRight: true,
            }
        },
        bannerFeaturedData() {
            return {
                image: {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                },
                to: "/visit/foo/bar/",
                title: "Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit",
                category: "Torquent",
                breadcrumb: "Torquent",
                startDate: "1995-12-17T03:24:00",
                endDate: "1995-12-17T03:24:00",
                prompt: "Cursus Quis",
                alignRight: false,
            }
        },
        flexibleBlocks() {
            return [
                {
                    id: "22978",
                    typeHandle: "pullQuote",
                    pullQuote: [
                        {
                            text: "<p>Fashion is the best</p>",
                            attribution: null,
                        },
                    ],
                },
                {
                    id: "15905",
                    typeHandle: "richText",
                    richText:
                        "<p><strong>Item 5: Rich Text</strong><br /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis \nbibendum risus. Sed iaculis ullamcorper ligula, ac imperdiet ante. Etiam\n scelerisque vulputate neque ultrices suscipit. Integer pulvinar lectus a\n urna ultrices venenatis. Nullam finibus pellentesque quam, a consequat \nmassa venenatis ac. Integer at blandit nulla. Quisque ac arcu finibus, \nconsectetur magna quis, malesuada tortor. Nulla sit amet libero \nefficitur, semper tellus sed, tincidunt massa. In interdum tellus ac \nelit eleifend, eu tincidunt velit consequat. <em>Duis non arcu tristique, \nsollicitudin ex sit amet, ultrices urna. Maecenas non felis in augue \ntempus finibus.\n</em><br /></p>\n<ol><li>Sed fringilla sem in lorem efficitur, semper lobortis diam viverra. <br /></li><li>Vivamus nec est fermentum tellus venenatis dictum a ac elit. <br /><ol><li>Quisque \nodio turpis, ultricies eu diam sed, facilisis molestie justo. <br /></li></ol></li><li>Cras \nrutrum turpis in accumsan maximus. </li></ol><p>In hac habitasse platea dictumst. Nam\n mattis lorem lorem, sed elementum odio bibendum convallis. Ut rutrum, \nmauris vel tristique sollicitudin, enim dui tincidunt ex, quis dictum \nneque diam ut purus. Fusce sagittis, nisi in ornare condimentum, urna \njusto gravida diam, vitae tristique neque risus suscipit augue. \nCurabitur interdum malesuada rhoncus. Donec ut libero faucibus, \nscelerisque orci in, pulvinar felis. <br /></p><ul><li>Nam nibh ex, cursus nec leo cursus,\n rhoncus vulputate ipsum. <br /><ul><li>Donec quis sapien fermentum, ullamcorper \ntellus vestibulum, sodales ligula. <br /></li><li>In ultrices diam eget erat hendrerit \nimperdiet tincidunt et lacus. <br /><ul><li>Aenean fringilla pellentesque convallis. <br /></li></ul></li><li>Maecenas elementum quis massa imperdiet malesuada.\n</li></ul></li></ul>",
                },
                {
                    id: "2789",
                    typeHandle: "bannerFeatured",
                    contentLink: [
                        {
                            url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                            to: "/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                            title: "Exhibit to test card with image content link",
                            date: [
                                {
                                    startDate: "2021-09-03T08:00:00+00:00",
                                    endDate: "2021-10-08T07:10:00+00:00",
                                },
                            ],
                            associatedLocations: [
                                {
                                    id: "523",
                                    title: "Powell Library",
                                    to: "visit/locations/powell-library",
                                },
                                {
                                    id: "801",
                                    title: "YRL",
                                    to: "visit/locations/yrl",
                                },
                            ],
                            heroImage: [
                                {
                                    id: "2971",
                                    image: [
                                        {
                                            id: "2536",
                                            src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                                            height: 1344,
                                            width: 2560,
                                            srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                                            alt: "Hollywood",
                                            focalPoint: [0.5, 0.5],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    alignment: "left",
                    buttonText: "See More",
                },
                {
                    id: "16983",
                    typeHandle: "callToAction",
                    callToAction: [
                        {
                            id: "16984",
                            titleCta: "Call to action",
                            summary: "a call to action",
                            icon: "svg-call-to-action-find",
                            buttonText: "click me",
                            buttonLink: "http://google.com",
                            backgroundColor: "false",
                        },
                    ],
                },
                {
                    id: "16982",
                    typeHandle: "helpTopicCards",
                    helpTopicCards: [
                        {
                            id: "2404",
                            contentLink: [
                                {
                                    id: "537",
                                    url: "https://test-craft.library.ucla.edu/help/services-resources/borrowing-books-and-equipment",
                                    to: "/help/services-resources/borrowing-books-and-equipment",
                                    title: "Borrowing Books and Equipment",
                                    text: "Kogi ut austin snackwave try-hard. Labore excepteur activated charcoal trust fund. Gastropub in asymmetrical eu, thundercats flexitarian truffaut waistcoat aliquip. Pour-over irure ex, pinterest et taiyaki incididunt. Craft beer cronut knausgaard, biodiesel poke beard slow-carb ullamco umami semiotics prism taxidermy hoodie meh. Et ugh small batch food truck twee bespoke, laboris roof party knausgaard try-hard tumblr swag cupidatat kombucha eu. Semiotics vegan officia in, pork belly chillwave vape plaid ex affogato veniam shaman brooklyn artisan aliqua.",
                                    iconName: "illustration-find-space",
                                },
                            ],
                        },
                        {
                            id: "2405",
                            contentLink: [
                                {
                                    id: "1033",
                                    url: "https://test-craft.library.ucla.edu/help/services-resources/sample-service-page-with-faqs",
                                    to: "/help/services-resources/sample-service-page-with-faqs",
                                    title: "Sample Service Page with FAQ's",
                                    text: "Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.",
                                    iconName: "illustration-find-space",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3968",
                    typeHandle: "cardWithImage",
                    cardWithImage: [
                        {
                            id: "3969",
                            image: [
                                {
                                    id: "2536",
                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                                    height: 1344,
                                    width: 2560,
                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                                    alt: "Hollywood",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                            imageAltText: "hollywood",
                            contentLink: [
                                {
                                    id: "1686",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                                    uri: "visit/events-exhibits/a-new-exhibit",
                                    title: "a new exhibit",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-08T07:00:00+00:00",
                                            endDate: null,
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                    ],
                                },
                            ],
                            shortDescription: null,
                        },
                    ],
                },
                {
                    id: "3550",
                    typeHandle: "highlight",
                    highlight: [
                        {
                            id: "3575",
                            contentLink: [
                                {
                                    id: "1686",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                                    to: "visit/events-exhibits/a-new-exhibit",
                                    title: "a new exhibit",
                                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-08T07:00:00+00:00",
                                            endDate:
                                                "2021-09-29T07:00:00+00:00",
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                    ],
                                    image: [
                                        {
                                            id: "1687",
                                            image: [
                                                {
                                                    id: "1214",
                                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/IMG_20210608_182730371.jpg",
                                                    height: 1920,
                                                    width: 2560,
                                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 2560w",
                                                    alt: "IMG 20210608 182730371",
                                                    focalPoint: [0.5, 0.5],
                                                },
                                            ],
                                            altText: "flowers",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "3576",
                            contentLink: [
                                {
                                    id: "1542",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                                    to: "visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                                    title: "Exhibit to test card with image content link",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-03T08:00:00+00:00",
                                            endDate:
                                                "2021-10-08T07:10:00+00:00",
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                        {
                                            id: "3062",
                                            title: "Online",
                                            to: "visit/locations/online",
                                        },
                                    ],
                                    image: [
                                        {
                                            id: "2971",
                                            image: [
                                                {
                                                    id: "2536",
                                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                                                    height: 1344,
                                                    width: 2560,
                                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                                                    alt: "Hollywood",
                                                    focalPoint: [0.5, 0.5],
                                                },
                                            ],
                                            altText: "hollywood",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]
        },
    },

    // components: {
    //  UclaLibraryWebsiteComponentSample,
    // }
    data() {
        return {
            mockBlockHighlight: {
                image: API.image,
                to: "/visit/foo/bar/",
                category: "Ullamco",
                title: "Fames ac turpis egestas sed tempus",
                startDate: "2022-03-31T07:00:00+00:00",
                endDate: "2021-11-26T11:00:00-08:00",
                text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                imageAspectRatio: 60,
                locations: [
                    { title: "Powellarium", to: "/location/bar" },
                    {
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
            },
            mockBlockLocationListItem: {
                isUclaLibrary: false,
                title: "Arts Library",
                image: API.image,
                day: "Today",
                hour: "8am - 5pm",
                reserveSeat: "http://google.com/reserveSeat",
                address:
                    "1400 Public Affairs Building Los Angeles, CA 90095-1392",
                addressLink: "http://google.com/address",
                amenities: [
                    "SvgIconEmail",
                    "SvgIconPhone",
                    "SvgIconVirtual",
                    "SvgIconChair",
                    "SvgIconSharePrinter",
                    "SvgIconShareBook",
                ],
                to: "http://google.com/title",
            },
            mockMediaWithText: {
                id: "13669",
                typeHandle: "mediaWithText",
                sectionTitle: "A section of media with text",
                sectionSummary: "<p>A section of media with text</p>",
                mediaWithText: [
                    {
                        id: "13670",
                        titleLink: "A media Link",
                        description: "Citation Integration",
                        coverImage: [
                            {
                                id: "5115",
                                src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/Screen-Shot-2022-02-17-at-11.42.39-AM.png",
                                height: 2151,
                                width: 2560,
                                srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 2560w",
                                alt: "Screen Shot 2022 02 17 at 11 42 39 AM",
                                focalPoint: [0.5, 0.5],
                            },
                        ],
                        buttonText: "Download this",
                        buttonUrl:
                            "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
                        linkToMedia:
                            "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
                        typeMedia: "other",
                    },
                ],
            },
            mockBlockSimpleCard: {
                title: "Types of Sinkholes",
                summary:
                    "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
                externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
            },
            mockBlockSpace: {
                to: "https://calendar.library.ucla.edu",
                title: "Bureaux de Garcons",
                location: "Fast Lane Building",
                text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.",
            },
            mockBlockStaffArticleList: {
                image: API.image,
                to: "/about/foo/bar/",
                category: "Ullamco",
                title: "Fames ac turpis egestas sed tempus lorem ipsum",
                date: "1995-12-17T03:24:00",
                authors: [{ title: "Justo Magna", id: 123 }],
                description:
                    "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
            },
            mockBlockStaffDetail: {
                // image: API.image_people,
                to: "about/staff/id/",
                staffName: "Ada Lovelace",
                jobTitle: "Librateria",
                locations: [
                    { title: "Powellarium", to: "/location/bar" },
                    {
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
                email: "ada@somewhere.com",
                phone: "555-555-5555",
                departments: ["DIIT", "Other Department"],
                topics: [
                    { title: "Quadrigis aedificium", id: "808" },
                    { title: "Carpe vinum", id: "809" },
                ],
                biography:
                    "<p>Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, e gestas felis in, sollicitudin lacus. Cras ultrices dolor at quam vestibulum, eget vestibulum diam congue. Nam at est cursus, cursus justo non, pharetra ipsum.</p><p>Morbi gravida, turpis ut luctus placerat, est mauris congue libero, sed tristique quam eros vel neque. Nunc lacinia mi a orci faucibus tincidunt. Praesent dapibus blandit eros eget auctor. Nullam orci ex, pharetra tempor nulla non, vulputate mattis nibh. Sed vel pharetra erat. Proin nec sapien a velit scelerisque interdum. Donec sagittis magna tincidunt, eleifend arcu id, elementum sapien.</p>",
            },
            mockBlockStaffList: {
                to: "/staff/foo",
                jobTitle: "Ullamco",
                staffName: "Fames C. Turpis",
                departments: [
                    { id: 123, title: "Inceptos Himenaeos Inceptos" },
                ],
                email: "loreum@ipsum.foo",
            },
            mockRichText: {
                richText:
                    "<h3>Here is a title</h3><figure class='figure image-right'></h3>",
            },
            mockSearchHomeLinks: {
                linkItems: [
                    {
                        text: "Course Reserves",
                        url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
                        target: "_blank",
                    },
                    {
                        text: "UCLA Research Guides",
                        url: "https://guides.library.ucla.edu/",
                        target: "",
                    },
                    {
                        text: "Databases A-Z",
                        url: "https://guides.library.ucla.edu/az.php",
                        target: "_blank",
                    },
                ],
            },
            mockAdvancedSearchLink: {
                advancedSearchLink: {
                    text: "Advanced Search",
                    url: "https://www.library.ucla.edu/search",
                    target: "_blank",
                },
            },
            mockSectionCardsWithIllustrations: {
                items: [
                    {
                        iconName: "illustration-book-binding",
                        to: "/help/foo/bar/",
                        title: "Lacus Luctus",
                        text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-find-space",
                        to: "/visit/foo/baz/",
                        title: "Ultrices Enim",
                        text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-digitized-resources",
                        to: "/about/foo/fred/",
                        title: "Egestas et Augue",
                        text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-databases",
                        to: "/about/foo/thud/",
                        title: "Proin Sodales",
                        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-remote-access",
                        to: "/visit/foo/qux/",
                        title: "Taciti sociosqu",
                        text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
                        isHorizontal: false,
                    },
                ],
            },
        }
    },
})
</script>

<template>
    <div id="app">
        <ucla-library-website-component-sample />
        <alphabetical-browse-by />
        <heading-arrow text="Featured " to="/visit/" />

        <masthead-primary />

        <block-call-to-action
            svgName="svg-call-to-action-chat"
            title="Lorem ipsum dolor sit amet?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/help/foo/bar/"
            isDark="false"
            isSmallSize="false"
        />
        <block-campus-map
            campusLocationId="280"
            locationName="YRL Library"
            buildingAccess="<p>Park at parking structure 2. You cannot park in the round about.
            Powell is the second building in on the quad. Walk straight ahead
            for about 15 minutes. Wear your walking shoes. Finally when you are
            there walk up the stairs to the rotunda. You are at the library now.</p>"
        />
        <block-card-with-illustration
            to="/help/foo/bar/"
            title="Quisque Volutpat"
            text="Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date."
            icon-name="illustration-find-space"
        />
        <block-date date="10" day="Digniss" />
        <block-highlight
            :image="mockBlockHighlight.image"
            :to="mockBlockHighlight.to"
            :category="mockBlockHighlight.category"
            :title="mockBlockHighlight.title"
            :start-date="mockBlockHighlight.startDate"
            :end-date="mockBlockHighlight.endDate"
            :text="mockBlockHighlight.text"
            :has-triangle="true"
            :is-vertical="true"
            :image-aspect-ratio="60"
            :locations="mockBlockHighlight.locations"
        />
        <block-hours lid="2081" />
        <block-location-list-item
            :title="mockBlockLocationListItem.title"
            :to="mockBlockLocationListItem.to"
            :image="mockBlockLocationListItem.image"
            :day="mockBlockLocationListItem.day"
            :hour="mockBlockLocationListItem.hour"
            :address="mockBlockLocationListItem.address"
            :addressLink="mockBlockLocationListItem.addressLink"
            :amenities="mockBlockLocationListItem.amenities"
            :reserveSeat="mockBlockLocationListItem.reserveSeat"
            :isUclaLibrary="mockBlockLocationListItem.isUclaLibrary"
        />
        <block-media-with-text
            :section-header="mockMediaWithText.mediaWithText[0].titleLink"
            :short-description="mockMediaWithText.mediaWithText[0].description"
            :button-text="mockMediaWithText.mediaWithText[0].buttonText"
            :button-url="mockMediaWithText.mediaWithText[0].buttonUrl"
            :media-link="mockMediaWithText.mediaWithText[0].linkToMedia"
            :is-video="false"
            :is-audio="false"
            :image="mockMediaWithText.mediaWithText[0].coverImage[0]"
            :type-media="mockMediaWithText.mediaWithText[0].typeMedia"
        />
        <block-simple-card
            :title="mockBlockSimpleCard.title"
            :text="mockBlockSimpleCard.summary"
            :to="mockBlockSimpleCard.externalLink"
        />
        <block-spaces
            :to="mockBlockSpace.to"
            :title="mockBlockSpace.title"
            :location="mockBlockSpace.location"
            :text="mockBlockSpace.text"
        />
        <block-staff-article-list
            :image="mockBlockStaffArticleList.image"
            :to="mockBlockStaffArticleList.to"
            :category="mockBlockStaffArticleList.category"
            :title="mockBlockStaffArticleList.title"
            :date="mockBlockStaffArticleList.date"
            :authors="mockBlockStaffArticleList.authors"
            :description="mockBlockStaffArticleList.description"
        />
        <block-staff-detail v-bind="{ ...mockBlockStaffDetail }" />
        <block-staff-list
            v-bind="{ ...mockBlockStaffList }"
            phone="(222) 444-5555"
        />
        <button-link label="Egest perl Conub" to="/help/more" />
        <divider-general :is-bold="true" />
        <divider-way-finder color="visit" />
        <heading-arrow text="Get Help With" to="/help/foo/bar/" />
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
        <responsive-image :image="mockBlockHighlight.image" />
        <rich-text :rich-text-content="mockRichText.richText" />
        <smart-link to="/"> This will render as a vue-router link </smart-link>
        <search-home
            :linkItems="mockSearchHomeLinks.linkItems"
            :advancedSearchLink="mockAdvancedSearchLink.advancedSearchLink"
            @activeTabSet="action"
            @search="action"
        />
        <nav-breadcrumb title="jane-doe" />
        <nav-primary :items="parsedNavPrimary" current-path="/about/foo/bar" />
        <nav-secondary :items="parsedNavSecondary" />
        <section-cards-with-illustrations
            :items="mockSectionCardsWithIllustrations.items"
            title="Get Help with"
            text="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
            to="/help/foo/bar"
            :isHorizontal="false"
        />
        <button-link label="This is a button " to="/help/" /><button-more
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <masthead-primary />
        <br /><br />

        <banner-header
            :image="bannerHeaderData.image"
            :to="bannerHeaderData.to"
            :title="bannerHeaderData.title"
            :category="bannerHeaderData.category"
            :start-date="bannerHeaderData.startDate"
            :end-date="bannerHeaderData.endDate"
            :prompt="bannerHeaderData.prompt"
        />
        <banner-featured
            :image="bannerFeaturedData.image"
            :to="bannerFeaturedData.to"
            :title="bannerFeaturedData.title"
            :category="bannerFeaturedData.category"
            :breadcrumb="bannerFeaturedData.breadcrumb"
            :start-date="bannerFeaturedData.startDate"
            :end-date="bannerFeaturedData.endDate"
            :prompt="bannerFeaturedData.prompt"
        />
        <banner-text
            category="Featured"
            title="New Exhibition"
            text="This is a New Exhibition"
            button-text="See More"
            to="/visit/exhibition"
        />
        <flexible-blocks :blocks="flexibleBlocks" />
    </div>
</template>

<style lang="scss" scoped>
.divider {
    margin: 10px 10px;
}
</style>
