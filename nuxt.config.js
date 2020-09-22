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
      { rel: 'icon', type: 'image/x-icon', href: 'https://prismic-io.s3.amazonaws.com/fivedegreechange/75666d55-5d55-4d42-bbaf-03b6475bc3b3_favicon.svg' }
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
    '@/assets/css/common.sass',
    '@/assets/css/mobile.sass'
  ],
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/prismicLinks', ssr: false },
    // { src: "~/plugins/vue-page-transition", ssr: true },
    // { src: "~/plugins/vue-client-only", ssr: true },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@/modules/static',
    '@/modules/crawler',
    ['nuxt-cookie-control', {
      //'top-left', 'top-right', 'top-full',
      //'bottom-left', 'bottom-right', 'bottom-full'
      barPosition: 'bottom-full',
    }],
    // ["nuxt-social-meta", {
    //   url: "https://www.fivedegreechange.com/",
    //   title: "Home",
    //   site_name: "five degree change",
    //   description: "How about some change?",
    //   img: "bwlogo.png",
    //   locale: "en_US",
    //   // twitter: "@user",
    //   twitter_card: "summary_large_image",
    //   themeColor: "##B2B8EF",
    // }],
  ],
  
  
  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else
        name:  'Default Cookies',
        //if multilanguage
        description: {
          en:  'Used for cookie control.'
        },
        //else
        description:  'Used for cookie control.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name:  'Google Analytics',
        identifier: 'ga',
        description:  'Used for visitor metrics',
        src:  'https://www.googletagmanager.com/gtag/js?id=UA-178525231-1',
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () =>{
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () =>{
        }
      }
    ]
  },
  
  /*
  ** Axios module configuration
  */
  // axios: {
    // See https://github.com/nuxt-community/axios-module#options
  // },
  
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
          return arr
        })
        .catch((error) => {
          console.log(error);
        })
    },
    
    // fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }

}
