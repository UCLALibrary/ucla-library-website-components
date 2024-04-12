// Import component
import SectionStaffList from '@/lib-components/SectionStaffList'

// Import mock api data

// Storybook default settings
export default {
  title: 'SECTION / Staff / List',
  component: SectionStaffList,
}

const mockDefault = [
  {
    id: '2975759',
    sectionHandle: 'staffMember',
    slug: 'test-subject-librarian',
    uri: 'about/staff/test-subject-librarian',
    title: 'TEST - Subject Librarian',
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
        id: '11612'
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
  },
  {
    id: '11910',
    sectionHandle: 'staffMember',
    slug: 'sylvia-page',
    uri: 'about/staff/sylvia-page',
    title: 'Test  NO IMAGE Penelope Pitstop',
    image: [],
    to: 'sylvia-page',
    staffName: 'Test  NO IMAGE Penelope Pitstop',
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
  },

  {
    jobTitle: 'Inventory Control Coordinator and Data Analyst',
    staffName: 'Test NO LOCATION Brigid Abreu',
    to: 'brigid-abreu',
    alternativeFullName: '生懸命',
    language: 'ja',
    email: 'bhornig@library.ucla.edu',
    phone: '(310) 825-6927',
    consultation: 'https://calendar.library.ucla.edu/appointments/babreu',
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      }
    ],
    locations: [],
    image: []
  },
  {
    jobTitle: 'Senior Mail Processor',
    staffName: 'test_Phyllis Blackshear',
    to: 'test-phyllis-blackshear',
    alternativeFullName: 'もののけ姫',
    language: 'ja',
    email: 'pblack@library.ucla.edu',
    phone: '(310) 267-5484',
    consultation: null,
    departments: [
      {
        id: '6365',
        title: 'Resource Acquisitions and Metadata Services'
      }
    ],
    locations: [
      {
        id: '11612',
        title: 'UCLA Film & Television Archive',
        uri: 'visit/locations/film-television-archive'
      },
      {
        id: '11512',
        title: 'Music Library',
        uri: 'visit/locations/music-library'
      }
    ],
    image: {
      id: '60352',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/Dianne-Weinthal-1780a.jpeg',
      height: 3840,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 2560w',
      alt: 'color photograph of woman with long hair and hoop earrings wearing a black sweater against a blue background',
      focalPoint: [
        0.5,
        0.5
      ]
    },
  },
  {
    jobTitle: 'Associate University Librarian for User Engagement',
    staffName: 'Judy Consales',
    to: 'judy-consales',
    email: 'consales@library.ucla.edu',
    phone: '(310) 825-1201',
    consultation: 'https://calendar.library.ucla.edu/appointments/jconsales',
    departments: [
      {
        id: '6355',
        title: 'Administration'
      },
      {
        id: '6339',
        title: 'User Engagement'
      }
    ],
    locations: [
      {
        id: '4695',
        title: 'Louise M. Darling Biomedical Library',
        uri: 'visit/locations/biomed'
      },
      {
        id: '801',
        title: 'Charles E. Young Research Library',
        uri: 'visit/locations/young-research-library'
      }
    ],
    image: []
  },
  {
    jobTitle: 'Software Developer testing',
    staffName: 'Jen Diamond',
    to: 'jennifer-diamond',
    email: 'jendiamond@library.ucla.edu',
    phone: '(323) 363-0002',
    consultation: null,
    departments: [
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      },
      {
        id: '6359',
        title: 'Digital Library Program'
      }
    ],
    locations: [],
    image: {
      id: '11917',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/jendiamond.jpeg',
      height: 2560,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/jendiamond.jpeg 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/jendiamond.jpeg 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/jendiamond.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/jendiamond.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/jendiamond.jpeg 2560w',
      alt: 'Jendiamond',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    jobTitle: 'Director of Communications and Marketing',
    staffName: 'Test NO PHONE Lester Holt',
    to: 'ariane-bicho',
    email: 'lester.holt@gmail.com',
    phone: '',
    consultation: 'https://calendar.library.ucla.edu/appointments/abicho',
    departments: [
      {
        id: '6359',
        title: 'Digital Library Program'
      }
    ],
    locations: [
      {
        id: '801',
        title: 'Charles E. Young Research Library',
        uri: 'visit/locations/young-research-library'
      }
    ],
    image: []
  },
  {
    jobTitle: 'Head of Software Development and Library Systems',
    staffName: 'Joshua Gomez',
    to: 'jgomez',
    email: 'joshuagomez@library.ucla.edu',
    phone: '(310) 794-9797',
    consultation: null,
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      },
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      }
    ],
    locations: [
      {
        id: '523',
        title: 'Powell Library',
        uri: 'visit/locations/powell-library'
      }
    ],
    image: []
  },
  {
    jobTitle: 'Website Managing Editor & Content Design Librarian',
    staffName: 'Courtney Hoffner',
    to: 'courtney-hoffner',
    email: 'choffner@library.ucla.edu',
    phone: '(310) 825-0190',
    consultation: null,
    departments: [
      {
        id: '7272',
        title: 'Communications'
      }
    ],
    locations: [],
    image: []
  },
  {
    jobTitle: 'Public Programs and Communications Manager',
    staffName: 'Suzy Lee',
    to: 'suzy-lee',
    email: 'szlee@library.ucla.edu',
    phone: null,
    consultation: null,
    departments: [
      {
        id: '7272',
        title: 'Communications'
      }
    ],
    locations: [],
    image: []
  },
  {
    jobTitle: 'Lead UX Designer',
    staffName: 'Axa Liauw',
    to: 'axa-liauw',
    email: 'aliauw@library.ucla.edu',
    phone: '(222) 222-7777',
    consultation: 'https://calendar.library.ucla.edu/appointments/aliauw',
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      },
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      }
    ],
    locations: [],
    image: {
      id: '11921',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/turtleboy.jpg',
      height: 2560,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/turtleboy.jpg 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/turtleboy.jpg 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/turtleboy.jpg 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/turtleboy.jpg 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/turtleboy.jpg 2560w',
      alt: 'Turtleboy',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    jobTitle: 'Testing diacritics job hello',
    staffName: 'Áxa Lïauwé',
    to: 'áxa-lïauwé',
    email: 'aliauw@library.ucla.edu',
    phone: null,
    consultation: null,
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      }
    ],
    locations: [],
    image: {
      id: '18362',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/markus-spiske-fFRG_YEaOuE-unsplash.jpg',
      height: 1707,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/markus-spiske-fFRG_YEaOuE-unsplash.jpg 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/markus-spiske-fFRG_YEaOuE-unsplash.jpg 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/markus-spiske-fFRG_YEaOuE-unsplash.jpg 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/markus-spiske-fFRG_YEaOuE-unsplash.jpg 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/markus-spiske-fFRG_YEaOuE-unsplash.jpg 2560w',
      alt: 'Markus spiske f FRG Y Ea Ou E unsplash',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    jobTitle: 'Head of Everything',
    staffName: 'TEST - Subject Librarian',
    to: 'test-subject-librarian',
    email: 'subject.librarian@email.com',
    phone: '(555) 475-1523',
    consultation: 'http://help.com',
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
        id: '11497',
        title: 'Richard C. Rudolph East Asian Library',
        uri: 'visit/locations/east-asian-library'
      },
      {
        id: '11612',
        title: 'UCLA Film & Television Archive',
        uri: 'visit/locations/film-television-archive'
      }
    ],
    image: {
      id: '2975764',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/martini-cat.gif',
      height: 2701,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/martini-cat.gif 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/martini-cat.gif 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/martini-cat.gif 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/martini-cat.gif 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/martini-cat.gif 2560w',
      alt: 'Martini cat',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    jobTitle: 'Lead Applications Developer test',
    staffName: 'Parinita Mulak 🩷 image: null',
    to: 'parinita-mulak',
    email: 'pghorpade@library.ucla.edu',
    phone: '222-222-4444',
    consultation: null,
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      },
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      }
    ],
    locations: [],
    image: null,
  },
  {
    jobTitle: 'Health & Life Sciences Librarian',
    staffName: 'Antonia Osuna-Garcia',
    to: 'antonia-osuna-garcia',
    email: 'aogarcia@library.ucla.edu',
    phone: '(555) 555-5555',
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    departments: [
      {
        id: '6339',
        title: 'User Engagement'
      }
    ],
    locations: [
      {
        id: '4695',
        title: 'Louise M. Darling Biomedical Library',
        uri: 'visit/locations/biomed'
      },
      {
        id: '11560',
        title: 'Eugene and Maxine Rosenfeld Management Library',
        uri: 'visit/locations/management-library-eugene-maxine-rosenfeld'
      }
    ],
    image: []
  },
  {
    jobTitle: 'Research and Instruction Librarian for Arts, Music, and Powell (AMP)',
    staffName: 'Test  NO IMAGE Penelope Pitstop',
    to: 'sylvia-page',
    email: 'thejendiamond@gmail.com',
    phone: '(323) 555-5555',
    consultation: 'https://calendar.library.ucla.edu/appointments/spage',
    departments: [
      {
        id: '6339',
        title: 'User Engagement'
      }
    ],
    locations: [
      {
        id: '523',
        title: 'Powell Library',
        uri: 'visit/locations/powell-library'
      }
    ],
    image: []
  },
  {
    jobTitle: 'Software Developer',
    staffName: 'Ashton Prigge',
    to: 'ashton-prigge',
    email: 'aprigge@library.ucla.edu',
    phone: '222-333-6666',
    consultation: 'http://book.com',
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      },
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      }
    ],
    locations: [],
    image: [],
  },
  {
    jobTitle: 'Software Developer',
    staffName: 'Andrew Wallace',
    to: 'andrew-wallace',
    email: 'andrew@library.ucla.edu',
    phone: null,
    consultation: null,
    departments: [
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      },
      {
        id: '6359',
        title: 'Digital Library Program'
      }
    ],
    locations: [],
    image: []
  },
  {
    jobTitle: 'Visual Designer',
    staffName: 'Jess Divers',
    to: 'jess-divers',
    email: 'jdivers@library.ucla.edu',
    phone: '',
    consultation: 'https://calendar.library.ucla.edu/appointments/jdivers',
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      },
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      }
    ],
    locations: [],
    image: []
  },
  {
    jobTitle: 'Librarian for English & History; Lead for Teaching & Learning',
    staffName: 'Matthew Johnson',
    to: 'matthew-weirick-johnson',
    email: 'mattweirick@library.ucla.edu',
    phone: '(310) 825-7785',
    consultation: 'https://calendar.library.ucla.edu/appointments/mattjohnson',
    departments: [
      {
        id: '6339',
        title: 'User Engagement'
      }
    ],
    locations: [
      {
        id: '801',
        title: 'Charles E. Young Research Library',
        uri: 'visit/locations/young-research-library'
      }
    ],
    image: []
  }
]

