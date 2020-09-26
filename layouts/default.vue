<template lang='pug'>
  #app
    //- cookie-control
      template(v-slot:bar)
        .cookiies
          h3 This website uses cookies to ensure you get the best experience
          p.small {{ $cookies.text.barDescription }}
          n-link(to='/') Go somewhere
    cookie-law
      div(slot-scope='props')
        .cookiies
          p.small This website uses cookies 🍪 to ensure you get the best experience
          button.skew(@click='props.accept')
            span OK
          //- p.small {{ $cookies.text.barDescription }}
          //- n-link(to='/') Go somewhere
        //- button.skew(@click='props.accept')
        //-   span I accept
        //- p.        
          This site uses 🍪
        //- button.skew(@click='props.close')
          span Ignore me
    Menu
    Logo
    #main
      //- vue-page-transition(name="flip-y")
      Nuxt
</template>

<script>
import Menu from '~/components/Menu.vue'
import Logo from '~/components/Logo.vue'
// import ClientOnly from 'vue-client-only'
// import CC from "CookieConsent"
// const CC = require("CookieConsent")
// import CookieLaw from 'vue-cookie-law'



export default {
  components: {
    Menu,
    Logo,
    // CookieLaw
    // ClientOnly
  },
  mounted () {
    // const cc = new CC({
    //   //...options,
    //   // type   : "categories"
    //   palette:{
    //     popup: {
    //       background: "#000",
    //       color: "#FFF"
    //     },
    //     button: {
    //       background: "#FFF",
    //       color: "#000"
    //     },
    //   },
    // })
  }
}
</script>

<style lang="sass">
.Cookie
  border-top: 1px #bbb solid
.cookiies
  width: 95vw
  display: flex
  justify-content: space-between
  align-items: center
  
  .small
    font-size: 12px
    line-height: 1.2em
    width: 66%
    margin: 0
    padding: 0
  button
    font-size: 12px
    padding: 6px 12px
    font-weight: bold
    border-radius: 5px
    border: 1px #aaa solid
.cookieControl__ControlButton
  display: none !important
</style>