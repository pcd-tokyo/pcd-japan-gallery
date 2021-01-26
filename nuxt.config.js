export default {
  head: {
    title: 'pcd-tokyo-gallery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
