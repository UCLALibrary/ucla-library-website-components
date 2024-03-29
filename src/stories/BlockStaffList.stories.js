// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockStaffList from "@/lib-components/BlockStaffList"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "BLOCK / Staff / List",
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: "/staff/foo",
                        component: BlockStaffList,
                    },
                    {
                        path: "/location/bar",
                        component: BlockStaffList,
                    },
                    {
                        path: "/location/baz",
                        component: BlockStaffList,
                    },
                ],
            }
        ),
    ],
}

const mock = {
    to: "/staff/anne-bonny",
    jobTitle: "Pirate",
    staffName: "Anne Bonny",
    departments: [
        { id: 123, title: "Pillaging" },
        { id: 123, title: "Plundering" },
    ],
    email: "loreum@ipsum.foo",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
                locations: [
                    {
                        title: "Cupidatat non Proident",
                        to: "/location/bar",
                    },
                    {
                        title: "tristique",
                        to: "/location/baz",
                    },
                ],
            },
        }
    },
    components: { BlockStaffList },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const AlternativeName = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
                alternativeFullName: "生懸命",
                language: "ja",
            },
        }
    },
    components: { BlockStaffList },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const NoImage = () => ({
    data() {
        return {
            item: {
                ...mock,
                locations: [
                    {
                        title: "Cupidatat on Proident",
                        to: "/location/bar",
                    },
                    {
                        title: "Tristique Abore et Dolore",
                        to: "/location/baz",
                    },
                ],
            },
        }
    },
    components: { BlockStaffList },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const OneLocation = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
                locations: [
                    {
                        title: "cupidatat non proident",
                        to: "/location/bar",
                    },
                ],
            },
        }
    },
    components: { BlockStaffList },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const NoPhoneNumber = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
                locations: [
                    {
                        title: "cupidatat non proident",
                        to: "/location/bar",
                    },
                    {
                        title: "tristique",
                        to: "/location/baz",
                    },
                ],
            },
        }
    },
    components: { BlockStaffList },
    template: `
      <block-staff-list
        v-bind="item"
      />
  `,
})

export const NoLocation = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
            },
        }
    },
    components: { BlockStaffList },
    template: `
      <block-staff-list
        v-bind="item"
      />
  `,
})
