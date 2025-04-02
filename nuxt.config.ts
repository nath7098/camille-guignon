// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', 'motion-v/nuxt'],
  app: {
    head: {
      title: 'Camille Guignon - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio professionnel de Camille Guignon, en reconversion comme inséminatrice bovine' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap' }
      ]
    }
  },
  ui: {
    card: {
      slots: {root: 'rounded-[calc(var(--ui-radius)*3)]'}
    },
    button: {
      slots: {
        base: ['p-4']
      }
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  }
})