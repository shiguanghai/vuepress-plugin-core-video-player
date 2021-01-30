<template>
  <div class="player-container">
    <vue-core-video-player
      :src = src
    ></vue-core-video-player>
  </div>
</template>
<script>
import VueCoreVideoPlayer from "vue-core-video-player";
import Vue from "vue";

export default {
  name: "corevideoplayer",
  props: {
    src: String
  },
  mounted() {
    Vue.use(VueCoreVideoPlayer, {
      lang: lang, // 语言
      resolution: resolution // 清晰度
    })
  }
}
</script>
