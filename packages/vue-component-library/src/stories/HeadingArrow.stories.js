import HeadingArrow from '../lib-components/HeadingArrow'

export default {
  title: 'Heading / Arrow',
  component: HeadingArrow,
}

const DefaultTemplate = (args) => {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const AboutTemplate = (args) => {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Staff Directory" to="/about/foo/bar/"/>',
  }
}

export const About = AboutTemplate.bind({})
About.args = {}

const VisitTemplate = (args) => {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Visit the Library" to="/visit/foo/bar/" section="visit"/>',
  }
}

export const Visit = VisitTemplate.bind({})
Visit.args = {}

const HelpTemplate = (args) => {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Get Help With" to="/help/foo/bar/"/>',
  }
}

export const Help = HelpTemplate.bind({})
Help.args = {}

const SectionTemplate = (args) => {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Visit the Library" to="/visit/" section="visit"/>',
  }
}

export const Section = SectionTemplate.bind({})
Section.args = {}
