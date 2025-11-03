<template>
  <div class="video-js-container">
    <div class="video-player">
      <video
        ref="videoPlayer"
        class="video-js vjs-big-play-centered"
        poster="https://static.library.ucla.edu/video_icon.svg"
      ></video>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {

    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      // console.log('onPlayerReady', this)
    })
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