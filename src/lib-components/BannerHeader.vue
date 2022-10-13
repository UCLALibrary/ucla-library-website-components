<template>
    <div :class="classes">
        <div v-if="category" class="category">
            <svg-heading-vector class="heading-line" aria-hidden="true" />
            <div class="text" v-html="category" />
        </div>

        <component
            :is="parsedMediaComponent"
            class="media"
            :image="parsedMediaProp"
            :aspect-ratio="parsedRatio"
        >
            <div v-if="image" :class="gradientClasses" />

            <svg-molecule-half-faceted class="molecule" aria-hidden="true" />
        </component>

        <div class="hatch-box">
            <div class="clipped-box" />
            <div class="hatch">
                <svg-hatch-right class="svg" aria-hidden="true" />
            </div>
        </div>

        <div class="meta">
            <h1 class="title" v-html="title" />

            <rich-text v-if="text" class="snippet" :rich-text-content="text" />

            <div class="meta-text">
                <div class="byline" v-if="byline.length">
                    <div
                        v-for="(item, index) in byline"
                        :key="index"
                        class="byline-item"
                    >
                        {{ item.title }}
                    </div>
                    <time
                        v-if="dateCreated"
                        class="date-created"
                        v-html="parsedDateCreated"
                    />
                    <time
                        v-if="startDate"
                        class="schedule-item"
                        v-html="parsedDate"
                    />
                    <time
                        v-if="startDate && isEvent"
                        class="schedule-item"
                        v-html="parsedTime"
                    />
                </div>
                <div
                    v-if="email || phone || staffDirectoryLink || addressLink"
                    class="contact-info-group"
                >
                    <icon-with-link
                        v-if="email"
                        :text="email"
                        icon-name="svg-icon-email"
                        :to="`mailto:${email}`"
                    />
                    <icon-with-link
                        v-if="phone"
                        :text="phone"
                        icon-name="svg-icon-phone"
                        :to="`tel:${phone}`"
                    />
                    <icon-with-link
                        v-if="staffDirectoryLink"
                        :text="`View staff directory`"
                        icon-name="svg-icon-person"
                        :to="staffDirectoryLink"
                    />
                    <icon-with-link
                        v-if="addressLink"
                        :text="address"
                        icon-name="svg-icon-location"
                        :to="addressLink"
                    />
                </div>
                <div v-if="locations.length" class="location-group">
                    <icon-with-link
                        v-for="location in parsedLocations"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        icon-name="svg-icon-location"
                        :to="`/${location.to}`"
                    />
                    <icon-with-link
                        v-for="location in parsedIsOnline"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        icon-name="svg-icon-virtual"
                        :to="`/${location.to}`"
                    />
                </div>
            </div>
            <button-link
                v-if="to"
                :label="prompt"
                :is-secondary="true"
                class="button"
                :to="to"
            />
            <button-link
                v-if="!to && !registerEvent"
                @click.native.prevent="showBlockEvent()"
                class="submitButton"
                label="Register"
                iconName="none"
                :is-secondary="true"
            >
            </button-link>
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
import SmartLink from "@/lib-components/SmartLink.vue"

// Utility functions
import formatEventTimes from "@/mixins/formatEventTimes"
import formatEventDates from "@/mixins/formatEventDates"
import getSectionName from "@/mixins/getSectionName"

