<template>
  <div>
    <template v-if="size === 'image-full-width'">
      <div class='blog-header single' :style="{ 'background-image': 'url(' + img.url + ')'}">
        <template v-if="$prismic.asText(caption) != ''">
          <div class="wrapper">
            <h1>{{ $prismic.asText(caption) }}</h1>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class='post-part single container post-image'>
        <p class="block-img" :class="size">
          <prismic-image :field="img"/>
        </p>
        <template v-if="$prismic.asText(caption) != ''">
          <p>
            <span class="image-label">{{ $prismic.asText(caption) }}</span>
          </p>
        </template>
      </div>
    </template>
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
    }
  },
  created () {
    this.img = this.slice.primary.image
    this.caption = this.slice.primary.caption
    this.size = this.slice.slice_label
  }
}
</script>

<style lang="sass" scoped>

.post-image
  // margin-bottom: 24px
  margin-top: 1rem
  margin-bottom: 1rem
  max-width: 50%
  float: right
  margin-left: 3rem
  img
    border-radius: 1rem
.block-img
  

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