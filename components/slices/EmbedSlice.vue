<template lang='pug'>
  .slice.embeds
    .embed(v-for='embed in slice.primary.html')
      div(v-html='embed.text')
</template>



<script>
export default {
  props: ['slice'],
  name: 'embed-slice'
}
</script>

<style lang='sass' scoped>

</style>