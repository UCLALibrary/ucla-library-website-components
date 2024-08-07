// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockStaffList from '@/lib-components/BlockStaffList'

// Storybook default settings
export default {
  title: 'BLOCK / Staff / List',
}

const mockDefault = {
  id: '2975759',
  sectionHandle: 'staffMember',
  slug: 'test-subject-librarian',
  uri: 'about/staff/test-subject-librarian',
  title: 'TEST - Subject Librarian',
  image: API.image_people,
  to: 'test-subject-librarian',
  staffName: 'TEST - Subject Librarian',
  jobTitle: 'Head of Everything',
  departments: [
    {
      id: '7272',
      title: 'Communications'
    },
    {
      id: '7270',
      title: 'East Asian Library'
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
      id: '11613'
    }
  ],
  pronouns: 'she/his/them',
  email: 'subject.librarian@email.com',
  phone: '(555) 475-1523',
  consultation: 'http://help.com',
  topics: [
    {
      title: 'diaries',
      id: '2975760'
    },
    {
      title: 'decorative arts',
      id: '2975783'
    }
  ],
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies'
    },
    {
      id: '11956',
      title: 'cats'
    }
  ],
  biography: '<p>li Wong is a stand-up comedian who has written and performed two specials: Baby Cobra and Hard Knock Wife. She co-wrote, produced, and starred in the romantic comedy Always Be My Maybe. She is the proud mother of two rowdy-ass girls who inspired this entire book. She aspires to lie down but somehow keeps getting pressured into doing more sh*t that gets in the way of her lying down.</p>',
  subjectLibrarian: 'yes',
  orcid: 'http://1234',
  publications: '<ul><li>Lembo, Mary Frances; Hallmark, Julie</li></ul>'
}

const mockAlternativeName = {
  id: '14632',
  sectionHandle: 'staffMember',
  slug: 'test-phyllis-blackshear',
  uri: 'about/staff/test-phyllis-blackshear',
  title: 'Test Alternative Name Phyllis Blackshear',
  image: {
    id: '48295',
    src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/clock1.jpg',
    height: 1920,
    width: 2560,
    srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/clock1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/clock1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/clock1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/clock1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/clock1.jpg 2560w',
    alt: null,
    focalPoint: [
      0.5,
      0.5
    ]
  },
  to: 'test-phyllis-blackshear',
  staffName: 'test_Phyllis Blackshear',
  alternativeFullName: '生懸命',
  language: 'ja',
  jobTitle: 'Senior Mail Processor',
  departments: [
    {
      id: '6365',
      title: 'Resource Acquisitions and Metadata Services'
    }
  ],
  locations: [
    {
      title: 'UCLA Film & Television Archive',
      to: 'visit/locations/film-television-archive',
      id: '11612'
    },
    {
      title: 'Music Library',
      to: 'visit/locations/music-library',
      id: '11512'
    }
  ],
  pronouns: null,
  email: 'pblack@library.ucla.edu',
  phone: '(310) 267-5484',
  consultation: null,
  topics: [
    {
      title: 'Art History',
      id: '11950'
    },
    {
      title: 'lower case test',
      id: '14633'
    },
    {
      title: 'test with the title case of in test',
      id: '20821'
    },
    {
      title: 'Title case with CAPS',
      id: '20824'
    }
  ],
  academicDepartments: [
    {
      id: '11955',
      title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974'
    },
    {
      id: '20827',
      title: 'test title case with in for test the CAPS'
    }
  ],
  biography: '<p>Phyllis combines the tenacity and courage of the finest tradition of investigative journalism with the stylish subtlety and profound insight of the born writer. His account of an ascent of Mount Everest has led to a general reevaluation of climbing and of the commercialization of what was once a romantic, solitary sport. While his account of the life and death of Christopher McCandless, who died of starvation after challenging the Alaskan wilderness, delves even more deeply and disturbingly into the fascination of nature and the devastating effects of its lure on a young and curious mind.</p>',
  subjectLibrarian: 'no',
  orcid: 'https://orcid.org/+0000-0001-8746-9239',
  publications: '<ul><li><p><strong>Johnson, M. W.</strong>, Abumeeiz, S. &amp; McAulay, E. \n(2021). “Teaching in the Digital Library: A Partnership Between Teaching\n Librarians and Digital Library Staff.” College &amp; Research Libraries\n News. 82(7). <a href=\"https://crln.acrl.org/index.php/crlnews/article/view/25033/32921\">https://crln.acrl.org/index.php/crlnews/article/view/25033/32921</a></p></li><li><p><strong>Johnson, M. W.</strong> &amp; Lasher, M. (2021). “The \nCommunity Workshop Series: A Case Study for Community-Engaged Learning \nin LIS.” Library Trends. 69(4). <a href=\"https://doi.org/10.1353/lib.2020.0045\">https://doi.org/10.1353/lib.2020.0045</a></p></li><li><p>Keralis, S. D. C., Jacobs, C. &amp; <strong>Johnson, M.W.</strong> \n(2021). “Collaborative Digital Projects in the Undergraduate Humanities \nClassroom: Case Studies with Timeline JS.” The Journal of Interactive \nTechnology &amp; Pedagogy. 19. <a href=\"https://jitp.commons.gc.cuny.edu/classroom-timeline-projects/\">https://jitp.commons.gc.cuny.edu/classroom-timeline-projects/</a>\n</p></li></ul>'
}

