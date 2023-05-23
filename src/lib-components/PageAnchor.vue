<template>
    <ul class="page-anchor">
        <li v-for="(title, index) in sectionTitles" :key="index">
            <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
        </li>
        <li><a href="#">Back to Top</a></li>
    </ul>
</template>

<script>
export default {
    name: "PageAnchor",
    props: {
        sectionTitles: {
            type: Array,
            required: true,
        },
    },
    computed: {
        kebabCaseTitles() {
            return this.sectionTitles.map((title) => {
                let titleWithNoSpecialChars = title.replace('&', '').replace(/\s+/g, ' ').trim()
                return titleWithNoSpecialChars.toLowerCase().replace(/ /g, "-")
            })
        },
    },
}
</script>

<style scoped>
.page-anchor {
    display: flex;
    flex-direction: column;

    list-style-type: none;
    position: -webkit-sticky; /* Required for Safari */
    position: sticky;
    top: 0;
    z-index: 200;
    margin-top: 50px; /* should be based on the height of the bannerHeader or bannerText */
    margin-bottom: var(--space-s);
    @include overline;
    font-weight:500;
    text-transform: uppercase;
    padding: var(--space-l) var(--space-l) var(--space-s) var(--space-l);
}

    .page-anchor li {
        margin-bottom: 10px;
        text-align: right;
        text-decoration: none;
        z-index: 20;
    }

    .page-anchor a {
        @include overline;
        color: var(--color-primary-blue-05);
        text-decoration: none;
    }

    .page-anchor a:hover {
        color: coral;
    }

    /* BREAKPOINTS */
    /* @media #{$medium} {
        background-color: aqua;
    }

    @media #{$small} {
        background-color: gray;
    } */
</style>
