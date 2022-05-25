## Development system requirements

 - node.js version v16.15.0 ([Download node.js](https://nodejs.org/en/download/))

### To test your setup locally only

Clone https://github.com/UCLALibrary/ucla-library-website-components.git
1. Run `$ npm install --legacy-peer-deps` from a terminal to install dependencies
1. Run `$ npm run serve` to start a development server.
1. Open the  browser and load  `http://localhost:8080` which will serve dev/serve.vue page
1. Run `$ npm run storybook:serve` to start a storybook server.

## npm script commands available

| Command | Description |
|---|---|
| `npm run serve` | Starts a vue cli service server and serves dev/serve.vue page |
