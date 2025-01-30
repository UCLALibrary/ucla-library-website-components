import { computed, ref } from 'vue'

// Import component
import TableComponent from '@/lib-components/TableComponent'
import BlockStaffSubjectLibrarian from '@/lib-components/BlockStaffSubjectLibrarian'
import SmartLink from '@/lib-components/SmartLink'
import IconWithLink from '@/lib-components/IconWithLink'
import ResponsiveImage from '@/lib-components/ResponsiveImage'

/**
 * Displays data in an `<table>` table format
 * Was previously used for the staff directory as SectionStaffSubjectLibrarian.vue, but now has a filomography & credits implementation for the FTVA site.
 *
 * Props:
 * - tableHeaders: An array of strings representing the table headers. Also used to infer the # of columns in the table.
 * - tableCaption: A string representing the table caption, an accessible description of the table that is not displayed visually, but is read by screen readers.
 * - colorScheme: An optional string that can be added to the table class for styling purposes. 'paleblue' has some styles pre-implemented for the FTVA site.
 */

// Storybook default settings
export default {
  title: 'TABLE / Table with Header',
  component: TableComponent,
}

// Original data, represents Staff Subject Librarian data
const mockDefaultStaffSubjectLibrarian = [
  {
    subjectArea: 'Female Outlaw Studies',
    nameLast: 'Bullion',
    nameFirst: 'Laura',
    image: null,
    phone: null,
    jobTitle: 'Director of Outlaw Investegation',
    departments: [
      {
        id: '7272',
        title: 'Communications',
      },
    ],
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    alternativeName: [
      {
        fullName: '娘の洋子より',
        languageAltName: 'zh',
      },
    ],
    uri: 'about/staff/ariane-bicho',
    email: 'abicho@library.ucla.edu',
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies',
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
      },
    ],
    to: '/about/staff/ariane-bicho',
  },
  {
    subjectArea: 'Pirate Studies',
    nameLast: 'Bonny',
    image: null,
    nameFirst: 'Anne',
    phone: null,
    jobTitle: 'Director of Pirate Investegation',
    departments: [
      {
        id: '7272',
        title: 'Communications',
      },
    ],
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    alternativeName: [],
    uri: 'about/staff/ariane-bicho',
    email: 'abicho@library.ucla.edu',
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies',
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
      },
    ],
    to: '/about/staff/ariane-bicho',
  },
  {
    subjectArea: 'African American Studies',
    nameLast: 'Bicho',
    image: null,
    nameFirst: 'Ariane',
    phone: null,
    jobTitle: 'Director of Communications and Marketing',
    departments: [
      {
        id: '7272',
        title: 'Communications',
      },
    ],
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
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    alternativeName: [
      {
        fullName: 'のより娘',
        languageAltName: 'ch',
      },
    ],
    uri: 'about/staff/ariane-bicho',
    email: 'abicho@library.ucla.edu',
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies',
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
      },
    ],
    to: '/about/staff/ariane-bicho',
  },
]

const tableH = ['Academic Departments', 'Name', 'Contact Information']

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefaultStaffSubjectLibrarian, tableHeaders: tableH, tableCaption: 'Subject Librarians' }
    },
    components: { TableComponent, BlockStaffSubjectLibrarian, SmartLink, IconWithLink },
    template: `<tableComponent :tableHeaders="tableHeaders" :tableCaption="tableCaption">
            <BlockStaffSubjectLibrarian v-for="item, index in items" :key="index" :num-cells="3">
                  <template v-slot:column1>
        {{ item.subjectArea }}
      </template>
      <template v-slot:column2>
        <SmartLink :to="item.to" class="staff-name">
          {{ item.nameFirst }} {{ item.nameLast }}
           <span v-if="item.alternativeName && item.alternativeName.length !== 0" :lang="item.alternativeName[0].languageAltName">
             {{ item.alternativeName[0].fullName }}
           </span>
        </SmartLink>
        <div class="job-title" v-html="item.jobTitle" />
        <ul v-if="item.departments.length" class="departments">
          <li class="department">
            {{ item.departments[item.departments.length - 1].title }}
          </li>
        </ul>
        <div v-if="item.locations && item.locations.length !== 0">
          <IconWithLink
          v-for="location in item.locations " :key="'location-' + location.id" :text="location.title ?? ''"
          icon-name="svg-icon-location" :to="'/' + location.to"
          />
        </div>
      </template>
      <template v-slot:column3>
        <div class="email">
          <IconWithLink :text="item.email" icon-name="svg-icon-email" :to="'mailto:' + item.email" />
        </div>

        <div v-if="item.phone" class="phone">
          <IconWithLink :text="item.phone" icon-name="svg-icon-phone" :to="'tel:' + item.phone" />
        </div>
        <div v-if="item.consultation" class="consultation">
          <IconWithLink text="Book a consultation" icon-name="svg-icon-consultation" :to="item.consultation" />
        </div>
      </template>
    </BlockStaffSubjectLibrarian>
    </tableComponent>
  `,
  }
}

