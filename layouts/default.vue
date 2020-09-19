<template lang='pug'>
  #app
    Logo
    #main
      //- vue-page-transition(name="flip-y")
      Nuxt
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}

</script>