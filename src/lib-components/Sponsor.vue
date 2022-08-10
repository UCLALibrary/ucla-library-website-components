<template>
    <div>
        funderName - Alt text for img funderLogo - img source funderUrl - link
        from image. open in new window
    </div>
</template>

<script>
export default {
    name: "Sponsor",
    props: {
        funderLogo: {
            type: Array,
            default: () => [],
        },
        funderName: {
            type: String,
            default: "",
        },
        funderUrl: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedSponsor() {
            return this.funderLogo[0].img
            replace
        },
    },
}
</script>

<style lang="scss" scoped>
.sponsor {
    width: 100%;
}
</style>
