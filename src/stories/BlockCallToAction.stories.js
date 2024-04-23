import BlockCallToAction from "@/lib-components/BlockCallToAction"

export default {
    title: "BLOCK / Call to Action",
    component: BlockCallToAction,
}

const mock = {
    svgName: "svg-call-to-action-find",
    title: "Lorem ipsum dolor sit amet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum dolor",
    to: "/help/foo/bar/",
}

// Variations of stories below
export function Default() {
    return {
        data() {
            return {
                ...mock,
            }
        },
        components: { BlockCallToAction },
        template: `
        <block-call-to-action
            :svgName="svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark="isDark"
            :is-small-size="isSmallSize"
        />
    `,
    }
}

export function DarkBlue() {
    return {
        data() {
            return {
                ...mock,
                isDark: "true",
            }
        },
        components: { BlockCallToAction },
        template: `
        <block-call-to-action
            :svgName= "svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark="isDark"
            :is-small-size="isSmallSize"
        />
    `,
    }
}

export function SmallCTA() {
    return {
        data() {
            return {
                ...mock,
                isSmallSize: "true",
            }
        },
        components: { BlockCallToAction },
        template: `
        <block-call-to-action
            svgName= "svg-call-to-action-find"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark="isDark"
            :is-small-size="isSmallSize"
        />
    `,
    }
}

export function SmallCTADarkBlue() {
    return {
        data() {
            return {
                ...mock,
                isDark: "true",
                isSmallSize: "true",
            }
        },
        components: { BlockCallToAction },
        template: `
        <block-call-to-action
            svg-name= "svg-call-to-action-money"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark="isDark"
            :is-small-size="isSmallSize"
        />
    `,
    }
}

export function GlobalAskALibrarian() {
    return {
        data() {
            return {
                ...mock,
            }
        },
        components: { BlockCallToAction },
        template: `
        <block-call-to-action
            :is-global="true"
        />
    `,
    }
}

export function GlobalMeapCTA() {
    return {
        data() {
            return {
                ...mock,
            }
        },
        components: { BlockCallToAction },
        template: `
        <block-call-to-action
            :is-meap-global="true"
        />
    `,
    }
}
