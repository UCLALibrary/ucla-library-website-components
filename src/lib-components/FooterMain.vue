<template>
    <footer  class="footer-main">
        <footer-sponsor
            v-if="funders"
            :funders="funders"
            class="sponsor"
        />
        <footer-primary 
            :social-items="socialItems" 
            :press-items="pressItems" 
            :form="false" 
            class="primary"
        />
        <footer-sock
            class="sock"
        />
    </footer>
</template>

<script>
import FooterSponsor from "@/lib-components/FooterSponsor"
import FooterPrimary from "@/lib-components/FooterPrimary"
import FooterSock from "@/lib-components/FooterSock"

export default {
    name: "FooterMain",
    components: {
        FooterSponsor,
        FooterPrimary,
        FooterSock
    },
    props: {
        funders: {
            type: Array,
            default: () => [],
        },
        socialItems: {
            type: Array,
            default: () => [],
        },
        pressItems: {
            type: Array,
            default: () => [],
        },
        sock: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style lang="scss" scoped>
.footer-main {
}
</style>
