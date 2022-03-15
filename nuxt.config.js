export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'flick',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        localStorage: {
          prefix: 'auth.'
        },
        token: {
          prefix: 'access_token.',
          property: 'access_token',
          maxAge: 86400,
          type: 'Bearer'
        },
        refreshToken: {
          prefix: 'refresh_token.',
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 15
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: {
            headers: {
              'App-Secret': '*(3%13@Uh@1',
              'Platform': 'web',
              'Content-Type': 'application/json',
            },
            url: 'https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/admin-login',
            method: 'post'
          },
          refresh: { url: 'https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/refresh?access_token/', method: 'post' },
          user: { url: '/me', method: 'get' },
          logout: { url: '/auth/logout', method: 'post'}
        },
      }
    }
  },

  build: {
  }
}
