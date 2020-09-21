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
    '@/assets/css/common.sass',
    '@/assets/css/mobile.sass'
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
    '@/modules/crawler',
    ['nuxt-cookie-control', {
      //'top-left', 'top-right', 'top-full',
      //'bottom-left', 'bottom-right', 'bottom-full'
      barPosition: 'bottom-full',
      colors: {
        // barTextColor: '#fff',
        // modalOverlay: '#000',
        // barBackground: '#000',
        // barButtonColor: '#000',
        // modalTextColor: '#000',
        // modalBackground: '#fff',
        // modalOverlayOpacity: 0.8,
        // modalButtonColor: '#fff',
        // modalUnsavedColor: '#fff',
        // barButtonHoverColor: '#fff',
        // barButtonBackground: '#fff',
        // modalButtonHoverColor: '#fff',
        // modalButtonBackground: '#000',
        // controlButtonIconColor: '#000',
        // controlButtonBackground: '#fff',
        // barButtonHoverBackground: '#333',
        // checkboxActiveBackground: '#000',
        // checkboxInactiveBackground: '#000',
        // modalButtonHoverBackground: '#333',
        // checkboxDisabledBackground: '#ddd',
        // controlButtonIconHoverColor: '#fff',
        // controlButtonHoverBackground: '#000',
        // checkboxActiveCircleBackground: '#fff',
        // checkboxInactiveCircleBackground: '#fff',
        // checkboxDisabledCircleBackground: '#fff',
        text: {
          barTitle: 'Cookies',
          barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
          acceptAll: 'Accept all',
          declineAll: 'Delete all',
          manageCookies: 'Manage cookies',
          unsaved: 'You have unsaved settings',
          close: 'Close',
          save: 'Save',
          necessary: 'Necessary cookies',
          optional: 'Optional cookies',
          functional: 'Functional cookies',
          blockedIframe: 'To see this, please enable functional cookies',
          here: 'here'
        }
      },
    }],
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
