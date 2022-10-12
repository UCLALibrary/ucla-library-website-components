<template>
    <div :class="classes">
        <div class="slot">
            <slot>
                <div v-if="breadcrumb" class="breadcrumb">
                    <svg-heading-vector
                        class="heading-line"
                        aria-hidden="true"
                    />
                    <h3 class="text">
                        {{ breadcrumb }}
                    </h3>
                </div>
            </slot>
        </div>

        <component
            :is="parsedMediaComponent"
            class="media"
            :image="parsedMediaProp"
            :aspect-ratio="parsedRatio"
        >
            <div v-if="image" class="gradient" />

            <svg-molecule-half-faceted class="molecule" aria-hidden="true" />
        </component>

        <div class="hatch-box">
            <div class="clipped-box">
                <h3
                    v-if="category"
                    class="category category-mobile"
                    v-html="category"
                />
            </div>
            <div class="hatch">
                <svg-hatch-right class="svg" aria-hidden="true" />
            </div>
        </div>

        <div class="meta">
            <div class="category category-desktop" v-html="category" />

            <h3 id="banner-featured" class="title" v-html="title"></h3>
            <div class="meta-text">
                <div class="byline" v-if="bylineArticleExists">
                    <div
                        v-for="(item, index) in parseByLineStaff"
                        :key="`staff-${index}`"
                        class="byline-item"
                    >
                        <smart-link :to="`/${item.to}`">
                            {{ item.title }}
                        </smart-link>
                    </div>

                    <!-- TODO: Convert date format to Month DD, YYYY -->
                    <div class="byline-item">
                        {{ byline["articlePostDate"] }}
                    </div>
                </div>
                <div class="byline" v-if="bylineProjectExists">
                    <div
                        v-for="(item, index) in parseByLineProject"
                        :key="`project-topics-${index}`"
                        class="byline-item"
                        v-html="item.title"
                    ></div>
                </div>
                <div
                    class="byline"
                    v-if="
                        byline.length &&
                        !bylineArticleExists &&
                        !bylineProjectExists
                    "
                >
                    <div
                        v-for="(item, index) in byline"
                        :key="`external-${index}`"
                        class="byline-item"
                        v-html="item"
                    ></div>
                </div>
                <rich-text
                    v-if="description"
                    class="description"
                    :rich-text-content="description"
                />

                <div v-if="startDate || endDate" class="schedule">
                    <time
                        v-if="startDate"
                        class="schedule-item"
                        v-html="parsedDate"
                    />
                    <time
                        v-if="endDate"
                        class="schedule-item"
                        v-html="parsedTime"
                    />
                </div>

                <div v-if="locationLinksExists" class="location-group">
                    <icon-with-link
                        v-for="location in parsedLocationsLinks"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        icon-name="svg-icon-location"
                        :to="location.to"
                    />
                </div>

                <div v-if="locationExternalExists" class="location-group">
                    <icon-with-link
                        :text="parsedLocationsExternal"
                        icon-name="svg-icon-location"
                    />
                </div>
                <div
                    v-if="
                        locations.length &&
                        !locationLinksExists &&
                        !locationForExternalExists
                    "
                    class="location-group"
                >
                    <icon-with-link
                        v-for="location in parsedLocations"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        :icon-name="location.svg"
                        :to="`/${location.to}`"
                        :class="location.class"
                    />
                </div>
            </div>
            <button-link
                v-if="to"
                :label="prompt"
                :to="to"
                aria-labelledby="banner-featured-button banner-featured"
                class="button"
                id="banner-featured-button"
            />
            <button
                v-if="!to && !registerEvent"
                @click="showBlockEvent()"
                class="submitButton"
            >
                Register
            </button>
            <block-form
                :block="mock0"
                event-id="9383207"
                :registerEvent="registerEvent"
                @closeBlockForm="closeBlockForm"
            />
        </div>
    </div>
</template>

<script>
import format from "date-fns/format"

// Components
import SvgMoleculeHalfFaceted from "ucla-library-design-tokens/assets/svgs/molecule-half-overlay.svg"
import SvgHatchRight from "ucla-library-design-tokens/assets/svgs/graphic-hatch-lines.svg"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import ResponsiveVideo from "@/lib-components/ResponsiveVideo.vue"
import IconWithLink from "@/lib-components/IconWithLink.vue"
import SmartLink from "@/lib-components/SmartLink.vue"

// Utility functions
import formatEventTimes from "@/mixins/formatEventTimes"
import formatEventDates from "@/mixins/formatEventDates"
import getSectionName from "@/mixins/getSectionName"

