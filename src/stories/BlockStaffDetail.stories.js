// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockStaffDetail from "@/lib-components/BlockStaffDetail"

// Storybook default settings
export default {
  title: "BLOCK / Staff / Detail"
}

const mock = {
  id: "2975759",
  sectionHandle: "staffMember",
  slug: "test-subject-librarian",
  uri: "about/staff/test-subject-librarian",
  title: "TEST - Subject Librarian",
  image: [
    {
      id: "2975764",
      src: "https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/martini-cat.gif",
      height: 2701,
      width: 2560,
      srcset: "https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/martini-cat.gif 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/martini-cat.gif 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/martini-cat.gif 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/martini-cat.gif 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/martini-cat.gif 2560w",
      alt: "Martini cat",
      focalPoint: [
        0.5,
        0.5
      ]
    }
  ],
  to: "test-subject-librarian",
  nameFirst: "TEST - Subject",
  nameLast: "Librarian",
  alternativeName: [
    {
      fullName: "司書",
      languageAltName: "ja"
    }
  ],
  jobTitle: "Head of Everything",
  departments: [
    {
      id: "7272",
      title: "Communications"
    },
    {
      id: "7270",
      title: "East Asian Library"
    }
  ],
  locations: [
    {
      title: "Richard C. Rudolph East Asian Library",
      to: "visit/locations/east-asian-library",
      id: "11497"
    },
    {
      title: "UCLA Film & Television Archive",
      to: "visit/locations/film-television-archive",
      id: "11612"
    }
  ],
  pronouns: "she/his/them",
  email: "subject.librarian@email.com",
  phone: "(555) 475-1523",
  consultation: "http://help.com",
  topics: [
    {
      title: "diaries",
      id: "2975760"
    },
    {
      title: "decorative arts",
      id: "2975783"
    }
  ],
  academicDepartments: [
    {
      id: "11947",
      title: "African American Studies"
    },
    {
      id: "11956",
      title: "cats"
    }
  ],
  biography: '<p>li Wong is a stand-up comedian who has written and performed two specials: Baby Cobra and Hard Knock Wife. She co-wrote, produced, and starred in the romantic comedy Always Be My Maybe. She is the proud mother of two rowdy-ass girls who inspired this entire book. She aspires to lie down but somehow keeps getting pressured into doing more sh*t that gets in the way of her lying down.</p>',
  subjectLibrarian: "yes",
  orcid: "http://1234",
  publications: "<ul><li>Lembo, Mary Frances; Hallmark, Julie</li></ul>"
}

const mock1 = {
    // image: API.image_people,
    to: "about/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle:
        "Associate University Librarian for User Engagement (interim) and Director of Arts, Music and Powell Libraries",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: [
        { id: "6361", title: "Digital Initiatives & Information Technology" },
        { id: "6361", title: "Software Development & Library Systems" },
    ],
    topics: [
        { title: "Quadrigis aedificium", id: "808" },
        { title: "Carpe vinum", id: "809" },
    ],
    biography:
        "<p>Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, e gestas felis in, sollicitudin lacus. Cras ultrices dolor at quam vestibulum, eget vestibulum diam congue. Nam at est cursus, cursus justo non, pharetra ipsum.</p><p>Morbi gravida, turpis ut luctus placerat, est mauris congue libero, sed tristique quam eros vel neque. Nunc lacinia mi a orci faucibus tincidunt. Praesent dapibus blandit eros eget auctor. Nullam orci ex, pharetra tempor nulla non, vulputate mattis nibh. Sed vel pharetra erat. Proin nec sapien a velit scelerisque interdum. Donec sagittis magna tincidunt, eleifend arcu id, elementum sapien.</p>",
}

const mock2 = {
    image: API.image_people,
    to: "/staff/id/",
    staffName: "Ada Lovelace",
    alternativeFullName: "生懸命",
    language: "ja",
    jobTitle: "Library Supervisor",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: [
        { id: "6361", title: "DIIT" },
        { id: "6361", title: "Other Departments" },
    ],
}

const mock3 = {
    // image: API.image_people,
    to: "/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle: "Library Supervisor",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: [
        { id: "6361", title: "DIIT" },
        { id: "6361", title: "Other Departments" },
    ],
}

const mock4 = {
    // image: API.image_people,
    to: "/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle: "Library Supervisor",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: [
        { id: "6361", title: "DIIT" },
        { id: "6361", title: "Other Departments" },
    ],
    topics: [
        { title: "topic1", id: "bar1" },
        { title: "topic2", id: "baz2" },
    ],
    academicDepartments: [
        { title: "acadept1", id: "acbar1" },
        { title: "acadept2", id: "acbaz2" },
    ],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: {
                ...mock1,
                image: API.image_people,
            },
        }
    },
    components: { BlockStaffDetail },
    template: `
    <block-staff-detail
        v-bind="item"
    />
  `,
})

export const AlternativeName = () => ({
    data() {
        return {
            item: {
                ...mock2,
                image: API.image_people,
            },
        }
    },
    components: { BlockStaffDetail },
    template: `
    <block-staff-detail
        v-bind="item"
    />
  `,
})

export const NoImage = () => ({
    data() {
        return {
            item: {
                ...mock1,
            },
        }
    },
    components: { BlockStaffDetail },
    template: `
    <block-staff-detail
    v-bind="item"
    />
  `,
})

export const NoImageOrBio = () => ({
    data() {
        return {
            item: {
                ...mock3,
            },
        }
    },
    components: { BlockStaffDetail },
    template: `
    <block-staff-detail
    v-bind="item"

    />
  `,
})

export const AskMeAboutAndAcademicDeaprtments = () => ({
    data() {
        return {
            item: {
                ...mock4,
            },
        }
    },
    components: { BlockStaffDetail },
    template: `
    <block-staff-detail
    v-bind="item"
    />
  `,
})
