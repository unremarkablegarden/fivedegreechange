<template lang='pug'> 
  .post-part.single.container.testimonials
    h2 {{ $prismic.asText(slice.primary.testimonials_title) }}
    //- xmp {{  }}
    .columns.is-multiline.is-8.is-variable
      .testimonial(v-for='item in slice.items').column.is-6
        .columns.is-variable.is-3
          .column.is-4
            prismic-image(v-if='item.image.url', :field='item.image').image
            .name {{ item.name }}
          .column
            blockquote.block-quotation.
              {{ $prismic.asText(item.quote) }}
            
            
</template>

<script>
export default {
  props: ['slice'],
  name: 'quote-slice'
}
</script>

<style lang="sass" scoped>

.testimonials
  // background: blue
  
.testimonial
  margin-top: 1rem
  margin-bottom: 1rem  

.name
  // &:before
    // content: '— '
  font-size: 1.3vw
  padding-top: 0.5em
  display: block
  font-weight: bold
  letter-spacing: -0.04em
  // padding-left: 2em
  // float: right
  
.image
  width: 100%
  height: auto
  border-radius: 1rem
  margin-top: 0.3rem
  
.block-quotation
  // margin-bottom: 2rem
  // margin: 2rem 12rem 3rem 6rem
  // padding-top: 1rem
  // margin: -1rem 0 1.7rem 2rem
  // float: right
  // width: 40%
  font-size: 1.4vw
  line-height: 1.5em
  letter-spacing: -0.06em
  
  display: inline-block
  font-style: italic
  // margin-top: 1rem
  // color: #FF3F16
  // color: #6C91F7
  // opacity: 0.45
  
  &:before
    display: inline-block
    content: "»"
    // margin-left: -2rem
    opacity: 0.4
    font-size: 1.2em
    padding-right: 0.25em
  &:after
    display: inline-block
    content: "«"
    opacity: 0.4
    padding-left: 0.25em
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