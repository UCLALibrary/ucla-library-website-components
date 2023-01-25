import FlexibleCardWithImage from "@/lib-components/Flexible/CardWithImage.vue"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Card With Image",
    component: FlexibleCardWithImage,
    decorators: [StoryRouter()],
}

const mock = {
    id: "28284",
    typeHandle: "cardWithImage",
    sectionTitle: "Section Title: Card with image",
    sectionSummary: "<p>Section Summary: card with image</p>",
    cardWithImage: [
        {
            id: "28285",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "20628",
                    contentType: "article",
                    to: "about/news/la-niña",
                    title: "La Niña",
                    text: "<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>",
                    articleCategory: [
                        {
                            title: "Featured",
                        },
                    ],
                    articleByline1: [
                        {
                            id: "11827",
                            to: "about/staff/brigid-abreu",
                            title: "Brigid Abreu",
                        },
                        {
                            id: "11910",
                            to: "about/staff/sylvia-page",
                            title: "Sylvia Page",
                        },
                    ],
                    articleByline2: "2022-06-21T12:39:00-07:00",
                    associatedLocations: [
                        {
                            id: "11709",
                            title: "William Andrews Clark Memorial Library",
                            to: "visit/locations/william-andrews-clark-memorial-library",
                        },
                        {
                            id: "11497",
                            title: "Richard C. Rudolph East Asian Library",
                            to: "visit/locations/east-asian-library",
                        },
                    ],
                    heroImage: [
                        {
                            id: "20639",
                            image: [
                                {
                                    id: "20637",
                                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/LaNina-Jet-Wintertime-Pattern.jpg",
                                    height: 1997,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 2560w",
                                    alt: "La Nina Jet Wintertime Pattern",
                                    focalPoint: [0.5, 0.5],
                                    altText: "La Niña",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // {
        //     id: "28286",
        //     typeHandle: "internalContent",
        //     contentLink: [
        //         {
        //             id: "16484",
        //             contentType: "article",
        //             to: "about/news/this-is-the-newest-article",
        //             title: "This is the newest article",
        //             text: '<p>Add "MEAP" to show article in the MEAP website</p>',
        //             articleCategory: [
        //                 {
        //                     title: "Featured",
        //                 },
        //             ],
        //             articleByline1: [
        //                 {
        //                     id: "3522",
        //                     to: "about/staff/dianne",
        //                     title: "D. Weinthal",
        //                 },
        //             ],
        //             articleByline2: "2022-05-19T13:59:00-07:00",
        //             associatedLocations: [
        //                 {
        //                     id: "4695",
        //                     title: "Louise M. Darling Biomedical Library",
        //                     to: "visit/locations/biomed",
        //                 },
        //             ],
        //             heroImage: [
        //                 {
        //                     id: "16537",
        //                     image: [
        //                         {
        //                             id: "2442",
        //                             src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/shortbread-cookies.jpg",
        //                             height: 1421,
        //                             width: 2560,
        //                             srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/shortbread-cookies.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/shortbread-cookies.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/shortbread-cookies.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/shortbread-cookies.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/shortbread-cookies.jpg 2560w",
        //                             alt: "Shortbread cookies",
        //                             focalPoint: [0.5, 0.5],
        //                             altText: null,
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     id: "39508",
        //     typeHandle: "externalContent",
        //     title: "Pandemic Spurs Virtual Screening Room, Bringing Moving Images to a Global Audience",
        //     image: [
        //         {
        //             id: "36751",
        //             src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/virtual-screening-room-toll-sea.jpeg",
        //             height: 1869,
        //             width: 2560,
        //             srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/virtual-screening-room-toll-sea.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/virtual-screening-room-toll-sea.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/virtual-screening-room-toll-sea.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/virtual-screening-room-toll-sea.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/virtual-screening-room-toll-sea.jpeg 2560w",
        //             alt: "Virtual screening room toll sea",
        //             focalPoint: [0.5, 0.5],
        //         },
        //     ],
        //     byline1: null,
        //     byline2: null,
        //     category: null,
        //     text: "When its theatrical home closed its doors in March 2020 due to COVID-19 the UCLA Film & Television Archive shifted public programming to an ambitious new online screening",
        //     to: "https://www.cinema.ucla.edu/blogs/archive-blog/2022/01/31/pandemic-spurs-virtual-screening-room",
        // },
        // {
        //     id: "28287",
        //     typeHandle: "externalContent",
        //     title: null,
        //     image: [
        //         {
        //             id: "28251",
        //             src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/etch-a-sketch.jpeg",
        //             height: 2032,
        //             width: 2560,
        //             srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/etch-a-sketch.jpeg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/etch-a-sketch.jpeg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/etch-a-sketch.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/etch-a-sketch.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/etch-a-sketch.jpeg 2560w",
        //             alt: "Etch a sketch",
        //             focalPoint: [0.5, 0.5],
        //             altText: null,
        //         },
        //     ],
        //     byline1: "By External Content",
        //     byline2: null,
        //     category: "About",
        //     location: "France",
        //     text: "<p>About text found here.</p>",
        // },
    ],
}

const eventExhibitonArticle = {
    id: "707590",
    typeHandle: "cardWithImage",
    sectionTitle: "Flexible cards with image",
    sectionSummary: "<p>Flexible cards with image</p>",
    cardWithImage: [
        {
            id: "707591",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "197177",
                    contentType: "event",
                    to: "visit/events-exhibitions/test-the-white-balloon",
                    title: "TEST - The White Balloon",
                    text: null,
                    eventDescription:
                        '<p><strong>All <em>Family Flicks</em> screenings are free admission. Seating is first come, first served. The Billy Wilder Theater opens 15 minutes before each <em>Family Flicks</em> program.</strong></p>\n\n<p>Director Jafar Panahi’s debut feature, <em>The White Balloon</em>, won the Camera d’Or at the Cannes Film Festival and announced the arrival of a major new voice on the international film scene. A simply presented but powerful moving fable of perseverance, it follows a young girl as she overcomes the obstacles of the big city on her way to buy a goldfish for Nowruz, the Iranian New Year. Among The Guardian newspaper’s top 50 family films of all time, <em>The White Balloon</em> is also on the British Film Institute’s list of 50 films you should see by the age of 14.</p>\n\n<p>35mm, color, in Persian with English subtitles, 85 min. Director: Jafar Panahi. Screenwriter: Abbas Kiarostami. With: Aida Mohammadkhani, Mohsen Kafili, Fereshteh Sadre Orafaiy.</p>\n\n<p>Part of: <a href="https://www.cinema.ucla.edu/events/family-flicks" target="_blank" rel="noreferrer noopener">Family Flicks</a><br /><a href="https://www.cinema.ucla.edu/events/2023/01/22/the-white-balloon" target="_blank" rel="noreferrer noopener">Learn more</a> </p>',
                    articleByline2: "2022-12-19T07:48:00-08:00",
                    startDateWithTime: "2022-12-19T11:00",
                    endDateWithTime: "2022-12-19T12:30",
                    eventType: [],
                    associatedLocations: [
                        {
                            id: "11612",
                            title: "UCLA Film & Television Archive",
                            to: "visit/locations/film-television-archive",
                        },
                    ],
                    heroImage: [
                        {
                            id: "197178",
                            image: [
                                {
                                    id: "86612",
                                    src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/1670615203.jpg",
                                    height: 1846,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/1670615203.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/1670615203.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/1670615203.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/1670615203.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/1670615203.jpg 2560w",
                                    alt: "placeholder",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "707592",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "36092",
                    contentType: "article",
                    to: "about/news/casper-the-ghost",
                    title: "Casper the Ghost",
                    text: '<p>He is a pleasant, personable and translucent <a href="https://en.wikipedia.org/wiki/Ghost" title="Ghost" target="_blank" rel="noreferrer noopener">ghost</a>, but often criticized by his three wicked uncles, <a href="https://en.wikipedia.org/wiki/The_Ghostly_Trio" class="mw-redirect" title="The Ghostly Trio" target="_blank" rel="noreferrer noopener">the Ghostly Trio</a>.<br /></p>',
                    articleCategory: [],
                    articleByline2: "2022-09-13T15:06:00-07:00",
                    associatedLocations: [],
                    heroImage: [
                        {
                            id: "49470",
                            image: [
                                {
                                    id: "49469",
                                    src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Casper.png",
                                    height: 2225,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Casper.png 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Casper.png 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Casper.png 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Casper.png 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Casper.png 2560w",
                                    alt: null,
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "707593",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "50864",
                    contentType: "workshopOrEventSeries",
                    to: "visit/events-exhibitions/test-event-series",
                    title: "Test Event Series: Side Pie",
                    text: "<p>Started in a Side Yard in a Pandemic. Our goals are simple: to bring the best pizza to the neighborhood and give back to the community. We love Altadena, we love pizza. <br /></p>",
                    articleByline2: "2022-10-31T16:11:00-07:00",
                    startDate: "2022-11-17T00:00",
                    endDate: "2022-11-30T00:00",
                    associatedLocations: [
                        {
                            id: "801",
                            title: "Charles E. Young Research Library",
                            to: "visit/locations/young-research-library",
                        },
                    ],
                    heroImage: [
                        {
                            id: "60178",
                            image: [
                                {
                                    id: "59935",
                                    src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/SidePie20220278_470x.webp",
                                    height: 1026,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/SidePie20220278_470x.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/SidePie20220278_470x.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/SidePie20220278_470x.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/SidePie20220278_470x.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/SidePie20220278_470x.webp 2560w",
                                    alt: "color photograph of beige tshirt with side pie text",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "707594",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "8901",
                    contentType: "exhibition",
                    to: "visit/events-exhibitions/fante-asafo-flags",
                    title: "Fante Asafo Flags",
                    text: "<p>Prior to the colonial era, asafo companies were charged with the safety and protection of the region. Surviving a century of violence and upheaval, they remain one of the core local institutions.</p>",
                    articleByline2: "2022-03-09T15:17:00-08:00",
                    startDate: "2023-01-04T00:00",
                    endDate: "2023-03-05T00:00",
                    heroImage: [
                        {
                            id: "9068",
                            image: [
                                {
                                    id: "63048",
                                    src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/flag_2022-11-23-012414_fjms.jpg",
                                    height: 1703,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 2560w",
                                    alt: null,
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
})

export const EventExhibitonArticle = () => ({
    data() {
        return {
            block: eventExhibitonArticle,
        }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
})