const mockFTVAtableHeaders = ['', 'Film', 'Role', 'Year']
const mockFTVAfilmdata = [
  {
    image: [
      {
        id: '3593326',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/gay-abel-bey.jpeg',
        height: 1434,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/gay-abel-bey.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/gay-abel-bey.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/gay-abel-bey.jpeg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    titleGeneral: 'Associated Film #1 Title',
    description: 'Associated Film #1 Description',
    roles: 'Associated Film #1 Role(s)',
    year: '1990',
    filmLink: [
      {
        uri: 'collections/l-a-rebellion/as-above-so-below',
        slug: 'as-above-so-below'
      }
    ]
  },
  {
    image: [
      {
        id: '3593326',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/gay-abel-bey.jpeg',
        height: 1434,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/gay-abel-bey.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/gay-abel-bey.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/gay-abel-bey.jpeg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    titleGeneral: 'Associated Film #2 Title',
    description: 'Associated Film #2 Description',
    roles: 'Associated Film #2 Role(s)',
    year: '1996',
    filmLink: [
      {
        uri: 'collections/l-a-rebellion/as-above-so-below',
        slug: 'as-above-so-below'
      }
    ]
  }]
// This component is used to display Filmography data in the FTVA site
// This story mocks an async data call for the Filmography data
export function FTVAFilmography() {
  return {
    data() {
      return { tableHeaders: mockFTVAtableHeaders, tableCaption: 'Filmography', colorScheme: 'paleblue' }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      const filmData = ref([])
      const fetchFilmData = async () => {
        const response = await new Promise((resolve) => {
          // mock getting film data from craft or some other async source
          setTimeout(() => {
            resolve(mockFTVAfilmdata)
          }, 1000)
        })
        filmData.value = response
      }
      fetchFilmData()
      // return the filmData to be used in the template
      return { filmData }
    },
    components: { TableComponent, BlockStaffSubjectLibrarian, ResponsiveImage, SmartLink },
    template: `
    <TableComponent :tableHeaders="tableHeaders" :tableCaption="tableCaption">
        <BlockStaffSubjectLibrarian v-for="item, index in filmData" :key="index" :num-cells="4">
      <template v-slot:column1>
      <div class="responsive-image">
        <ResponsiveImage :media="item.image[0]"/>
      </div>
      </template>
      <template v-slot:column2>
        <h1><smart-link class="film-title" :to="item.filmLink[0].uri">{{ item.titleGeneral }}</smart-link></h1>
        {{ item.description }}
      </template>
      <template v-slot:column3>
        {{ item.roles }}
      </template>
      <template v-slot:column4>
        {{ item.year }}
      </template>
      </BlockStaffSubjectLibrarian>
    </TableComponent>
  `,
  }
}

// TODO CHECK DATA MODEL IS CORRECT?
const mockFTVACredits = [{
  name: 'FirstName LastName',
  roles: 'Role 1, role 2, role 3, etc'
}, {
  name: 'AnotherName AnotherLastName',
  roles: 'Role 1, role 2'
}]
const mockFTVACreditstableHeaders = ['Name', 'Roles']
// Display Film Credits data in the FTVA site
export function FTVAFilmCredits() {
  return {
    data() {
      return { items: mockFTVACredits, tableHeaders: mockFTVACreditstableHeaders, tableCaption: 'Film Credits', colorScheme: 'paleblue' }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { TableComponent, BlockStaffSubjectLibrarian },
    template: `
    <TableComponent :tableHeaders="tableHeaders" :tableCaption="tableCaption" :colorScheme="colorScheme">
        <BlockStaffSubjectLibrarian v-for="item, index in items" :key="index" :num-cells="4">
      <template v-slot:column1>
        {{ item.name }}
      </template>
      <template v-slot:column2>
        {{ item.roles }}
      </template>
      </BlockStaffSubjectLibrarian>
    </TableComponent>
  `,
  }
}
