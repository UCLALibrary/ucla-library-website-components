<!-- The VideoEmbed component creates an iframe with a youtube video embed using a custom play icon -->
<!-- TODO maybe one day? : combine this component with Item.vue or VideoJs.vue, as there is a lot of functional overlap -->
<script lang='ts' setup>
import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'
import SvgIconPlayFilled from 'ucla-library-design-tokens/assets/svgs/icon-play-filled.svg';
// import { defineProps, computed } from 'vue'

const { trailer } = defineProps({
    trailer: {
      type: String,
      required: true
    },
    posterImage: {
      type: Object as PropType<MediaItemType>, // todo pass whole image or just src?
      required: false
    }
})

// const mockFTVAData = {
//     trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5" title="YouTube video player" frameborder="0"></iframe></figure>'
// }
const parsedTrailer = computed(() => {
    return trailer.split('src=\"')[1].split('\"')[0]
})
</script>
<template>
    <div class="cover-container" onclick="this.nextElementSibling.style.display='block'; this.style.display='none'">
        <img v-if="posterImage?.src" :src="posterImage.src" class="cover" />
        <SvgIconPlayFilled class="play-button" />
    </div>
    <div style="display:none"> <!-- todo remove inline styles?  -->
        <iframe :src="parsedTrailer" title="YouTube video player" class="responsive-iframe" frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
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
</style>