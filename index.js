const { resolve } = require('path')

module.exports = (options, context) => {
  define () {
    const { lang, resolution } = options
    return {
      lang: lang || 'zh-CN', // zh-CH/en/jp
      resolution: resolution || '720p' // 360p/720p/1080p
    }
  },
  name: 'vuepress-plugin-core-video-player',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'corevideoplayer'
}
