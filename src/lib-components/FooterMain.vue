<template>
    <footer class="footer-main">
        <footer-sponsor class="sponsor" />
        <footer-primary :form="false" class="primary" :is-microsite="true" />
        <footer-sock class="sock" />
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
        FooterSock,
    },
}
</script>

<style lang="scss" scoped>
.footer-main {}
</style>