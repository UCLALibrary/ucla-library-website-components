// Import vue components
import * as components from "@/components/index"

// install function executed by Vue.use()
const uclaLibraryWebsiteComponent = {
    install(Vue) {
        Object.entries(components).forEach(([componentName, component]) => {
            Vue.component(componentName, component)
        })
    },
}

// Create module definition for Vue.use()
export default uclaLibraryWebsiteComponent

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "@/components/index"

// Tree Shaking: With the above structure, if someone imports only one component from your library,
// only the code for that specific component should end up in their final bundle.
