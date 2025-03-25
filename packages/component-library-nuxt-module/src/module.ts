import { addComponent, defineNuxtModule, useLogger } from '@nuxt/kit'
import type { ModuleOptions } from '@nuxt/schema'
import * as VueComponentLibrary from '@ucla-library-monorepo/ucla-library-website-components'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@ucla-library/component-library-nuxt-module',
    configKey: 'uclaLibraryWebsiteComponents',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const logger = useLogger('@ucla-library/component-library-nuxt-module')

    // _nuxt.options.css.push('@ucla-library-monorepo/ucla-library-website-components/style.css')
    Object.keys(VueComponentLibrary)
      .forEach((component) => {
        logger.info(`Adding component: ${component}`)
        // if (component === 'default') return
        addComponent({
          filePath: '@ucla-library-monorepo/ucla-library-website-components',
          name: component,
          export: component,
        })
      })
  },
})
