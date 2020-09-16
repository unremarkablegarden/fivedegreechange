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
  // margin: 0 6rem 0 3rem
  // margin: 5vw 0
  a
    $link: #26E
    $linkbg: #FFFEFA
    // background: $linkbg
    background: transparent
    color: $link
    border-bottom: 2px $link solid
    // color: #C5731E
    padding: 0 0 1px 0
    margin: 0
    border-radius: 0
    &:hover
      color: white
      background: $link
      // border: 1px black solid
  p
    padding-bottom: 1.3rem
  h2
    margin-top: 1em
    margin-left: -3rem
    max-width: 70%
    // color: white
    // background: black
    // display: inline-block
    font-size: 4vw
    font-weight: normal
    strong
      font-weight: normal
  h3
    font-size: 3vw
    // max-width: 70%
    line-height: 1em
    font-weight: normal
    strong
      font-weight: normal
      
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
    margin-left: 1rem
    margin-bottom: 2rem
    margin-top: 0rem
    font-family: 'gt', sans-serif
    width: 100%
    columns: 2
    column-gap: 7vw
    li
      font-size: 0.95em
      margin-bottom: 0.9em
      line-height: 1.66em
      letter-spacing: 0em
      list-style: disc
    
</style>