<template lang='pug'> 
  .post-part.single.container
    blockquote(:class='align').block-quotation.
      {{ $prismic.asText(slice.primary.quote) }}
    
</template>

<script>
export default {
  props: ['slice'],
  name: 'quote-slice',
  computed: {
    align () {
      let align = 'right'
      if ('align' in this.slice.primary) {
        align = this.slice.primary.align.toLowerCase()
      }
      return align
    }
  }
}
</script>

<style lang="sass" scoped>
.block-quotation
  // margin-bottom: 2rem
  // margin: 2rem 12rem 3rem 6rem
  padding-top: 1rem
  font-size: 3.6vw
  line-height: 1.2em
  letter-spacing: -0.06em
  display: inline-block
  font-style: italic
  color: #FF3F16
  // color: #6C91F7
  // opacity: 0.45
  &.right
    margin: -1rem 0 1.7rem 2rem
    float: right
    width: 40%
  &.left
    float: left
    margin: -1rem 2rem 1.7rem 0
    width: 30%
  &.center
    width: 100%
    text-align: center
    padding: 3vw 0 4vw
    margin: 4vw 0
    // background: rgba(0,0,0,0.1)
    color: rgba(0,0,0,0.9)
    border: 2px rgba(0,0,0,0.2) solid
    border-left: 0
    border-right: 0
    line-height: 1.8em
  
  &:before
    content: "»"
    opacity: 0.5
    padding-right: 0.2em
  &:after
    content: "«"
    opacity: 0.5
    padding-left: 0.2em
    padding-right: 0.5em
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