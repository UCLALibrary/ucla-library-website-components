import { computed } from 'vue'
import BannerFeatured from '@/lib-components/BannerFeatured'
import HeadingArrow from '@/lib-components/HeadingArrow'
import BlockFormData from '@/stories/mock/BlockFormData.json'
import { normalizeStoryTheme, STORY_THEME_OPTIONS } from './helpers/themeControls'

// Import mock api data
import * as API from '@/stories/mock-api.json'

function normalizeDateControlValue(value) {
  if (typeof value === 'number') {
    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? '' : date.toISOString()
  }
  return value || ''
}

export default {
  title: 'Banner Featured',
  component: BannerFeatured,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
    media: { control: 'object' },
    to: { control: 'text' },
    title: { control: 'text' },
    titleLink: { control: 'text' },
    category: { control: 'text' },
    description: { control: 'text' },
    breadcrumb: { control: 'text' },
    startDate: { control: 'date' },
    endDate: { control: 'date' },
    byline: { control: 'object' },
    locations: { control: 'object' },
    prompt: { control: 'text' },
    alignRight: { control: 'boolean' },
    ratio: { control: 'number' },
    sectionHandle: { control: 'text' },
    registerEvent: { control: 'boolean' },
    secondaryButtons: { control: 'object' },
  },
}

function Template(args) {
  return {
    setup() {
      return { args, normalizeDateControlValue }
    },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    components: { BannerFeatured },
    template: `
      <banner-featured
          :media="args.media"
          :to="args.to"
          :title="args.title"
          :titleLink="args.titleLink"
          :category="args.category"
          :description="args.description"
          :breadcrumb="args.breadcrumb"
          :start-date="normalizeDateControlValue(args.startDate)"
          :end-date="normalizeDateControlValue(args.endDate)"
          :byline="args.byline"
          :prompt="args.prompt"
          :align-right="args.alignRight"
          :ratio="args.ratio"
          :locations="args.locations"
          :section-handle="args.sectionHandle"
          :register-event="args.registerEvent"
          :secondary-buttons="args.secondaryButtons"
      />
    `,
  }
}

