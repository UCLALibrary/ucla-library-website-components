import "@/styles/variables-css.scss";
import "@/styles/global.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    viewport: { 
        viewports:{
            extraLarge: {
                name: 'Extra Large',
                styles:{ width: '1920px', height: '1080px', },
            },
            Large: {
                name: 'Large',
                styles:{ width: '1440px', height: '1024px', },
            },
            Medium: {
                name: 'Medium',
                styles:{ width: '768px', height: '1024px', },
            },
            Small: {
                name: 'Small',
                styles:{ width: '375px', height: '812px', },
            },
        },
    },
    backgrounds: {
        default: "default",
        values: [
            {
                name: "White",
                value: "#ffffff",
            },
            {
                name: "Grey",
                value: "#F2F2F2",
            },
            {
                name: "Dark blue",
                value: "#032D5B",
            },
            {
                name: "Blue",
                value: "#0B6AB7",
            },
            {
                name: "Light blue",
                value: "#EAF2FB",
            },
        ],
    },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
