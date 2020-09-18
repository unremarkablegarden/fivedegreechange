<template lang='pug'>
  .slice.checklist
    prismic-rich-text(:field='slice.primary.list', v-if='slice.primary.list.length')
    
    
</template>

<script>
export default {
  props: ['slice'],
  name: 'checlist-slice'
}
</script>

<style lang='sass'>
  .checklist
    clear: both
    float: none
    ul
      margin-left: 4rem
      margin-bottom: 1rem
      margin-top: 1rem
      font-family: 'gt', sans-serif
      width: 66%
      li
        font-size: 1.25rem
        margin-bottom: 0.85rem
        line-height: 1.8rem
        letter-spacing: 0rem
        // list-style: disc
        &:before
          content: '✓ '
          opacity: 0.6
</style>