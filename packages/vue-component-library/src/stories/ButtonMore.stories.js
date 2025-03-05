import ButtonMore from '@/lib-components/ButtonMore'

export default {
  title: 'BUTTON / More',
  component: ButtonMore,
}

// Variations of stories below
export function Default() {
  return {
    components: { ButtonMore },
    template: '<button-more/>',
  }
}

export function WithAlternateText() {
  return {
    components: { ButtonMore },
    template: '<button-more text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>',
  }
}

export function WithLink() {
  return {
    components: { ButtonMore },
    template: '<button-more text="See More" to="visit/events-exhibits"/>',
  }
}