const mock = {
  image: API.image,
  to: '/help/foo/bar/',
  title: 'Curabitur Tortor Pellentesque Nibh Aenean',
  category: 'Ullamcorper',
  description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  breadcrumb: 'Lectus',
  startDate: '1995-12-16T03:24:00',
  endDate: '1995-12-17T03:24:00',
  byline: ['Excepteur sint occaecat', 'non proident, sunt in culpa qui'],
  locations: [
    {
      id: '523',
      title: 'Powell Library',
      to: 'visit/locations/powell-library',
    },
    {
      id: '801',
      title: 'YRL',
      to: 'visit/locations/yrl',
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

const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :byline="byline"
            :prompt="prompt"
            :locations="locations"
            :section-handle="sectionHandle"
        />
    `,
  }
}

export const Default = Template.bind({})
Default.args = {
  theme: 'default',
  media: mock.image,
  to: mock.to,
  title: mock.title,
  titleLink: '',
  category: mock.category,
  description: mock.description,
  breadcrumb: mock.breadcrumb,
  startDate: mock.startDate,
  endDate: mock.endDate,
  byline: mock.byline,
  locations: mock.locations,
  prompt: mock.prompt,
  alignRight: true,
  ratio: undefined,
  sectionHandle: mock.sectionHandle,
  registerEvent: false,
  secondaryButtons: undefined,
}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const LeftAlignedTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
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

export const LeftAligned = Template.bind({})
LeftAligned.args = {
  ...Default.args,
  alignRight: false,
}


const NotOnlineTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :start-date="startDate"
            :end-date="endDate"
            :prompt="prompt"
            :align-right="alignRight"
            :section-handle="sectionHandle"
        />
    `,
  }
}

export const NotOnline = Template.bind({})
NotOnline.args = {
  ...Default.args,
  locations: undefined,
}


const SlotTemplate = (args) => {
  void args
  return {
    data() {
      return {
        image: API.image,
        to: '/visit/foo/bar/',
        title: 'Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit',
        category: 'Torquent',
        breadcrumb: 'Torquent',
        startDate: '1995-12-16T03:24:00',
        endDate: '1995-12-17T03:24:00',
        prompt: 'Cursus Quis',
        alignRight: false,
        sectionHandle: '',
      }
    },
    components: { BannerFeatured, HeadingArrow },
    template: `
        <banner-featured
            :media="image"
            to="/about/foo/bar/"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :start-date="startDate"
            :end-date="endDate"
            :prompt="prompt"
            :align-right="alignRight"
            :section-handle="sectionHandle"
        >
            <heading-arrow
                v-if="breadcrumb"
                :text="breadcrumb"
            />
        </banner-featured>
    `,
  }
}

export const Slot = SlotTemplate.bind({})
Slot.args = {}


const LongHeadingTemplate = (args) => {
  void args
  return {
    data() {
      return {
        image: API.image,
        to: '/visit/foo/bar/',
        title: 'Sit Amet Augue Congue Elementum Aliquet Risus Ultricies',
        category: 'Curabitur',
        breadcrumb: 'Curabitur Sollicitudin',
        startDate: '1995-12-16T03:24:00',
        endDate: '1997-12-17T03:24:00',
        prompt: 'Amet Mauris',
        alignRight: false,
        sectionHandle: 'workshopOrEventSeries',
      }
    },
    components: { BannerFeatured, HeadingArrow },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :start-date="startDate"
            :end-date="endDate"
            :prompt="prompt"
            :align-right="alignRight"
            :section-handle="sectionHandle"
        >
            <heading-arrow
                v-if="breadcrumb"
                :text="breadcrumb"
            />
        </banner-featured>
    `,
  }
}

export const LongHeading = LongHeadingTemplate.bind({})
LongHeading.args = {}


const WideImageTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :start-date="startDate"
            :end-date="endDate"
            :prompt="prompt"
            :ratio="42"
            :locations="locations"
            :section-handle="sectionHandle"
        />
    `,
  }
}

export const WideImage = Template.bind({})
WideImage.args = {
  ...Default.args,
  ratio: 42,
}


const WideImageLeftAlignedTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :start-date="startDate"
            :end-date="endDate"
            :prompt="prompt"
            :ratio="42"
            :align-right="false"
            :locations="locations"
            :section-handle="sectionHandle"
        />
    `,
  }
}

export const WideImageLeftAligned = Template.bind({})
WideImageLeftAligned.args = {
  ...WideImage.args,
  alignRight: false,
}


const NoButtonTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :start-date="startDate"
            :end-date="endDate"
            :ratio="42"
            :align-right="false"
            :section-handle="sectionHandle"
        />
    `,
  }
}

export const NoButton = Template.bind({})
NoButton.args = {
  ...WideImageLeftAligned.args,
  to: '',
  prompt: '',
  locations: undefined,
}


const WithDescriptionTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :category="category"
            :to="to"
            :title="title"
            :description="description"
            :prompt="prompt"
        />
    `,
  }
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  ...Default.args,
}


const VideoTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock,
        video: API.video,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="video"
            :category="category"
            :to="to"
            :title="title"
            :description="description"
            :prompt="prompt"
        />
    `,
  }
}

export const Video = Template.bind({})
Video.args = {
  ...Default.args,
  media: API.video,
}


