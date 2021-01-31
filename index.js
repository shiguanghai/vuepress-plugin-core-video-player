const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { lang, resolution } = options
    return {
      lang: lang || 'zh-CN' // 定义播放器语言：zh-CH/en/jp
    }
  },
  name: 'vuepress-plugin-core-video-player',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  //globalUIComponents: 'corevideoplayer'
})
