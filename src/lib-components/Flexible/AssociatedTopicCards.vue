<template>
    <section-cards-with-illustrations
        :items="block.associatedTopicsFlexiblePageBlock[0].topics"
        :title="block.sectionTitle"
        :text="block.sectionSummary"
        :is-horizontal="false"
        class="associated-topic-cards"
    />
</template>

<script>
export default {
    name: "FlexibleAssociatedTopicCards",
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            const mediaWithText = this.block.mediaWithText
            return mediaWithText.map((obj) => {
                return {
                    ...obj,
                    parsedTitle: obj.titleLink
                        ? obj.titleLink
                        : obj.titleUpload,
                    parsedIsVideo: obj.typeMedia == "video" ? true : false,
                    parsedIsAudio: obj.typeMedia == "audio" ? true : false,
                    parsedButtonUrl:
                        obj.upload && obj.typeMedia == "other"
                            ? obj.upload[0].src
                            : obj.buttonUrl,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.associated-topic-cards {
}
</style>
