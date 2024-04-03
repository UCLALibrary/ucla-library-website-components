// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockStaffList from '@/lib-components/BlockStaffList'

// Storybook default settings
export default {
  title: 'BLOCK / Staff / List',
}

const mock = {
  to: '/staff/anne-bonny',
  jobTitle: 'Pirate',
  staffName: 'Anne Bonny',
  departments: [
    { id: 123, title: 'Pillaging' },
    { id: 123, title: 'Plundering' },
  ],
  email: 'loreum@ipsum.foo',
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        item: {
          ...mock,
          image: API.image_people,
          locations: [
            {
              title: 'Cupidatat non Proident',
              to: '/location/bar',
            },
            {
              title: 'tristique',
              to: '/location/baz',
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
  }
}

export function AlternativeName() {
  return {
    data() {
      return {
        item: {
          ...mock,
          image: API.image_people,
          alternativeFullName: '生懸命',
          language: 'ja',
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
  }
}

export function NoImage() {
  return {
    data() {
      return {
        item: {
          ...mock,
          locations: [
            {
              title: 'Cupidatat on Proident',
              to: '/location/bar',
            },
            {
              title: 'Tristique Abore et Dolore',
              to: '/location/baz',
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
  }
}

export function OneLocation() {
  return {
    data() {
      return {
        item: {
          ...mock,
          image: API.image_people,
          locations: [
            {
              title: 'cupidatat non proident',
              to: '/location/bar',
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
  }
}

export function NoPhoneNumber() {
  return {
    data() {
      return {
        item: {
          ...mock,
          image: API.image_people,
          locations: [
            {
              title: 'cupidatat non proident',
              to: '/location/bar',
            },
            {
              title: 'tristique',
              to: '/location/baz',
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
  }
}

export function NoLocation() {
  return {
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
  }
}
