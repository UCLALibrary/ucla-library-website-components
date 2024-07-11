import NavBreadcrumb from '@/lib-components/NavBreadcrumb'

// Storybook default settings
export default {
  title: 'NAV / Breadcrumb',
  component: NavBreadcrumb,
}

// Variations of stories below
export function Default() {
  return {
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb title="jane-doe" to="/about/news" parent-title="parent"/>',
  }
}
