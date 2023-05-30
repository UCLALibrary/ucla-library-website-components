<template>
    <div class="page-anchor-container">
        <ul class="page-anchor link">
            <li v-for="(title, index) in sectionTitles" :key="index">
                <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
            </li>
            <li><a href="#">Back to Top</a></li>
        </ul>
    </div>
</template>

<script>
/* import SvgIconCaretDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg" */

export default {
    name: "PageAnchor",
    components: {
        SvgIconCaretDown
    },
    props: {
        sectionTitles: {
            type: Array,
            required: true,
        },
        color: {
            type: String,
            default: "", // This will be "visit", "about", "help".
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
.page-anchor-container {
    /*position: -webkit-sticky; /* Required for Safari */
    /*position: sticky; */
}

.page-anchor {
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    position: -webkit-sticky; /* Required for Safari */
    position: sticky;
    /* background-color: rgba(255, 255,255, 0.9); */
    background: linear-gradient(to left, white, transparent 99.99%);
    width: auto;
    height: 100vh;
    list-style-type: none;
    top: 0;
    right: 0;
    z-index: 200;
    margin-top: 50px; /* should be based on the height of the bannerHeader or bannerText */
    margin-bottom: var(--space-s);
    @include overline;
    font-weight: 500;
    text-transform: uppercase;
    padding: var(--space-l) var(--space-l) var(--space-s) var(--space-l);

    --link-color: var(--color-primary-blue-03);
    --icon-color: var(--color-primary-blue-03);
    --icon-color-highlight: var(--color-default-cyan-03);

        color: var(--link-color);
    }

    @media #{$has-hover} {
        .link:hover {
            @include link-hover;
        }
    }
}

/* .page-anchor li {
    margin-bottom: 10px;
    text-align: right;
    text-decoration: none;
}

.page-anchor a {
    @include overline;
    color: var(--color-primary-blue-05);
    text-decoration: none;
}

.page-anchor a:hover {
    color: coral;
} */
</style>
