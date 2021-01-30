# A Lightweight Video Player For VuePress.

## Install

```shell
npm install -D vuepress-plugin-core-video-player
# OR yarn add -D vuepress-plugin-core-video-player
```

## Use

1). config.js
```js
module.exports = {
  plugins: [
	  'vuepress-plugin-core-video-player-core',
	  {
      lang: 'zh-CN', // en/jp
      resolution: '720p' //360p/720p/1080p
    }
  ]
}
```

2). *.md
```
<corevideoplayer
  src='./your_video_source.mp4'
/ >
```