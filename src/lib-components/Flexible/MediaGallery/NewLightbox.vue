<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import type { PropType } from 'vue'
import type { MediaGalleryItemType } from '@/types/types'

// import { Glide, GlideSlide } from "vue-glide-js"
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-circle-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-circle-right.svg'
import SvgIconClose from 'ucla-library-design-tokens/assets/svgs/icon-close-large.svg'
import SvgIconMoleculeBullet from 'ucla-library-design-tokens/assets/svgs/icon-molecule-bullet-filled.svg'
import SmartLink from '../../SmartLink.vue'
import MediaItem from '@/lib-components/Media/Item.vue'

const emit = defineEmits<{
    (e: 'closeModal'): void
}>()



// defineProps is a macro hence we do not need to import it
const { items, selectedItem } = defineProps({
    items: {
        type: Array as PropType<MediaGalleryItemType[]>,
        default: () => [],
        required: true,
    },
    selectedItem: {
        type: Number,
        default: 0,
    },
})
const SvgExternalLink = defineAsyncComponent(() =>
    import(
        'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
    )
)
const selectionIndex = ref(selectedItem)

const captionTitle = computed(() => {
    return items.map(item => item.captionTitle)
})

const captionText = computed(() => {
    return items.map(item => item.captionText)
})
const lightbox = ref<HTMLElement | null>(null) // replacing this.$refs.lightbox

onMounted(() => {
    lightbox.value?.focus()
})
const closeModal = () => {
    emit('closeModal')
}

/* these methods were used by vue-glide-js*/

/*function checkCurrentSlide(index: number) {
    if (index === this.currentSlide) {
        return "current-slide"
    }
}*/
function setCurrentSlide(currentSlide: number) {
    selectionIndex.value = currentSlide
}

</script>

