<template>
  <div>
    <!-- xmp {{ slice.primary }} -->
    <div :class="'post-part single container post-image ' + align">
      <p class="block-img" :class="size">
        <prismic-image :field="img"/>
      </p>
      <template v-if="$prismic.asText(caption) != ''">
        <p>
          <span class="image-label">{{ $prismic.asText(caption) }}</span>
        </p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-caption-slice',
  data: function() {
    return {
      img: '',
      caption: '',
      size: '',
      align: '',
      imgClass: '',
    }
  },
  created () {
    this.img = this.slice.primary.image
    this.caption = this.slice.primary.caption
    this.size = this.slice.slice_label
    let align = this.slice.primary.align
    if (align === 'Left') align = 'left'
    else if (align === 'Right') align = 'right'
    else if (align === 'Center (full width)') align = 'center'
    // else align = 'center'
    this.align = align
    this.imgClass = this.size + ' ' + this.align
  }
}
</script>

<style lang="sass" scoped>

.post-image
  // margin-bottom: 24px
  margin-top: .5rem
  margin-bottom: 1rem
  img
    border-radius: 1rem
  max-width: 40%
  float: right
  margin-left: 3rem
  &.right
    max-width: 40%
    float: right
    margin-left: 3rem
  &.left
    max-width: 40%
    float: left
    margin-right: 3rem
    margin-left: 0
  &.center
    max-width: 100%
    float: none
    clear: both
    margin-left: 0
    

  

.image-label
  display: block
  text-align: center
  font-style: italic
  font-size: 0.8rem
  margin-top: 0.2rem
  // color: #949494
  color: rgba(0,0,0,0.36)

// // Media Queries
// @media (max-width: 767px)
//   .blog-header
//     padding: 5px
//     .wrapper
//       width: 80%

// @media screen and (min-width: 768px)
//   // Blog post images
//   .block-img.emphasized
//     width: 130%
//     margin: 0 -15% 2rem -15%
</style>