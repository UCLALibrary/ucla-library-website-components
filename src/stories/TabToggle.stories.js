import { computed } from 'vue'

import TabItem from '../lib-components/TabItem.vue'
import TabList from '../lib-components/TabList.vue'
import SectionTeaserList from '@/lib-components/SectionTeaserList.vue'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'Tab Toggle',
}

const mockContent = {
  text1: 'Nordic classic hand-crafted Marylebone elegant soft power bespoke signature punctual pintxos handsome discerning Asia-Pacific global international. Exquisite Asia-Pacific Washlet sharp. Exquisite Lufthansa hub, concierge cosy bureaux finest joy global iconic Nordic Singapore. Hand-crafted joy alluring intricate.',
  text2: 'Cat ipsum dolor sit amet, bengal for donskoy, savannah. Birman. Russian blue british shorthair for donskoy bombay. American bobtail cheetah turkish angora yet british shorthair russian blue. Siamese jaguar, yet birman so persian and singapura. Siberian lynx ragdoll birman for egyptian mau. Munchkin ocicat tabby, yet ocicat, tiger puma panther. Jaguar panther so tomcat and siamese and bengal mouser.',
  text3: 'Thundercats hexagon pork belly kinfolk. Paleo franzen cornhole tote bag. Art party leggings green juice, before they sold out blackbird spyplane craft beer forage yes plz. Wolf mixtape neutral milk hotel skateboard coloring book.'
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
  }
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

export function Default() {
  return {
    data() {
      return { ...mockContent }
    },
    components: { TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list>
        
        <tab-item title="Label 1" icon="icon-calendar" :content="text1">
        </tab-item>

        <tab-item title="Label 2" icon="icon-list" :content="text2">
        </tab-item>

        <tab-item title="Label 3" :content="text3">
        </tab-item>
      
      </tab-list>
    </div>`
  }
}

export function SetInitialTab() {
  return {
    data() {
      return { ...mockContent }
    },
    components: { TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list :initial-tab="1">
        
        <tab-item title="Label 1" icon="icon-calendar" :content="text1">
        </tab-item>

        <tab-item title="Label 2" icon="icon-list" :content="text2">
        </tab-item>

        <tab-item title="Label 3" :content="text3">
        </tab-item>
      
      </tab-list>
    </div>`
  }
}

export function FTVACentered() {
  return {
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
      <tab-list alignment="center">
        
        <tab-item title="Label 1" icon="icon-calendar" :content="text1">
        </tab-item>

        <tab-item title="Label 2" icon="icon-list" :content="text2">
        </tab-item>

        <tab-item title="Label 3" :content="text3">
        </tab-item>
      
      </tab-list>
    </div>`
  }
}

export function ToggledComponentsRight() {
  return {
    data() {
      return {
        items1: mockComponentContent1,
        items2: mockComponentContent2
      }
    },
    components: { SectionTeaserList, TabItem, TabList },
    template: `<div class="wrapper">
      <tab-list alignment="right">
        
        <tab-item title="Upcoming Events">
          <section-teaser-list
              :items="items1"
            />
        </tab-item>

        <tab-item title="Past Events">
          <section-teaser-list
            :items="items2"
          />
        </tab-item>

      </tab-list>
    </div>`
  }
}
