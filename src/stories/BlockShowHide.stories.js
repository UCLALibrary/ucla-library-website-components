// Import component
import BlockShowHide from "@/lib-components/BlockShowHide"

// Storybook default settings
export default {
    title: "BLOCK / Show Hide",
    component: BlockShowHide,
}

export const Default = () => ({
    components: { BlockShowHide },
    template: `
    <block-show-hide style="width: 100%; padding: 0 48px;">
        <div style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted" data-cy="main">
            Main content is passed via a slot and will be visible by default.
        </div>
        <div class="show-hide-hideable" style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted" data-cy="extra">
            To make content "expandable" it should be passed in the slot along with the main content, but add the class "show-hide-hideable" to any items that should be hidden.
        </div>
    </block-show-hide>
  `,
})

export const NoHideableContent = () => ({
    components: { BlockShowHide },
    template: `
    <block-show-hide disable style="width: 100%; padding: 0 48px;">
        <p style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted" data-cy="main">
            When there is no hidable content, the parent component should pass the prop "disable=true" to disable the buttons.
        </p>
    </block-show-hide>
  `,
})
