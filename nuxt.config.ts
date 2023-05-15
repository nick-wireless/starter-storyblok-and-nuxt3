// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    storyblokToken: ''
  },
  css: ["~/assets/css/roboto.css"],
  modules: [
    ['@storyblok/nuxt', {
      accessToken: "UbILq4Ha0lYQslru9YqDIwtt",
      bridge: true,
      devtools: true,
      apiOptions: { region: 'us' }
    }],
    '@nuxtjs/tailwindcss'
  ]

})
