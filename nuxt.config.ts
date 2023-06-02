// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    storyblokToken: ''
  },
  css: ["~/assets/css/roboto.css"],
  modules: [
    ['@storyblok/nuxt', {
      accessToken: process.env.NUXT_STORYBLOK_TOKEN,
      bridge: true,
      devtools: true,
      apiOptions: { region: 'us' }
    }],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
      strategy: 'prefix_except_default',
      locales: ['en', 'es'],
      defaultLocale: 'en',
    }
})
