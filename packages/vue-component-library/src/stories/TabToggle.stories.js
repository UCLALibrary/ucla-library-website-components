import { computed } from 'vue'
import TabItem from '../lib-components/TabItem.vue'
import TabList from '../lib-components/TabList.vue'
import SectionTeaserList from '@/lib-components/SectionTeaserList.vue'
import * as API from '@/stories/mock-api.json'
import router from '@/router'

export default {
  title: 'Tab Toggle',
  argTypes: {
    initialTab: { control: 'number' },
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    firstTabTitle: { control: 'text' },
    secondTabTitle: { control: 'text' },
    thirdTabTitle: { control: 'text' },
    firstTabIcon: { control: 'text' },
    secondTabIcon: { control: 'text' },
  },
}

const mockContent = {
  text1: 'Nordic classic hand-crafted Marylebone elegant soft power bespoke signature punctual pintxos handsome discerning Asia-Pacific global international. Exquisite Asia-Pacific Washlet sharp. Exquisite Lufthansa hub, concierge cosy bureaux finest joy global iconic Nordic Singapore. Hand-crafted joy alluring intricate.',
  text2: 'Cat ipsum dolor sit amet, bengal for donskoy, savannah. Birman. Russian blue british shorthair for donskoy bombay. American bobtail cheetah turkish angora yet british shorthair russian blue. Siamese jaguar, yet birman so persian and singapura. Siberian lynx ragdoll birman for egyptian mau. Munchkin ocicat tabby, yet ocicat, tiger puma panther. Jaguar panther so tomcat and siamese and bengal mouser.',
  text3: 'Thundercats hexagon pork belly kinfolk. Paleo franzen cornhole tote bag. Art party leggings green juice, before they sold out blackbird spyplane craft beer forage yes plz. Wolf mixtape neutral milk hotel skateboard coloring book.',
}

const mockComponentContent1 = [
  {
    image: null,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
  },
  {
    image: API.image,
    to: '/visit/foo/baz/',
    category: 'Sagittis',
    title: 'Amet nisl suscipit adipiscing bibendum lectus sed',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.',
  },
  {
    image: API.image,
    to: '/visit/foo/bat/',
    category: 'Tincidunt',
    title: 'Scelerisque varius morbi enim nunc ornare quam',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'Eu ultrices vitae auctor eu augue. Dolor morbi non arcu risus quis varius quam. Augue lacus viverra vitae congue eu consequat.',
  },
]

const mockComponentContent2 = [
  {
    image: API.image,
    to: '/visit/foo/ban/',
    category: 'Gravida',
    title: 'At varius vel pharetra vel turpis. Quam vulputate dignissim suspendisse in est ante in. Sed cras ornare arcu. Non diam phasellus vestibulum.',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'Accumsan tortor posuere ac ut consequat semper viverra libero.',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
  },
]

const DefaultTemplate = (args) => {
  router.push({
    query: {},
  })

  return {
    setup() {
      return { args }
    },
    data() {
      return { ...mockContent }
    },
    components: { TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list :initial-tab="args.initialTab" :alignment="args.alignment">
        
        <tab-item :title="args.firstTabTitle" :icon="args.firstTabIcon" :content="text1">
        </tab-item>

        <tab-item :title="args.secondTabTitle" :icon="args.secondTabIcon" :content="text2">
        </tab-item>

        <tab-item :title="args.thirdTabTitle" :content="text3">
        </tab-item>
      
      </tab-list>
    </div>`,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  initialTab: 0,
  alignment: 'left',
  firstTabTitle: 'Label1',
  secondTabTitle: 'Label2',
  thirdTabTitle: 'Label3',
  firstTabIcon: 'icon-calendar',
  secondTabIcon: 'icon-list',
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const SetInitialTabTemplate = (args) => {
  router.push({
    query: {},
  })

  return {
    setup() {
      return { args }
    },
    data() {
      return { ...mockContent }
    },
    components: { TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list :initial-tab="args.initialTab" :alignment="args.alignment">
        
        <tab-item :title="args.firstTabTitle" :icon="args.firstTabIcon" :content="text1">
        </tab-item>

        <tab-item :title="args.secondTabTitle" :icon="args.secondTabIcon" :content="text2">
        </tab-item>

        <tab-item :title="args.thirdTabTitle" :content="text3">
        </tab-item>
      
      </tab-list>
    </div>`,
  }
}

export const SetInitialTab = SetInitialTabTemplate.bind({})
SetInitialTab.args = {
  ...Default.args,
  initialTab: 1,
}

const FTVACenteredTemplate = (args) => {
  router.push({
    query: {},
  })

  return {
    setup() {
      return { args }
    },
    data() {
      return { ...mockContent }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list :initial-tab="args.initialTab" :alignment="args.alignment">
        
        <tab-item :title="args.firstTabTitle" :icon="args.firstTabIcon" :content="text1">
        </tab-item>

        <tab-item :title="args.secondTabTitle" :icon="args.secondTabIcon" :content="text2">
        </tab-item>

        <tab-item :title="args.thirdTabTitle" :content="text3">
        </tab-item>
      
      </tab-list>
    </div>`,
  }
}

export const FTVACentered = FTVACenteredTemplate.bind({})
FTVACentered.args = {
  ...Default.args,
  alignment: 'center',
}

const ToggledComponentsRightTemplate = (args) => {
  router.push({
    query: {},
  })

  return {
    setup() {
      return { args }
    },
    data() {
      return {
        items1: mockComponentContent1,
        items2: mockComponentContent2,
      }
    },
    components: { SectionTeaserList, TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list :initial-tab="args.initialTab" :alignment="args.alignment">
        
        <tab-item :title="args.firstTabTitle">
          <section-teaser-list
              :items="items1"
            />
        </tab-item>

        <tab-item :title="args.secondTabTitle">
          <section-teaser-list
            :items="items2"
          />
        </tab-item>

      </tab-list>
    </div>`,
  }
}

export const ToggledComponentsRight = ToggledComponentsRightTemplate.bind({})
ToggledComponentsRight.args = {
  initialTab: 0,
  alignment: 'right',
  firstTabTitle: 'Upcoming Events',
  secondTabTitle: 'Past Events',
}

const DLCThemeTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { TabItem, TabList },
    data() {
      return { ...mockContent }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
          <div class="wrapper">
            <tab-list :initial-tab="args.initialTab" :alignment="args.alignment">
              <tab-item :title="args.firstTabTitle" :content="text1">
              </tab-item>

              <tab-item :title="args.secondTabTitle" :content="text2">
              </tab-item>
            </tab-list>
          </div>
        `,
  }
}

export const DLCTheme = DLCThemeTemplate.bind({})
DLCTheme.args = {
  initialTab: 0,
  alignment: 'center',
  firstTabTitle: 'Alphabetical Sort',
  secondTabTitle: 'Numerical Sort',
}
