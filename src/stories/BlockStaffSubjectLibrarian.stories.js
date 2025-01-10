import { computed } from 'vue'
import BlockStaffSubjectLibrarian from '@/lib-components/BlockStaffSubjectLibrarian'

// Storybook default settings
export default {
  title: 'BLOCK / Staff / SubjectLibrarian',
  component: BlockStaffSubjectLibrarian,
}

const mockDeafult = {
  subjectArea: 'African American Studies',
  to: '/about/staff/ariane-bicho',
  nameLast: 'Bicho',
  nameFirst: 'Ariane',
  jobTitle: 'Super Duper Director of Marketing',
  departments: [
    {
      id: '7272',
      title: 'Gorilla Marketing'
    },
    {
      id: '7270',
      title: 'Communications'
    }
  ],
  locations: [
    {
      title: 'Richard C. Rudolph East Asian Library',
      to: 'visit/locations/east-asian-library',
      id: '11497'
    },
    {
      title: 'UCLA Film & Television Archive',
      to: 'visit/locations/film-television-archive',
      id: '11612'
    }
  ],
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies'
    },
    {
      id: '11955',
      title: 'Studious Studies Department'
    }
  ],
  alternativeName: [],
  uri: 'about/staff/ariane-bicho',
  email: 'abicho@library.ucla.edu',
  phone: '(222) 444-5555',
  consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
}

const mockAlternativeName = {
  subjectArea: 'African American Studies',
  to: '/about/staff/ariane-bicho',
  nameLast: 'Bicho',
  nameFirst: 'Ariane',
  jobTitle: 'Super Duper Director of Marketing',
  departments: [
    {
      id: '7272',
      title: 'Gorilla Marketing'
    },
    {
      id: '7270',
      title: 'Communications'
    }
  ],
  locations: [
    {
      title: 'Richard C. Rudolph East Asian Library',
      to: 'visit/locations/east-asian-library',
      id: '11497'
    },
    {
      title: 'UCLA Film & Television Archive',
      to: 'visit/locations/film-television-archive',
      id: '11612'
    }
  ],
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies'
    },
    {
      id: '11955',
      title: 'Studious Studies Department'
    }
  ],
  alternativeName: [
    {
      fullName: '司書',
      languageAltName: 'ja'
    }
  ],
  uri: 'about/staff/ariane-bicho',
  email: 'abicho@library.ucla.edu',
  phone: '(222) 444-5555',
  consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        item: {
          ...mockDeafult,
        },
      }
    },
    components: { BlockStaffSubjectLibrarian },
    template: `
      <block-staff-subject-librarian
        v-bind="item"
      />
  `,
  }
}

export function AlternativeName() {
  return {
    data() {
      return {
        item: {
          ...mockAlternativeName,
        },
      }
    },
    components: { BlockStaffSubjectLibrarian },
    template: `
      <block-staff-subject-librarian
        v-bind="item"
      />
  `,
  }
}

const mockFilm = {
          image: [
            {
              id: "3593326",
              src: "https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/gay-abel-bey.jpeg",
              height: 1434,
              width: 2560,
              srcset: "https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/gay-abel-bey.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/gay-abel-bey.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/gay-abel-bey.jpeg 2560w",
              alt: null,
              focalPoint: [
                0.5,
                0.5
              ]
            }
          ],
          titleGeneral: "Associated Film #1 Title",
          description: "Associated Film #1 Description",
          roles: "Associated Film #1 Role(s)",
          year: "1990",
          filmLink: [
            {
              uri: "collections/l-a-rebellion/as-above-so-below",
              slug: "as-above-so-below"
            }
          ]
}
export function FTVAFilmography() {
  return {
    data() {
      return {
        item: {
          ...mockFilm,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockStaffSubjectLibrarian },
    template: `
      <block-staff-subject-librarian
        v-bind="item"
      />
  `,
  }
}
