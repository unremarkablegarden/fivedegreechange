<template lang='pug'>
  #app
    cookie-control
      template(v-slot:bar)
        .cookiies
          h3 This website uses cookies to ensure you get the best experience
          p.small {{ $cookies.text.barDescription }}
          n-link(to='/') Go somewhere
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

export default {
  components: {
    Menu,
    Logo,
    // ClientOnly
  }
}
</script>

<style lang="sass">
.cookiies
  .small
    font-size: 12px
    line-height: 1.2em
    width: 66%
.cookieControl__ControlButton
  display: none !important
</style>