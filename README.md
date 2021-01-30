# A Lightweight Video Player For VuePress.

## Install

```shell
npm install vuepress-plugin-core-video-player -D
# OR yarn add vuepress-plugin-core-video-player -D
```

## Use

1). config.js
```js
module.exports = {
  plugins: [
	'vuepress-plugin-core-video-player-core',
	{
      lang: 'zh-CN',
      resolution: '1080p'
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