const WithBlockFormTemplate = (args) => {
  void args
  return {
    provide() {
      return {
        theme: computed(() => ''),
        // explicitly provide a computed property
        eventId: computed(() => '9383207'),
        blockFormData: computed(() => BlockFormData.mock0),
        libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
        registrationType: computed(() => 'in-person'),
      }
    },
    data() {
      return {
        ...mock,
        ...BlockFormData,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :category="category"
            :title="title"
            :description="description"
            :prompt="prompt"
            :registerEvent="true"
        />
    `,
  }
}

export const WithBlockForm = WithBlockFormTemplate.bind({})
WithBlockForm.args = {}


const mock2 = {
  image: API.image,
  to: '/help/foo/bar/',
  titleLink: '/confections/explore',
  title: 'The Curious Case of the Siamese Cats',
  category: 'Ullamcorper',
  description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  breadcrumb: 'Lectus',
  startDate: '1995-12-16T03:24:00',
  endDate: '1995-12-17T03:24:00',
  byline: ['Excepteur sint occaecat', 'non proident, sunt in culpa qui'],
  locations: [
    {
      id: '523',
      title: 'Powell Library',
      to: 'visit/locations/powell-library',
    },
  ],
  prompt: 'Cursus Quis',
  alignRight: true,
}

const mockDLC = {
  image: API.image,
  to: '/help/foo/bar/',
  title: 'Our Mission',
  description:
        'The UCLA Digital Library Program works collaboratively within the UCLA Library, across campus, and with a broad range of partners to preserve and provide enhanced access to local and global cultural heritage materials in support of the University’s teaching, learning, research and service mission.UCLA Digital Library Collections follow ethical and inclusive approaches to descriptive practices as outlined in Toward Ethical and Inclusive Descriptive Practices in UCLA Library Special Collections.',
}

const LinkedTitleTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mock2,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :titleLink= "titleLink"
            :category="category"
            :breadcrumb="breadcrumb"
            :byline="byline"
            :prompt="prompt"
            :locations="locations"
        />
    `,
  }
}

export const LinkedTitle = Template.bind({})
LinkedTitle.args = {
  ...Default.args,
  to: mock2.to,
  title: mock2.title,
  titleLink: mock2.titleLink,
  category: mock2.category,
  description: mock2.description,
  breadcrumb: mock2.breadcrumb,
  startDate: mock2.startDate,
  endDate: mock2.endDate,
  byline: mock2.byline,
  locations: mock2.locations,
}


const DLCTemplate = (args) => {
  void args
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        ...mockDLC,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"

            :title="title"
            :description="description"
        />
    `,
  }
}

export const DLC = Template.bind({})
DLC.args = {
  ...Default.args,
  theme: 'dlc',
  title: mockDLC.title,
  description: mockDLC.description,
  category: '',
  breadcrumb: '',
  startDate: '',
  endDate: '',
  byline: [],
  locations: undefined,
  prompt: '',
  sectionHandle: '',
}


const DLCLeftAlignedTemplate = (args) => {
  void args
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        ...mockDLC,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :title="title"
            :description="description"
            :align-right="false"
        />
    `,
  }
}

export const DLCLeftAligned = Template.bind({})
DLCLeftAligned.args = {
  ...DLC.args,
  alignRight: false,
}


const mockHelpSection = {
  image: API.image,
  title: 'Have other Questions?',
  description: 'We\'re here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.',
  prompt: 'Click Here for UCLA Library Locations',
  alignRight: true,
  secondaryButtons: [
    {
      label: 'UCLA Library Locations',
      to: '/visit/locations/'
    },
    {
      label: 'Contact Us',
      to: '/contact/'
    }
  ],
}

const HelpSectionTemplate = (args) => {
  void args
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        ...mockHelpSection,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :media="image"
            :to="to"
            :title="title"
            :description="description"
            :prompt="prompt"
            :align-right="alignRight"
            :secondary-buttons="secondaryButtons"
        />
    `,
  }
}

export const HelpSection = Template.bind({})
HelpSection.args = {
  ...DLC.args,
  title: mockHelpSection.title,
  description: mockHelpSection.description,
  prompt: mockHelpSection.prompt,
  alignRight: mockHelpSection.alignRight,
  secondaryButtons: mockHelpSection.secondaryButtons,
}

