import { computed, onBeforeUnmount, onMounted } from "vue"
import router from "@/router"
import NavBreadcrumb from "@/lib-components/NavBreadcrumb"
import { useGlobalStore } from "@/stores/GlobalStore"

// Storybook default settings
export default {
    title: "NAV / Breadcrumb",
    component: NavBreadcrumb,
    decorators: [
        () => ({
            router,
            template: "<story />",
        }),
    ],
}

function Template(args) {
    router.push(args.to)
    return {
        setup() {
            onMounted(() => {
                const globalStore = useGlobalStore()

                const updateWinWidth = () => {
                    globalStore.winWidth = window.innerWidth
                }

                // Set initial winWidth
                updateWinWidth()

                window.addEventListener("resize", updateWinWidth)

                // Clean up
                onBeforeUnmount(() => {
                    window.removeEventListener("resize", updateWinWidth)
                })
            })

            return { args }
        },
        components: { NavBreadcrumb },
        template: '<nav-breadcrumb v-bind="args" />',
    }
}

export const Default = Template.bind({})
Default.args = {
    to: "/arts-library/arts-library-collections-access-and-services-during-seismic-construction-closure",
}

export const MultipleNesting = Template.bind({})
MultipleNesting.args = {
    to: "/explore-collections/watch-and-listen-online/senator-john-f.-kennedy-gives-press-conference-in-los-angeles",
}

export const MultipleNestingCollapsed = Template.bind({})
MultipleNestingCollapsed.args = {
    to: "/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article",
}

function TemplateFTVA(args) {
    router.push(args.to)
    return {
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        setup() {
            onMounted(() => {
                const globalStore = useGlobalStore()

                const updateWinWidth = () => {
                    globalStore.winWidth = window.innerWidth
                }

                updateWinWidth()

                window.addEventListener("resize", updateWinWidth)

                onBeforeUnmount(() => {
                    window.removeEventListener("resize", updateWinWidth)
                })
            })
            return { args }
        },
        components: { NavBreadcrumb },
        template: '<nav-breadcrumb v-bind="args" />',
    }
}

export const FTVA = TemplateFTVA.bind({})
FTVA.args = {
    to: "/watch-and-listen-online/senator-john-f.-kennedy-gives-press-conference-in-los-angeles",
}
