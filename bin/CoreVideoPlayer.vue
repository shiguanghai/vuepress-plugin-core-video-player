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
import VueCoreVideoPlayer from "vue-core-video-player"
import Vue from "vue"

Vue.use(VueCoreVideoPlayer, {
  lang // 定义播放器语言
})

export default {
  // name: "corevideoplayer",
  props: {
    src: {
      type: [String, Array], // 视频链接
      require: true // 必要
    },
    muted: {
      type: Boolean,
      default: false // 设置为 true, 视频会静音
    },
    cover: {
      type: String, // 显示视频的封面，如果设置 autoplay，自动播放成功后，不会显示
    },
    volume: {
      //无法控制
      type: Number, // 控制视频音量(0-1)
      default: 0.5
    },
    preload: {
      validator: function (value) {
        return ["none", "metadata", "auto "].indexOf(value) !== -1 // 'none' 表示不会预加载视频, 'metadata' 表示只加载视频 metadata 信息部分
      },
      default: "metadata"
    },
    loop: {
      type: Boolean, // 会循环播放当前视频
      default: false
    },
    logo: {
      type: String // 显示播放器的 logo
    },
    title: {
      type: String // 展示视频的标题，方便 SEO
    },
    controls: {
      type: [Boolean, String], // 可以用来控制底部控制栏的显示隐藏
      // String: 'fixed' 表示底部导航栏会一直固定显示, 'auto' 表示底部导航栏在用户未产生任何交互操作后自动消失，默认的形式
      // Boolean: false 表示始终不显示导航栏, true 默认值；它和设置 'auto' 形式类似
      validator: function (value) {
        return ["fixed", "auto", false, true].indexOf(value) !== -1
      },
      default: "auto"
    },
    autoplay: {
      type: Boolean, // 自动播放视频
      default: false
    }
  }
}
</script>
