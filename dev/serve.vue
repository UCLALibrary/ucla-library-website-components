<template>
    <div id="app" class="app">
        <h1>
            This page displays the components in the
            <a
                href="https://github.com/UCLALibrary/ucla-library-website-components"
            >
                ucla-library-website-components npm repo
            </a>
        </h1>
        <hr />

        <h2>HeaderSmart Component is showing at the top of this page</h2>
        <header-smart />
        <hr />

        <h2>HeaderSticky Component is showing at the top of this page</h2>
        <header-sticky
            :primary-items="mockHeaderStickyPrimaryItems.items"
            :secondary-items="mockHeaderStickySecondaryItems.items"
        />
        <hr />

        <h2>AlphabeticalBrowseBy Component</h2>
        <alphabetical-browse-by />
        <hr />

        <h2>BlockCallToAction Component</h2>
        <block-call-to-action
            svg-name="svg-call-to-action-chat"
            title="Lorem ipsum dolor sit amet?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/help/foo/bar/"
            :is-dark="false"
            :is-small-size="false"
        />
        <hr />

        <h2>BlockCallToActionTwoUp Component</h2>
        <block-call-to-action-two-up
            :items="mockBlockCallToActionTwoUp.items"
        />
        <hr />

        <h2>BlockCampusMap Component</h2>
        <block-campus-map
            campus-location-id="280"
            location-name="YRL Library"
            building-access="<p>Park at parking structure 2. You cannot park in the round about.
            Powell is the second building in on the quad. Walk straight ahead
            for about 15 minutes. Wear your walking shoes. Finally when you are
            there walk up the stairs to the rotunda. You are at the library now.</p>"
        />
        <hr />

        <h2>BlockCardWithIllustration Component</h2>
        <block-card-with-illustration
            to="/help/foo/bar/"
            title="Quisque Volutpat"
            text="Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date."
            icon-name="illustration-find-space"
        />
        <hr />

        <h2>BlockDate Component</h2>
        <block-date date="10" day="Digniss" />
        <hr />

        <h2>BlockEvent Component</h2>
        <block-event
            :category="mockBlockEvent.bricks[0].category"
            :title="mockBlockEvent.bricks[0].title"
            :prompt="mockBlockEvent.bricks[0].prompt"
            :dates="mockBlockEvent.bricks[0].dates"
            :to="mockBlockEvent.bricks[0].to"
        />
        <hr />

        <block-event
            :category="mockBlockEvent.bricks[1].category"
            :title="mockBlockEvent.bricks[1].title"
            :prompt="mockBlockEvent.bricks[1].prompt"
            :dates="mockBlockEvent.bricks[1].dates"
            :to="mockBlockEvent.bricks[1].to"
        />
        <hr />

        <h2>LibCal Events Form Component</h2>
        <block-form :block="mockBlockForm" event-id="9383207" />
        <hr />

        <h2>BlockHighlight Component</h2>
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
        <hr />

        <h2>BlockHours Component</h2>
        <block-hours lid="2081" />
        <hr />

        <h2>BlockLocationListItem Component</h2>
        <block-location-list-item
            :title="mockBlockLocationListItem.title"
            :to="mockBlockLocationListItem.to"
            :image="mockBlockLocationListItem.image"
            :day="mockBlockLocationListItem.day"
            :hour="mockBlockLocationListItem.hour"
            :address="mockBlockLocationListItem.address"
            :address-link="mockBlockLocationListItem.addressLink"
            :amenities="mockBlockLocationListItem.amenities"
            :reserve-seat="mockBlockLocationListItem.reserveSeat"
            :is-ucla-library="mockBlockLocationListItem.isUclaLibrary"
        />
        <hr />

        <h2>BlockMediaWithText Component</h2>
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
        <hr />

        <h2>BlockPostSmall Component</h2>
        <block-post-small
            :category-name="mockPostSmall.categoryName"
            :author="mockPostSmall.author"
            :title="mockPostSmall.title"
            :image="mockPostSmall.image"
            to="/legal/"
        />
        <hr />

        <h2>BlockSimpleCard Component</h2>
        <block-simple-card
            :title="mockBlockSimpleCard.title"
            :text="mockBlockSimpleCard.summary"
            :to="mockBlockSimpleCard.externalLink"
        />
        <hr />

        <h2>BlockSpaces Component</h2>
        <block-spaces
            :to="mockBlockSpace.to"
            :title="mockBlockSpace.title"
            :location="mockBlockSpace.location"
            :text="mockBlockSpace.text"
        />
        <hr />

        <h2>BlockStaffArticleList Component</h2>
        <block-staff-article-list
            :image="mockBlockStaffArticleList.image"
            :to="mockBlockStaffArticleList.to"
            :category="mockBlockStaffArticleList.category"
            :title="mockBlockStaffArticleList.title"
            :date="mockBlockStaffArticleList.date"
            :authors="mockBlockStaffArticleList.authors"
            :description="mockBlockStaffArticleList.description"
        />
        <hr />

        <h2>BlockStaffDetail Component</h2>
        <block-staff-detail v-bind="{ ...mockBlockStaffDetail }" />
        <hr />

        <h2>BlockStaffList Component</h2>
        <block-staff-list
            v-bind="{ ...mockBlockStaffList }"
            phone="(222) 444-5555"
        />
        <hr />

        <h2>ButtonLink Component</h2>
        <button-link label="Egest perl Conub" to="/help/more" />
        <hr />

        <h2>ButtonMore Component</h2>
        <button-link label="This is a button " to="/help/" />
        <hr />
        <button-more
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <hr />

        <h2>DividerGeneral Component</h2>
        <divider-general :is-bold="true" />
        <hr />

        <h2>DividerWayFinder Component</h2>
        <divider-way-finder color="visit" />
        <hr />

        <h2>FooterPrimary Components</h2>
        <footer-primary
            :social-items="mockFooterPrimary.socialItems"
            :press-items="mockFooterPrimary.pressItems"
            :form="false"
        />
        <hr />

        <h2>FooterSock Components</h2>
        <footer-sock />
        <hr />

        <h2>GridGallery Components</h2>
        <grid-gallery :items="mockGridGallery" />
        <hr />

        <h2>HeaderMainResponsive Component</h2>
        <header-main-responsive
            :primary-nav="mockHeaderStickyPrimaryItems.items"
            :secondary-nav="mockHeaderStickySecondaryItems.items"
            current-path="/about/foo/bar"
        />
        <hr />

        <h2>HeadingArrow Component</h2>
        <heading-arrow text="Get Help With" to="/help/foo/bar/" />
        <br /><br />
        <heading-arrow text="Featured " to="/visit/" />
        <hr />

        <h2>IconWithLink Component</h2>
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
        <hr />

        <h1>ImpactNumbersCarousel Components</h1>
        <impact-numbers-carousel :blocks="mockImpactNumbersCarousel" />
        <hr />

        <h1>Imapct Report Components</h1>
        <story-with-image
            :image="mockStoryWithImage.image"
            :caption="mockStoryWithImage.image.caption"
            :title="mockStoryWithImage.title"
            :text="mockStoryWithImage.text"
            :footnote="mockStoryWithImage.footnote"
            :calltoaction="mockStoryWithImage.calltoaction"
        />
        <hr />

        <h1>ImpactRichText Components</h1>
        <impact-rich-text
            :text-blocks="mockImpactRichText.textBlocks"
            :pull-quote="mockImpactRichText.pullQuote"
            :images="mockImpactRichText.images"
        />
        <hr />

        <h2>MastheadPrimary Component</h2>
        <masthead-primary />
        <hr />

        <h2>MastheadSecondary Component</h2>
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
        />
        <hr />

        <h2>NavBreadCrumb Component</h2>
        <nav-breadcrumb title="jane-doe" />
        <hr />

        <h2>NavPrimary Component</h2>
        <nav-primary :items="parsedNavPrimary" current-path="/about/foo/bar" />
        <hr />
        <nav-primary
            :items="parsedNavPrimary"
            current-path="/about/foo/bar"
            title="Modern Endangered Archives Program"
        />
        <hr />

        <h2>NavSecondary Component</h2>
        <nav-secondary :items="parsedNavSecondary" />
        <hr />

        <h2>PullQuote Component</h2>
        <pull-quote
            text="To invent, you need a good imagination and a pile of junk."
            attribution="Thomas Edison"
        />
        <hr />

        <h2>ResponsiveImage Component</h2>
        <responsive-image :image="mockBlockHighlight.image" />
        <hr />

        <h2>RichText Component</h2>
        <rich-text :rich-text-content="mockRichText.richText" />
        <hr />

        <h2>SearchGeneric</h2>
        <search-generic :filters="mockSearchGeneric.filters" />
        <hr />

        <h2>SiteBrandBar Component</h2>
        <site-brand-bar />
        <hr />

        <h2>SearchHome Component</h2>
        <search-home
            :link-items="mockSearchHomeLinks.linkItems"
            :advanced-search-link="mockAdvancedSearchLink.advancedSearchLink"
        />
        <hr />

        <h2>SectionCardsWithIllustrations Component</h2>
        <section-cards-with-illustrations
            :items="mockSectionCardsWithIllustrations.items"
            title="Get Help with"
            text="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
            to="/help/foo/bar"
            :is-horizontal="false"
        />
        <hr />

        <h2>SectionDualMasonry Component</h2>
        <section-dual-masonry
            :items="mockSectionDualMasonry.bricks"
            to="/visit/foo"
        />
        <hr />

        <h2>SectionPagination Component</h2>
        <section-pagination previousTo="/page/1" nextTo="/page/3" />
        <hr />
        <section-pagination nextTo="/page/1" />
        <hr />
        <section-pagination previousTo="/page/10" />
        <hr />

        <h2>SectionSpacesList Component</h2>
        <section-spaces-list :items="mockSectionSpacesList.items" />
        <hr />

        <h2>SectionStaffArticleList Component</h2>
        <section-staff-article-list
            :items="mockSectionStaffArticleList.items"
        />
        <hr />

        <h2>SectionStaffList Component</h2>
        <section-staff-list :items="mockSectionStaffList.items" />
        <hr />

        <h2>SectionStaffOrcidPublications Component</h2>
        <section-staff-orcid-publications
            class="staff-orcid-publications"
            :orcid="mockSectionStaffOrcidPublications.orcid"
            :publications="mockSectionStaffOrcidPublications.publications"
        />
        <hr />

        <h2>SectionTeaserCard Component</h2>
        <section-teaser-card :items="mockSectionTeaserCard.items" />
        <hr />

        <h2>SectionTeaserHighlight Component</h2>
        <section-teaser-highlight :items="mockSectionTeaserHighlight.items" />
        <hr />

        <h2>SectionTeaserList Component</h2>
        <section-teaser-list :items="mockSectionTeaserList.items" />
        <hr />

        <h2>SiteNotificationAlert Component</h2>
        <site-notification-alert
            :title="mockSiteNotificationAlert.alert.title"
            :text="mockSiteNotificationAlert.alert.textLong"
        />
        <hr />

        <h2>SmartLink Component</h2>
        <smart-link to="/"> This will render as a vue-router link </smart-link>
        <hr />

        <h1>FlexibleBlock Components</h1>
        <flexible-blocks :blocks="flexibleBlocks" />
        <hr />

        <h1>Footer Sponsor MEAP</h1>
        <footer-sponsor />
        <hr />
    </div>
