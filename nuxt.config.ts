import { HeadMetaInfo } from './headMetaInfo'
const headMetaInfo = new HeadMetaInfo()

export default {
  head: {
    title: headMetaInfo.title,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: headMetaInfo.title,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: headMetaInfo.title,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: headMetaInfo.type,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: headMetaInfo.url,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: headMetaInfo.imageUrl,
      },
      {
        hid: 'description',
        name: 'description',
        content: headMetaInfo.description,
      },
      {
        hid: 'fb:app_id',
        name: 'fb:app_id',
        content: '1339453412910523',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: headMetaInfo.twitterCardType,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: headMetaInfo.imageUrl,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://pcd-tokyo.github.io/favicon.ico',
      },
    ],
  },
  css: ['@/assets/style/common.styl'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/dayjs', 'nuxt-webfontloader'],
  axios: {},
  build: {},
  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
    defaultTimeZone: 'Asia/Tokyo',
    plugins: ['timezone'],
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700,900&display=swap&subset=japanese'],
    },
  },
}
