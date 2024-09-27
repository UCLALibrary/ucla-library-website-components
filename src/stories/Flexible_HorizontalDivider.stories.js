import FlexibleHorizontalDivider from '@/lib-components/Flexible/HorizontalDivider.vue'

export default {
  title: 'FLEXIBLE / Horizontal Divider',
  component: FlexibleHorizontalDivider,
}

const mockHorizontalDivider = {
  id: '1234556',
  typeHandle: 'horizontalDivider',
  horizontalDivider: true
}

// Default
export function Default() {
  return {
    data() {
      return {
        block: mockHorizontalDivider,
      }
    },
    // provide() {
    //   return {
    //     theme: computed(() => 'ftva'),
    //   }
    // },
    components: { FlexibleHorizontalDivider },
    template: '<flexible-horizontal-divider :block="block" />',
  }
}

// Hidden Divider
// export function Hidden() {
//   return {
//     data() {
//       return {
//         block: { ...mockHorizontalDivider, horizontalDivider: false },
//       }
//     },
//     components: { FlexibleHorizontalDivider },
//     template: '<flexible-horizontal-divider :block="block" />',
//   }
// }
