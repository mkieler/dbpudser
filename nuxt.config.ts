// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@vesp/nuxt-fontawesome',
    'nuxt-schema-org',
    '@nuxtjs/sitemap'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: [
    '~/public/css/global.scss'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'da',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})