<template lang='pug'>
  .slice.table-slice
    table.table
      tr.row(v-for='row in slice.items')
        td.cell
          prismic-rich-text(:field='row.left')
        td.cell
          prismic-rich-text(:field='row.right')
</template>

<script>
export default {
  props: ['slice'],
  name: 'table-slice'
}
</script>

<style lang='sass' scoped>
.table-slice
  margin: 2vw 3vw 6vw
  clear: both
  float: none
table
  width: 100%

</style>