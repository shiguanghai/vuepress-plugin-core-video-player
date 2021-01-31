<template>
  <div class="player-container">
    <vue-core-video-player
      :src="src"
      :muted="muted"
      :cover="cover"
      :volume="volume"
      :preload="preload"
      :loop="loop"
      :logo="logo"
      :title="title"
      :controls="controls"
    ></vue-core-video-player>
  </div>
</template>
<script>
import VueCoreVideoPlayer from "vue-core-video-player";
import Vue from "vue";

export default {
  name: "corevideoplayer",
  props: {
    src: {
      type: [String, Array],
      require: true,
    },
    muted: {
      type: Boolean,
      default: false, //默认不静音
    },
    cover: {
      type: String,
    },
    volume: {
      //无法控制
      type: Number,
    },
    preload: {
      validator: function (value) {
        return ["none", "metadata", "metadata "].indexOf(value) !== -1;
      },
    },
    loop: {
      type: Boolean,
    },
    logo: {
      type: String,
    },
    title: {
      type: String,
    },
    controls: {
      type: [Boolean, String],
      validator: function (value) {
        return ["fixed", "auto", false, true].indexOf(value) !== -1;
      },
    },
  },
  mounted() {
    Vue.use(VueCoreVideoPlayer, {
      lang: lang, // 语言
      resolution: resolution, // 清晰度
    });
  },
};
</script>
