import BlockTag from '@/lib-components/BlockTag'

export default {
  title: 'BLOCK / Tag',
  component: BlockTag
}

// MOCKS
// default library site
const defaultmock = {
  label: 'label text',
  // showRemoveIcon: false,
}
// ftva site
const ftvamock = {
  label: 'ftva label text',
  iconName: 'SvgIconList',
  // showRemoveIcon: true,
}

// STYLE OBJECTS
// cannot easily use scss variables here
const ftvastyles_secondary = {
  'padding': '8px 16px',
  'borderRadius': '16px',
  'fontSize': '15px',
  'fontWeight': 500,
  'height': '32px',
  'backgroundColor': 'transparent',
  'border': '1.5px solid #555',
  'color': '#555',
  '.label': {
    color: '#555'
  },
  '.svg': {
    height: '15px',
    width: '15px',
    marginRight: '8px'
  }
}

const ftvastyles_primary = {
  ...ftvastyles_secondary,
  'backgroundColor': '#115DAF',
  'border': 'none',
  'color': '#fff',
  '.label': {
    color: '#fff'
  }
}

export function Default() {
  return {
    data() {
      return {
        ...defaultmock,
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
    />
  `,
  }
}

export function PrimaryFTVA() {
  return {
    data() {
      return {
        ...ftvamock,
        ftvastyles: ftvastyles_primary
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        :iconName="iconName"
        :styles="ftvastyles"
    />
  `,
  }
}

export function SecondaryFTVA() {
  return {
    data() {
      return {
        ...ftvamock,
        ftvastyles: ftvastyles_secondary
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        :iconName="iconName"
        :styles="ftvastyles"
    />
  `,
  }
}