export default {
    name: "BannerFeatured",
    mixins: [getSectionName, formatEventTimes, formatEventDates],
    components: {
        SvgMoleculeHalfFaceted,
        SvgHatchRight,
        ResponsiveImage,
        ResponsiveVideo,
        IconWithLink,
        SmartLink,
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
        RichText: () =>
            import("@/lib-components/RichText.vue").then((d) => d.default),
        SvgHeadingVector: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/graphic-category-slash.svg"
            ).then((d) => d.default),
        SvgIconOnline: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"
            ).then((d) => d.default),

        SvgIconEmail: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-email.svg"
            ).then((d) => d.default),
        SvgIconPhone: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-phone.svg"
            ).then((d) => d.default),
        SvgIconLocation: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location.svg"
            ).then((d) => d.default),
        SvgIconPerson: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-person.svg"
            ).then((d) => d.default),
        BlockForm: () =>
            import("@/lib-components/BlockForm.vue").then((d) => d.default),
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        video: {
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        startDate: {
            type: String,
            default: "",
        },
        endDate: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        byline: {
            type: Array,
            default: () => [],
        },
        to: {
            // URL to link to, if blank won't link
            type: String,
            default: "",
        },
        breadcrumb: {
            type: String,
            default: "",
        },
        prompt: {
            // text that displays on blue button, e.g. "View exhibit". Links to `props.to`
            type: String,
            default: "",
        },
        alignRight: {
            type: Boolean,
            default: true,
        },
        ratio: {
            type: Number,
            default: 56.25,
        },
    },
    computed: {
        classes() {
            return [
                "banner-featured",
                { "hatch-left": !this.alignRight },
                `color-${this.sectionName}`,
            ]
        },
        bylineArticleExists() {
            return (
                this.byline &&
                (this.byline["articleStaff"] || this.byline["articlePostDate"])
            )
        },
        bylineProjectExists() {
            return this.byline && this.byline["project"]
        },
        locationLinksExists() {
            return this.locations && this.locations["location_links"]
        },
        locationExternalExists() {
            return this.locations && this.locations["location_external"]
        },
        parseByLineStaff() {
            return this.byline["articleStaff"]
        },
        parseByLineProject() {
            return this.byline["project"]
        },
        parsedLocationsLinks() {
            return this.locations["location_links"]
        },
        parsedLocationsExternal() {
            return this.locations["location_external"]
        },
        parsedDate() {
            return this.formatDates(this.startDate, this.endDate)
        },
        parsedTime() {
            return this.formatTimes(this.startDate, this.endDate)
        },
        sectionName() {
            return this.section || this.getSectionName(this.to)
        },
        parsedMediaComponent() {
            return this.image ? "responsive-image" : "responsive-video"
        },
        parsedMediaProp() {
            return this.image ? this.image : this.video
        },
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            // if (this.$store.state.winWidth <= 750) {
            //     output = 100
            // }
            return output
        },
        parsedLocations() {
            return this.locations.map((obj) => {
                return {
                    ...obj,
                    svg:
                        obj.title == "Online"
                            ? "svg-icon-virtual"
                            : "svg-icon-location",
                    class:
                        obj.title == "Online"
                            ? "location-online"
                            : "location-link",
                }
            })
        },
    },
    data: function () {
        return {
            mock0: {
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
                        label: "UCLA Department Affiliation",
                        type: "dropdown",
                        required: false,
                        options: [
                            "African American Studies",
                            "African Studies",
                            "American Indian Studies",
                            "Anderson School of Management",
                            "Anthropology",
                            "Archaeology",
                            "Architecture",
                            "Architecture - M.Arch.",
                            "Architecture - M.S. in Architecture and Urban Design",
                            "Architecture and Urban Design Department",
                            "Art",
                            "Art History",
                            "Asian American Studies",
                            "Asian Languages and Cultures",
                            "Asian Languages and Cultures Department",
                            "Astronomy and Astrophysics",
                            "Astronomy and Astrophysics-MAT",
                            "Atmospheric and Oceanic Sciences",
                            "Biochemistry, Molecular and Structural Biology",
                            "Bioengineering",
                            "Bioinformatics",
                            "Biology",
                            "Biomathematics",
                            "Bioscience Programs",
                            "Biostatistics",
                            "Chemical &amp; Biomolecular Engineering Department",
                            "Chemical Engineering",
                            "Chemistry",
                            "Chemistry and Biochemistry Department",
                            "Chicana &amp; Chicano Studies",
                            "Chicana/o and Central American Studies Department",
                            "Choreographic Inquiry",
                            "Civil &amp; Environmental Engineering Department",
                            "Civil Engineering",
                            "Classics",
                            "Classics Department",
                            "Clinical Research",
                            "Communication",
                            "Community Health Sciences",
                            "Community Health Sciences Department",
                            "Comparative Literature",
                            "Computational Medicine Department",
                            "Computer Science",
                            "Conservation of Archaeological &amp; Ethnographic Materials",
                            "Conservation of Archaeological &amp; Ethnographic Materials Department",
                            "Conservation of Material Culture",
                            "Culture and Performance",
                            "David Geffen School of Medicine",
                            "Design | Media Arts",
                            "Earth, Planetary, and Space Sciences Department",
                            "East Asian Studies",
                            "Ecology and Evolutionary Biology Department",
                            "Economics",
                            "Economics - Master of Applied Economics",
                            "Economics Department",
                            "Education",
                            "Educational Leadership Program",
                            "Electrical &amp; Computer Engineering",
                            "Engineering - Master of Engineering",
                            "Engineering - MS in Engineering, Online",
                            "Engineering - MS in Engineering-Aerospace, Online",
                            "Engineering - MS in Engineering-Computer Networking, Online",
                            "Engineering - MS in Engineering-Electrical, Online",
                            "Engineering - MS in Engineering-Electronic Materials, Online",
                            "Engineering - MS in Engineering-Integrated Circuits, Online",
                            "Engineering - MS in Engineering-Manufacturing and Design, Online",
                            "Engineering - MS in Engineering-Materials Science, Online",
                            "Engineering - MS in Engineering-Mechanical, Online",
                            "Engineering - MS in Engineering-Signal Processing and Communications, Online",
                            "Engineering - MS in Engineering-Structural Materials, Online",
                            "English",
                            "Environment and Sustainability",
                            "Environmental Health Sciences",
                            "Environmental Science &amp; Engineering",
                            "Epidemiology",
                            "Ethnomusicology",
                            "Executive Master of Public Health",
                            "Fielding School of Public Health",
                            "Film &amp; Television",
                            "Film, Television, &amp; Digital Media Department",
                            "French &amp; Francophone Studies",
                            "Gender Studies",
                            "Genetic Counseling",
                            "Geochemistry",
                            "Geography",
                            "Geography Department",
                            "Geology",
                            "Geophysics &amp; Space Physics",
                            "Germanic Languages",
                            "Germanic Languages Department",
                            "Greek",
                            "Health Policy &amp; Management",
                            "Health Policy and Management Department",
                            "Healthcare Administration",
                            "Henry Samueli School of Engineering and Applied Science",
                            "Herb Alpert School of Music",
                            "Hispanic Languages &amp; Literatures",
                            "History",
                            "Human Genetics",
                            "Human Genetics Department",
                            "Humanities",
                            "Indo-European Studies",
                            "Information Studies",
                            "Information Studies Department",
                            "Institute of the Environment &amp; Sustainability",
                            "Integrative Biology &amp; Physiology Department",
                            "International Institute",
                            "Islamic Studies",
                            "Italian",
                            "Latin",
                            "Latin American Studies",
                            "Library &amp; Information Science",
                            "Library &amp; Information Science Certificate",
                            "Life Sciences",
                            "Linguistics",
                            "Luskin School of Public Affairs",
                            "Management - Business Analytics MS",
                            "Management - Executive MBA",
                            "Management - Fully Employed MBA (FEMBA)",
                            "Management - Global Executive MBA for Asia Pacific",
                            "Management - Master of Financial Engineering",
                            "Management - MBA",
                            "Management - MS, PHD",
                            "Manufacturing Engineering",
                            "Master of Applied Geospatial Information Systems &amp; Technologies",
                            "Master of Legal Studies",
                            "Master of Public Health for Health Professionals",
                            "Master of Social Science",
                            "Materials Science &amp; Engineering",
                            "Mathematics",
                            "Mechanical &amp; Aerospace Engineering Department",
                            "Mechanical Engineering",
                            "Microbiology, Immunology, &amp; Molecular Genetics",
                            "Molecular &amp; Medical Pharmacology",
                            "Molecular Biology",
                            "Molecular Toxicology",
                            "Molecular, Cell, &amp; Developmental Biology",
                            "Molecular, Cellular, &amp; Integrative Physiology",
                            "Music",
                            "Musicology",
                            "Near Eastern Languages &amp; Cultures",
                            "Near Eastern Languages &amp; Cultures Department",
                            "Neuroscience",
                            "Nursing",
                            "Nursing - Doctor of Nursing Practice",
                            "Oral Biology",
                            "Philosophy",
                            "Physical Sciences",
                            "Physics",
                            "Physics &amp; Biology in Medicine",
                            "Physics and Astronomy Department",
                            "Physiological Science",
                            "Political Science",
                            "Portuguese",
                            "Psychology",
                            "Public Health",
                            "Public Policy",
                            "Scandinavian",
                            "School of Dentistry",
                            "School of Education and Information Studies",
                            "School of Law",
                            "School of Nursing",
                            "School of the Arts and Architecture",
                            "School of Theater, Film and Television",
                            "Slavic, East European, and Eurasian Languages &amp; Cultures",
                            "Social Sciences",
                            "Social Welfare",
                            "Sociology",
                            "Spanish",
                            "Spanish and Portuguese Department",
                            "Special Education",
                            "Statistics",
                            "Statistics - Master of Applied Statistics",
                            "Statistics Department",
                            "Teaching Asian Languages",
                            "Theater",
                            "Theater and Performance Studies",
                            "Theater Department",
                            "Urban and Regional Planning",
                            "Urban and Regional Planning - Institut d'Etudes de Paris",
                            "Urban Planning",
                            "Urban Planning Department",
                            "World Arts and Cultures/Dance Department",
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
            registerEvent: false,
        }
    },
    methods: {
        closeBlockForm() {
            this.registerEvent = false
        },
        showBlockEvent() {
            this.registerEvent = true
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-featured {
    z-index: 0;
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);
    max-width: $container-xl-full-width + px;

    // Themes
    --banner-color-theme: var(--color-primary-blue-03);
    &.color-visit {
        --banner-color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --banner-color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --banner-color-theme: var(--color-about-purple-03);
    }

    .hatch,
    .heading-arrow {
        ::v-deep .svg__stroke--wayfinder {
            stroke: var(--banner-color-theme);
        }
    }

    .slot {
        position: absolute;
        z-index: 20;
        padding-left: 64px;
        margin-top: 64px;
    }
    .breadcrumb {
        color: var(--color-white);
        font-size: 26px;
        text-transform: capitalize;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .heading-line {
            flex-shrink: 0;
            padding-right: 0;
            height: 96px;
        }
        ::v-deep .text {
            border: 1px solid var(--color-white);
            padding: 14px 24px;
            margin-left: -10px;
            clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
            line-height: 1;
            font-weight: #{$font-weight-regular};
            font-size: 26px;
        }
    }
    ::v-deep .responsive-image {
        max-height: 728px;
        .media {
            object-fit: cover;
        }
    }
    //TODO update with variables
    .gradient {
        background: var(--gradient-image-01),
            linear-gradient(
                180deg,
                rgba(15, 15, 15, 0) 0%,
                rgba(15, 15, 15, 0.25) 67.57%,
                #0f0f0f 100%
            );
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .molecule {
        right: 0;
        top: 0;
        bottom: 95px;
        margin: auto;
        position: absolute;
        z-index: 20;
        opacity: 0.3;
        mix-blend-mode: screen;

        height: 70%;
        width: auto;
    }
    --hatch-height: 96px;
    --hatch-width: 35%;
    --hatch-density: 818px;
    .hatch-box {
        width: 100%;
        position: relative;
        z-index: 30;
        overflow: hidden;

        margin-top: calc(-1 * var(--hatch-height));
    }
    .clipped-box {
        max-width: calc(100% - var(--hatch-width));
        background-color: var(--color-white);
        position: relative;
        z-index: 20;
        height: calc(var(--hatch-height) + 2px);

        clip-path: polygon(
            0 0,
            calc(100% - 39px) 0,
            100% 95px,
            100% 102%,
            0 102%
        );
    }
    .hatch {
        height: var(--hatch-height);
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: calc(65% - 99px);

        .svg {
            position: relative;
            bottom: 8px;
            width: var(--hatch-density);
            height: auto;
        }
    }

    // Variant
    &.hatch-left {
        .clipped-box {
            margin-left: auto;
            padding-right: 50px;
            padding-left: 100px;
            clip-path: polygon(39px 0, 105% 0, 100% 102%, 0 102%, 0% 95px);
        }
        .hatch {
            right: calc(65% - 99px);
            left: auto;

            .svg {
                transform: scaleX(-1);
            }
        }
        .meta {
            padding-left: 376px;
            padding-right: 0;
            margin-left: auto;

            align-content: flex-start;
            align-items: flex-start;
        }
    }

    .category-mobile {
        display: none;
    }

    .meta {
        margin: -60px auto 0;
        position: relative;
        z-index: 40;
        padding-right: clamp(360px, 35%, 400px);
        max-width: $container-l-main + px;

        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-end;
    }

    .meta-text {
        margin-bottom: var(--space-l);
    }

    .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-bottom: var(--space-m);
    }
    .title {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .byline,
    .description,
    .schedule {
        @include step-0;
        margin-bottom: var(--space-m);
    }
    .byline {
        color: var(--color-secondary-grey-04);
    }
    .description {
        color: var(--color-black);
    }
    .schedule {
        color: var(--color-secondary-grey-04);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .schedule-item {
        &:after {
            content: "|";
            color: var(--color-secondary-grey-02);
            margin: 0 10px;
            height: 18px;
            display: inline-block;
            position: relative;
        }
        &:last-child {
            margin-right: 0;
        }
        &:last-child:after {
            display: none;
        }
    }
    .location-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: var(--space-m);
    }

    // Breakpoints

    @media #{$medium} {
        --hatch-height: 74px;
        --hatch-density: 632px;
        .slot {
            padding-left: 32px;
            margin-top: 32px;
        }
        .breadcrumb .text {
            font-size: 20px;
        }
        .breadcrumb .heading-line {
            height: 80px;
        }
        .hatch {
            left: calc(65% - 44px);
        }
        .meta {
            padding-left: 16px;
            padding-right: clamp(280px, 42%, 400px);
            margin-left: 0;
        }
        &.hatch-left .meta {
            padding-left: clamp(340px, 42%, 400px);
            padding-right: var(--unit-gutter);
        }
        .schedule {
            flex-direction: column;
        }

        .schedule-item:after {
            display: none;
        }
    }

    @media #{$small} {
        --hatch-height: 36px;
        --hatch-density: 338px;
        .media {
            height: 375px;
        }
        .slot {
            font-size: 28px;
            padding-left: 16px;
            margin-top: 16px;
        }
        .breadcrumb {
            font-size: 20px;
            .text {
                padding: 12px 16px;
            }
        }
        .molecule {
            margin-bottom: -45px;
            height: 215px;
            width: auto;
        }
        .hatch {
            left: calc(65% - 44px);
        }
        .category-mobile {
            display: block;
            padding-left: 0;
            height: 36px;
            padding-top: 7px;

            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            align-items: flex-start;
        }

        .meta {
            width: 100%;
            margin-top: 0;
            padding-left: 0;
            padding-right: 0;
        }
        .category-desktop {
            display: none;
        }
        .title {
            margin-top: var(--space-m);
        }

        // Variant
        &.hatch-left {
            .clipped-box {
                padding-left: var(--unit-gutter);
                padding-right: var(--unit-gutter);
            }
            .hatch {
                right: calc(65% - 44px);
            }
            .category-mobile {
                align-content: center;
                align-items: center;
            }
            .meta {
                width: 100%;
                margin-top: 0;
                padding-left: 0;
                padding-right: 0;
            }
        }
    }

    .submitButton {
        box-sizing: border-box;
        position: relative;
        @include button;
        min-height: 48px;
        padding: 4px 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border: 1.5px solid var(--color-primary-blue-02);
        transition-property: all;
        @include animate-normal;
        overflow: hidden;
        z-index: 0;

        background-color: var(--color-primary-blue-03);
        --button-background-slide: var(--color-white);
        border-color: var(--color-primary-blue-03);
        color: var(--color-white);

        .label {
            white-space: nowrap;
        }

        &::before {
            content: "";
            width: 100%;
            height: 100%;
            background-color: var(--button-background-slide);
            position: absolute;
            top: 0;
            left: -100%;
            transition-property: all;
            @include animate-normal;
            z-index: -10;
        }

        // Hover states
        @media #{$has-hover} {
            &:hover,
            &:focus,
            &:focus-visible {
                cursor: pointer;
                border-color: var(--color-primary-blue-02);
                color: var(--color-black);

                &::before {
                    left: 0;
                }
            }

            &:focus,
            &:focus-visible {
                outline: none;
                border-radius: 0;
            }
        }
        // Breakpoints
        @media #{$medium} {
            padding: 4px 16px;
            display: inline-flex;
        }

        @media #{$small} {
            width: 100%;
        }
    }
}
</style>
