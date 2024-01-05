import { MastheadSecondary } from '../lib-components'

export default {
  component: MastheadSecondary,
  title: 'Masthead / Secondary',
}

const mock = {
  title: 'Find and Reserve a Space',
  summary:
        '<p>Browse on-campus spaces for study, meetings, and group projects.</p>',
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { ...mock }
    },
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
        >
        </masthead-secondary>
    `,
  }
}

const mock2 = {
  title: 'Find and Reserve a Space',
  summary:
        '<p>Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey.</p> <h3>Learn how to</h3><ul><li>Find the Cafeteria</li><li>Create a Study Group</li><li>Navigate the Libraries</li></ul>',
}

export function LongText() {
  return {
    data() {
      return { ...mock2 }
    },
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
        >
        </masthead-secondary
    `,
  }
}

export function NoMolecule() {
  return {
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
            :has-molecules="false"
        />
    `,
  }
}

export function MeapTheme() {
  return {
    components: { MastheadSecondary },
    data: () => ({
      heroImage: {
        src: 'https://static.library.ucla.edu/craftassetsprod/MEAP/MEAP-images/_2560xAUTO_crop_center-center_none/meap-homepage-header.jpeg',
        sizes: '100vw',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        title: 'Lorem ipsum',
        caption: 'Lorem ipsum',
        height: 338,
        width: 1440,
      },
      title: 'Modern Endangered Archives Program',
      summary:
            '<p>Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about the available grant opportunities.</p>',
    }),
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
            theme="meap"
            :hero-image="heroImage"
        />
    `,
  }
}
