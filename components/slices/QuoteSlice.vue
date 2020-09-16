<template lang='pug'> 
  .post-part.single.container
    blockquote.block-quotation.
      {{ $prismic.asText(slice.primary.quote) }}
    
</template>

<script>
export default {
  props: ['slice'],
  name: 'quote-slice'
}
</script>

<style lang="sass" scoped>
.block-quotation
  // margin-bottom: 2rem
  // margin: 2rem 12rem 3rem 6rem
  padding-top: 1rem
  margin: -1rem 0 1.7rem 2rem
  float: right
  width: 40%
  font-size: 3.6vw
  line-height: 1.2em
  letter-spacing: -0.06em
  display: inline-block
  font-style: italic
  color: #FF3F16
  // color: #6C91F7
  // opacity: 0.45
  
  &:before
    content: "» "
    // margin-left: -2rem
  &:after
    content: "«"
.block-citation
  display: inline-block
  font-style: italic
  border-left: solid #B4B4B4 4px
  // padding-left: 10px

@media screen and (min-width: 975px)
  .block-quotation
    // width: 130%
    // margin: 0 -15% 2rem -15%
    // font-size: 30px
    // padding: 0
  .block-citation
    // margin: 20px 0
</style>