import { computed, onBeforeUnmount, onMounted } from "vue"
import router from "@/router"
import ButtonDropdown from "@/lib-components/ButtonDropdown.vue"
import { useGlobalStore } from "@/stores/GlobalStore"

// Storybook default settings
export default {
    title: "BUTTON / Dropdown",
    component: ButtonDropdown,
    decorators: [
        () => ({
            router,
            template: "<story />",
        }),
    ],
}

const mockArticle =
    "https://www.library.ucla.edu/about/news/the-75th-anniversary-of-the-university-archives"

const mockSocialList = {
    buttonTitle: "Share",
    hasIcon: true,
    buttonIconName: "svg-icon-ftva-share",
    dropdownList: [
        {
            dropdownItemTitle: "Copy Link",
            dropdownItemUrl: "",
            iconName: "svg-icon-ftva-social-link",
        },
        {
            dropdownItemTitle: "Email",
            dropdownItemUrl: "",
            iconName: "svg-icon-ftva-social-email",
        },
        {
            dropdownItemTitle: "Facebook",
            dropdownItemUrl: "https://www.facebook.com/sharer/sharer.php?u=",
            iconName: "svg-icon-ftva-social-facebook",
        },
        {
            dropdownItemTitle: "X",
            dropdownItemUrl: "https://twitter.com/share?url=",
            iconName: "svg-icon-ftva-social-x",
        },
    ],
}

function Template(args) {
    router.push(mockArticle)
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
        components: { ButtonDropdown },
        template: '<button-dropdown v-bind="args" />',
    }
}

export const Default = Template.bind({})

Default.args = {
    ...mockSocialList,
}

export const Share = Template.bind({})

Share.args = {
    ...mockSocialList,
}

// FTVA

function TemplateFTVA(args) {
    router.push(mockArticle)
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
        components: { ButtonDropdown },
        template: '<button-dropdown v-bind="args" />',
    }
}

export const FTVAShare = TemplateFTVA.bind({})

FTVAShare.args = {
    ...mockSocialList,
}

// ADD TO CALENDAR

function TemplateAddToCalendar(args) {
    return {
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        setup() {
            return { args }
        },
        components: { ButtonDropdown },
        template: '<button-dropdown v-bind="args" />',
    }
}

const mockCalendarData = {
    eventDetail: {
        title: "FTVA Event Title",
        startDate: "2024-07-04",
        startTime: "10:15",
        endTime: "23:30",
        location: "Hammer Museum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
}

export const AddToCalendar = TemplateAddToCalendar.bind({})

AddToCalendar.args = {
    ...mockCalendarData,
}
