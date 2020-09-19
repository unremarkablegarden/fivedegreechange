<template lang='pug'>
  #app
    Logo
    #main
      vue-page-transition(name="flip-y")
        nuxt
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}

</script>