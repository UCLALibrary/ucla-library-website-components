import BlockCardWithImage from "@/lib-components/BlockCardWithImage"
import StoryRouter from "storybook-vue-router"

// Import mock api data
import * as API from "@/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Card With Image",
    component: BlockCardWithImage,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: "/visit/foo/bar/",
                        component: BlockCardWithImage,
                    },
                    {
                        path: "/about/foo/bar/",
                        component: BlockCardWithImage,
                    },
                ],
            }
        ),
    ],
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    category: "Ullamco",
    title: "Seven seas of the ancient world",
    alternativeFullName: "陳餘敏卿纪念基金",
    language: "zh",
    startDate: "2022-03-31T07:00:00+00:00",
    endDate: "2021-11-26T11:00:00-08:00",
    text: "<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the Aegean, Adriatic, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf</p>",
    imageAspectRatio: 60,
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    sectionHandle: "event",
}

export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockCardWithImage },
    template: `
      <block-card-with-image
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
})
