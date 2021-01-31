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
      :autoplay="autoplay"
      @canplay="$emit('canplay')"
      @canplaythrough="$emit('canplaythrough')"
      @core_to_mp4="$emit('core_to_mp4')"
      @durationchange="$emit('durationchange')"
      @ended="$emit('ended')"
      @error="$emit('error')"
      @ERROR_AUTO_PLAY="$emit('ERROR_AUTO_PLAY')"
      @ERROR_NO_MEDIA="$emit('ERROR_NO_MEDIA')"
      @lifecycle_inited="$emit('lifecycle_inited')"
      @lifecycle_initing="$emit('lifecycle_initing')"
      @lifecycle_parse="$emit('lifecycle_parse')"
      @lifecycle_stop="$emit('lifecycle_stop')"
      @loadeddata="$emit('loadeddata')"
      @loadedmetadata="$emit('loadedmetadata')"
      @loading_end="$emit('loading_end')"
      @loading_start="$emit('loading_start')"
      @loadstart="$emit('loadstart')"
      @pause="$emit('pause')"
      @play="$emit('play')"
      @playing="$emit('playing')"
      @progress="$emit('progress')"
      @resolution_update="$emit('resolution_update')"
      @retry="$emit('retry')"
      @seeked="$emit('seeked')"
      @seeking="$emit('seeking')"
      @service_ended="$emit('service_ended')"
      @service_loading="$emit('service_loading')"
      @SOURCE_UPDATED="$emit('SOURCE_UPDATED')"
      @stalled="$emit('stalled')"
      @timeupdate="$emit('timeupdate')"
      @ui_dashboard_hide="$emit('ui_dashboard_hide')"
      @ui_dashboard_show="$emit('ui_dashboard_show')"
      @ui_pause="$emit('ui_pause')"
      @ui_play="$emit('ui_play')"
      @volumechange="$emit('volumechange')"
      @waiting="$emit('waiting')"
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
    autoplay: {
      type: Boolean,
      default: false,
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
