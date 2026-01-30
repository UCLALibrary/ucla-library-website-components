import { computed } from 'vue'
import ModalFilter from '@/lib-components/ModalFilter.vue'

// Real data items for ModalFilter
const realItems = [
  { title: 'Arapaho Indians', to: '/search/arapaho-indians', number: 1 },
  {
    title: 'AIDS activists--California--San Francisco',
    to: '/search/aids-activists-california-san-francisco',
    number: 8,
  },
  {
    title: 'Chandler, Norman, 1899-1973',
    to: '/search/chandler-norman-1899-1973',
    number: 2,
  },
  {
    title: 'AIDS phobia--California',
    to: '/search/aids-phobia-california',
    number: 10,
  },
  {
    title: 'Coffin, George Holman Jr., 1887-1966',
    to: '/search/coffin-george-holman-jr-1887-1966',
    number: 1,
  },
  { title: 'ARCO Products Co.', to: '/search/arco-products-co', number: 1 },
  {
    title: 'Griffith, Thomas L. (Thomas Lee), Jr.',
    to: '/search/griffith-thomas-l-thomas-lee-jr',
    number: 1,
  },
  {
    title: 'Aafje (Schooner yacht)',
    to: '/search/aafje-schooner-yacht',
    number: 1,
  },
  {
    title: 'Kol-Chob-te-Wah -Clergy--California--Los Angeles',
    to: '/search/kol-chob-te-wah-clergy-california-los-angeles',
    number: 1,
  },
  { title: 'Aaron, Len', to: '/search/aaron-len', number: 1 },
  {
    title: '911 (Emergency telephone number)',
    to: '/search/911-emergency-telephone-number',
    number: 1,
  },
  {
    title: 'Abandonment of automobiles--California',
    to: '/search/abandonment-of-automobiles-california',
    number: 1,
  },
  {
    title: 'AFL-CIO.Building Service Employees. Local 399',
    to: '/search/afl-cio-building-service-employees-local-399',
    number: 1,
  },
  { title: 'Abbots--Japan', to: '/search/abbots-japan', number: 1 },
  {
    title: 'AIDS (Disease)--California--Los Angeles County',
    to: '/search/aids-disease-california-los-angeles-county',
    number: 1,
  },
  {
    title: 'Abbott, Charles F., 1876-1936',
    to: '/search/abbott-charles-f-1876-1936',
    number: 1,
  },
  {
    title: 'AIDS (Disease)--Law and legislation--California--Public opinion',
    to: '/search/aids-disease-law-and-legislation-california-public-opinion',
    number: 3,
  },
  {
    title: 'Abbott, Harry "Casey" S., 1884-1957',
    to: '/search/abbott-harry-casey-s-1884-1957',
    number: 5,
  },
  {
    title: 'AIDS (Disease)--Patients--California--Los Angeles County',
    to: '/search/aids-disease-patients-california-los-angeles-county',
    number: 2,
  },
  {
    title: 'Abbott, Lillian, b. 1884',
    to: '/search/abbott-lillian-b-1884',
    number: 4,
  },
  {
    title: 'AIDS (Disease)--Patients--Civil rights--United States',
    to: '/search/aids-disease-patients-civil-rights-united-states',
    number: 1,
  },
  { title: 'Abed, Sam', to: '/search/abed-sam', number: 1 },
  {
    title: 'AIDS (Disease)--Patients--Legal status, laws, etc.--United State',
    to: '/search/aids-disease-patients-legal-status-laws-etc-united-state',
    number: 1,
  },
  {
    title: 'Abeel, Virginia Chatterton, 1920 or 21',
    to: '/search/abeel-virginia-chatterton-1920-or-21',
    number: 1,
  },
  {
    title: 'AIDS (Disease)--Public opinion',
    to: '/search/aids-disease-public-opinion',
    number: 6,
  },
  {
    title: 'Abel, Walter D. (Walter David), 1884-1955',
    to: '/search/abel-walter-d-walter-david-1884-1955',
    number: 1,
  },
  {
    title: 'AIDS Project Los Angeles',
    to: '/search/aids-project-los-angeles',
    number: 5,
  },
  { title: 'Abeles, Harold A.', to: '/search/abeles-harold-a', number: 1 },
  // Extended dataset with higher numbers
  { title: 'People', to: '/search/people', number: 2834 },
  {
    title: 'Lawyers--California--Los Angeles',
    to: '/search/lawyers-california-los-angeles',
    number: 488,
  },
  { title: 'Events', to: '/search/events', number: 1067 },
  {
    title: 'Floats (Parades)--California--Pasadena',
    to: '/search/floats-parades-california-pasadena',
    number: 484,
  },
  { title: 'Culture', to: '/search/culture', number: 1024 },
  { title: 'Transportation', to: '/search/transportation', number: 481 },
  { title: 'Entertainment', to: '/search/entertainment', number: 1001 },
  { title: 'Government', to: '/search/government', number: 476 },
  { title: 'Lifestyle', to: '/search/lifestyle', number: 906 },
  {
    title: 'Los Angeles Memorial Coliseum (Los Angeles, Calif.)',
    to: '/search/los-angeles-memorial-coliseum-los-angeles-calif',
    number: 393,
  },
  { title: 'Arts', to: '/search/arts', number: 694 },
  { title: 'Landmarks', to: '/search/landmarks', number: 391 },
  {
    title: 'Tournament of Roses',
    to: '/search/tournament-of-roses',
    number: 685,
  },
  {
    title: 'Judges--California--Los Angeles',
    to: '/search/judges-california-los-angeles',
    number: 322,
  },
  {
    title: 'Parades & processions--California--Pasadena',
    to: '/search/parades-processions-california-pasadena',
    number: 673,
  },
  {
    title: 'Actresses--American--California--Los Angeles',
    to: '/search/actresses-american-california-los-angeles',
    number: 321,
  },
  { title: 'Environment', to: '/search/environment', number: 620 },
  {
    title: 'Police--California--Los Angeles',
    to: '/search/police-california-los-angeles',
    number: 314,
  },
  { title: 'Activism', to: '/search/activism', number: 609 },
  {
    title: 'Arrivals & departures--American--California--Los Angeles',
    to: '/search/arrivals-departures-american-california-los-angeles',
    number: 297,
  },
  {
    title: 'Judicial proceedings--California--Los Angeles',
    to: '/search/judicial-proceedings-california-los-angeles',
    number: 602,
  },
  { title: 'Education', to: '/search/education', number: 288 },
  { title: 'Legal', to: '/search/legal', number: 597 },
  { title: 'Religion', to: '/search/religion', number: 281 },
  { title: 'Youth', to: '/search/youth', number: 558 },
  { title: 'Disaster', to: '/search/disaster', number: 265 },
  { title: 'Sports', to: '/search/sports', number: 503 },
  { title: 'Business', to: '/search/business', number: 250 },
]

