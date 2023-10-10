import FooterSock from '@/lib-components/FooterSock'

// Storybook default settings
export default {
    title: 'FOOTER / Sock',
    component: FooterSock,

}



// Variations of stories below
export function Default() {
    return {
        components: { FooterSock },
        computed: {},
        template: '<footer-sock />',
    }
}
