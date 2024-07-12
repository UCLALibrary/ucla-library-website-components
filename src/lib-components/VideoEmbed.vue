<!-- The VideoEmbed component creates an iframe with a youtube video embed using a custom play icon -->
<!-- TODO maybe one day? : combine this component with Item.vue or VideoJs.vue, as there is a lot of functional overlap -->
<script lang='ts' setup>
import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'
import SvgIconPlayFilled from 'ucla-library-design-tokens/assets/svgs/icon-play-filled.svg';
import { defineProps, computed, onMounted } from 'vue'
const { trailer, posterImage } = defineProps({
    trailer: {
        type: String,
        required: true
    },
    posterImage: {
        type: Object as PropType<MediaItemType>, // todo pass whole image or just src?
        required: false
    }
})
// const displayIframe = computed(() => {
//     return posterImage ? 'none' : 'block'
// })

// this component doesn't apply themes currently
const classes = computed(() => {
    return ['video-embed', posterImage ? 'has-poster' : 'no-poster']
})
const parsedTrailer = computed(() => {
    return trailer.split('src=\"')[1].split('\"')[0]
})
</script>
<template>
    <div v-if="parsedTrailer" :class="classes">
        <div class="cover-container" onclick="this.nextElementSibling.style.display='block'; this.style.display='none'">
            <img v-if="posterImage?.src" :src="posterImage.src" class="cover" />
            <SvgIconPlayFilled class="play-button" />
        </div>
        <div class="video-container"> <!-- :style="{ display: displayIframe } todo remove inline styles?  -->
            <iframe :src="parsedTrailer" title="YouTube video player" class="responsive-iframe" frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.cover-container {
    position: relative;

    // width: 560px;
    // height: 315px;
    &:hover .play-button {
        // filter: drop-shadow(1px 1px 80px hsla(206.5, 0%, 10%, 50%));
        transform: scale(1.8);
    }
}

.cover {
    cursor: pointer;
    position: absolute;
}

.play-button {
    width: 80px;
    position: absolute;
    left: 0;
    right: 0;
    transition: all 250ms ease-in-out;
}

.cover,
.play-button {
    top: 0;
    bottom: 0;
    margin: auto;
}
// to do ? 
.video-embed {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    &.has-poster {
        .video-container {
            display: none;
        }
    }
    &.no-poster {
        .cover-container {
            display: none;
        }
    }
.video-container {
    position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
}
 .responsive-iframe {
        position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
 }
}
</style>