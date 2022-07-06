import FlexibleForm from "@/lib-components/Flexible/Form"

// Storybook default settings
/* eslint-disable */
export default {
    title: "FLEXIBLE / Form",
    component: FlexibleForm,
}

const mock = {
    form: '<div id="form_95580ed5e8d04c56e4afbf9e91781b28"></div><script type="text/javascript" src="https://ucla.libwizard.com/form_loader.php?id=95580ed5e8d04c56e4afbf9e91781b28&noheader=0"></script>',
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleForm },
    template: `<flexible-form
        :block= "block"
    />`,
})
