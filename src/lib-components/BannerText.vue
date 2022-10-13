<template>
    <div :class="classes">
        <div class="banner-text-content-container">
            <div v-if="category" class="category">
                <svg-heading-vector class="heading-line" aria-hidden="true" />
                <div :class="categoryClasses" v-html="category" />
            </div>

            <div class="content">
                <h1 class="title" v-html="title" />
                <rich-text v-if="text" class="text" :rich-text-content="text" />
                <div class="byline" v-if="byline.length">
                    <div v-if="articleType">
                        <div
                            v-for="(item, index) in byline"
                            :key="index"
                            v-html="item.title"
                            class="byline-item"
                        />
                    </div>
                    <div v-if="!articleType">
                        <div
                            v-for="(item, index) in byline"
                            :key="index"
                            v-html="item"
                            class="byline-item"
                        />
                    </div>
                    <div v-if="date" class="schedule">
                        <time
                            v-if="date"
                            class="schedule-item"
                            v-html="parsedDate"
                        />
                        <time
                            v-if="date"
                            class="schedule-item"
                            v-html="parsedTime"
                        />
                        <div v-if="isOnline" class="schedule-item">Online</div>
                    </div>
                </div>

                <div v-if="locations.length" class="location-group">
                    <icon-with-link
                        v-for="location in locations"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        icon-name="svg-icon-location"
                        :to="`/${location.to}`"
                    />
                </div>

                <div v-if="email" class="contact-info">
                    <icon-with-link
                        :text="email"
                        icon-name="svg-icon-email"
                        :to="`mailto:/${email}`"
                    />
                </div>

                <div v-if="phone" class="contact-info">
                    <icon-with-link
                        :text="phone"
                        icon-name="svg-icon-phone"
                        :to="`tel:/${phone}`"
                    />
                </div>

                <div v-if="staffDirectoryLink" class="contact-info">
                    <icon-with-link
                        :text="`View staff directory`"
                        icon-name="svg-icon-person"
                        :to="staffDirectoryLink"
                    />
                </div>

                <div v-if="addressLink" class="contact-info">
                    <icon-with-link
                        :text="address"
                        icon-name="svg-icon-location"
                        :to="addressLink"
                    />
                </div>

                <button-link
                    v-if="to && !isDarkBlue"
                    :label="buttonText"
                    :to="to"
                    :is-secondary="true"
                />

                <button-link
                    v-if="to && isDarkBlue"
                    :label="buttonText"
                    :to="to"
                    :is-tertiary="true"
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
    </div>
</template>

<script>
// Utility functions
import formatEventTimes from "@/mixins/formatEventTimes"
import formatEventDates from "@/mixins/formatEventDates"
import getSectionName from "@/mixins/getSectionName"

