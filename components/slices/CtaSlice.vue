<template lang='pug'>
  .slice(:class='ctaSize')
      prismic-rich-text(:field='slice.primary.text', v-if='slice.primary.text.length')
      prismic-rich-text(:field='slice.primary.button', v-if='slice.primary.button.length').cta-button.alt
    
</template>

<script>
export default {
  props: ['slice'],
  name: 'cta-slice',
  computed: {
    ctaSize () {
      if (this.slice.primary.size) return 'cta small'
      else return 'cta big'
    }
  }
}
</script>

<style lang='sass'>
.cta
  // display: inline-block
  // position: absolute
  // left: 0
  // width: 100vw
  margin-bottom: 6vw
  &.big
    // background: 
    $c: rgba(0,0,0,0.2)
    border: 2px $c solid
    margin-top: 6vw
    margin-bottom: 3vw
    // padding: 5vw 3vw 5vw
    padding: 3vw 3vw 2vw
    border-radius: 1rem
    text-align: center
  .cta-button
    margin-top: 1vw
    a, nuxt-link
      // font-family: 'gtmono', sans-serif
      // letter-spacing: 0.03rem
      // background: transparent
      padding: 0.5em 1em 0.6em !important
      border-radius: 5px
      // font-family: 'gt', sans-serif
      // color: black
      transition: all 150ms ease-in
      &:hover
        // color: white
        // background: black
        opacity: 1
        transition: all 150ms ease-out
        transform: scale(1.1) !important
    
</style>