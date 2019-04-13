import pkg from './package'

export default {
  mode: 'spa',

  head: {
    title: '🎙️event.Handler() Podcast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A podcast on running developer events.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Space+Mono:400,700' },
    ]
  },

  loading: { color: '#F26A2D' },

  css: [
  ],

  plugins: [
  ],

  modules: [
  ],

  build: {
    extend(config, ctx) {
    }
  }
}
