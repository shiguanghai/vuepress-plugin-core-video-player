<script>
export default {
  name: "CoreVideoPlayer",
  props: {
    src: String
  },
  data () {
    return {
      lang: lang, // 语言
      resolution: resolution // 清晰度
    }
  },
  render (h) {
    return h('div', { // 创建元素对应的选择器
      attrs: { // 给标签设置属性 attrs 指明DOM对象属性
        class: player-container
      }
    },[ // 生成元素的子元素
      h('vue-core-video-player', {
        attrs: {
          src: this.src
        }
      })
    ])
  },
  mounted() {
    import('vue-core-video-player').then(({ default:CoreVideoPlayer }) => {
      Vue.use(VueCoreVideoPlayer, {
        lang:lang,
        resolution:resolution
      })
    })
  }
}
</script>