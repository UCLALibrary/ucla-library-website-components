import { computed } from "vue"
import NavBreadcrumb from "@/lib-components/NavBreadcrumb"

// Storybook default settings
export default {
    title: "NAV / Breadcrumb",
    component: NavBreadcrumb,
}

// Variations of stories below
export function Default() {
    return {
        components: { NavBreadcrumb },
        template:
            '<nav-breadcrumb title="jane doe" to="/about/news" parent-title="parent"/>',
    }
}

export function MultipleNesting() {
    return {
        components: { NavBreadcrumb },
        template:
            '<nav-breadcrumb uri="/explore-collections/watch-and-listen-online/KTLA-News-Project-Extra-Demo-Text"/>',
    }
}

export function MultipleNestingCollapsed() {
    return {
        components: { NavBreadcrumb },
        template:
            '<nav-breadcrumb uri="/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/jfk-article-title"/>',
    }
}

export function FTVA() {
    return {
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { NavBreadcrumb },
        template:
            '<nav-breadcrumb uri="/explore-collections/watch-and-listen-online/KTLA-News-Project-Extra-Demo-Text"/>',
    }
}