// Helper function to generate additional sample items if needed
function generateSampleItems(count) {
  const items = []
  for (let i = 1; i <= count; i++) {
    items.push({
      title: `Sample Item ${i}`,
      to: `/item/${i}`,
      number: i,
    })
  }
  return items
}

// Storybook default settings
export default {
  title: 'Funkhaus / Modal Filter',
  component: ModalFilter,
}

// Variations of stories below
export function Default() {
  return {
    components: { ModalFilter },
    data() {
      return {
        props: {
          isOpen: true,
          items: realItems,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
        <div style="padding: 40px; position: relative; background: #f5f5f5;">
            <button @click="props.isOpen = true">Open Modal</button>
            <modal-filter v-bind="props" @close="handleClose" />
        </div>
        `,
    methods: {
      handleClose() {
        this.props.isOpen = false
      },
    },
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function FewItems() {
  return {
    components: { ModalFilter },
    data() {
      return {
        props: {
          isOpen: true,
          items: realItems.slice(0, 5),
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
        <div style="padding: 40px; position: relative; background: #f5f5f5;">
            <button @click="props.isOpen = true">Open Modal</button>
            <modal-filter v-bind="props" @close="handleClose" />
        </div>
        `,
    methods: {
      handleClose() {
        this.props.isOpen = false
      },
    },
  }
}

export function ManyItems() {
  return {
    components: { ModalFilter },
    data() {
      return {
        props: {
          isOpen: true,
          items: generateSampleItems(21963),
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
        <div style="padding: 40px; position: relative; background: #f5f5f5;">
            <button @click="props.isOpen = true">Open Modal</button>
            <modal-filter v-bind="props" @close="handleClose" />
        </div>
        `,
    methods: {
      handleClose() {
        this.props.isOpen = false
      },
    },
  }
}

export function EmptyItems() {
  return {
    components: { ModalFilter },
    data() {
      return {
        props: {
          isOpen: true,
          items: [],
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
        <div style="padding: 40px; position: relative; background: #f5f5f5;">
            <button @click="props.isOpen = true">Open Modal</button>
            <modal-filter v-bind="props" @close="handleClose" />
        </div>
        `,
    methods: {
      handleClose() {
        this.props.isOpen = false
      },
    },
  }
}
