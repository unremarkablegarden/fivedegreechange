<template lang='pug'>
  #app
    Menu
    Logo
    #main
      //- vue-page-transition(name="flip-y")
      Nuxt
</template>

<script>
import Menu from '~/components/Menu.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Menu,
    Logo
  }
}

</script>