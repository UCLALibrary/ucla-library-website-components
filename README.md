# This is the component library for the UCLA Library websites

#### UCLA Library websites: [library-website-nuxt](https://github.com/UCLALibrary/library-website-nuxt) & [ftva-website-nuxt](https://github.com/UCLALibrary/ftva-website-nuxt)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Setup & Development

<details><summary>STEPS</summary>

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:5173`:

```bash
# pnpm
pnpm run dev
```

## Test component library package Server

Start the vite server on `http://localhost:5174`:

```bash
# pnpm
pnpm run serve
```

## Test stories

Start the storybook on `http://localhost:6006`:

```bash
# pnpm
pnpm run storybook
```

## Build vite component library

Build library using vite:

```bash
# pnpm
pnpm run build
```
## `App.vue` and `mock.js`

### Local copy of `APP.vue` and `mock.js` in the `src` file
If you already have a local copy of be sure to save it locally because they will be deleted if you reclone this repo.
You can add a page to the [Wiki](https://github.com/UCLALibrary/ucla-library-website-components/wiki/) with your version.

### If starting this project from scratch
Be sure to add the `APP.vue` and `mock.js` in the `src` file

There are example files here: https://github.com/UCLALibrary/ucla-library-website-components/wiki/AppDotVueAndMockJS.md

#### If you get an error like this; you have forgotten to do this step:
(Add `APP.vue` and `mock.js` in the `src` file)

```
[plugin:vite:import-analysis] Failed to resolve import "./App.vue" from "src/main.ts". Does the file exist?
/Users/jendiamond/UCLA/ucla-library-website-components/src/main.ts:8:16
5  |  import "ucla-library-design-tokens/scss/app-global.scss";
6  |  import "@/styles/global.scss";
7  |  import App from "./App.vue";
   |                   ^
8  |  createApp(App).use(router).use(createPinia()).mount("#app");
```
```
src
  > assets
  > composables
  > lib-components
  > stores
  > stories
  > styles
  > types
  > utils
  App.vue
  entry.js
  main.ts
  mock.js
  router.js
  style.css
  vue-global-props.d.ts
```

---

## To use your local components in the ftva-website-nuxt site locally

**You have two choices**

### Update `package.json` in ftva-website-nuxt
**from**
`"ucla-library-website-components": "2.39.0-alpha.100"`
(whatever it is currently)

**to**
`"ucla-library-website-components": "file:../ucla-library-website-components"`
(whatever your path to `ucla-library-website-components` is)

### OR

### Link the two sites together

1. In your terminal, in `ucla-library-website-components`
    1. Run: $`pnpm run build`
2. Then run: $`pnpm link --global`
3. On either the library-website-nuxt or the ftva-website-nuxt
    1. Run: $`pnpm link --global ucla-library-website-components`
4. Now the repos are linked.
5. The add the new components to a page on either the **library-website-nuxt** or the **ftva-website-nuxt** and
    1. Run: $`pnpm run dev`

</details>
