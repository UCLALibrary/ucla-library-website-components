## Development system requirements

-   node.js version v16.15.0 ([Download node.js](https://nodejs.org/en/download/))

### To test your setup locally only

Clone https://github.com/UCLALibrary/ucla-library-website-components.git

1. Run `$ npm install` from a terminal to install dependencies
1. Run `$ npm run serve` to start a development server.
1. Open the browser and load `http://localhost:8080` which will serve dev/serve.vue page
1. Run `$ npm run storybook` to start a storybook server.
1. Run `$ npm run cypress` to open cypresss.

## App running at:

-   Local: http://localhost:8080/

Note that the development build is not optimized.
To create a production build, run `npm run build`.

## npm script commands available

| Command         | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `npm run serve` | Starts a vue cli service server and serves dev/serve.vue page |

## Connect the component to the [library-website-nuxt site](https://github.com/UCLALibrary/library-website-nuxt) by adding to the test page in Nuxt`pages/test_library/index.vue`

1. In the library-website-nuxt site Create a new branch of this branch,test-component-library-package
2. Then in your terminal, in the `ucla-library-website-components` repo run:  
   $ ucla-library-website-components\🦖`npm run build` + This gives us 3 dist files + src/entry.esm.js → dist/ucla-library-website-components.esm.js...clean: postcss.plugin was deprecated. Migration guide: https://evilmartians.com/chronicles/postcss-8-plugin-migration created dist/ucla-library-website-components.esm.js in 1.9s + src/entry.js → dist/ucla-library-website-components.ssr.js... created dist/ucla-library-website-components.ssr.js in 1s + src/entry.js → dist/ucla-library-website-components.min.js... created dist/ucla-library-website-components.min.js in 1.5s
3. Then in your terminal, in the `ucla-library-website-components` repo run:  
   $ ucla-library-website-components\🦖 `npm link`
4. Then in your terminal, in the `library-website-nuxt` repo run: `npm link ucla-library-website-components`
5. Add to `pages/test_library/index.vue`
   npm run dev
6. Open http://localhost:3000/test_library

---

## How to move library-website-nuxt (nuxt project) components to ucla-library-website-components (vue 2 project)

Hi!

This readMe is to help you move components from nuxt to vue 2, specifically for UCLA library repositories.

Let’s start with the basics:

## Reason for moving components

We needed to reuse the components in other projects, in this case, we needed to create a library of components to do that. The tech stack chosen was [vue 2](https://v2.vuejs.org/) with [rollup](https://rollupjs.org/guide/en/).

### Vue 2

Vue (pronounced /vjuː/, like **view**) is a **progressive framework** for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with **[modern tooling](https://v2.vuejs.org/v2/guide/single-file-components.html)** and **[supporting libraries](https://github.com/vuejs/awesome-vue#components--libraries)**

### Rollup

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.

## ⚙Basic configuration

You need access to https://github.com/UCLALibrary/library-website-nuxt for the nuxt repository and https://github.com/UCLALibrary/ucla-library-website-components for the vue 2 + rollup repository.

Now we need to understand the basics of the https://github.com/UCLALibrary/ucla-library-website-components project configuration.

**First,** we have 3 configurations:

-   One for rollup (the bundler)
-   One for [storybook](https://storybook.js.org/)
-   One for vue 2

With that in mind, we need to carefully test 3 “developing ambients”:

-   dev server
-   storybook server
-   npm package

But first, let’s understand the basics of each configuration.

### Vue configuration (vue.config.js)

**CSS/SCSS**

```jsx
css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/styles/variables-scss.scss";
              `,
            },
        },
    },
```

This part of the `vue.config.js` is for using `variables-scss.scss` as an entry point for the css in the vue project, that way we can import https://github.com/UCLALibrary/design-tokens to use in the project.

**SVG + node_modules**

```jsx
chainWebpack: (config) => {
        config.module.rules.delete("svg")
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.(jpg|png|svg|gif)$/,
                            type: "asset/inline",
                            resourceQuery: /url/,
                        },
                        {
                            test: /\.svg$/,
                            loader: "vue-svg-loader",
                            options: {
                                svgo: {
                                    plugins: [
                                        {
                                            removeViewBox: false,
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
    },
```

This code allows us to use svg’s in the vue project, even if it’s from node_modules. We also got vue-svg-loader to make svg as components. One problem we were facing was using SVGs as background-image, or background in general. We solved it with the `oneOf` rule.

One big problem we were facing also, was about the viewbox of the svg’s, later we understood that we needed to add svgo configuration. That’s why we have `removeViewBox: false`

### Storybook configuration

Storybook has a different configuration, since it’s a tool for testing out components, we need to say to it what are we testing and how.

Analyzing the main.js file from storybook folder we need to understand better this section.

```jsx
webpackFinal: async (config, { configType }) => {
        // the @ alias points to the `src/` directory, a common alias
        // used in the Vue community
        config.resolve.alias["@"] = path.resolve(__dirname, "..", "src")
        // THIS is the tricky stuff!
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        additionalData:
                            "@import '@/styles/variables-scss.scss';",
                    },
                },
            ],
            include: path.resolve(__dirname, "../"),
        })
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test.test(".svg")
        )
        fileLoaderRule.exclude = /\.svg$/
        config.module.rules.push({
            oneOf: [
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    type: "asset/inline",
                    resourceQuery: /url/,
                },
                {
                    test: /\.svg$/,
                    loader: "vue-svg-loader",
                    options: {
                        svgo: {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    },
                },
            ],
        })
```

This section is responsible for allowing storybook to read svgs from node_modules, also it’s responsible to set the configuration for removeViewBox. Also it allows for storybook to read scss from node_modules and other files.

### Rollup configuration

Last but not least, we have the Rollup configuration.

This is the most important part to understand:

```jsx
// rollup.config.js
import fs from "fs"
import path from "path"
import vue from "rollup-plugin-vue"
import alias from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"
import minimist from "minimist"
import postcss from "rollup-plugin-postcss"
import svg from "rollup-plugin-vue-inline-svg"
```

This part we have the packages and libraries we are using in rollup. A basic explanation for some of those are:

-   **rollup-plugin-vue**: This is a plugin for **[rollup](https://rollupjs.org/)** that allows you to author Vue components in a format called **[Single-File Components (SFCs)](https://vue-loader.vuejs.org/spec.html).**
-   **alias**: A Rollup plugin for defining aliases when bundling packages.
-   **plugin-node-resolve**: A Rollup plugin which locates modules using the **[Node resolution algorithm](https://nodejs.org/api/modules.html#modules_all_together)**, for using third party modules in `node_modules`. This is important to load UCLA design tokens.
-   **rollup-plugin-vue-inline-svg:** A simple plugin to import svg files as vue components. This is intended to be used with **[rollup-plugin-vue](https://www.npmjs.com/package/rollup-plugin-vue)** and is based on **[vue-svg-loader](https://www.npmjs.com/package/vue-svg-loader). That is important, so we can set configurations for svgo.**

And also this:

```jsx
const baseConfig = {
    input: "src/entry.js",
    plugins: {
        preVue: [
            alias({
                entries: [
                    {
                        find: "@",
                        replacement: `${path.resolve(projectRoot, "src")}`,
                    },
                ],
            }),
        ],
        replace: {
            preventAssignment: true,
            "process.env.NODE_ENV": JSON.stringify("production"),
        },
        vue: {
            template: {
                isProduction: true,
            },
            style: {
                preprocessStyles: true,
                preprocessOptions: {
                    scss: {
                        data: `
                            @import 'src/styles/variables-scss.scss';
                        `,
                        includePaths: ["node_modules/", "src/"],
                        importer(path) {
                            return {
                                file: path[0] !== "~" ? path : path.slice(1),
                            }
                        },
                    },
                },
            },
        },
        postVue: [
            svg({ svgoConfig: { plugins: [{ removeViewBox: false }] } }),
            resolve({
                extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
            }),
            postcss({
                include: /\.scss$/,
                use: {
                    sass: {
                        data: `
                            @import 'src/styles/variables-scss.scss';
                        `,
                    },
                },
            }),
            commonjs(),
        ],
        babel: {
            exclude: "node_modules/**",
            extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
            babelHelpers: "bundled",
        },
    },
}
```

This `baseConfig` has a lot of important parts. First thing we need to understand is the steps, first we have preVue, where we set the alias for the `src`, so rollup can understand our usage.

The second step is `replace`, where we set rollup for production.

Next is `vue`, we say that’s is production, then `style` is inside to configure scss, in this specific case we are importing some styles from node_modules, so we set some configuration for that. In our case we import that from `src/styles/variables-scss.scss`

Also, in this part we add the configuration to read scss from node_modules `includePaths: ["node_modules/", "src/"],`

Next we see the `postVue` part, this part will be loaded after vue is loaded, that's called post vue. It seems as we are repeating the vue part.

## Tips when building components in the rollup project

-   Don't use `lang="html"`
    -   example:
        ```jsx
        <template lang=¨html¨>
        	<nav :class="classes">
        	<div class="item-top">
        	...
        ```
-   Replace `nuxt-link` with `router-link`
-   Place the name of the component: `name: "NavPrimary",`
-   Instead of using `~` to go to source, use `@` .
    -   example: `import SmartLink from "@/lib-components/SmartLink"`
-   We call svgs from design-tokens like this: `import SvgLogoUclaLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"`
-   Svgs are called as components.
    -   example
        ```jsx
        import SvgLogoUclaLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"
        export default {
            name: "NavPrimary",
        		components: {
        			SvgLogoUclaLibrary,
        		},
        ```
-   In storybook we need to import the component at the top and add the component inside the `export default` and also in any other instances that we are exporting.
    -   example:
        ```jsx
        import AlphabeticalBrowseBy from "../lib-components/AlphabeticalBrowseBy"

        export default {
            title: "SEARCH / AlphabeticalBrowseBy",
            component: AlphabeticalBrowseBy,
        }

        export const Default = () => ({
            components: { AlphabeticalBrowseBy },
            template: `<alphabetical-browse-by/>`,
        })

        export const CIsSelected = () => ({
            components: { AlphabeticalBrowseBy },
            template: `<alphabetical-browse-by selectedLetterProp="C"/>`,
        })
        ```
-   When a component is using `router-link` we need to add this to storybook also. We add by using `StoryRouter` decorator.
    -   example:
        ```jsx
        import BannerFeatured from "@/lib-components/BannerFeatured"
        import HeadingArrow from "@/lib-components/HeadingArrow"
        import StoryRouter from "storybook-vue-router"

        // Import mock api data
        import * as API from "@/stories/mock-api.json"

        export default {
            title: "Banner Featured",
            component: BannerFeatured,
            decorators: [StoryRouter()],
        }
        ```
- Another thing that you might want to use is vuex store, in that case you need to add the following to storybook:
    -   First, import vuex:
        ```jsx
        // Storybook default settings
        import Vue from "vue"
        import Vuex from "vuex"
        import BlockCallToAction from "@/lib-components/BlockCallToAction"

        Vue.use(Vuex)
        ```
    -   Then make a mock of the vuex store inside the exported component in question:
        ```jsx
        export const GlobalAskALibrarian = () => ({
            store: new Vuex.Store({
                state: {
                    globals: {
                        askALibrarian: {
                            id: "7322",
                            askALibrarianTitle: "Have further questions?",
                            askALibrarianText:
                                "<p>We're here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.</p>",
                            buttonUrl: [
                                {
                                    buttonText: "Contact us",
                                    buttonUrl: "/help/",
                                },
                            ],
                        },
                    },
                },
            }),
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
        })
        ```
-   Always remember to add `this` when refering to a function or mixin.
-   Mixins have almost the same functionality as global functions, so use it wisely and refer to them accordingly.

## Tips about using vuex

Vuex is a **state management pattern + library** for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

When dealing with store data, we need to understand some basic concepts
- The **state**, the source of truth that drives our app
- The **view**, a declarative mapping of the **state**
- The **actions**, the possible ways the state could change in reaction to user inputs from the **view**.
    
### Let's better understand some core concepts.
    
**State** : This is the data that will be shared in the application. so instead passing it via props. we can simply have it in our store and have our components access them directly.
    
**Getters**: [According to the Vuex documentation](https://dev.tourl/), we think of getters as the computed property for store and it has an helper , which is the `mapGetters Helper` that simply takes out store getters to out component computed property.
    
**Mutations**: State can only be changed in a vuex store by commiting a mutation. A mutation cannot be called directly. Inorder to do so, you need to use `store.commit`. Instead of committing a mutation in a component methods, we simply dispatch an action on the mutation.
    
**Actions** : Action commits a mutation using the `contex.comit`and dispatch the action using `store.dispatch`. We also have the `mapAction helpers`.
    
    Our implementation of vuex uses modules. Due to using a single state tree, all states of our application are contained inside one big object. As our application grows in scale, the store can get really bloated.

    To help with that, Vuex allows us to divide our store into **modules**. Each module can contain its own `state`, `mutations`, `actions`, `getters`, and even nested modules - it's turtles all the way down:

```jsx
    const moduleA = {
      state: () => ({ ... }),
      mutations: { ... },
      actions: { ... },
      getters: { ... }
    }

    const moduleB = {
      state: () => ({ ... }),
      mutations: { ... },
      actions: { ... }
    }

    const store = createStore({
      modules: {
        a: moduleA,
        b: moduleB
      }
    })

    store.state.a // -> `moduleA`'s state
    store.state.b // -> `moduleB`'s state
```

## Our usage of vuex
    
Our index inside the store folder is importing all modules:
    
```jsx
    import Vue from "vue"
    import Vuex from "vuex"
    import HeaderSmart from "./modules/headerSmart.js"
    import FooterPrimary from "./modules/footerPrimary.js"
    import FooterSock from "./modules/footerSock.js"

    Vue.use(Vuex)

    export default new Vuex.Store({
        modules: {
            headerSmart: HeaderSmart,
            footerPrimary: FooterPrimary,
            footerSock: FooterSock,
        },
    })
```
    
Then, inside each module we see something like this:
    
```jsx
    const mock = {
        socialItems: [
            {
                id: "11777",
                name: "Twotter",
                to: "https://twitter.com/",
                classes: null,
                target: "1",
            },
        ],
    }

    export default {
        state: {
            header: {
                primary: mock.primary,
                secondary: mock.secondary,
            },
            nodes: [
                {
                    children: mock.socialItems,
                },
                {
                    children: mock.pressItems,
                },
            ],
            winWidth: 824,
        },
        getters: {
            getHeaderSmartData: (state) => state.header,
            getHeaderSmartWinWidth: (state) => state.winWidth,
        },
        mutations: {},
        actions: {},
    }
```
    
To call the information we need from the state, we need to use `mapGetters`.  
To use it, we call `mapGetters` inside the vue component, destructing it and also using it inside the computed property.  
Like this:
    
```jsx
    <script>
    import SiteBrandBar from "@/lib-components/SiteBrandBar"
    import HeaderMainResponsive from "@/lib-components/HeaderMainResponsive"
    import HeaderMain from "@/lib-components/HeaderMain"
    import { mapGetters } from "vuex"

    export default {
        name: "HeaderSmart",
        components: {
            SiteBrandBar,
            HeaderMainResponsive,
            HeaderMain,
        },
        computed: {
            ...mapGetters(["getHeaderSmartData", "getHeaderSmartWinWidth"]),
            primaryMenuItems() {
                return this.getHeaderSmartData.primary
            },
            secondaryMenuItems() {
                return this.getHeaderSmartData.secondary
            },
            isMobile() {
                return this.getHeaderSmartWinWidth <= 1024 ? true : false
            },
            whichHeader() {
                return this.isMobile ? "header-main-responsive" : "header-main"
            },
        },
    }
    </script>
```
    
You can see that we import `mapGetters` from vuex, then we add it to `computed` section and then we call every getter inside the array. To use it we just place `this.<name_of_getter>` .
