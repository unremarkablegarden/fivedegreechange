<template>
  <div class="container section">
    <!-- <div class="back">
      <nuxt-link to="/">back to list</nuxt-link>
    </div> -->
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    
    <xmp>{{ error }}</xmp>
    <br/>
    <nuxt-link to="/" style="text-decoration: underline;">Return to home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head () {
    return {
      title: 'Error',
    }
  },
}
</script>

<style lang="sass">
  xmp
    font-family: 'monaco'
    font-size: 14px
    margin-bottom: 1em
</style>