</template>

<script>
import Vue from "vue"
import API from "@/stories/mock-api.json"
import IMPACT_API from "@/stories/impact-report_index.json"
// import NavMenuItem from "../src/lib-components/NavMenuItem.vue"
// import HeaderSticky from "../src/lib-components/HeaderSticky.vue"

export default Vue.extend({
    name: "ServeDev",
    data() {
        return {
            mockSearchGeneric: {
                views: [
                    {
                        slug: "list",
                        iconName: "icon-list",
                        title: "List",
                    },
                    {
                        slug: "card",
                        iconName: "icon-card",
                        title: "Card",
                    },
                    {
                        slug: "calendar",
                        iconName: "icon-calendar",
                        title: "Calendar",
                    },
                ],
                filters: [
                    {
                        label: "Location",
                        slug: "location",
                        inputType: "radio",
                        items: [
                            {
                                name: "Neque porro quisquam",
                            },
                            {
                                name: "qui dolorem ipsum quia dolor",
                            },
                            {
                                name: "consectetur, adipisci velit.",
                            },
                            {
                                name: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            },
                            {
                                name: "Excepteur sint occaecat cupidatat non proident",
                            },
                        ],
                    },
                    {
                        label: "Department",
                        slug: "department",
                        inputType: "checkbox",
                        items: [
                            {
                                name: "Neque porro quisquam",
                            },
                            {
                                name: "qui dolorem ipsum quia dolor",
                            },
                            {
                                name: "consectetur, adipisci velit.",
                            },
                            {
                                name: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            },
                            {
                                name: "Excepteur sint occaecat cupidatat non proident",
                            },
                        ],
                    },
                ],
            },
            mockBlockForm: {
                id: 5481,
                name: "Data Science Center Workshops",
                identityHelp: "",
                emailMethod: {
                    status: "required",
                    label: "Email",
                    help: "",
                },
                phoneMethod: {
                    status: "disabled",
                    label: "Phone Number",
                    help: "",
                },
                barcodeMethod: {
                    status: "disabled",
                    label: "Library Barcode",
                    help: "",
                },
                questions: [
                    {
                        id: 32798,
                        label: "UCLA Department (Use Other Below if Your Department not Listed)",
                        type: "dropdown",
                        required: false,
                        options: [
                            "African American Studies",
                            "African Studies",
                            "American Indian Studies",
                            "Anderson School of Management",
                            "Anthropology",
                        ],
                    },
                    {
                        id: 14994,
                        label: "Other Department or Affiliation",
                        type: "string",
                        required: false,
                    },
                    {
                        id: 14993,
                        label: "Status",
                        type: "checkbox",
                        required: true,
                        options: [
                            "Undergrad",
                            "Graduate",
                            "PostDoc",
                            "Faculty",
                            "Staff",
                            "Librarian",
                            "Visiting Scholar",
                            "Other",
                        ],
                    },
                    {
                        id: 19717,
                        label: "Can we email you about future Data Science Center events & workshops?",
                        type: "radio",
                        required: false,
                        options: ["Yes", "No"],
                    },
                    {
                        id: 19772,
                        label: "What would you like to get out of this course?",
                        type: "string",
                        required: false,
                    },
                ],
            },
            mockBlockEvent: {
                bricks: [
                    {
                        image: {
                            src: "https://via.placeholder.com/1920x1920",
                            srcset: "https://via.placeholder.com/960x960 960w, https://via.placeholder.com/1280x1280 1280w, https://via.placeholder.com/1920x1920 1920w",
                            sizes: "100vw",
                            alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            title: "Lorem ipsum",
                        },
                        category: "Fermentu",
                        title: "Maecenas Leo Mauris",
                        prompt: "Velit Exceptur",
                        dates: "Datum 12 - Datum 23, 2021",
                        to: "/llamacorn/uri/1",
                    },
                    {
                        image: {
                            src: "https://via.placeholder.com/1920x1920",
                            srcset: "https://via.placeholder.com/960x960 960w, https://via.placeholder.com/1280x1280 1280w, https://via.placeholder.com/1920x1920 1920w",
                            sizes: "100vw",
                            alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            title: "Lorem ipsum",
                        },
                        category: "Fermentu",
                        title: "Maecenas Leo Mauris Praesent finibus fermentum ligula, nec tristique",
                        prompt: "Velit Exceptur",
                        dates: "Datum 1 - Datum 18, 2021",
                        to: "/visit/uri/2",
                    },
                ],
            },
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
            mockHeaderStickyPrimaryItems: {
                items: [
                    { ...API.primaryNavlinks[0] },
                    {
                        ...API.primaryNavlinks[0],
                        name: "Visit",
                        url: "/visit/",
                    },
                    {
                        ...API.primaryNavlinks[0],
                        name: "About",
                        url: "/about/",
                    },
                    { ...API.primaryNavlinks[3] },
                ],
            },
            mockHeaderStickySecondaryItems: {
                items: [
                    { ...API.links[0] },
                    { ...API.links[1] },
                    { ...API.links[2] },
                ],
            },
            mockFooterPrimary: {
                socialItems: [
                    {
                        id: "11777",
                        name: "Twotter",
                        to: "https://twitter.com/",
                        classes: null,
                        target: "1",
                    },
                    {
                        id: "11778",
                        name: "Fatebook",
                        to: "https://www.facebook.com/",
                        classes: null,
                        target: "1",
                    },
                    {
                        id: "11779",
                        name: "Instagrim",
                        to: "https://www.instagram.com/",
                        classes: null,
                        target: "1",
                    },
                    {
                        id: "11780",
                        name: "FooTube",
                        to: "https://www.youtube.com/",
                        classes: null,
                        target: "1",
                    },
                ],
                pressItems: [
                    {
                        id: "11781",
                        name: "Dress Doom",
                        to: "https://test-craft.library.ucla.edu/press-room",
                        classes: null,
                        target: "",
                    },
                    {
                        id: "11782",
                        name: "Careers at USC",
                        to: "https://test-craft.library.ucla.edu/careers-at-ucla",
                        classes: null,
                        target: "",
                    },
                ],
            },
            mockFooterSock: {
                nodes: [
                    {
                        id: "1628",
                        name: "EEEmergency",
                        to: "https://test-craft.library.ucla.edu/emergency",
                        classes: null,
                        target: "",
                    },
                    {
                        id: "1627",
                        name: "AAAccessibility",
                        to: "https://test-craft.library.ucla.edu/accessibility",
                        classes: null,
                        target: "",
                    },
                    {
                        id: "1629",
                        name: "Privacy & Terms of Use",
                        to: "https://test-craft.library.ucla.edu/privacy-terms-of-use",
                        classes: null,
                        target: "",
                    },
                    {
                        id: "9511",
                        name: "CCCreative Commons Attribution 4.0",
                        to: "https://creativecommons.org/licenses/by/4.0/",
                        classes: null,
                        target: "1",
                    },
                ],
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
                text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. vibrant the highest quality.",
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
                image: API.image_people,
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
                    "<p>Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, e sagittis magna tincidunt, eleifend arcu id, elementum sapien.</p>",
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
            mockPostSmall: {
                image: API.image,
                to: "/visit/foo/bar/",
                categoryName: "faucibus",
                author: "Inceptos Himenaeos",
                title: "Suspendisse in justo eu magna",
            },
            mockRichText: {
                richText:
                    "<h3>The Best Libraries in the World</h3><ol><li>LIBRARY OF CONGRESS — WASHINGTON D.C., USA</li><li>BODLEIAN LIBRARY — OXFORD, UNITED KINGDOM</li><li>READING ROOM AT THE BRITISH MUSEUM — LONDON, ENGLAND</li><li>YALE UNIVERSITY BEINECKE RARE BOOK AND MANUSCRIPT LIBRARY — NEW HAVEN, CONNECTICUT, USA</li><li>VATICAN LIBRARY — VATICAN CITY, ROME</li></ul>",
            },
            mockSearchHomeLinks: {
                linkItems: [
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
                ],
            },
            mockAdvancedSearchLink: {
                advancedSearchLink: {
                    text: "Advanced Search",
                    url: "https://www.library.ucla.edu/search",
                    target: "_blank",
                },
            },
            mockSectionCardsWithIllustrations: {
                items: [
                    {
                        iconName: "illustration-book-binding",
                        to: "/help/foo/bar/",
                        title: "Lacus Luctus",
                        text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-find-space",
                        to: "/visit/foo/baz/",
                        title: "Ultrices Enim",
                        text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-digitized-resources",
                        to: "/about/foo/fred/",
                        title: "Egestas et Augue",
                        text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-databases",
                        to: "/about/foo/thud/",
                        title: "Proin Sodales",
                        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-remote-access",
                        to: "/visit/foo/qux/",
                        title: "Taciti sociosqu",
                        text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
                        isHorizontal: false,
                    },
                ],
            },
            mockSectionDualMasonry: {
                bricks: [
                    {
                        image: {
                            src: "https://via.placeholder.com/1920x1920",
                            srcset: "https://via.placeholder.com/960x960 960w, https://via.placeholder.com/1280x1280 1280w, https://via.placeholder.com/1920x1920 1920w",
                            sizes: "100vw",
                            alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            title: "Lorem ipsum",
                        },
                        category: "Fermentu",
                        title: "Maecenas Leo Mauris",
                        prompt: "Velit Exceptur",
                        dates: "Datum 12 - Datum 23, 2021",
                        to: "/llamacorn/uri/1",
                    },
                    {
                        image: {
                            src: "https://via.placeholder.com/1920x1920",
                            srcset: "https://via.placeholder.com/960x960 960w, https://via.placeholder.com/1280x1280 1280w, https://via.placeholder.com/1920x1920 1920w",
                            sizes: "100vw",
                            alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            title: "Lorem ipsum",
                        },
                        category: "Fermentu",
                        title: "Maecenas Leo Mauris Praesent finibus fermentum ligula, nec tristique",
                        prompt: "Velit Exceptur",
                        dates: "Datum 1 - Datum 18, 2021",
                        to: "/visit/uri/2",
                    },
                ],
            },
            mockSectionSpacesList: {
                items: [
                    {
                        to: "https://calendar.library.ucla.edu",
                        title: "Internal Portico",
                        location: "Fames Turpis Building",
                        text: "Etiam faucibus tellus quis magna finibus auctor. Fusce sagittis vel lectus sed ullamcorper. Proin faucibus nibh ut purus consequat lobortis. Aenean eu fermentum leo, vitae egestas eros. vel ipsum vestibulum, porta efficitur dolor aliquam.",
                        buttonUrl: "http://google.com",
                    },
                    {
                        to: "https://www.gettyimages.com/photos/cute-llamas",
                        title: "External Von Junz",
                        location: "Debordist Room",
                        text: "If one examines Marxist class, one is faced with a choice: either reject Baudrillardist simulation or conclude that the significance of the artist is social comment. The premise of reality may be found.",
                        buttonUrl: "http://google.com",
                    },
                    {
                        to: "",
                        title: "Null Beefeater Numpty",
                        location: "Pennyboy Cottage",
                        text: "Gosh beefeater numpty scouser rambunctious a bottle of plonk know your onions, cornish pasty spend a penny cheerio down the local marvelous chippy hedgehog chav.",
                        buttonUrl: "http://google.com",
                    },
                ],
            },
            mockSectionStaffArticleList: {
                items: [
                    {
                        image: API.image,
                        to: "/visit/foo/bar/",
                        category: "Ullamco",
                        title: "Fames ac turpis egestas sed tempus lorem ipsum",
                        date: "1995-12-17T03:24:00",
                        authors: [{ title: "Justo Magna", id: 123 }],
                        description:
                            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bar/",
                        category: "Ullamco",
                        title: "Fames ac turpis egestas sed tempus lorem ipsum",
                        date: "2020-12-17T03:24:00",
                        authors: [
                            { title: "Justo Magna", id: 123 },
                            { title: "Luctus Suscipit", id: 124 },
                            { title: "Morbi lacinia", id: 125 },
                            { title: "Vestibulum Tincidunt", id: 126 },
                            { title: "Ut Ultrices Malesuada Enim", id: 127 },
                        ],
                        description:
                            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bar/",
                        category: "Ullamco",
                        title: "Mauris Rhoncus Aenean Vel Elit Scelerisque Mauris Pellentesque Pulvinar Rhoncus Aenean Vel Elit Scelerisque",
                        date: "1998-12-17T03:24:00",
                        authors: [
                            { title: "Justo Magna", id: 123 },
                            { title: "Luctus Suscipit", id: 124 },
                        ],
                        description:
                            "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                    },
                ],
            },
            mockSectionStaffList: {
                items: [
                    {
                        to: "/staff/foo/1",
                        jobTitle: "Ullamco",
                        staffName: "Fames ac turpis",
                        department: "Inceptos Himenaeos",
                        email: "loreum@ipsum.foo",
                        locations: [
                            {
                                title: "cupidatat non proident",
                                to: "/location/bar",
                            },
                            {
                                title: "tristique",
                                to: "/location/baz",
                            },
                        ],
                        phone: "(222) 444-5555",
                    },
                    {
                        to: "/staff/foo/2",
                        jobTitle: "Ullamco",
                        staffName: "Fames ac turpis",
                        department: "Inceptos Himenaeos",
                        email: "loreum@ipsum.foo",
                        locations: [
                            {
                                title: "cupidatat non proident",
                                to: "/location/bar",
                            },
                            {
                                title: "tristique",
                                to: "/location/baz",
                            },
                        ],
                        phone: "(222) 444-5555",
                    },
                    {
                        to: "/staff/foo/3",
                        image: API.image,
                        jobTitle: "Ullamco",
                        staffName: "Fames ac turpis",
                        department: "Inceptos Himenaeos",
                        email: "loreum@ipsum.foo",
                        locations: [
                            {
                                title: "cupidatat non proident",
                                to: "/location/bar",
                            },
                            {
                                title: "tristique",
                                to: "/location/baz",
                            },
                        ],
                        phone: "(222) 444-5555",
                    },
                ],
            },
            mockSectionTeaserCard: {
                items: [
                    {
                        image: API.image,
                        to: "/visit/foo/bar/",
                        category: "Feugiat",
                        title: "Vel Quam Elementum",
                        startDate: "2021-02-05T11:00:00-08:00",
                        endDate: "2021-02-05T11:00:00-08:00",
                        isOnline: true,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/baz/",
                        category: "Tincidunt",
                        title: "Mauris pellentesque pulvinar pellentesque habitant morbi tristique",
                        isOnline: true,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bat/",
                        title: "Adipiscing Tristique",
                        isOnline: false,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/ban/",
                        category: "Ullamco",
                        title: "Fames ac turpis egestas sed tempus lorem ipsum",
                        startDate: "2021-02-05T11:00:00-08:00",
                        endDate: "2021-02-05T11:00:00-08:00",
                        isOnline: false,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/barf/",
                        category: "Curabitur ",
                        title: "Vel Quam Elementum",
                        startDate: "2021-02-05T11:00:00-08:00",
                        endDate: "2021-02-05T11:00:00-08:00",
                        isOnline: true,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bad/",
                        category: "Sagittis",
                        title: "Aenean Lectus Elit",
                        startDate: "2021-02-05T11:00:00-08:00",
                        endDate: "2021-02-05T11:00:00-08:00",
                        isOnline: true,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bag/",
                        category: "Tortor",
                        title: "Vivamus Consectetuer Risus et Tortor",
                        startDate: "2021-02-05T11:00:00-08:00",
                        endDate: "2021-02-05T11:00:00-08:00",
                        isOnline: false,
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bam/",
                        category: "Maecenas",
                        title: "Proin ut Ligula vel Nunc Egestas Porttitor",
                        text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                        isOnline: false,
                    },
                ],
            },
            mockSectionTeaserHighlight: {
                items: [
                    {
                        image: API.image,
                        to: "/visit/foo/bar/1",
                        category: "Ullamco",
                        title: "Fames ac turpis egestas sed tempus lorem ipsum",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        text: "Ultricies leo integer malesuada nunc vel risus commodo viverra.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bar/2",
                        category: "Aliquam Varius",
                        title: "Pretium magna eget dignissim placerat arcu velit et metus",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        locations: [
                            { title: "Powellarium", to: "/location/bar" },
                            {
                                title: "Research Library (Charles E. Young)",
                                to: "/location/baz",
                            },
                        ],
                        text: "Pellentesque molestie, est ut vestibulum convallis, velit ante auctor mauris, sed mattis dolor ante ac purus. Nullam egestas neque sed ullamcorper suscipit.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/baz/3",
                        category: "Sagittis",
                        title: "Auctor Ligula",
                        startDate: "2021-01-03T08:00:00+00:00",
                        endDate: "2021-02-08T07:10:00+00:00",
                        locations: [
                            { title: "Online", to: "/location/bar" },
                            {
                                title: "Research Library (Charles E. Young)",
                                to: "/location/baz",
                            },
                        ],
                        text: "Proin sit amet leo eros. Pellentesque luctus tortor eu aliquet tristique. Proin fringilla enim eget sagittis mattis. Praesent faucibus libero ipsum.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/baz/4",
                        category: "Tristique",
                        title: "Amet nisl suscipit adipiscing bibendum lectus sed",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        text: "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum varius vestibulum sed.",
                    },
                ],
            },
            mockSectionTeaserList: {
                items: [
                    {
                        image: API.image,
                        to: "/visit/foo/bar/",
                        category: "Ullamco",
                        title: "Fames ac turpis egestas sed tempus lorem ipsum",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        text: "Ultricies leo integer malesuada nunc vel risus commodo viverra.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/baz/",
                        category: "Sagittis",
                        title: "Amet nisl suscipit adipiscing bibendum lectus sed",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        text: "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum varius vestibulum sed.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/bat/",
                        category: "Tincidunt",
                        title: "Scelerisque varius morbi enim nunc ornare quam",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        text: "Eu ultrices vitae auctor eu augue. Dolor morbi non arcu risus quis varius quam. Augue lacus viverra vitae congue eu consequat.",
                    },
                    {
                        image: API.image,
                        to: "/visit/foo/ban/",
                        category: "Gravida",
                        title: "At varius vel pharetra vel turpis. Quam vulputate dignissim suspendisse in est ante in. Sed cras ornare arcu. Non diam phasellus vestibulum.",
                        startDate: "2021-09-03T08:00:00+00:00",
                        endDate: "2021-10-08T07:10:00+00:00",
                        text: "Accumsan tortor posuere ac ut consequat semper viverra libero.",
                    },
                ],
            },
            mockSiteNotificationAlert: {
                alert: {
                    title: "Dropio, heroku",
                    text: "Napster mozy sococo orkut convore scribd napster, twones diigo joukuu weebly. Sclipo jibjab scribd.",
                    textLong:
                        "Greplin prezi zillow zoosk orkut, zoosk gooru. Kiko xobni joukuu ideeli bitly joukuu, squidoo heroku hulu sifteo, zooomr jumo dropio chumby. Qeyno wikia oooooc jajah, ebay qeyno lala, jajah lijit. Etsy wufoo flickr movity sclipo heroku, oooooc etsy oooooc. Vimeo foodzie zoosk ebay, wesabe. Ebay doostang vuvox, xobni. Mozy joyent dropio gooru kippt, greplin skype. Kiko napster geni dogster yoono yammer disqus, hipmunk xobni odeo zynga loopt. Groupon klout divvyshot zinch elgg yoono airbnb, orkut zinch chartly squidoo.",
                },
            },
            mockBlockCallToActionTwoUp: {
                item: [
                    {
                        svgName: "svg-call-to-action-find",
                        title: "Lorem ipsum dolor sit amet?",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        name: "Lorem ipsum dolor",
                        to: "/help/foo/bar/",
                        isDark: false,
                        isSmallSize: true,
                    },
                    {
                        svgName: "svg-call-to-action-chat",
                        title: "Dolor sit amet Ipsum",
                        text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        name: "Ipsum dolor amet",
                        to: "/help/foo/bar/",
                        isDark: true,
                        isSmallSize: true,
                    },
                ],
            },
            mockSectionStaffOrcidPublications: {
                orcid: `https://orcid.org/0000-0002-6391-2088`,
                publications: `<ul><li><strong>Johnson, M. W.</strong>, Abumeeiz, S. &amp; McAulay, E. (2021). “Teaching in the Digital Library: A Partnership Between Teaching Librarians and Digital Library Staff.” College &amp; Research Libraries News. 82(7). <a href="https://crln.acrl.org/index.php/crlnews/article/view/25033/32921">https://crln.acrl.org/index.php/crlnews/article/view/25033/32921</a></li><li><strong>Johnson, M. W.</strong> &amp; Lasher, M. (2021). “The Community Workshop Series: A Case Study for Community-Engaged Learning in LIS.” Library Trends. 69(4). <a href="https://doi.org/10.1353/lib.2020.0045">https://doi.org/10.1353/lib.2020.0045</a></li><li>Keralis, S. D. C., Jacobs, C. &amp; <strong>Johnson, M.W.</strong> (2021). “Collaborative Digital Projects in the Undergraduate Humanities Classroom: Case Studies with Timeline JS.” The Journal of Interactive Technology &amp; Pedagogy. 19. <a href="https://jitp.commons.gc.cuny.edu/classroom-timeline-projects/">https://jitp.commons.gc.cuny.edu/classroom-timeline-projects/</a></li></ul>`,
            },
        }
    },
    computed: {
        mockImpactNumbersCarousel() {
            return [
                {
                    largeText: "10",
                    mediumText: "millon",
                    smallDescriptor:
                        "dollars in funding allocated for the procurement of digital and print material",
                    imagePath:
                        "https://i.pinimg.com/originals/02/4b/9f/024b9fee1d4fe6b6939110cc803dfefe.jpg",
                    altImageText: "Image for slide 1",
                },
                {
                    largeText: "3.5",
                    mediumText: "millon",
                    smallDescriptor:
                        "dollars in funding allocated for the procurement of digital and print material",
                    imagePath:
                        "http://mynewsla.com/wp-content/uploads/2014/08/MNLA_FilePhotos_UCLAWestwood_0014.jpg",
                    altImageText: "Image for slide 2",
                },
                {
                    largeText: "5",
                    mediumText: "bajillion",
                    smallDescriptor: "SMdes 0",
                    imagePath:
                        "https://www.p2sinc.com/uploads/UCLA-Powell-WH-1.jpg",
                    altImageText: "Image for slide 3",
                },
                {
                    largeText: "25",
                    mediumText: "percent",
                    smallDescriptor: "SMdes 1",
                    imagePath:
                        "https://farm7.staticflickr.com/6105/6263912377_bc0ab9d68a_z.jpg",
                    altImageText: "Image for slide 4",
                },
            ]
        },
        mockStoryWithImage() {
            return { ...IMPACT_API.story[0] }
        },
        mockGridGallery() {
            return [
                {
                    image: API.image,
                    monthYear: "March 2020",
                    to: "/visit/foo/bar/",
                    headlineText: "Vel Quam Elementum",
                    snippet:
                        "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. ",
                },
                {
                    image: API.image,
                    monthYear: "March 2020",
                    to: "/visit/foo/baz/",
                    headlineText:
                        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique",
                    snippet:
                        "Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
                },
                {
                    image: API.image,
                    monthYear: "March 2020",
                    to: "/visit/foo/bat/",
                    headlineText: "Adipiscing Tristique",
                    snippet:
                        "Vel eros donec ac odio  nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. ",
                },
                {
                    image: API.image,
                    monthYear: "March 2020",
                    to: "/visit/foo/ban/",
                    headlineText:
                        "Fames ac turpis egestas sed tempus lorem ipsum",
                    snippet: "Vel eros donec ac .",
                },
                {
                    image: API.image,
                    monthYear: "March 2020",
                    to: "/visit/foo/barf/",
                    headlineText: "Vel Quam Elementum",
                },
                {
                    image: API.image,
                    to: "/visit/foo/bad/",
                    headlineText: "Aenean Lectus Elit",
                    snippet:
                        "Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.",
                },
            ]
        },
        mockImpactRichText() {
            return {
                textBlocks: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla urna, euismod at sagittis ac, aliquam ut sem. Phasellus varius lacinia nisl nec fermentum. Sed dignissim metus quis consequat pretium. In hac habitasse platea dictumst. Ut vel dignissim eros. Aliquam lacus tellus, molestie a nisi non, suscipit consectetur dolor. Donec sit amet venenatis ante. Nullam blandit rhoncus massa, ac consequat ante egestas .",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla urna, euismod at sagittis ac, aliquam ut sem. Phasellus varius lacinia nisl nec fermentum. Sed dignissim metus quis consequat pretium. In hac habitasse platea dictumst. .<br><br>Ut vel dignissim eros. Aliquam lacus et neque.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue iscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.Lorem ipsum dolor sit amet, consectetur gravida mi quam sit amet neque.",
                ],
                images: [
                    {
                        src: "https://static.library.ucla.edu/remote-vpn-setup-ucla.jpg",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        caption:
                            "Device loans from the Campus Library Instructional Computing Commons (CLICC) provided a lifeline for many Bruins during March 2020 and September 2021.",
                        height: 1080,
                        width: 1920,
                    },
                    {
                        src: "https://static.library.ucla.edu/remote-vpn-setup-ucla.jpg",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        caption:
                            "Device loans from the Campus Library Instructional Computing Commons (CLICC) provided a lifeline for many Bruins during remote teaching and learning. CLICC coordinated nearly 3,000 March 2020 and September 2021.",
                        height: 1080,
                        width: 1920,
                    },
                    {
                        src: "https://static.library.ucla.edu/remote-vpn-setup-ucla.jpg",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        caption:
                            "Device loans from the Campus Library Instructional Computing picked up on campus and shipped to users’ residences, between March 2020 and September 2021.",
                        height: 1080,
                        width: 1920,
                    },
                ],

                pullQuote: [
                    {
                        text: "Vestibulum sodales tincidunt libero, vitae bibendum urna gravida ullamcorper. Morbi sagittis id justo nec condimentum. Aenean fermentum.",
                        attribution: "Ashton Prigge",
                    },
                ],
            }
        },
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
        bannerHeaderData() {
            return {
                image: {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                },
                to: "/help/foo/bar/",
                title: "Curabitur Tortor Pellentesque Nibh Aenean",
                category: "Lectus",
                startDate: "1995-12-17T03:24:00",
                endDate: "1995-12-17T03:24:00",
                byline: ["Cursus Quis"],
                locations: [
                    {
                        id: "523",
                        title: "Powell Library",
                        to: "visit/locations/powell-library",
                    },
                    {
                        id: "3062",
                        title: "Online",
                        to: "visit/locations/online",
                    },
                ],
                prompt: "Cursus Quis",
                alignRight: true,
            }
        },
        bannerFeaturedData() {
            return {
                image: {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                },
                to: "/visit/foo/bar/",
                title: "Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit",
                category: "Torquent",
                breadcrumb: "Torquent",
                startDate: "1995-12-17T03:24:00",
                endDate: "1995-12-17T03:24:00",
                prompt: "Cursus Quis",
                alignRight: false,
            }
        },
        flexibleBlocks() {
            return [
                {
                    id: "13783",
                    typeHandle: "associatedTopicCards",
                    sectionTitle: "Fix Potholes",
                    sectionSummary:
                        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
                    associatedTopicsFlexiblePageBlock: [
                        {
                            id: "13899",
                            topics: [
                                {
                                    to: "/help/road-work",
                                    title: "Road Work Guide",
                                    text: "<p>A research guide</p>",
                                },
                                {
                                    title: "Types of Sinkholes",
                                    text: "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
                                    to: "/help/types-sinkholes",
                                },
                                {
                                    to: "/help/animals",
                                    title: "Animals eat food!",
                                    text: "<p>Some animals eat plants and plant products like grass, leaves and fodder. Goat, cow, horse and sheep eat only plants.</p>",
                                },
                            ],
                        },
                    ],
                },
                {
                    typeHandle: "mediaGallery",
                    titleGeneral: "de Finibus Bonorum et Malorum",
                    title: null,
                    slug: null,
                    shortDescription:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                    mediaGallery: [
                        {
                            id: "4602",
                            altText:
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                            captionText:
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                            captionTitle: "Zooland",
                            image: [
                                {
                                    src: "https://via.placeholder.com/1920x1080",
                                    height: 1080,
                                    width: 1920,
                                    sizes: "100vw",
                                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                    title: "Lorem ipsum",
                                },
                            ],
                            slug: null,
                            sortOrder: 1,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4603",
                            altText: "parking",
                            captionText:
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                            captionTitle: "Image two",
                            image: [
                                {
                                    src: "https://via.placeholder.com/960x540",
                                    height: 540,
                                    width: 960,
                                    id: "2568",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/parking.png" width="400" height="400" alt="Parking">',
                                    kind: "image",
                                    size: "14067",
                                    slug: null,
                                    title: "Parking",
                                },
                            ],
                            slug: null,
                            sortOrder: 2,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4604",
                            altText: "abcd",
                            captionText: null,
                            captionTitle:
                                "For number three we're going to see what it looks like with a very long title",
                            image: [
                                {
                                    src: "https://via.placeholder.com/1100x850",
                                    height: 850,
                                    width: 1100,
                                    id: "2555",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/pile.jpg" width="539" height="360" alt="Pile">',
                                    kind: "image",
                                    size: "117787",
                                    slug: null,
                                    title: "Pile",
                                },
                            ],
                            slug: null,
                            sortOrder: 3,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4605",
                            altText: "abcd",
                            captionText: null,
                            captionTitle: "Four",
                            image: [
                                {
                                    src: "https://via.placeholder.com/1080x1920",
                                    height: 1920,
                                    width: 1080,
                                    id: "2536",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/old-turtle.jpg" width="1200" height="630" alt="Hollywood">',
                                    kind: "image",
                                    size: "178185",
                                    slug: null,
                                    title: "Hollywood",
                                },
                            ],
                            slug: null,
                            sortOrder: 4,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4607",
                            altText: "abcd",
                            captionText: null,
                            captionTitle: "Five",
                            image: [
                                {
                                    src: "https://via.placeholder.com/540x960",
                                    id: "2338",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/long-llama.jpg" width="566" height="467" alt="Long llama">',
                                    height: 960,
                                    kind: "image",
                                    size: "201179",
                                    slug: null,
                                    title: "Long llama",
                                    width: 540,
                                },
                            ],
                            slug: null,
                            sortOrder: 6,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4606",
                            altText: "abcd",
                            captionText: null,
                            captionTitle: "Six",
                            image: [
                                {
                                    src: "https://via.placeholder.com/850x1100",
                                    id: "1120",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/breitenbach.jpeg" width="300" height="289" alt="Breitenbach">',
                                    height: 1100,
                                    kind: "image",
                                    size: "39404",
                                    slug: null,
                                    title: "Breitenbach",
                                    width: 850,
                                },
                            ],
                            slug: null,
                            sortOrder: 5,
                            title: null,
                            typeHandle: "image",
                        },
                    ],
                    archived: false,
                    dateCreated: "2022-02-15T12:43:49-08:00",
                    dateUpdated: "2022-02-15T13:03:32-08:00",
                    enabled: true,
                    fieldId: 250,
                    id: "4601",
                    language: "en-US",
                    level: 1,
                },
                {
                    id: "13668",
                    typeHandle: "ctaBlock2Up",
                    ctaBlock2Up: [
                        {
                            text: "Parking passes for Cats & Kittens only. Day use, weekly, monthly and annual passes are available now.",
                            name: "Get Parking Passes",
                            to: "http://cat-kitten-parking.com",
                            title: "Cat & Kitten Parking Passes",
                            svgName: "svg-call-to-action-find",
                            backgroundColor: true,
                            isDark: false,
                            isSmallSize: true,
                        },
                        {
                            text: "Advanced Ancient Greek for Dogs. Teach your dog the useful language of ancient Greek so you can communicate together more effectively.",
                            name: "Sign Up for Class",
                            to: "http://ancient-greek-for-dogs.com",
                            title: "Ancient Greek for Dogs",
                            svgName: "svg-call-to-action-money",
                            backgroundColor: false,
                            isDark: true,
                            isSmallSize: true,
                        },
                    ],
                },
                {
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
                    id: "15905",
                    typeHandle: "richText",
                    richText:
                        "<p><strong>Item 5: Rich Text</strong><br /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis \nbibendum risus. Sed iaculis ullamcorper ligula, ac imperdiet ante. Etiam\n scelerisque vulputate neque ultrices suscipit. Integer pulvinar lectus a\n urna ultrices venenatis. Nullam finibus pellentesque quam, a consequat \nmassa venenatis ac. Integer at blandit nulla. Quisque ac arcu finibus, \nconsectetur magna quis, malesuada tortor. Nulla sit amet libero \nefficitur, semper tellus sed, tincidunt massa. In interdum tellus ac \nelit eleifend, eu tincidunt velit consequat. <em>Duis non arcu tristique, \nsollicitudin ex sit amet, ultrices urna. Maecenas non felis in augue \ntempus finibus.\n</em><br /></p>\n<ol><li>Sed fringilla sem in lorem efficitur, semper lobortis diam viverra. <br /></li><li>Vivamus nec est fermentum tellus venenatis dictum a ac elit. <br /><ol><li>Quisque \nodio turpis, ultricies eu diam sed, facilisis molestie justo. <br /></li></ol></li><li>Cras \nrutrum turpis in accumsan maximus. </li></ol><p>In hac habitasse platea dictumst. Nam\n mattis lorem lorem, sed elementum odio bibendum convallis. Ut rutrum, \nmauris vel tristique sollicitudin, enim dui tincidunt ex, quis dictum \nneque diam ut purus. Fusce sagittis, nisi in ornare condimentum, urna \njusto gravida diam, vitae tristique neque risus suscipit augue. \nCurabitur interdum malesuada rhoncus. Donec ut libero faucibus, \nscelerisque orci in, pulvinar felis. <br /></p><ul><li>Nam nibh ex, cursus nec leo cursus,\n rhoncus vulputate ipsum. <br /><ul><li>Donec quis sapien fermentum, ullamcorper \ntellus vestibulum, sodales ligula. <br /></li><li>In ultrices diam eget erat hendrerit \nimperdiet tincidunt et lacus. <br /><ul><li>Aenean fringilla pellentesque convallis. <br /></li></ul></li><li>Maecenas elementum quis massa imperdiet malesuada.\n</li></ul></li></ul>",
                },
                {
                    id: "2789",
                    typeHandle: "bannerFeatured",
                    contentLink: [
                        {
                            url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                            to: "/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                            title: "Exhibit to test card with image content link",
                            date: [
                                {
                                    startDate: "2021-09-03T08:00:00+00:00",
                                    endDate: "2021-10-08T07:10:00+00:00",
                                },
                            ],
                            associatedLocations: [
                                {
                                    id: "523",
                                    title: "Powell Library",
                                    to: "visit/locations/powell-library",
                                },
                                {
                                    id: "801",
                                    title: "YRL",
                                    to: "visit/locations/yrl",
                                },
                            ],
                            heroImage: [
                                {
                                    id: "2971",
                                    image: [
                                        {
                                            id: "2536",
                                            src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/old-turtle.jpg",
                                            height: 1344,
                                            width: 2560,
                                            srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/old-turtle.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/old-turtle.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/old-turtle.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/old-turtle.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/old-turtle.jpg 2560w",
                                            alt: "Hollywood",
                                            focalPoint: [0.5, 0.5],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    alignment: "left",
                    buttonText: "See More",
                },
                {
                    id: "16983",
                    typeHandle: "callToAction",
                    callToAction: [
                        {
                            id: "16984",
                            titleCta: "Call to action",
                            summary: "a call to action",
                            icon: "svg-call-to-action-find",
                            buttonText: "click me",
                            buttonLink: "http://google.com",
                            backgroundColor: "false",
                        },
                    ],
                },
                {
                    id: "16982",
                    typeHandle: "helpTopicCards",
                    helpTopicCards: [
                        {
                            id: "2404",
                            contentLink: [
                                {
                                    id: "537",
                                    url: "https://test-craft.library.ucla.edu/help/services-resources/borrowing-books-and-equipment",
                                    to: "/help/services-resources/borrowing-books-and-equipment",
                                    title: "Borrowing Books and Equipment",
                                    text: "Kogi ut austin snackwave try-hard. Labore excepteur activated charcoal trust fund. Gastropub in asymmetrical eu, thundercats flexitarian truffaut waistcoat aliquip. Pour-over irure ex, pinterest et taiyaki incididunt. Craft beer cronut knausgaard, biodiesel poke beard slow-carb ullamco umami semiotics prism taxidermy hoodie meh. Et ugh small batch food truck twee bespoke, laboris roof party knausgaard try-hard tumblr swag cupidatat kombucha eu. Semiotics vegan officia in, pork belly chillwave vape plaid ex affogato veniam shaman brooklyn artisan aliqua.",
                                    iconName: "illustration-find-space",
                                },
                            ],
                        },
                        {
                            id: "2405",
                            contentLink: [
                                {
                                    id: "1033",
                                    url: "https://test-craft.library.ucla.edu/help/services-resources/sample-service-page-with-faqs",
                                    to: "/help/services-resources/sample-service-page-with-faqs",
                                    title: "Sample Service Page with FAQ's",
                                    text: "Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.",
                                    iconName: "illustration-find-space",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "13783",
                    typeHandle: "simpleCards",
                    sectionTitle: "Fix Potholes",
                    sectionSummary:
                        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
                    cards: [
                        {
                            id: "13899",
                            contentLink: [
                                {
                                    slug: "road-work",
                                    title: "Road Work Guide",
                                    summary: "<p>A research guide</p>",
                                    externalResourceUrl:
                                        "http://libguides.library.ucla.edu",
                                },
                            ],
                        },
                        {
                            id: "13900",
                            title: "Types of Sinkholes",
                            summary:
                                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
                            externalLink:
                                "https://www.heliconusa.com/types-of-sinkholes/",
                        },
                    ],
                },
                {
                    id: "3968",
                    typeHandle: "cardWithImage",
                    cardWithImage: [
                        {
                            id: "3969",
                            image: [
                                {
                                    id: "2536",
                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/old-turtle.jpg",
                                    height: 1344,
                                    width: 2560,
                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/old-turtle.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/old-turtle.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/old-turtle.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/old-turtle.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/old-turtle.jpg 2560w",
                                    alt: "Hollywood",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                            imageAltText: "hollywood",
                            contentLink: [
                                {
                                    id: "1686",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                                    uri: "visit/events-exhibits/a-new-exhibit",
                                    title: "a new exhibit",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-08T07:00:00+00:00",
                                            endDate: null,
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                    ],
                                },
                            ],
                            shortDescription: null,
                        },
                    ],
                },
                {
                    id: "3550",
                    typeHandle: "highlight",
                    highlight: [
                        {
                            id: "3575",
                            contentLink: [
                                {
                                    id: "1686",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                                    to: "visit/events-exhibits/a-new-exhibit",
                                    title: "a new exhibit",
                                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-08T07:00:00+00:00",
                                            endDate:
                                                "2021-09-29T07:00:00+00:00",
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                    ],
                                    image: [
                                        {
                                            id: "1687",
                                            image: [
                                                {
                                                    id: "1214",
                                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/sea-turtle.jpg",
                                                    height: 1920,
                                                    width: 2560,
                                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/sea-turtle.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/sea-turtle.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/sea-turtle.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/sea-turtle.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/sea-turtle.jpg 2560w",
                                                    alt: "IMG 20210608 182730371",
                                                    focalPoint: [0.5, 0.5],
                                                },
                                            ],
                                            altText: "flowers",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "3576",
                            contentLink: [
                                {
                                    id: "1542",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                                    to: "visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                                    title: "Exhibit to test card with image content link",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-03T08:00:00+00:00",
                                            endDate:
                                                "2021-10-08T07:10:00+00:00",
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                        {
                                            id: "3062",
                                            title: "Online",
                                            to: "visit/locations/online",
                                        },
                                    ],
                                    image: [
                                        {
                                            id: "2971",
                                            image: [
                                                {
                                                    id: "2536",
                                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/old-turtle.jpg",
                                                    height: 1344,
                                                    width: 2560,
                                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/old-turtle.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/old-turtle.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/old-turtle.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/old-turtle.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/old-turtle.jpg 2560w",
                                                    alt: "Hollywood",
                                                    focalPoint: [0.5, 0.5],
                                                },
                                            ],
                                            altText: "hollywood",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]
        },
        parsedNavPrimary() {
            return [
                { ...API.primaryNavlinks[0] },
                {
                    ...API.primaryNavlinks[0],
                    name: "Visit",
                    url: "/visit/",
                },
                {
                    ...API.primaryNavlinks[0],
                    name: "About",
                    url: "/about/",
                },
                { ...API.primaryNavlinks[3] },
            ]
        },
        parsedNavSecondary() {
            return [...API.links, { ...API.links[0] }]
        },
        mockSimpleCards() {
            return {
                id: "13783",
                sectionTitle: "Fix Potholes",
                sectionSummary:
                    "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
                cards: [
                    {
                        id: "6622",
                        text: "<p>Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.</p>",
                        title: "Connecting from Off-Campus",
                        slug: "connecting-from-off-campus",
                        uri: "help/services-resources/connecting-from-off-campus",
                        type: "resource",
                    },
                    {
                        id: "6407",
                        text: "<p>A research guide</p>",
                        title: "A new research guide",
                        slug: "a-new-research-guide",
                        uri: null,
                        externalResourceUrl:
                            "http://libguides.library.ucla.edu",
                    },
                ],
            }
        },
        // parsedSockItems() {
        //     return this.mockFooterSock.items.map((obj) => {
        //         return {
        //             ...obj,
        //             target: this.formatLinkTarget(obj.target),
        //         }
        //     })
        // },
    },
})
</script>

<style lang="scss" scoped>
.app {
    margin: 50px 100px;

    h1 {
        margin: 50px 0 10px 0;
        font-weight: bold;
    }

    h2 {
        margin: 25px 0;
    }
    hr {
        margin-top: 25px;
        border-top: 2px dashed coral;
    }
}
</style>
