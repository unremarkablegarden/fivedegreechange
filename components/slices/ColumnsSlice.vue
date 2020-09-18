<template lang='pug'>
  .slice.cols
    .columns.is-12.is-variable.is-7
      .column(v-for='item in slice.items')
        prismic-rich-text(:field='item.column')
        //- xmp {{ item.column }}
</template>

<script>
export default {
  props: ['slice'],
  name: 'columns-slice'
}
</script>

<style lang='sass' scoped>
  .cols
    padding-top: 4vw
    padding-bottom: 2vw
  .slice, .clear
    clear: both
    float: none
</style>