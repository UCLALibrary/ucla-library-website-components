import BlockHighlight from "@/lib-components/BlockHighlight"
import StoryRouter from "storybook-vue-router"

// Import mock api data
import * as API from "@/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Highlight",
    component: BlockHighlight,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/visit/foo/bar/", component: BlockHighlight },
                    { path: "/about/foo/bar/", component: BlockHighlight },
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
    text: "<p>Eclectic <strong>sophisticated</strong> carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub <a href='https://www.boeing.com/commercial/787'>Boeing 787</a> lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.</p>",
    imageAspectRatio: 60,
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    sectionHandle: "event",
}

const mock2 = {
    image: null, //API.image,
    to: "/about/foo/bar/",
    category: "Lerisque",
    title: "Orci Dapibus",
    startDate: "2021-02-05T11:00:00-08:00",
    endDate: "2021-02-05T11:00:00-08:00",
    text: "<p>Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.</p>",
    imageAspectRatio: 60,
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    sectionHandle: "workshopOrEventSeries",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
})

export const About = () => ({
    data() {
        return { ...mock2 }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
          :section-handle="sectionHandle"
      />
  `,
})

export const ShortTitle = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          category="Excepteurato"
          title="Minim"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :section-handle="sectionHandle"
      />
  `,
})

export const LongTitleNoDate = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
          :section-handle="sectionHandle"
      />
  `,
})

export const LongTitleNoDateNoEyebrow = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :text="text"
          :has-triangle="true"
          :is-vertical="true"
          :image-aspect-ratio="60"
          :locations="locations"
          :section-handle="sectionHandle"
      />
  `,
})

export const Card = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      :title="title"
      :start-date="startDate"
      :end-date="endDate"
      :is-vertical="true"
      :image-aspect-ratio="60"
      :locations="locations"
      :section-handle="sectionHandle"
      />
  `,
})

export const CardShortTitle = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      title="Minim"
      :start-date="startDate"
      :end-date="endDate"
      :is-vertical="true"
      :image-aspect-ratio="60"
      :locations="locations"
      :section-handle="sectionHandle"
      />
  `,
})

export const CardLongTitle = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      :start-date="startDate"
      :end-date="endDate"
      :is-vertical="true"
      :image-aspect-ratio="60"
      :locations="locations"
      :section-handle="sectionHandle"
      />
  `,
})

export const List = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
      :image="image"
      :to="to"
      :category="category"
      :title="title"
      :text="text"
      :start-date="startDate"
      :end-date="endDate"
      :locations="locations"
      :image-aspect-ratio="60"
      :section-handle="sectionHandle"
      />
  `,
})

export const ListShortTitle = () => ({
    data() {
        return {
            ...mock2,
        }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          :to="to"
          :category="category"
          title="Minim"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
          :section-handle="sectionHandle"
      />
  `,
})

export const ListLongTitle = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          to="/help/foo/bar/"
          :category="category"
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
          :section-handle="sectionHandle"
      />
  `,
})

export const ListOngoing = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockHighlight },
    template: `
      <block-highlight
          :image="image"
          to="/help/foo/bar/"
          :category="category"
          :ongoing=true
          title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
          :section-handle="sectionHandle"
      />
  `,
})
