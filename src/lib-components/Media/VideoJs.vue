<template>
    <div class="video-js-container">
        <div class="video-player">
            <video
                ref="videoPlayer"
                class="video-js vjs-big-play-centered"
            ></video>
        </div>
    </div>
</template>

<script>
import videojs from "video.js"
import "video.js/dist/video-js.css"
export default {
    name: "VideoJs",
    props: {
        sources: {
            type: Array,
            required: true,
        },
        poster: {
            type: String,
            default: "",
        },
        autoplay: {
            type: Boolean,
            default: false,
        },
        controls: {
            type: Boolean,
            default: true,
        },
        fill: {
            type: Boolean,
            default: true,
        },
        audioPosterMode: { type: Boolean, default: true },
        loop: { type: Boolean, default: false },
        muted: { type: Boolean, default: false },
        playsinline: { type: Boolean, default: true },
    },
    data() {
        return {
            player: null,
        }
    },
    mounted() {
        this.player = videojs(
            this.$refs.videoPlayer,
            this.$props,
            function onPlayerReady() {
                // console.log('onPlayerReady', this)
            }
        )
    },
    beforeUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    },
}
</script>

<style>
.video-js-container {
    width: 100%;
    height: 100%;
}
.video-player {
    width: 100%;
    height: 100%;
}
</style>
