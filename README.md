# vuepress-plugin-core-video-player

![logo](/core-player/vue-core-video-player/raw/master/UI/assets/logo.png)

**A Lightweight Video Player For VuePress.**

[View Demo](#)

## Install

```shell
npm install -D vuepress-plugin-core-video-player
# OR yarn add -D vuepress-plugin-core-video-player
```

## Use

1). `config.js`
```js
module.exports = {
  plugins: [
    'vuepress-plugin-core-video-player-core',
    {
      lang: 'zh-CN', // zh-CN/en/jp/other language json
    }
  ]
}
```

2). `*.md`, [click here](https://core-player.github.io/vue-core-video-player/zh/) for more configuration of core video player.

> `src`:require

```js
<corevideoplayer
  src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.webm" 
  cover="https://img1.wxzxzj.com/vpc-example-cover-your-name-c.png"
  logo="https://img1.wxzxzj.com/logo-white-mini.png"
  preload="metadata"
  title="mytitle"
  controls="auto"
  :autoplay=true
  :muted=flase
  :loop=true>
</corevideoplayer>
```