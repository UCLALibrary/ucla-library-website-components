import FlexibleMediaGallery from "@/lib-components/Flexible/MediaGallery"
import * as API from "@/stories/mock-api.json"

export default {
    title: "FLEXIBLE / Media Gallery",
    component: FlexibleMediaGallery,
}

const mock = {
    typeHandle: "mediaGallery",
    titleGeneral: "de Finibus Bonorum et Malorum",
    title: null,
    slug: null,
    shortDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    mediaGallery: [
        {
            id: "4602",
            altText:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            captionText:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            captionTitle: "Zooland",
            image: [API.image],
            slug: null,
            sortOrder: 1,
            title: null,
            typeHandle: "image",
        },
        {
            id: "4603",
            altText: "parking",
            captionText:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            captionTitle: "Image two",
            image: [API.image],
            slug: null,
            sortOrder: 2,
            title: null,
            typeHandle: "image",
        },
        {
            id: "4604",
            altText: "abcd",
            captionText: null,
            captionTitle:
                "For number three we're going to see what it looks like with a very long title",
            image: [API.image],
            slug: null,
            sortOrder: 3,
            title: null,
            typeHandle: "image",
        },
        {
            id: "4605",
            altText: "abcd",
            captionText: null,
            captionTitle: "Four",
            image: [
                {
                    src: "https://via.placeholder.com/1080x1920",
                    height: 1920,
                    width: 1080,
                    id: "2536",
                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/hollywood.jpeg" width="1200" height="630" alt="Hollywood">',
                    kind: "image",
                    size: "178185",
                    slug: null,
                    title: "Hollywood",
                },
            ],
            slug: null,
            sortOrder: 4,
            title: null,
            typeHandle: "image",
        },
        {
            id: "4607",
            altText: "abcd",
            captionText: null,
            captionTitle: "Five",
            image: [API.image],
            slug: null,
            sortOrder: 6,
            title: null,
            typeHandle: "image",
        },
        {
            id: "4606",
            altText: "abcd",
            captionText: null,
            captionTitle: "Six",
            image: [API.image],
            slug: null,
            sortOrder: 5,
            title: null,
            typeHandle: "image",
        },
    ],
    archived: false,
    dateCreated: "2022-02-15T12:43:49-08:00",
    dateUpdated: "2022-02-15T13:03:32-08:00",
    enabled: true,
    fieldId: 250,
    id: "4601",
    language: "en-US",
    level: 1,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { block: mock }
    },
    components: { FlexibleMediaGallery },
    template: `<flexible-media-gallery :block="block"/>`,
})
