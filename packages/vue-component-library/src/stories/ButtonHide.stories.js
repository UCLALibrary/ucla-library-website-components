import ButtonHide from '@/lib-components/ButtonHide'

export default {
  title: 'BUTTON / Hide',
  component: ButtonHide,
}

// Variations of stories below
export function Default() {
  return {
    components: { ButtonHide },
    template: '<button-hide/>',
  }
}
