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