const mockImageNull = [
  {
    id: '4273',
    email: 'szlee@library.ucla.edu',
    phone: null,
    jobTitle: 'Public Programs and Communications Manager',
    staffName: 'Suzy Lee',
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
    staffName: 'Suzy Lee'
  },
  {
    id: '3522',
    email: 'dianneweinthal@library.ucla.edu',
    phone: '',
    jobTitle: 'Visual Designer',
    staffName: 'Dianne Weinthal',
    to: '/about/staff/dianne',
    consultation: 'https://calendar.library.ucla.edu/appointments/dweinthal',
    departments: [
      {
        id: '6357',
        title: 'Digital Initiatives and Information Technology'
      },
      {
        id: '7250',
        title: 'Software Development and Library Systems'
      }
    ],
    locations: [],
    image: {
      id: '60352',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/Dianne-Weinthal-1780a.jpeg',
      height: 3840,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 2560w',
      alt: 'color photograph of woman with long hair and hoop earrings wearing a black sweater against a blue background',
      focalPoint: [
        0.5,
        0.5
      ]
    },
    staffName: 'Dianne Weinthal'
  }
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    components: { SectionStaffList },
    template: `
      <section-staff-list
        :items="items"
      />
  `,
  }
}

export function ImageNull() {
  return {
    data() {
      return { items: mockImageNull }
    },
    components: { SectionStaffList },
    template: `
      <section-staff-list
        :items="items"
      />
  `,
  }
}
