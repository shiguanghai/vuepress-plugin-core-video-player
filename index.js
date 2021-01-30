const { resolve } = require('path')

module.exports = {
  define () {
    const { lang, resolution } = options
    return {
      lang: lang || 'zh-CN', // en/jp
      resolution: resolution || '720p' // 360/720/1/80
    }
  },
  name: 'vuepress-plugin-core-video-player',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'CoreVideoPlayer'
}
