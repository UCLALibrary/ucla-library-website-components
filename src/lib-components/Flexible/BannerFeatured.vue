<template>
    <div>
        <banner-featured
            v-if="block && block.content && block.content[0].contentLink"
            class="flexible-banner-featured"
            :image="block.content[0].contentLink[0].heroImage[0].image[0]"
            :to="block.content[0].contentLink[0].to"
            :title="block.content[0].contentLink[0].title"
            :breadcrumb="parsedTypeHandle"
            :byline="parseByLine"
            :description="block.content[0].contentLink[0].summary"
            :prompt="parsePrompt"
            :locations="parsedLocations"
            :category="parsedCategory"
        />
        <banner-featured
            v-if="block && block.content && !block.content[0].contentLink"
            class="flexible-banner-featured"
            :image="block.content[0].image[0]"
            :to="block.content[0].to"
            :title="block.content[0].title"
            :breadcrumb="parsedTypeHandle"
            :byline="parseByLine"
            :description="block.content[0].summary"
            :prompt="parsePrompt"
            :locations="parsedLocations"
            :category="parsedCategory"
            :alignment="parsedAlignment"
        />
    </div>
</template>

<script>
import BannerFeatured from "@/lib-components/BannerFeatured.vue"

// Helpers
import getPrompt from "@/mixins/getPrompt"

export default {
    name: "FlexibleBannerFeatured",
    components: { BannerFeatured },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    mixins: [getPrompt],
    computed: {
        parsedAlignment() {
            return this.block.content[0].alignment === "right" ? true : false
        },
        parsePrompt() {
            let prompt = ""
            if (this.block.content[0].contentType)
                prompt = this.getPrompt(this.block.content[0].contentType)
            else
                prompt = this.getPrompt(
                    this.block.content[0].contentLink[0].contentType
                )

            return prompt
        },
        parsedLocations() {
            let locations = []

            if (this.block.content && this.block.content[0].contentLink) {
                let contentType =
                    this.block.content[0].contentLink[0].contentType.toLowerCase()

                switch (true) {
                    case contentType.includes("article"):
                        locations["location_links"] =
                            this.block.content[0].contentLink[0].articleLocations

                        break
                    case contentType.includes("project"):
                        locations["location_links"] =
                            this.block.content[0].contentLink[0].projectLocations

                        break

                    /*case contentType.includes("event"):
                        locations["location_links"] =
                            this.block.content[0].contentLink[0]
                                .eventLocations
                        break*/
                }
            }
            if (this.block.content && this.block.content[0].location) {
                locations["location_external"] = this.block.content[0].location
            }

            return locations
        },
        parsedCategory() {
            let category = ""
            if (this.block.content && this.block.content[0].category)
                return this.block.content[0].category

            if (this.block.content && this.block.content[0].contentLink) {
                let contentType =
                    this.block.content[0].contentLink[0].contentType.toLowerCase()
                switch (true) {
                    case contentType.includes("article"):
                        category =
                            this.block.content[0].contentLink[0].articleCategory
                                .map((obj) => {
                                    return obj.title
                                })
                                .toString()
                        break
                    case contentType.includes("project"):
                        category =
                            this.block.content[0].contentLink[0].projectCategory
                        break

                    /*case contentType.includes("event"):
                        category =
                            this.block.content[0].contentLink[0].eventCategory
                        break*/
                }
            }

            return category
        },
        parsedTypeHandle() {
            // This will be pased on the page level

            return this.block.sectionTitle
                ? this.block.sectionTitle
                : this.parsedCategory
        },
        parseByLine() {
            let output = []
            if (this.block.content && this.block.content[0].contentLink) {
                let entry_type =
                    this.block.content[0].contentLink[0].contentType.toLowerCase()

                switch (true) {
                    case entry_type.includes("article"):
                        output["articleStaff"] =
                            this.block.content[0].contentLink[0].articleByline1
                        output["articlePostDate"] =
                            this.block.content[0].contentLink[0].articleByline2

                        break
                    case entry_type.includes("project"):
                        output["project"] =
                            this.block.content[0].contentLink[0].projectByline1

                        break

                    /*case entry_type.includes("event"):
                    output["eventStartTime"] =
                        this.block.content[0].contentLink[0].eventByline1
                    output["eventEndTime"] =
                        this.block.content[0].contentLink[0].eventByline2
                    break*/
                }
            }
            if (
                this.block.content &&
                (this.block.content[0].byline1 || this.block.content[0].byline2)
            ) {
                output.push(this.block.content[0].byline1)
                output.push(this.block.content[0].byline2)
            }

            return output
        },
    },
}
</script>

<style lang="scss" scoped></style>
