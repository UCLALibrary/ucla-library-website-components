## Development system requirements

 - node.js version v16.15.0 ([Download node.js](https://nodejs.org/en/download/))

### To test your setup locally only

Clone https://github.com/UCLALibrary/ucla-library-website-components.git
1. Run `$ npm install` from a terminal to install dependencies
1. Run `$ npm run serve` to start a development server.
1. Open the  browser and load  `http://localhost:8080` which will serve dev/serve.vue page
1. Run `$ npm run storybook` to start a storybook server.
1. Run `$ npm run cypress` to open cypresss.

## App running at:
  - Local:   http://localhost:8080/ 
  
  Note that the development build is not optimized.
  To create a production build, run `npm run build`.

## npm script commands available

| Command | Description |
|---|---|
| `npm run serve` | Starts a vue cli service server and serves dev/serve.vue page |

## Connect the component to the [library-website-nuxt site](https://github.com/UCLALibrary/library-website-nuxt) by adding to the test page in Nuxt`pages/test_library/index.vue` 

1. In the library-website-nuxt site Create a new branch of this branch,test-component-library-package
2. Then in your terminal, in the `ucla-library-website-components` repo run:  
$ ucla-library-website-components\🦖`npm run build`
    + This gives us 3 dist files
        + src/entry.esm.js → dist/ucla-library-website-components.esm.js...clean: postcss.plugin was deprecated. Migration guide: https://evilmartians.com/chronicles/postcss-8-plugin-migration created dist/ucla-library-website-components.esm.js in 1.9s
        + src/entry.js → dist/ucla-library-website-components.ssr.js... created dist/ucla-library-website-components.ssr.js in 1s
        + src/entry.js → dist/ucla-library-website-components.min.js... created dist/ucla-library-website-components.min.js in 1.5s
3. Then in your terminal, in the `ucla-library-website-components` repo run:  
$ ucla-library-website-components\🦖 `npm link`
4. Then in your terminal, in the `library-website-nuxt` repo run: `npm link ucla-library-website-components`
5. Add to `pages/test_library/index.vue`
npm run dev
6. Open http://localhost:3000/test_library
