const pkg = require('./package')
const axios = require('axios')

module.exports = {
  // mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ],
    script: [
      {
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
        body: true
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [
    // '@/assets/css/resetr.css',  // bulma does this ?
    '@/assets/css/fonts.css',
    '@/assets/css/common.sass'
  ],
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/prismicLinks', ssr: false },
    // { src: "~/plugins/vue-page-transition", ssr: true },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@/modules/static',
    '@/modules/crawler'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  
  buildModules: [
    '@nuxtjs/prismic'
  ],
  
  telemetry: false,
  
  router: {
    prefetchLinks: true,
    prefetchPayloads: true
  },
  
  prismic: {
    endpoint: 'https://fivedegreechange.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    // https://fivedegreechange.cdn.prismic.io/api/v2
    /* see configuration for more */
    // disableGenerator: false,
    // apiOptions: {
    //   routes: [
    //     {
    //       type: 'post',
    //       path: '/blog/:uid'
    //     },
    //     {
    //       type: 'page',
    //       path: '/page/:uid'
    //     }
    //   ]
    // }
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
  
  generate: {
    // routes: [
    //   '/page/habit-experiment',
    // ],
    
    routes: function () { 
      
      return axios
        .get('https://fivedegreechange.cdn.prismic.io/api/v2/documents/search', {
          params: {
            ref: 'X2ClJhEAACIAfVxE',
            pageSize: 100
          }
        })
        .then((res) => { 
          let arr = []
          res.data.results.map((item) => { 
            if (item.type === 'page') arr.push('/page/' + item.uid)
          }) 
          // console.log(arr);
          return arr
        })
        .catch((error) => {
          console.log(error);
        })
    },
    
    // fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }

}
