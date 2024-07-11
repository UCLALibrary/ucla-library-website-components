<script>
import FooterSponsor from '@/lib-components/FooterSponsor'
import FooterPrimary from '@/lib-components/FooterPrimary'
import FooterSock from '@/lib-components/FooterSock'

export default {
  name: 'FooterMain',
  components: {
    FooterSponsor,
    FooterPrimary,
    FooterSock,
  },
}
</script>

<template>
  <footer class="footer-main">
    <FooterSponsor class="sponsor" />
    <FooterPrimary :form="false" class="primary" :is-microsite="true" />
    <FooterSock class="sock" />
  </footer>
</template>

<style lang="scss" scoped>
.footer-main {}
</style>
