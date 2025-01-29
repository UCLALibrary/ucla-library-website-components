import { computed } from 'vue'
import BlockStaffSubjectLibrarian from '@/lib-components/BlockStaffSubjectLibrarian'
import SmartLink from '@/lib-components/SmartLink'
import ResponsiveImage from '@/lib-components/ResponsiveImage'
import IconWithLink from '@/lib-components/IconWithLink'

/**
 *
 * A component to display data in a table row. As such, it should alwayds be used within a table's tbody tag.
 *
 * Built originally for the staff directory, it now has slots to allow any data to be displayed in a table row.
 *
 * The component can be configured 2 ways:
 * - soon to be @deprecated (CLASSIC) With a BlockStaffListItemType object, whose fields should be used for each prop in the component. This will transform the data into staff directory format. This method will be removed when APPS-3132 is completed.
 * - (NEW / GENERIC) With the 'numExtraCells' prop, which will create that many extra slots for data to be displayed. Slots will have the names 'column1', 'column2', etc.
 *
 * The Default & AlternativeName stories show the component in staff directory format. The FTVAFilmography story shows the component in a generic format.
 *
 */

// Storybook default settings
export default {
  title: 'BLOCK / Staff / SubjectLibrarian',
  component: BlockStaffSubjectLibrarian,
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

// Variations of stories below
// export function Default() {
//   return {
//     data() {
//       return {
//         item: {
//           ...mockDefault,
//         },
//       }
//     },
//     components: { BlockStaffSubjectLibrarian },
//     template: `
//       <block-staff-subject-librarian
//         v-bind="item"
//       />
//   `,
//   }
// }

// export function AlternativeName() {
//   return {
//     data() {
//       return {
//         item: {
//           ...mockAlternativeName,
//         },
//       }
//     },
//     components: { BlockStaffSubjectLibrarian },
//     template: `
//       <block-staff-subject-librarian
//         v-bind="item"
//       />
//   `,
//   }
// }

// NEW DEFAULT
// TODO COPY BOILERPLATE LOGIC AS YOU REMOVE PROPS
export function Default() {
  return {
    data() {
      return {
        item: {
          ...mockDefault,
        },
      }
    },
    components: { BlockStaffSubjectLibrarian, SmartLink, IconWithLink },
    template: `
      <BlockStaffSubjectLibrarian
        :num-extra-cells="3"
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
        <div class="job-title" :v-html="item.jobTitle" />
        <ul v-if="item.departments.length" class="departments">
          <li class="department">
            {{ item.departments[item.departments.length - 1].title }}
          </li>
        </ul>
        <div v-if="item.locations.length">
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
  `,
  }
}

// export function AlternativeName() {
//   return {
//     data() {
//       return {
//         item: {
//           ...mockAlternativeName,
//         },
//       }
//     },
//     components: { BlockStaffSubjectLibrarian },
//     template: `
//       <block-staff-subject-librarian
//         :num-extra-cells="3"
//       />
//   `,
//   }
// }

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
    components: { BlockStaffSubjectLibrarian, SmartLink, ResponsiveImage },
    template: `
      <BlockStaffSubjectLibrarian
        :num-extra-cells="4"
      >
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
    components: { BlockStaffSubjectLibrarian },
    template: `
      <BlockStaffSubjectLibrarian
        :num-extra-cells="2"
      >
      <template v-slot:column1>
        {{ item.name }}
      </template>
      <template v-slot:column2>
        {{ item.roles }}
      </template>
      </BlockStaffSubjectLibrarian>
  `,
  }
}