export default {
    name: "BannerHeader",
    mixins: [getSectionName, formatEventTimes, formatEventDates],
    components: {
        SvgMoleculeHalfFaceted,
        SvgHatchRight,
        ResponsiveImage,
        ResponsiveVideo,
        SmartLink,
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
        RichText: () =>
            import("@/lib-components/RichText.vue").then((d) => d.default),
        IconWithLink: () =>
            import("@/lib-components/IconWithLink.vue").then((d) => d.default),
        BlockForm: () =>
            import("@/lib-components/BlockForm.vue").then((d) => d.default),
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
        text: {
            type: String,
            default: "",
        },
        byline: {
            type: Array,
            default: () => [],
        },
        dateCreated: {
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
        to: {
            // URL to link to, if blank won't link
            type: String,
            default: "",
        },
        category: {
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
        //contact info for Location Detail Page
        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        addressLink: {
            type: String,
            default: "",
        },
        staffDirectoryLink: {
            type: String,
            default: "",
        },
        isEvent: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "banner-header",
                { "hatch-left": !this.alignRight },
                `color-${this.sectionName}`,
            ]
        },
        parsedDateCreated() {
            return format(new Date(this.dateCreated), "MMMM d, Y")
        },
        parsedDate() {
            return this.formatDates(this.startDate, this.endDate)
        },
        parsedTime() {
            return this.formatTimes(this.startDate, this.endDate)
        },
        sectionName() {
            // Want the color for the current page
            return this.getSectionName(this.$route.path)
        },
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            // if (this.$store.state.winWidth <= 750) {
            //     output = 100
            // }
            return output
        },
        parsedMediaComponent() {
            return this.image ? "responsive-image" : "responsive-video"
        },
        parsedMediaProp() {
            return this.image ? this.image : this.video
        },
        gradientClasses() {
            return this.category ? "gradient" : "gradient-no-category"
        },
        parsedLocations() {
            return this.locations.reduce(function (filtered, location) {
                if (location.title !== "Online") {
                    location.svg = "svg-icon-location"
                    filtered.push(location)
                }
                return filtered
            }, [])
        },
        parsedIsOnline() {
            return this.locations.reduce(function (filtered, location) {
                if (location.title === "Online") {
                    location.svg = "svg-icon-virtual"
                    filtered.push(location)
                }
                return filtered
            }, [])
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
.banner-header {
    z-index: 0;
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);
    max-width: $container-xl-banner + px;

    // Themes
    --color-theme: var(--color-primary-blue-03);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-03);
    }
    .hatch {
        ::v-deep .svg__stroke--wayfinder {
            stroke: var(--color-theme);
        }
    }

    .category {
        color: var(--color-white);
        font-size: 26px;
        text-transform: capitalize;

        position: absolute;
        z-index: 20;
        padding-left: 64px;
        margin-top: 64px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .heading-line {
            flex-shrink: 0;
            padding-right: 0;
            height: 96px;
        }
        .text {
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
        max-height: 576px;
        .media {
            object-fit: cover;
        }
    }

    .gradient {
        background: $overlays-overlay-01;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .gradient-no-category {
        background: $overlays-overlay-02;
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
        bottom: 96px;
        margin: auto;
        position: absolute;
        z-index: 20;
        opacity: 0.3;
        mix-blend-mode: screen;

        height: 70%;
        width: auto;
    }

    --hatch-height: 96px;
    --hatch-width: 28%;
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
        left: calc(72% - 68px);

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
            right: calc(72% - 68px);
            left: auto;

            .svg {
                transform: scaleX(-1);
            }
        }
        .meta {
            padding-right: 0;
            padding-left: clamp(184px, 35%, 280px);
            margin-left: auto;

            align-content: flex-start;
        }
    }

    .meta {
        padding-right: clamp(184px, 35%, 280px);
        margin-top: -36px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 40;
        max-width: $container-l-main + px;

        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-end;
    }

    .meta-text {
        margin-bottom: var(--space-l);
    }

    .title {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .snippet {
        @include step-0;
        color: var(--color-black);
        margin-bottom: var(--space-m);

        ::v-deep p {
            margin: 0;
        }
    }
    .byline {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
        margin-bottom: var(--space-m);
        justify-content: space-evenly;
    }
    .byline-item,
    .schedule-item,
    .date-created {
        display: flex;
        flex-direction: row;

        @include step-0;
        color: var(--color-secondary-grey-04);
    }

    .schedule {
        line-height: 24px;
        text-align: left;
        color: var(--color-primary-blue-03);
        margin-top: var(--space-m);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .contact-info-group {
        color: var(--color-primary-blue-03);
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: var(--space-m);
    }

    .location-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: var(--space-m);
    }

    @media #{$medium} {
        --hatch-height: 74px;
        --hatch-density: 632px;
        .category {
            padding-left: 32px;
            margin-top: 32px;
        }
        .category .text {
            font-size: 20px;
        }
        .category .heading-line {
            height: 80px;
        }
        .hatch {
            left: calc(72% - 84px);
        }
        &.hatch-left .hatch {
            right: calc(72% - 84px);
            left: auto;
        }
        .meta {
            padding-right: clamp(184px, 35%, 300px);
            padding-left: var(--unit-gutter);
            margin-top: -36px;
        }
        &.hatch-left .meta {
            padding-right: var(--unit-gutter);
            margin-top: -36px;
        }
        .title {
            margin-top: var(--space-m);
        }
    }
    @media #{$medium} and (min-width: 928px) {
        .meta {
            max-width: 100%;
        }
    }

    @media #{$small} {
        .media {
            height: 375px;
            max-height: 375px;
        }
        .category {
            padding-left: 16px;
            margin-top: 16px;
            .text {
                padding: 12px 16px;
            }
        }
        .molecule {
            bottom: 10%;
            height: 215px;
            width: auto;
        }
        --hatch-height: 36px;
        --hatch-density: 338px;
        .hatch {
            left: calc(72% - 46px);
        }
        &.hatch-left .hatch {
            right: calc(72% - 46px);
            left: auto;
        }
        .meta {
            width: 100%;
            max-width: 100%;
            margin-top: 0;
            padding-left: 0;
            padding-right: 0;
            position: static;
        }
        &.hatch-left .meta {
            padding-right: 0;
            padding-left: 0;
            width: 100%;
            max-width: 100%;
            margin-top: 0;
        }
    }
}
</style>
