import HeadingArrow from '../lib-components/HeadingArrow'

export default {
  title: 'Heading / Arrow',
  component: HeadingArrow,
}

export function Default() {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow />',
  }
}

export function About() {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Staff Directory" to="/about/foo/bar/"/>',
  }
}

export function Visit() {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Visit the Library" to="/visit/foo/bar/" section="visit"/>',
  }
}

export function Help() {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Get Help With" to="/help/foo/bar/"/>',
  }
}

export function Section() {
  return {
    components: { HeadingArrow },
    template: '<heading-arrow text="Visit the Library" to="/visit/" section="visit"/>',
  }
}