const mockNoImageOneLocation = {
  id: '11910',
  sectionHandle: 'staffMember',
  slug: 'sylvia-page',
  uri: 'about/staff/sylvia-page',
  title: 'Test  NO IMAGE Penelope Pitstop',
  image: null,
  to: 'sylvia-page',
  staffName: 'Test  NO IMAGE Penelope Pitstop',
  alternativeFullName: '生懸命',
  language: 'ja',
  jobTitle: 'Research and Instruction Librarian for Arts, Music, and Powell (AMP)',
  departments: [
    {
      id: '6339',
      title: 'User Engagement'
    }
  ],
  locations: [
    {
      title: 'Powell Library',
      to: 'visit/locations/powell-library',
      id: '523'
    }
  ],
  pronouns: 'she/her',
  email: 'thejendiamond@gmail.com',
  phone: '(323) 555-5555',
  consultation: 'https://calendar.library.ucla.edu/appointments/spage',
  topics: [
    {
      title: 'Zines',
      id: '11858'
    },
    {
      title: 'Comics/Graphic Novels',
      id: '11859'
    },
    {
      title: 'English Composition',
      id: '11860'
    },
    {
      title: 'dogs',
      id: '11959'
    },
    {
      title: 'balloons',
      id: '11952'
    }
  ],
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies'
    },
    {
      id: '11936',
      title: 'test african american studies'
    },
    {
      id: '11954',
      title: 'African Studies'
    },
    {
      id: '11955',
      title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974'
    },
    {
      id: '11956',
      title: 'cats'
    }
  ],
  biography: '<p>Sylvia Page works to support the research needs of the UCLA community through reference, instruction, outreach, and collections. Her experience prior to UCLA includes work in academic libraries, museums, and galleries.</p>',
  subjectLibrarian: 'yes',
  orcid: null,
  publications: null
}

const mockNoPhone = {
  id: '11907',
  sectionHandle: 'staffMember',
  slug: 'ariane-bicho',
  uri: 'about/staff/ariane-bicho',
  title: 'Test NO PHONE Jen Diamond',
  image: null,
  to: 'ariane-bicho',
  staffName: 'Test NO PHONE Jen Diamond',
  jobTitle: 'Director of Communications and Marketing',
  departments: [
    {
      id: '6359',
      title: 'Digital Library Program'
    }
  ],
  locations: [
    {
      title: 'Charles E. Young Research Library',
      to: 'visit/locations/young-research-library',
      id: '801'
    }
  ],
  pronouns: null,
  email: 'thejendiamond@gmail.com',
  phone: '',
  consultation: 'https://calendar.library.ucla.edu/appointments/abicho',
  topics: [],
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies'
    },
    {
      id: '11955',
      title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974'
    }
  ],
  biography: null,
  subjectLibrarian: 'yes',
  orcid: null,
  publications: null
}

const mockNoLocation = {
  id: '11827',
  sectionHandle: 'staffMember',
  slug: 'brigid-abreu',
  uri: 'about/staff/brigid-abreu',
  title: 'Test NO LOCATION Brigid Abreu',
  image: null,
  to: 'brigid-abreu',
  staffName: 'Test NO LOCATION Brigid Abreu',
  alternativeFullName: '生懸命',
  language: 'ja',
  jobTitle: 'Inventory Control Coordinator and Data Analyst',
  departments: [
    {
      id: '6357',
      title: 'Digital Initiatives and Information Technology'
    }
  ],
  locations: [],
  pronouns: null,
  email: 'bhornig@library.ucla.edu',
  phone: '(310) 825-6927',
  consultation: 'https://calendar.library.ucla.edu/appointments/babreu',
  topics: [],
  academicDepartments: [],
  biography: null,
  subjectLibrarian: 'yes',
  orcid: null,
  publications: null
}

const mockImageNull = {
  id: '4273',
  email: 'szlee@library.ucla.edu',
  phone: null,
  jobTitle: 'Public Programs and Communications Manager',
  staffName: 'image: null - Suzy Lee',
  to: '/about/staff/suzy-lee',
  consultation: null,
  departments: [
    {
      id: '7272',
      title: 'Communications'
    }
  ],
  locations: [],
  image: null,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        item: {
          ...mockDefault,
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

export function AlternativeName() {
  return {
    data() {
      return {
        item: {
          ...mockAlternativeName,
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

export function NoImage() {
  return {
    data() {
      return {
        item: {
          ...mockNoImageOneLocation,
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

export function OneLocation() {
  return {
    data() {
      return {
        item: {
          ...mockNoImageOneLocation,
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

export function NoPhoneNumber() {
  return {
    data() {
      return {
        item: {
          ...mockNoPhone,

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
          ...mockNoLocation,
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

export function ImageNull() {
  return {
    data() {
      return {
        item: {
          ...mockImageNull,
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
