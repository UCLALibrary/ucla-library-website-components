<template>
    <div class="sponsor">
        <h3>BLOCK-SPONSOR {{ funders }}</h3>
        <div
            v-for="item in funders"
            v-html="item.funderLogo[0].img"
            :key="item.id"
            :alt="item.funderName"
            :to="item.funderUrl"
        />
    </div>
</template>

<script>
export default {
    name: "BlockSponsor",
    props: {
        funders: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedFunders() {
            return funders.map((obj) => {
                obj.funderLogo[0].img.replace(
                    /(["'])(?:(?=(\\?))\2.)*?\1/,
                    obj.funderName
                )
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.sponsor {
    // width: 100%;
}
</style>
