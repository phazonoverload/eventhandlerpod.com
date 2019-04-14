import pkg from './package'

export default {
  mode: 'spa',

  head: {
    title: '🎙️event.Handler() Podcast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A podcast from developer events company Underland.' },
      { property: 'og:image', content: 'https://eventhandler.fm/og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Space+Mono:400,700' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
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
