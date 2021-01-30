<template>
  <div class="player-container">
    <vue-core-video-player
      src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.webm"
      controls="fixed"
    ></vue-core-video-player>
  </div>
</template>

<script>
import VueCoreVideoPlayer from "vue-core-video-player";
import Vue from "vue";

Vue.use(VueCoreVideoPlayer, {
  lang: "zh-CN",
});

export default {
  data() {
    return {};
  },
};
</script>

<style></style>
