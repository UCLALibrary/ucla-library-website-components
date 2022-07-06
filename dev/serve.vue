<script>
import Vue from "vue"
// Uncomment import and local "components" registration if library is not registered globally.
// import { UclaLibraryWebsiteComponentSample } from '@/entry.esm';
import * as API from "@/stories/mock-api.json"

export default Vue.extend({
    name: "ServeDev",
    computed: {
        parsedLinkItems() {
            return [
                {
                    text: "Course Reserves",
                    url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
                    target: "_blank",
                },
                {
                    text: "UCLA Research Guides",
                    url: "https://guides.library.ucla.edu/",
                    target: "",
                },
                {
                    text: "Databases A-Z",
                    url: "https://guides.library.ucla.edu/az.php",
                    target: "_blank",
                },
            ]
        },
        parsedAdvancedSearchLink() {
            return {
                text: "Advanced Search",
                url: "https://www.library.ucla.edu/search",
                target: "_blank",
            }
        },
        flexibleBlocks() {
            return [
                {
                    id: "22978",
                    typeHandle: "pullQuote",
                    pullQuote: [
                        {
                            text: "<p>Fashion is the best</p>",
                            attribution: null,
                        },
                    ],
                },
                {
                    id: "22978",
                    typeHandle: "pullQuote",
                    pullQuote: [
                        {
                            text: "<p>Fashion is the best</p>",
                            attribution: null,
                        },
                    ],
                },
            ]
        },
    },
    // components: {
    //  UclaLibraryWebsiteComponentSample,
    // }
    data() {
        return {
            mockBlockHighlight: {
                image: API.image,
                to: "/visit/foo/bar/",
                category: "Ullamco",
                title: "Fames ac turpis egestas sed tempus",
                startDate: "2022-03-31T07:00:00+00:00",
                endDate: "2021-11-26T11:00:00-08:00",
                text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                imageAspectRatio: 60,
                locations: [
                    { title: "Powellarium", to: "/location/bar" },
                    {
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
            },
            mockBlockLocationListItem: {
                isUclaLibrary: false,
                title: "Arts Library",
                image: API.image,
                day: "Today",
                hour: "8am - 5pm",
                reserveSeat: "http://google.com/reserveSeat",
                address:
                    "1400 Public Affairs Building Los Angeles, CA 90095-1392",
                addressLink: "http://google.com/address",
                amenities: [
                    "SvgIconEmail",
                    "SvgIconPhone",
                    "SvgIconVirtual",
                    "SvgIconChair",
                    "SvgIconSharePrinter",
                    "SvgIconShareBook",
                ],
                to: "http://google.com/title",
            },
            mockMediaWithText: {
                id: "13669",
                typeHandle: "mediaWithText",
                sectionTitle: "A section of media with text",
                sectionSummary: "<p>A section of media with text</p>",
                mediaWithText: [
                    {
                        id: "13670",
                        titleLink: "A media Link",
                        description: "Citation Integration",
                        coverImage: [
                            {
                                id: "5115",
                                src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/Screen-Shot-2022-02-17-at-11.42.39-AM.png",
                                height: 2151,
                                width: 2560,
                                srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 2560w",
                                alt: "Screen Shot 2022 02 17 at 11 42 39 AM",
                                focalPoint: [0.5, 0.5],
                            },
                        ],
                        buttonText: "Download this",
                        buttonUrl:
                            "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
                        linkToMedia:
                            "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
                        typeMedia: "other",
                    },
                ],
            },
            mockBlockSimpleCard: {
                title: "Types of Sinkholes",
                summary:
                    "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
                externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
            },
            mockBlockSpace: {
                to: "https://calendar.library.ucla.edu",
                title: "Bureaux de Garcons",
                location: "Fast Lane Building",
                text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.",
            },
            mockBlockStaffArticleList: {
                image: API.image,
                to: "/about/foo/bar/",
                category: "Ullamco",
                title: "Fames ac turpis egestas sed tempus lorem ipsum",
                date: "1995-12-17T03:24:00",
                authors: [{ title: "Justo Magna", id: 123 }],
                description:
                    "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
            },
            mockBlockStaffDetail: {
                // image: API.image_people,
                to: "about/staff/id/",
                staffName: "Ada Lovelace",
                jobTitle: "Librateria",
                locations: [
                    { title: "Powellarium", to: "/location/bar" },
                    {
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
                email: "ada@somewhere.com",
                phone: "555-555-5555",
                departments: ["DIIT", "Other Department"],
                topics: [
                    { title: "Quadrigis aedificium", id: "808" },
                    { title: "Carpe vinum", id: "809" },
                ],
                biography:
                    "<p>Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, e gestas felis in, sollicitudin lacus. Cras ultrices dolor at quam vestibulum, eget vestibulum diam congue. Nam at est cursus, cursus justo non, pharetra ipsum.</p><p>Morbi gravida, turpis ut luctus placerat, est mauris congue libero, sed tristique quam eros vel neque. Nunc lacinia mi a orci faucibus tincidunt. Praesent dapibus blandit eros eget auctor. Nullam orci ex, pharetra tempor nulla non, vulputate mattis nibh. Sed vel pharetra erat. Proin nec sapien a velit scelerisque interdum. Donec sagittis magna tincidunt, eleifend arcu id, elementum sapien.</p>",
            },
            mockBlockStaffList: {
                to: "/staff/foo",
                jobTitle: "Ullamco",
                staffName: "Fames C. Turpis",
                departments: [
                    { id: 123, title: "Inceptos Himenaeos Inceptos" },
                ],
                email: "loreum@ipsum.foo",
            },
            mockRichText: {
                richText:
                    "<h3>Here is a title</h3><figure class='figure image-right'></h3>",
            },
        }
    },
})
</script>

<template>
    <div id="app">
        <ucla-library-website-component-sample />
        <alphabetical-browse-by />
        <heading-arrow text="Featured " to="/visit/" />
        <block-call-to-action
            svgName="svg-call-to-action-chat"
            title="Lorem ipsum dolor sit amet?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/help/foo/bar/"
            isDark="false"
            isSmallSize="false"
        />
        <block-campus-map
            campusLocationId="280"
            locationName="YRL Library"
            buildingAccess="<p>Park at parking structure 2. You cannot park in the round about.
            Powell is the second building in on the quad. Walk straight ahead
            for about 15 minutes. Wear your walking shoes. Finally when you are
            there walk up the stairs to the rotunda. You are at the library now.</p>"
        />
        <block-card-with-illustration
            to="/help/foo/bar/"
            title="Quisque Volutpat"
            text="Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date."
            icon-name="illustration-find-space"
        />
        <block-date date="10" day="Digniss" />
        <block-highlight
            :image="mockBlockHighlight.image"
            :to="mockBlockHighlight.to"
            :category="mockBlockHighlight.category"
            :title="mockBlockHighlight.title"
            :start-date="mockBlockHighlight.startDate"
            :end-date="mockBlockHighlight.endDate"
            :text="mockBlockHighlight.text"
            :has-triangle="true"
            :is-vertical="true"
            :image-aspect-ratio="60"
            :locations="mockBlockHighlight.locations"
        />
        <block-hours lid="2081" />
        <block-location-list-item
            :title="mockBlockLocationListItem.title"
            :to="mockBlockLocationListItem.to"
            :image="mockBlockLocationListItem.image"
            :day="mockBlockLocationListItem.day"
            :hour="mockBlockLocationListItem.hour"
            :address="mockBlockLocationListItem.address"
            :addressLink="mockBlockLocationListItem.addressLink"
            :amenities="mockBlockLocationListItem.amenities"
            :reserveSeat="mockBlockLocationListItem.reserveSeat"
            :isUclaLibrary="mockBlockLocationListItem.isUclaLibrary"
        />
        <block-media-with-text
            :section-header="mockMediaWithText.mediaWithText[0].titleLink"
            :short-description="mockMediaWithText.mediaWithText[0].description"
            :button-text="mockMediaWithText.mediaWithText[0].buttonText"
            :button-url="mockMediaWithText.mediaWithText[0].buttonUrl"
            :media-link="mockMediaWithText.mediaWithText[0].linkToMedia"
            :is-video="false"
            :is-audio="false"
            :image="mockMediaWithText.mediaWithText[0].coverImage[0]"
            :type-media="mockMediaWithText.mediaWithText[0].typeMedia"
        />
        <block-simple-card
            :title="mockBlockSimpleCard.title"
            :text="mockBlockSimpleCard.summary"
            :to="mockBlockSimpleCard.externalLink"
        />
        <block-spaces
            :to="mockBlockSpace.to"
            :title="mockBlockSpace.title"
            :location="mockBlockSpace.location"
            :text="mockBlockSpace.text"
        />
        <block-staff-article-list
            :image="mockBlockStaffArticleList.image"
            :to="mockBlockStaffArticleList.to"
            :category="mockBlockStaffArticleList.category"
            :title="mockBlockStaffArticleList.title"
            :date="mockBlockStaffArticleList.date"
            :authors="mockBlockStaffArticleList.authors"
            :description="mockBlockStaffArticleList.description"
        />
        <block-staff-detail v-bind="{ ...mockBlockStaffDetail }" />
        <block-staff-list
            v-bind="{ ...mockBlockStaffList }"
            phone="(222) 444-5555"
        />
        <button-link label="Egest perl Conub" to="/help/more" />
        <divider-general :is-bold="true" />
        <divider-way-finder color="visit" />
        <heading-arrow text="Get Help With" to="/help/foo/bar/" />
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
        <responsive-image :image="mockBlockHighlight.image" />
        <rich-text :rich-text-content="mockRichText.richText" />
        <smart-link to="/"> This will render as a vue-router link </smart-link>
        <search-home
            :linkItems="parsedLinkItems"
            :advancedSearchLink="parsedAdvancedSearchLink"
            @activeTabSet="action"
            @search="action"
        />
        <flexible-blocks :blocks="flexibleBlocks" />
    </div>
</template>

<style lang="scss" scoped>
.divider {
    margin: 10px 10px;
}
</style>
