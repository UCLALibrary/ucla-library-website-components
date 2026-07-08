import { MastheadSecondary } from '..'

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
const DefaultTemplate = (args) => {
  return {
    data() {
      return { ...mock }
    },
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
        />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const mock2 = {
  title: 'Find and Reserve a Space',
  summary:
        '<p>Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey.</p> <h3>Learn how to</h3><ul><li>Find the Cafeteria</li><li>Create a Study Group</li><li>Navigate the Libraries</li></ul>',
}

const LongTextTemplate = (args) => {
  return {
    data() {
      return { ...mock2 }
    },
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
        />
    `,
  }
}

export const LongText = LongTextTemplate.bind({})
LongText.args = {}

const NoMoleculeTemplate = (args) => {
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

export const NoMolecule = NoMoleculeTemplate.bind({})
NoMolecule.args = {}

const MeapThemeTemplate = (args) => {
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

export const MeapTheme = MeapThemeTemplate.bind({})
MeapTheme.args = {}