<template>
    <div ref="lightbox" class="lightbox">
        <button class="button-close" @click="closeModal">
            <SvgIconClose aria-label="Close" />
        </button>
        <!-- vue-glide ref="slider" :active="selectionIndex" :per-view="1" :rewind="false" class="media-container"
            type="carousel" @change="setCurrentSlide" -->
        <div class="media-container">
            <!-- vue-glide-slide v-for="(item, index) in items" :key="index" -->
            <div v-for="(item, index) in items" :key="index">
                <MediaItem :key="index" object-fit="contain" :item="item.item" :cover-image="item.coverImage"
                    :embed-code="item.embedCode" />
            </div>
            <!-- /vue-glide-slide -->
            <template slot="control">
                <button v-if="items.length > 1" class="button-prev" :disabled="selectionIndex <= 0" data-glide-dir="<">
                    <SvgIconCaretLeft aria-label="Show previous image" />
                </button>
                <button v-if="items.length > 1" class="button-next" :disabled="selectionIndex >= items.length - 1"
                    data-glide-dir=">">
                    <SvgIconCaretRight aria-label="Show next image" />
                </button>
            </template>
        </div>
        <!-- /vue-glide -->
        <div class="caption-block">
            <div v-if="items.length > 1" class="media-counter" role="tablist">
                <button v-for="index in items.length" :key="index" class="media-counter-item"
                    :disabled="index - 1 == selectionIndex" @click="setCurrentSlide(index - 1)">
                    <SvgIconMoleculeBullet />
                </button>
            </div>

            <h4 v-if="captionTitle" class="media-object-title" v-text="captionTitle[selectionIndex]" />
            <p v-if="captionText" class="media-object-caption" v-text="captionText[selectionIndex]" />
            <p v-if="items && items[selectionIndex] && items[selectionIndex].credit" class="media-object-credit">
                {{ items[selectionIndex].credit }}
            </p>
            <SmartLink v-if="items && items[selectionIndex] && items[selectionIndex].linkUrl
                && items[selectionIndex].linkText
                " class="media-object-caption-link" :to="items[selectionIndex].linkUrl">
                {{ items[selectionIndex].linkText }}
                <SvgExternalLink />
            </SmartLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/*@import "@/styles/vue-glide.scss";*/

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overscroll-behavior: contain;

    --side-column-min-width: 72px;
    --gap-width: var(--space-m);
    --media-width: min(calc(100vw - (2 * var(--side-column-min-width)) - (2 * var(--gap-width))),
            992px);
    --media-height: calc(var(--media-width) * 9 / 16);
    --side-column-width: calc((100vw - var(--media-width) - 2 * var(--gap-width)) / 2);

    background: var(--color-primary-blue-05);
    z-index: 800;

    display: grid;
    grid-template-columns:
        [col] var(--side-column-width) [col] var(--media-width) [col] var(--side-column-width);
    grid-template-rows: [row] auto [row] min-content [row] auto;
    grid-gap: var(--gap-width);

    .button-close {
        grid-row: row 1;
        grid-column: col 3 / span 1;
        justify-self: start;
        align-self: end;

        width: auto;
        padding: 0;

        ::v-deep .svg__fill--primary-blue-01 {
            fill: none;
        }

        ::v-deep .svg__stroke--default-cyan-02 {
            stroke: var(--color-white);
        }
    }

    .media-container {
        position: relative;
        grid-row: row 2;
        grid-column: col 2 / span 1;
    }

    // Override colors of all the SVG icons
    ::v-deep svg {
        display: block;

        .svg__fill--primary-blue-03 {
            fill: none;
        }

        .svg__stroke--primary-blue-03 {
            stroke: white;
        }
    }

    @media #{$has-hover} {
        button:enabled {
            .media-counter-item:hover {
                ::v-deep .svg__fill--primary-blue-03 {
                    fill: var(--color-white);
                }
            }
        }

        button:disabled {
            cursor: default;
        }
    }

    button:disabled {
        ::v-deep svg {
            .svg__fill--primary-blue-03 {
                fill: var(--color-white);
            }
        }
    }

    ::v-deep .media-item {
        height: var(--media-height);
    }

    .controls {
        width: 110%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 250px;
        left: -50px;
    }

    --media-height-half: calc(var(--media-height) / 2);

    .button-prev {
        position: absolute;
        top: var(--media-height-half);
        left: calc(-1 * var(--side-column-min-width));
        justify-self: end;
        align-self: center;
        color: white;

        ::v-deep .svg__fill--primary-blue-01 {
            fill: none;
        }

        ::v-deep .svg__fill--primary-blue-03 {
            fill: var(--color-white);
        }
    }

    .button-next {
        position: absolute;
        top: var(--media-height-half);
        right: calc(-1 * var(--side-column-min-width));
        justify-self: start;
        align-self: center;
        color: white;

        ::v-deep .svg__fill--primary-blue-01 {
            fill: none;
        }

        ::v-deep .svg__fill--primary-blue-03 {
            fill: var(--color-white);
        }
    }

    @media #{$medium} {
        --side-column-min-width: 64px;

        .button-prev {
            top: calc(var(--media-width) / 3);
        }

        .button-next {
            top: calc(var(--media-width) / 3);
        }

        ::v-deep .media-item {
            height: calc(var(--media-height) * 1.2);
        }

        ::v-deep .glide__slides {
            align-items: center;
        }
    }

    @media #{$small} {
        --side-column-min-width: var(--unit-gutter);

        .button-close {
            grid-column: col 2;
            justify-self: end;
        }

        .button-prev,
        .button-next {
            display: none;
        }

        ::v-deep .media-item {
            height: 100%;
        }

        ::v-deep .glide__slides {
            align-items: center;
        }
    }

    .caption-block {
        color: var(--color-white);
        grid-row: row 3;
        grid-column: col 2;

        .media-counter {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 24px;

            .media-counter-item {
                padding: 0;

                .svg {
                    display: block;
                }

                ::v-deep .svg__fill--primary-blue-03 {
                    fill: none;
                }

                &:disabled {
                    ::v-deep .svg__stroke--primary-blue-03 {
                        stroke: white;
                    }

                    ::v-deep .svg__fill--primary-blue-03 {
                        fill: white;
                    }
                }
            }
        }

        .media-object-title {
            @include step-0;
            margin-bottom: var(--space-s);
        }

        .media-object-caption {
            @include step--1;
        }

        .media-object-credit {
            margin-top: 4px;

            @include step--1;
            font-style: italic;
        }

        .media-object-caption-link {
            @include step--1;

            margin-top: 4px;
            padding: 0;

            display: flex;
            align-items: center;

            color: $white;

            ::v-deep .svg__icon-external-link {
                .svg__fill--primary-blue-03 {
                    fill: $white;


                    fill: $white;
                    stroke: $white;
                }
            }
        }
    }
}
</style>      