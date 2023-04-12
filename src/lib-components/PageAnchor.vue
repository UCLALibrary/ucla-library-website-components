<template>
    <ul class="page-anchor">
        <li v-for="(title, index) in sectionTitles" :key="index">
            <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
        </li>
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
                return title.toLowerCase().replace(/ /g, "-")
            })
        },
        isSticky() {
            return this.$el.getBoundingClientRect().top <= 0
        },
    },
}
</script>

<style scoped>
.page-anchor {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    text-transform: uppercase;
}

.page-anchor--sticky {
    position: fixed;
}

.page-anchor li {
    margin-bottom: 10px;
    text-align: right;
}

.page-anchor a {
    text-decoration: none;
    color: #666;
}

.page-anchor a:hover {
    color: #000;
}
</style>