export default {
    name: "BannerText",
    mixins: [getSectionName, formatEventTimes, formatEventDates],
    components: {
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
        IconWithLink: () =>
            import("@/lib-components/IconWithLink.vue").then((d) => d.default),
        RichText: () =>
            import("@/lib-components/RichText.vue").then((d) => d.default),
        SvgHeadingVector: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/graphic-category-slash.svg"
            ).then((d) => d.default),
        BlockForm: () =>
            import("@/lib-components/BlockForm.vue").then((d) => d.default),
    },
    props: {
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
            required: true,
        },
        date: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        isDarkBlue: {
            type: Boolean,
            default: false,
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
        articleType: {
            type: String,
            default: "",
        },
        byline: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        classes() {
            let output = ["banner-text", "theme-light"]
            if (this.isDarkBlue) {
                output = ["banner-text", "theme-dark"]
            }
            return output
        },
        parseDarkBackground() {
            let output = true
            if (this.isDarkBlue) {
                output = false
            }
            return output
        },
        sectionName() {
            return this.getSectionName(this.to)
        },
        categoryClasses() {
            return ["text", `color-${this.sectionName}`]
        },
        parsedDate() {
            return this.formatDates(this.date, this.date)
        },
        parsedTime() {
            return this.formatTimes(this.date, this.date)
        },
    },
    data() {
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
// Variations for dark blue and white backgrounds
.theme-light {
    --background-color: var(--color-white);
    --category-title-color: var(--color-primary-blue-05);
    --title-color: var(--color-primary-blue-03);
    --text-color: var(--color-black);
    --schedule-item-color: var(--color-secondary-grey-04);
    --schedule-item-border: var(--color-secondary-grey-02);
    --button-border-color: var(--color-primary-blue-03);
    --facet-inside-color: var(--color-primary-blue-02);
    --facet-outside-color: var(--color-primary-blue-03);
    --location-color: var(--color-primary-blue-03);
    --location-icon-color: var(--color-primary-blue-03);
    --hover-border-color: var(--color-primary-blue-02);
    --hover-background-color: var(--color-white);
    background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-half-faceted-light.svg");
    //background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-faceted-light.svg");
}

.theme-dark {
    --background-color: var(--color-primary-blue-03);
    --category-title-color: var(--color-white);
    --title-color: var(--color-white);
    --text-color: var(--color-white);
    --schedule-item-color: var(--color-white);
    --schedule-item-border: var(--color-primary-yellow-01);
    --button-border-color: var(--color-default-cyan-02);
    --facet-inside-color: var(--color-default-cyan-02);
    --facet-outside-color: var(--color-default-cyan-03);
    --location-color: var(--color-white);
    --location-icon-color: var(--color-white);
    --hover-border-color: var(--color-white);
    --hover-background-color: var(--color-primary-blue-03);
    background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-half-faceted-dark.svg");
    //background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-faceted-dark.svg");

    ::v-deep .icon-with-link {
        .link {
            --link-color: var(--color-white);

            &:hover,
            &:focus {
                color: var(--link-color);
                text-decoration-color: var(--color-default-cyan-02);
            }
        }

        .icon {
            --icon-color: var(--color-white);
            --icon-color-highlight: var(--color-white);
        }
    }

    .text {
        color: var(--color-white);
    }
}
.banner-text {
    margin: 0 auto;
    background-color: var(--background-color);
    position: relative;
    z-index: 0;
    background-position: 100% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    .category {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: -52px;
        .heading-line {
            flex-shrink: 0;
            padding-right: 0;
        }
        .text {
            border: 1px solid var(--color-theme);
            padding: 14px 24px;
            margin-left: -10px;
            clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
            line-height: 1;
            font-weight: #{$font-weight-regular};
            font-size: 26px;

            color: var(--category-title-color);
            text-transform: capitalize;
        }
    }
    // Themes for category outline
    --color-theme: var(--color-primary-blue-03);
    .color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    .color-help {
        --color-theme: var(--color-help-green-03);
    }
    .color-about {
        --color-theme: var(--color-about-purple-03);
    }

    .banner-text-content-container {
        padding: 40px 0 0;
        max-width: $container-l-main + px;
        margin: auto;

        .category {
            margin-bottom: var(--space-m);
        }

        .content {
            max-width: calc(100% - 144px);

            > *:last-child {
                margin-bottom: 0;
            }
        }
    }
    .title {
        @include step-5;
        color: var(--title-color);
        margin-bottom: var(--space-m);
    }
    .contact-info {
        color: var(--color-primary-blue-03);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
        margin-bottom: var(--space-m);
    }
    .content .text {
        @include step-0;
        margin-bottom: var(--space-m);
    }
    .schedule {
        @include step-0;
        text-align: left;
        color: var(--schedule-item-color);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
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

    .location-group {
        color: var(--location-color);
        margin-bottom: var(--space-m);

        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .location-svg {
        .location-icon {
            fill: var(--location-icon-color);
        }
        .location-icon-line {
            stroke: var(--location-icon-color);
        }
    }
    .byline {
        flex-direction: column;
        align-items: flex-start;
    }
    .byline-item {
        @include step-0;
        color: var(--color-secondary-grey-04);
    }
    .byline-item,
    .schedule-item {
        &:after {
            display: none;
        }
    }
    .schedule {
        flex-direction: column;
    }

    // Hovers
    @media #{$has-hover} {
        &.theme-dark {
            .button-link:hover {
                background-color: var(--hover-background-color);
                color: var(--text-color);
            }
        }
    }
}
// Breakpoints
@media #{$extra-large} {
    .banner-text {
        .text {
            max-width: 788px;
        }
    }
}
@media #{$medium} {
    .banner-text {
        background-size: contain;
        .category .text {
            font-size: 20px;
        }
        .category .heading-line {
            height: 80px;
        }
        .category {
            margin-left: 0;
        }
        .banner-text-content-container {
            padding-left: var(--unit-gutter);
            padding-top: 40px;
        }
        .text {
            padding-right: 120px;
        }
    }
}

@media #{$medium} and (min-width: 928px) {
    .banner-text .banner-text-content-container {
        max-width: 100%;
    }
}
@media #{$small} {
    .banner-text {
        background-image: none;

        .category {
            margin-left: 0;
            .text {
                padding: 12px 16px;
            }
        }
        .banner-text-content-container {
            padding: 32px;
        }
        .banner-text-content-container .content {
            max-width: 100%;
        }
        .schedule {
            display: flex;
            flex-direction: column;
            padding-left: 0;
        }

        .location-group {
            padding-left: 0;
        }
        .text {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
        }
    }
}
</style>
