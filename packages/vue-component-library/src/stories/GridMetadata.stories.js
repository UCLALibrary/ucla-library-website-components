import { computed } from 'vue'
import GridMetadata from '@/lib-components/GridMetadata.vue'

// Import mock api data
import * as API from '@/stories/mock-api.json'

export default {
  title: 'Funkhaus / Grid Metadata',
  component: GridMetadata,
}

const baseMetadataTable1 = {
  title: 'Access Information',
  items: [
    { label: 'Access Condition', value: { text: 'copyrighted' } },
    {
      label: 'Rights Statement',
      value: { text: 'UCLA Library Special Collections, A1713' },
    },
    {
      label: 'Rights Contact',
      value: {
        text: 'Charles E. Young Research Library, Box 951575, Los Angeles, CA 90095-1575.<br>Email: <a href="mailto:spec-coll@library.ucla.edu">spec-coll@library.ucla.edu</a>. Phone: <a href="tel:310 825-4988">(310) 825-4988</a>',
      },
    },
  ],
}

const baseMetadataTable2 = {
  title: 'Technical Details',
  items: [
    {
      label: 'License',
      image: API.image,
      value: {
        text: 'This work is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International</a>',
      },
    },
    {
      label: 'Manifest URL',
      showButtonIiif: true,
      buttonIiifTo:
                'https://www.figma.com/design/CDhWDARLb36ftkQce1LyLC/Breakpoints?node-id=75-12920&m=dev',
      value: [
        {
          label: 'Copy URL',
          variant: 'secondary',
          isOutlined: true,
          copyOnClick: true,
          copyUrl: 'https://example.com/resource/123?ref=storybook',
        },
        {
          label: 'Download',
          variant: 'secondary',
          isOutlined: true,
          to: '/src/assets/vue.svg',
          isDownload: true,
        },
      ],
    },
  ],
}

const baseMetadataTable3 = {
  title: 'Collection Information',
  items: [
    {
      label: 'Collection',
      value: { text: 'UCLA Digital Library' },
      image: API.image,
    },
    {
      label: 'Resource',
      value: { text: '<a href=\'https://ucla.edu\'>UCLA Homepage</a>' },
      image: API.image,
    },
  ],
}

const baseMetadataTable4 = {
  title: 'Publication Details',
  items: [
    {
      label: 'Publisher',
      value: { text: 'UCLA Press' },
    },
    {
      label: 'Publication Date',
      value: { text: '2024' },
    },
    {
      label: 'ISBN',
      value: { text: '978-0-123456-78-9' },
    },
  ],
}

const baseMetadataTable5 = {
  title: 'Digital Preservation',
  items: [
    {
      label: 'Format',
      value: { text: 'PDF/A' },
    },
    {
      label: 'Resolution',
      value: { text: '300 DPI' },
    },
  ],
}

const baseMetadataTable6 = {
  title: 'Usage Statistics',
  items: [
    {
      label: 'Views',
      value: { text: '1,234' },
    },
    {
      label: 'Downloads',
      value: { text: '567' },
    },
    {
      label: 'Last Accessed',
      value: { text: '2024-01-15' },
    },
  ],
}

const baseMetadataTable7 = {
  title: 'Related Resources',
  items: [
    {
      label: 'Similar Items',
      value: { text: '5 related documents found' },
    },
  ],
}

const baseMetadataTable8 = {
  title: 'Metadata Standards',
  items: [
    {
      label: 'Dublin Core',
      value: { text: 'Compliant' },
    },
    {
      label: 'MODS',
      value: { text: 'Available' },
    },
  ],
}

const baseMetadataTable9 = {
  title: 'Accessibility',
  items: [
    {
      label: 'WCAG Compliance',
      value: { text: 'Level AA' },
    },
    {
      label: 'Screen Reader',
      value: { text: 'Supported' },
    },
    {
      label: 'Alt Text',
      value: { text: 'Provided' },
    },
  ],
}

const baseMetadataTable10 = {
  title: 'System Information',
  items: [
    {
      label: 'Created',
      value: { text: '2024-01-01' },
    },
    {
      label: 'Modified',
      value: { text: '2024-01-15' },
    },
    {
      label: 'Version',
      value: { text: '1.2.3' },
    },
  ],
}

function Template(args) {
  return {
    components: { GridMetadata },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: `
          <GridMetadata :items="args.items" />
        `,
  }
}

function TemplateNoTheme(args) {
  return {
    components: { GridMetadata },
    setup() {
      return { args }
    },
    template: `
          <GridMetadata :items="args.items" />
        `,
  }
}

export const Default = Template.bind({})
Default.args = {
  items: [baseMetadataTable1, baseMetadataTable2],
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const ThreeItems = Template.bind({})
ThreeItems.args = {
  items: [baseMetadataTable1, baseMetadataTable2, baseMetadataTable3],
}

export const FourItems = Template.bind({})
FourItems.args = {
  items: [
    baseMetadataTable1,
    baseMetadataTable2,
    baseMetadataTable3,
    baseMetadataTable4,
  ],
}

export const FiveItems = Template.bind({})
FiveItems.args = {
  items: [
    baseMetadataTable1,
    baseMetadataTable2,
    baseMetadataTable3,
    baseMetadataTable4,
    baseMetadataTable5,
  ],
}

export const TenItems = Template.bind({})
TenItems.args = {
  items: [
    baseMetadataTable1,
    baseMetadataTable2,
    baseMetadataTable3,
    baseMetadataTable4,
    baseMetadataTable5,
    baseMetadataTable6,
    baseMetadataTable7,
    baseMetadataTable8,
    baseMetadataTable9,
    baseMetadataTable10,
  ],
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  items: [baseMetadataTable1],
}

export const Empty = Template.bind({})
Empty.args = {
  items: [],
}

export const NoTheme = TemplateNoTheme.bind({})
NoTheme.args = {
  items: [baseMetadataTable1, baseMetadataTable2],
}

export const MixedContent = Template.bind({})
MixedContent.args = {
  items: [
    {
      title: 'Basic Information',
      items: [
        { label: 'Title', value: { text: 'Sample Document' } },
        { label: 'Author', value: { text: 'John Doe' } },
      ],
    },
    {
      title: 'Media Content',
      items: [
        {
          label: 'Logo',
          value: { text: '' },
          image: API.image,
        },
        {
          label: 'Resource Link',
          value: {
            text: 'See the <a href="https://ucla.edu" target="_blank">UCLA Homepage</a> for more info.',
          },
          image: API.image,
        },
      ],
    },
    {
      title: 'Actions',
      items: [
        {
          label: 'Available Actions',
          value: [
            {
              label: 'View Details',
              variant: 'primary',
              isOutlined: false,
              to: '/details',
            },
            {
              label: 'Download PDF',
              variant: 'secondary',
              isOutlined: true,
              to: '/download.pdf',
              isDownload: true,
            },
          ],
        },
      ],
    },
  ],
}
