import BannerHeader from '@/lib-components/BannerHeader'

// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockFormData from '@/stories/mock/BlockFormData.json'

export default {
  title: 'Banner Header',
  component: BannerHeader,
}

const mock = {
  image: API.image,
  to: '/app/foo/bar/',
  title: 'Curabitur Tortor Pellentesque Nibh Aenean',
  category: 'Lectus',
  startDate: '1995-12-17T03:24:00',
  endDate: '1995-12-17T03:24:00',
  byline: ['Jen Diamond', 'Pikku Lehtonen'],
  subjectAreas: [{ title: 'Ghosts' }, { title: 'Clowns' }],
  locations: [
    {
      id: '523',
      title: 'Powell Library',
      to: 'visit/locations/powell-library',
    },
    {
      id: '3062',
      title: 'Online',
      to: 'visit/locations/online',
    },
  ],
  prompt: 'Cursus Quis',
  alignRight: true,
  sectionHandle: 'event',
}

export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :to="to"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
  }
}

export function LeftAligned() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :to="to"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
  }
}

export function NoCategory() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :to="to"
           :title="title"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
  }
}

export function WithBylineAndSubjectAreas() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :to="to"
           :title="title"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :subjectAreas="subjectAreas"
           :prompt="prompt"
           :align-right="false"
           :section-handle="sectionHandle"
       />
    `,
  }
}

export function OnlyTitle() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :title="title"
           :align-right="false"
       />
    `,
  }
}

export function Video() {
  return {
    data() {
      return {
        ...mock,
        video: API.video,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="video"
           :title="title"
           :align-right="false"
       />
    `,
  }
}

export function WithContactInfo() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :to="to"
           :title="title"
           text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           email="ada@somewhere.com"
           phone="555-555-5555"
           address="1337 Trails End Road Fort Lauderdale, FL 33301"
           staff-directory-link="/about/staff?q=*&location=slug"
           address-link="https://map.ucla.edu/?k=false&id=81516"
           :prompt="prompt"
       />
    `,
  }
}

// --------- ARTICLE --------------

const article = {
  image: API.image,
  title: 'I Like Turtles',
  category: 'Library News',
  dateCreated: '2022-02-09T10:57:46-08:00',
  sectionHandle: 'article',
  byline: [' Written by Courtney Hoffner', 'Illustrations by Jen Diamond'],
  subjectAreas: [{ title: 'Ghosts' }, { title: 'Clowns' }],
  locations: [
    {
      id: '523',
      title: 'Powell Library',
      to: 'visit/locations/powell-library',
    },
    {
      id: '3062',
      title: 'Online',
      to: 'visit/locations/online',
    },
  ],
  alignRight: true,
  text: 'Turtles are an order of reptiles known as Testudines, characterized by a shell developed mainly from their ribs. Turtles are groups, big ones and small ones.',
}

export function ArticleDetail() {
  return {
    data() {
      return {
        ...article,
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :title="title"
           :byline="byline"
           :subjectAreas="subjectAreas"
           :dateCreated="dateCreated"
           :locations="locations"
           :text="text"
           :section-handle="sectionHandle"
       />
    `,
  }
}

export function ExternalLink() {
  return {
    data() {
      return {
        ...mock,
        to: 'https://an.external.url/',
      }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :to="to"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
  }
}

export function WithBlockForm() {
  return {
    data() {
      return {
        ...mock,
        ...BlockFormData,
      }
    },
    provide: {
      // explicitly provide a computed property
      eventId: '9383207',
      blockFormData: BlockFormData.mock1,
      libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
      registrationType: 'both',
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :media="image"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
           :registerEvent="true"
           :section-handle="sectionHandle"
       />
    `,
  }
}
