<template>
  <div class='post-part single container'>
    <prismic-rich-text class="textslice" :field="slice.primary.text"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>

<style lang="sass">
.textslice
  margin: 6vw 0
.blog
  ul, ol
    margin-left: 4rem
    margin-bottom: 2rem
    margin-top: 1rem
    font-family: 'gt', sans-serif
    width: 66%
    li
      font-size: 1.25rem
      margin-bottom: 0.85rem
      line-height: 1.8rem
      letter-spacing: 0rem
      list-style: disc
      
.page
  ul, ol
    margin: 2rem 4rem 1rem
    font-family: 'gt', sans-serif
    width: calc(100% - 8rem)
    columns: 2
    column-gap: 7vw
    li
      font-size: 0.95em
      margin-bottom: 0.9em
      line-height: 1.66em
      letter-spacing: 0em
      list-style: disc

</style>