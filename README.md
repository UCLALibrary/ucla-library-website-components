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
