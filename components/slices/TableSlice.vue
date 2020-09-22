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

<style lang='sass'>
.table-slice
  margin: 2vw 3vw 6vw
  clear: both
  float: none
table, .table
  width: 100%
table, td, .table, .table td
  background: transparent
  border: 2px rgba(0,0,0,0.3) solid
  a
    background: transparent !important
    border-bottom: 2px rgba(0,0,0,0.3) solid
</style>