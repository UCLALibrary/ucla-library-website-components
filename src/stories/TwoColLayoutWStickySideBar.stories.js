import TwoColLayoutWStickySideBar from "@/lib-components/TwoColLayoutWStickySideBar.vue"

// Storybook default settings
export default {
  title: 'LAYOUT / 2 Column Layout with Sticky Sidebar',
  components: BlockDate,
}

export function Default() {
  return {
    components: { TwoColLayoutWStickySideBar },
    template: '<TwoColLayoutWStickySideBar />',
  }
}
