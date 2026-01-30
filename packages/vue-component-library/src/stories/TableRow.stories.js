import { computed } from 'vue'
import TableRow from '@/lib-components/TableRow.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage'
import IconWithLink from '@/lib-components/IconWithLink'
import RichText from '@/lib-components/RichText.vue'

/**
 *
 * A component to display data in a `<tr>` element. As such, it should alwayds be used within a table's `<tbody>` tag, or with `TableComponent.vue`.
 *
 * Props:
 * - NumCells (integer): Will create that # of `<td>` elements with slots for content. Slots will have the names 'column1', 'column2', etc, and `<td>`'s will have the class 'column-1', 'column-2', etc.
 *
 */

// Storybook default settings
export default {
  title: 'TABLE / Table Row',
  component: TableRow,
}

const mockDefault = {
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

export function Default() {
  return {
    data() {
      return {
        item: {
          ...mockDefault,
        },
      }
    },
    components: { TableRow, SmartLink, IconWithLink },
    template: `
      <TableRow
        :num-cells="3"
      >
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
      </TableRow>
  `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
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
    components: { TableRow, SmartLink, IconWithLink },
    template: Default().template,
  }
}

// mock raw data from FTVA graphQL LA rebellion filmography
const mockFilm = {
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
    components: { TableRow, SmartLink, ResponsiveImage, RichText },
    template: `
      <TableRow
        :num-cells="4"
      >
      <template v-slot:column1>
      <div class="responsive-image">
        <ResponsiveImage :media="item.image[0]"/>
      </div>
      </template>
      <template v-slot:column2>
        <h1><SmartLink class="film-title" :to="item.filmLink[0].uri">{{ item.titleGeneral }}</SmartLink></h1>
        <RichText :rich-text-content="item.description" />
      </template>
      <template v-slot:column3>
        <p class="subtitle">
        {{ item.roles }}
         </p>
      </template>
      <template v-slot:column4>
        <p class="subtitle">
        {{ item.year }}
        </p>
      </template>
      </TableRow>
  `,
  }
}

// TODO CHECK DATA MODEL IS CORRECT?
const mockCredit = {
  name: 'FirstName LastName',
  roles: 'Role 1, role 2, role 3, etc'
}

export function FTVACredits() {
  return {
    data() {
      return {
        item: {
          ...mockCredit,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { TableRow },
    template: `
      <TableRow
        :num-cells="2"
      >
      <template v-slot:column1>
        {{ item.name }}
      </template>
      <template v-slot:column2>
        {{ item.roles }}
      </template>
      </TableRow>
  `,
  }
}
