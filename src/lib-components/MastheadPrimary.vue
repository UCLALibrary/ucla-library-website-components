<template>
    <div class="masthead-primary">
        <div class="background" />

        <div class="container">
            <div class="logo">
                <svg-logo-ucla-library-underline class="svg" />
            </div>

            <search-home
                :link-items="linkItems"
                :advanced-search-link="advancedSearchLink"
            />
        </div>
    </div>
</template>

<script>
import SearchHome from "./SearchHome.vue"

import SvgLogoUclaLibraryUnderline from "ucla-library-design-tokens/assets/svgs/logo-ucla-library-underline.svg"

export default {
    name: "MastheadPrimary",
    components: {
        SvgLogoUclaLibraryUnderline,
        "search-home": SearchHome,
    },
    data() {
        return {
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
            advancedSearchLink: {
                text: "Advanced Search",
                url: "https://www.library.ucla.edu/search",
                target: "_blank",
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.masthead-primary {
    position: relative;
    z-index: 0;

    .background {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 560px;
        overflow: hidden;

        background: url(ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg?url)
                center -100px,
            var(--gradient-01);
        background-size: cover;
    }
    .container {
        max-width: 990px;
        height: 100%;

        position: relative;
        z-index: 20;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: stretch;
    }
    .logo {
        flex: 1 1 auto;
        height: 350px;

        display: flex;
        align-items: flex-end;

        .svg {
            max-width: 664px;
            width: 100%;
            height: auto;
        }
    }

    // Breakpoints
    @media #{$small} {
        .background {
            height: 230px;
        }
        .logo {
            height: 185px;
            justify-content: center;
            align-content: center;
            align-items: center;
            padding: 0 10px;

            .svg {
                max-width: 325px;
            }
        }
    }
}
</style>
