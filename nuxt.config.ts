// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // typescript: {
  //   shim: false
  // },
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true
  },
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
})
