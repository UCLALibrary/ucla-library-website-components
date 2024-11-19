import { computed } from 'vue'
import BlockTag from '@/lib-components/BlockTag'

/**
 * A component to display a non-interactive tag with a label and an optional icon. <br>
 * <sub>(For an interactive tag that can be clicked to remove it from a list, try BlockRemoveSearchFilter). </sub>
 *
 * Props:
 * - <b>label</b>: A string representing the text to display in the tag
 * - <b>iconName</b>: A string representing the name of the icon to display in the tag. <br>
 * <sub>Valid names: <i>SvgIconGuest, SvgIconFilm, SvgIconTV, SvgIconFilmreel, SvgIconDigital, SvgIconOnline, SvgIconFamilyFriendly</i></sub>
 * - <b>isSecondary</b>: A boolean value to determine if the tag is styled with primary or secondary styles
 *
 * Props added 2024-11-19:
 *
 * - <b>isHighlighted</b>: A boolean value to determine if the tag is styled with highlight styles
 */
export default {
  title: 'BLOCK / Tag',
  component: BlockTag
}

// MOCKS
// default library site
const defaultmock = {
  label: 'label text',
}
// ftva site
const ftvamock = {
  label: 'ftva label text',
  iconName: 'SvgIconGuest',
}

// ftva site
const ftvamockwLinkLabel = {
  label: 'ghost tag',
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
        ...ftvamock
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
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

export function SecondaryFTVA() {
  return {
    data() {
      return {
        ...ftvamock
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        :iconName="iconName"
        isSecondary="true"
    />
  `,
  }
}

export function SecondaryFTVANoIcon() {
  return {
    data() {
      return {
        ...ftvamockwLinkLabel
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        isSecondary="true"
    />
  `,
  }
}

export function SecondaryFTVAHighlighted() {
  return {
    data() {
      return {
        ...ftvamock
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        isSecondary="true"
        isHighlighted="true"
    />
  `,
  }
}
