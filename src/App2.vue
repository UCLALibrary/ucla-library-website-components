<script setup>
import { computed, provide } from 'vue'

import RichText from '@/lib-components/RichText.vue'
import SimpleCards from '@/lib-components/SimpleCards.vue'



import FlexibleImpactNumbersCarousel from '@/lib-components/Flexible/ImpactNumbersCarousel.vue'

import HelloWorld from '@/lib-components/HelloWorld.vue'

import * as API from '@/stories/mock-api.json'
import * as MOCK from '@/mock.js'

const testKey = 'blockFormData'
const testValue = MOCK.blockForm

provide('eventId', '9383207')
provide(testKey, testValue)
provide('registrationType', 'both')
provide('libcalEndpoint', 'https://proxy.calendar.library.ucla.edu/')
provide('libcalWaitlist', '')
</script>

<template>
    <!-- <div>
        <a
            href="https://vitejs.dev"
            target="_blank"
        >
            <img
                src="/vite.svg"
                class="logo"
                alt="Vite logo"
            >
        </a>
        <a
            href="https://vuejs.org/"
            target="_blank"
        >
            <img
                src="./assets/vue.svg"
                class="logo vue"
                alt="Vue logo"
            >
        </a>
    </div> -->

    <!-- Hello World -->
    <div>
        <HelloWorld msg="Vite + Vue" />
        <br>
        <hr>
        <br>
    </div>

    <!--
    <div>
        <h2>Flexible CardWithImage Component</h2>
        <h3>JZEZNNN</h3>

        <br>
        <FlexibleCardWithImage :block="MOCK.cardWithImage" />
        <br>
        <hr>
        <br>
    </div>

    <div>
        <h2>Flexible MediaWithText Component</h2>
        <br>
        <FlexibleMediaWithText :block="MOCK.mediaWithText" />
        <br>
        <hr>
        <br>
    </div>


    <div>
        <h2>FLEXY-Flexible SimpleCards Component</h2>
        <br>
        <!-- <h3>{{ MOCK.flexSimpleCards }}</h3> -->
    <FlexibleSimpleCards :block="MOCK.flexSimpleCards" />

    <br>
    <hr>
    <br>
    </div>


    <div>
        <h2>SIMPLY-SimpleCards Component</h2>
        <br>
        <SimpleCards
            :items="MOCK.twoCards.cards"
            :section-title="MOCK.mockdata.sectionTitle"
            :section-summary="MOCK.mockdata.sectionSummary"
        />
        <br>
        <hr>
        <br>
    </div> -->

    <!-- SiteBrandBar -->
    <div>
        <h2>SiteBrandBar Component</h2>
        <br>
        <SiteBrandBar />
        <br>
        <hr>
        <br>
    </div>


    <!-- FlexibleImpactNumberCard -->
    <div>
        <h2>FlexibleImpactNumberCard</h2>
        <flexible-impact-number-cards :block="MOCK.flexImpactNumberCardsMock" />
        <hr>
        <br>
    </div>


    <!-- Divider -->
    <div>
        <h2>Divider Component</h2>
        <DividerGeneral />
        <hr>
        <br>
    </div>

    <!-- DividerWayFinder -->
    <div>
        <h2>DividerWayFinder Component</h2>
        <DividerWayFinder color="help" />
        <hr>
        <br>
    </div>

    <!-- RichText -->
    <!-- <div>
    <h2>RichText Component</h2>
    <RichText :rich-text-content="MOCK.richText" />
    <br>
    <hr>
    <br>
  </div> -->

    <!-- SiteNotificationAlert -->
    <!-- <div>
    <h2>SiteNotificationAlert Component</h2>
    <br>
    <SiteNotificationAlert :title="MOCK.mockdata.title" :text="MOCK.mockdata.text" />
    <SiteNotificationAlert :title="MOCK.mockdata.title" :text="MOCK.mockdata.textLong" />
    <br>
    <hr>
    <br>
  </div> -->

    <!-- ButtonLink -->
    <div>
        <h2>ButtonLink Component</h2>
        <br>
        <ButtonLink
            label="Internal Lib Path"
            to="/help/more"
        />
        <br>
        <br>
        <ButtonLink
            label="Internal-Secondary"
            :is-secondary="true"
            to="/help/more"
        />
        <br>
        <br>
        <ButtonLink
            label="UCLA Link-Secondary"
            :is-secondary="true"
            to="https://calendar.library.ucla.edu/"
        />
        <br>
        <br>
        <ButtonLink
            label="External-No icon attr"
            :is-secondary="true"
            to="https://www.google.com/"
        />
        <br>
        <br>
        <ButtonLink
            label="Internal-Icon Right"
            icon-name="svg-arrow-right"
            to="/help/more"
        />
        <br>
        <br>
        <ButtonLink
            label="Internal-Secondary-Icon Right"
            :is-secondary="true"
            icon-name="svg-arrow-right"
            to="/help/more"
        />
        <br>
        <br>
        <ButtonLink
            label="External-Secondary-Icon"
            :is-secondary="true"
            icon-name="svg-external-link"
            to="www.google.com"
        />
        <br>
        <br>
        <ButtonLink
            label="External-Secondary-IconNameNone"
            :is-secondary="true"
            icon-name="none"
            to="www.google.com"
        />
        <br>
        <br>
        <ButtonLink
            label="External-Secondary-IconNameEmptyString"
            :is-secondary="true"
            icon-name=""
            to="www.google.com"
        />
        <br>
        <br>
        <ButtonLink
            label="External-Secondary-NoIcon"
            :is-secondary="true"
            to="www.google.com"
        />
        <br>
        <br>
        <hr>
        <br>
    </div>

    <!-- Button -->
    <div>
        <h2>Button Component</h2>
        <br>
        <ButtonHide />
        <br>
        <ButtonShow />
        <br>
        <ButtonMore />
        <br>
        <hr>
        <br>
    </div>

    <!-- HeadingArrow -->
    <div>
        <h2>HeadingArrow Component</h2>
        <br>
        <HeadingArrow text="Default" />
        <br>
        <HeadingArrow
            text="About Us"
            to="/about/"
        />
        <br>
        <HeadingArrow
            text="Visit Us"
            to="/visit/"
        />
        <br>
        <HeadingArrow
            text="Get Help"
            to="/help/"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- PullQuote -->
    <div>
        <h2>PullQuote Component</h2>
        <br>
        <PullQuote :text="MOCK.mockdata.text" />
        <br>
        <PullQuote
            :text="MOCK.mockdata.text"
            :attribution="MOCK.mockdata.attribution"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockDate -->
    <div>
        <h2>BlockDate Component</h2>
        <br>
        <BlockDate
            date="10"
            day="Digniss"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- IconWithLink -->
    <div>
        <h2>IconWithLink Component</h2>
        <br>
        <IconWithLink
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
        <br>
        <IconWithLink
            text="See More"
            icon-name="svg-icon-search"
            to="https://www.google.com/"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- AlphabeticalBrowseBy -->
    <div>
        <h2>AlphabeticalBrowseBy Component</h2>
        <br>
        <AlphabeticalBrowseBy />
        <br>
        <AlphabeticalBrowseBy selected-letter-prop="A" />
        <br>
        <hr>
        <br>
    </div>

    <!-- SearchResult -->
    <div>
        <h2>SearchResult Component</h2>
        <br>
        <SearchResult
            :category="MOCK.mockdata.category"
            :title="MOCK.mockdata.title"
            :summary="MOCK.mockdata.text"
            :to="MOCK.mockdata.to"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- SingleCheckbox -->
    <div>
        <h2>SingleCheckbox Component</h2>
        <br>
        <SingleCheckbox />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockCallToAction -->
    <div>
        <h2>BlockCallToAction Component</h2>
        <br>
        <BlockCallToAction
            :svg-name="MOCK.mockdata.svgName"
            :title="MOCK.mockdata.title"
            :text="MOCK.mockdata.text"
            :name="MOCK.mockdata.name"
            :to="MOCK.mockdata.to"
            :is-dark="false"
            :is-small-size="false"
        />
        <br>
        <BlockCallToAction
            svg-name="svg-call-to-action-money"
            :title="MOCK.mockdata.title"
            :text="MOCK.mockdata.text"
            :name="MOCK.mockdata.name"
            :to="MOCK.mockdata.to"
            :is-small-size="true"
            :is-dark="true"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockCallToActionTwoUp -->
    <div>
        <h2>BlockCallToActionTwoUp Component</h2>
        <BlockCallToActionTwoUp :items="MOCK.blockCTAitems" />
        <hr>
        <br>
    </div>

    <!-- BlockSpace -->
    <div>
        <h2>BlockSpace Component</h2>
        <br>
        <BlockSpaces
            :to="MOCK.mockdata.to"
            :title="MOCK.mockdata.title"
            :location="MOCK.mockdata.location"
            :text="MOCK.mockdata.text"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockSimpleCard -->
    <div>
        <h2>BlockSimpleCard Component</h2>
        <br>
        <BlockSimpleCard
            :title="MOCK.mockdata.title"
            :text="MOCK.mockdata.text"
            :to="MOCK.mockdata.to"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockEvent -->
    <div>
        <h2>BlockEvent Component</h2>
        <br>
        <BlockEvent
            :category="MOCK.mockdata.category"
            :title="MOCK.mockdata.title"
            :prompt="MOCK.mockdata.title"
            :start-date="MOCK.mockdata.startDate"
            :end-date="MOCK.mockdata.endDate"
            :to="MOCK.mockdata.to"
            :section-handle="MOCK.mockdata.title"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockSponsor -->
    <div>
        <h2>BlockSponsor Component</h2>
        <br>
        <BlockSponsor
            :funder-logo="MOCK.mockdata.funderLogo"
            funder-name="Hostess Cupcakes"
            funder-url="https://www.hostesscakes.com/products/cupcakes/chocolate/"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockCardWithIllustration -->
    <div>
        <h2>BlockCardWithIllustration Component</h2>
        <br>
        <ul>
            <BlockCardWithIllustration
                :to="MOCK.mockdata.to"
                :title="MOCK.mockdata.title"
                :text="MOCK.mockdata.text"
            />
        </ul>
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockShowHide -->
    <div>
        <h2>BlockShowHide Component</h2>
        <br>
        <BlockShowHide style="width: 100%; padding: 0 48px;">
            <div
                style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted"
                data-cy="main"
            >
                Main content is passed via a slot and will be visible by default.
            </div>
            <div
                class="show-hide-hideable"
                style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted"
                data-cy="extra"
            >
                To make content "expandable" it should be passed in the slot along with the main content, but add
                the
                class
                "show-hide-hideable" to any items that should be hidden.
            </div>
        </BlockShowHide>
        <br>
        <hr>
        <br>
    </div>

    <!-- SectionStaffOrcidPublications -->
    <div>
        <h2>SectionStaffOrcidPublications Component</h2>
        <br>
        <SectionStaffOrcidPublications
            class="staff-orcid-publications"
            orcid="https://orcid.org/0000-0002-6391-2088"
            publications="<ul><li><strong>Johnson, M. W.</strong>, Abumeeiz, S. &amp; McAulay, E. (2021). 'Teaching in the Digital Library: A Partnership Between Teaching Librarians and Digital Library Staff.' College &amp; Research Libraries News. 82(7). <a href='https://crln.acrl.org/index.php/crlnews/article/view/25033/32921'>https://crln.acrl.org/index.php/crlnews/article/view/25033/32921</a></li></ul>"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- NavBreadcrumb -->
    <div>
        <h2>NavBreadcrumb Component</h2>
        <NavBreadcrumb
            title="jane-doe"
            to="/about/news"
            parent-title="parent"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockStaffSubjectLibrarian -->
    <div>
        <h2>BlockStaffSubjectLibrarian Component</h2>
        <table>
            <tbody>
                <BlockStaffSubjectLibrarian v-bind="MOCK.staff" />
            </tbody>
        </table>
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockGenericList -->
    <div>
        <h2>BlockGenericList Component</h2>
        <br>
        <ul>
            <BlockGenericList v-bind="MOCK.staff2" />
        </ul>
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockAmenities -->
    <div>
        <h2>BlockAmenities Component</h2>
        <br>
        <BlockAmenities v-bind="MOCK.amenities" />
        <br>
        <hr>
        <br>
    </div>

    <!-- SimpleCards -->
    <div>
        <h2>SimpleCards Component</h2>
        <br>
        <SimpleCards
            :items="MOCK.twoCards.cards"
            :section-title="MOCK.mockdata.sectionTitle"
            :section-summary="MOCK.mockdata.sectionSummary"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- SectionSpacesList -->
    <div>
        <h2>SectionSpacesList Component</h2>
        <br>
        <SectionSpacesList
            :items="MOCK.spaces"
            n-shown="2"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- ResponsiveImage -->
    <div>
        <h2>ResponsiveImage Component</h2>
        <br>
        <ResponsiveImage
            :media="API.image"
            :aspect-ratio="100"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- SectionDualMasonry -->
    <div>
        <h2>SectionDualMasonry Component</h2>
        <br>
        <SectionDualMasonry
            :items="API.bricks"
            to="/visit/foo"
            text="See All Events"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- SectionCardsWithIllustrations -->
    <div>
        <h2>SectionCardsWithIllustrations Component</h2>
        <br>
        <SectionCardsWithIllustrations
            :items="MOCK.itemsVertical"
            :section-title="MOCK.mockdata.sectionTitle"
            :section-summary="MOCK.mockdata.sectionSummary"
            to="/help/foo/bar"
            :is-horizontal="false"
            button-text="See More"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- MastheadPrimary -->
    <div>
        <h2>MastheadPrimary Component</h2>
        <br>
        <MastheadPrimary
            :link-items="MOCK.searchLinks.linkItems"
            :advanced-search-link="MOCK.searchLinks.advancedSearchLink"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- MastheadSecondary -->
    <div>
        <h2>MastheadSecondary Component</h2>
        <br>
        <MastheadSecondary
            :title="MOCK.mockdata.sectionTitle"
            :text="MOCK.mockdata.sectionSummary2"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- CardMeta -->
    <div>
        <h2>CardMeta Component</h2>
        <br>
        <CardMeta v-bind="MOCK.mockdata" />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockCardWithImage -->
    <div>
        <h2>BlockCardWithImage Component</h2>
        <br>
        <BlockCardWithImage v-bind="MOCK.mockdata" />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockFloatingHighlight -->
    <div>
        <h2>BlockFloatingHighlight Component</h2>
        <br>
        <BlockFloatingHighlight v-bind="MOCK.mockdata" />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockClippedDate -->
    <div>
        <h2>BlockClippedDate Component</h2>
        <br>
        <BlockClippedDate v-bind="MOCK.mockdata" />
        <br>
        <hr>
        <br>
    </div>

    <!-- BannerFeatured -->
    <div>
        <h2>BannerFeatured Component</h2>
        <br>
        <BannerFeatured
            :media="MOCK.mockdata.image"
            :to="MOCK.mockdata.toHelp"
            :title="MOCK.mockdata.title"
            :category="MOCK.mockdata.category"
            :breadcrumb="MOCK.mockdata.breadcrumb"
            :byline="MOCK.mockdata.byline"
            :prompt="MOCK.mockdata.prompt"
            :locations="MOCK.mockdata.locations"
            :section-handle="MOCK.mockdata.sectionHandle"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BannerHeader -->
    <div>
        <h2>BannerHeader</h2>
        <br>
        <BannerHeader
            :media="MOCK.mockdata.image"
            :to="MOCK.mockdata.to"
            :title="MOCK.mockdata.title"
            :category="MOCK.mockdata.category"
            :start-date="MOCK.mockdata.startDate"
            :end-date="MOCK.mockdata.endDate"
            :byline="MOCK.mockdata.byline"
            :prompt="MOCK.mockdata.prompt"
            :locations="MOCK.mockdata.locations"
            :section-handle="MOCK.mockdata.sectionHandle"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BannerText -->
    <div>
        <h2>BannerText</h2>
        <br>
        <BannerText
            :category="MOCK.mockdata.category"
            :title="MOCK.mockdata.title"
            :text="MOCK.mockdata.text"
            :button-text="MOCK.mockdata.buttonText"
            :to="MOCK.mockdata.to"
            :byline="MOCK.mockdata.byline"
            :alternative-full-name="MOCK.mockdata.alternativeFullName"
            :language="MOCK.mockdata.language"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- BlockForm -->
    <div>
        <h2>BlockForm</h2>
        <br>
        <BlockForm />
        <br>
        <br>
        <hr>
        <br>
    </div>

    <!-- SearchHome -->
    <div>
        <h2>SearchHome Component</h2>
        <br>
        <SearchHome v-bind="MOCK.searchLinks" />
        <br>
        <hr>
        <br>
    </div>

    <!-- ResponsiveVideo -->
    <div>
        <h2>ResponsiveVideo</h2>
        <br>
        <ResponsiveVideo
            :media="MOCK.video"
            :controls="true"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- ImpactNumberCard -->
    <div>
        <h2>ImpactNumberCard</h2>
        <br>
        <ImpactNumberCard
            :text="MOCK.mockdata.textShort"
            :title="MOCK.mockdata.title"
            :impact-number="MOCK.mockdata.impactNumber"
        />
        <br>
        <hr>
        <br>
    </div>

    <!-- GridGallery -->
    <div>
        <h2>GridGallery</h2>
        <br>
        <GridGallery :items="MOCK.gridgallery" />
        <br>
        <hr>
        <br>
    </div>

    <!-- FlexibleGridGalleryCards -->
    <div>
        <h2>FlexibleGridGalleryCards</h2>
        <br>
        <FlexibleGridGalleryCards :block="MOCK.flexibleGrid" />
        <br>
        <hr>
        <br>
    </div>

    <!-- FlexibleCallToAction -->
    <div>
        <h2>FlexibleCallToAction</h2>
        <br>
        <FlexibleCallToAction :block="MOCK.flexCta" />
        <br>
        <hr>
        <br>
    </div>

    <!-- FlexibleCallToActionTwoUp -->
    <div>
        <h2>FlexibleCallToActionTwoUp</h2>
        <br>
        <FlexibleCallToActionTwoUp :block="MOCK.flexCta2up" />
        <br>
        <hr>
        <br>
    </div>

    <!-- FlexibleAssociatedTopicCards -->
    <div>
        <h2>FlexibleAssociatedTopicCards</h2>
        <br>
        <FlexibleAssociatedTopicCards :block="MOCK.flexAssocTopic" />
        <br>
        <hr>
        <br>
    </div>

    <!-- FlexibleForm -->
    <div>
        <h2>FlexibleForm</h2>
        <br>
        <FlexibleForm :block="MOCK.flexForm" />
        <br>
        <hr>
        <br>
    </div>

    <!-- Heading -->
    <!-- <div>
    <h2>Component</h2>
    <br>
    <component />
    <br>
    <hr>
    <br>
  </div> -->
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
