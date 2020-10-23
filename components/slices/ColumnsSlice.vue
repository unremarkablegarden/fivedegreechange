<template lang='pug'>
  .slice.cols
    
    .columns.is-12.is-variable.is-7(:class="{ logos: slice.primary.logos }")
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
    
  .columns.logos
    padding: 1vw
    background: rgba(255,255,255,0.1)
    border-radius: 1em
    .column
      display: flex
      align-items: center
      justify-content: center
      p.block-img
        padding: 0 !important
        
</style>