<template lang='pug'>
  .page(:class='colour', :data-name='document.title[0].text.trim().toLowerCase()')
    .header
      nuxt-link(to='/').alt.back &larr; Back home
      
    .container
      section.section
        .columns(v-if='document.hero_image.url || document.hero_video.html')
          .column.hero_column(:class='{ "is-6 is-offset-3" : document.hero_image.url, "is-8 is-offset-2" : document.hero_video.html }')
            .inner
              prismic-image(:field='document.hero_image', v-if='document.hero_image.url').hero_image
              prismic-embed(:field='document.hero_video', v-if='document.hero_video.html').hero_video
        h1.blog-title {{ $prismic.asText(document.title) }}
    
    .container
      section.section
        content
          slices-block(:slices='slices')
    
    footer-prismic
    //- mailchimp
        
</template>


<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import FooterPrismic from '~/components/FooterPrismic.vue'

export default {
  name: 'post',
  components: {
    SlicesBlock,
    FooterPrismic
  },
  transition: {
    // name: 'home',
    // mode: 'out-in'
    // mode: 'in-out'
  },
  head () {
    return {
      title: this.$prismic.asText(this.document.title) + ' | five degree change' || 'Page | five degree change',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.document.sharing_image.url || this.document.hero_image.url || '/bwlogo.png',
        }, {
          hid: 'og:url',
          name: 'og:url',
          content: 'http://fivedegreechange.com' + this.$route.path,
        }, {
          hid: 'og:title',
          name: 'og:title',
          content: this.document.sharing_title || this.$prismic.asText(this.document.title)
        }, {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }, {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'five degree change',
        }, {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        }, 
      ]
    }
  },
  computed: {
    description () {
      let desc = ''
      if (this.document && this.document.sharing_excerpt) {
        desc = this.document.sharing_excerpt
      }
      else if (this.document && this.document.body) {
        let t = this.document.body.find(x => x.slice_type === 'text')
        if (t && t.primary) {
          let tp = t.primary.text.filter(x => x.type === 'paragraph' && x.text !== '')  
          desc = this.$prismic.asText(tp)
        }
      }
      // console.log('----------------------------');
      // console.log(desc);
      // console.log('----------------------------');
      return desc
    },
    colour () {
      const options = {
        "Black and white": 'black-and-white',
        "Lavender": 'level-1', 
        "Sunshine (yellow)": 'level-2', 
        "Night (blue)": 'level-3', 
        "Regal (purple)": 'level-4' 
      }
      let c = this.document.colour
      return options[c]
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      const post = (await $prismic.api.getByUID('page', params.uid)).data

      return {
        document: post,
        slices: post.body,
      }
    } catch (e) {
      error({ statusCode: 202, message: 'page?!?!' })
    }
  },

}
</script>

<style lang="sass">
.hero_video
  margin-top: 8vh
  position: relative
  padding-bottom: 56.25%
  height: 0
  overflow: hidden
  max-width: 100%
  width: 100%
  iframe, object, embed
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    
</style>

<style lang="sass" scoped>
h1.blog-title
  line-height: 1em
.section
  padding-top: 1.5rem
  // padding-top: 0
.blog
  min-height: 100vh
  background: #f5f5f5
.back
  opacity: 1 !important
  color: rgba(0,0,0,0.7) !important
  border: 0 !important
.meta
  color: rgba(0,0,0,0.4) !important
  float: right
  text-align: right
  img
    opacity: 0.9
    height: 100px
    border-radius: 100%
    width: auto
.author
  .author-name
    font-weight: bold
  .author-image
    margin-bottom: 0.5rem
  float: left
  text-align: center
  color: rgb(100,100,100)
  font-size: 0.9rem
  line-height: 1.2rem
  border: 1px #ccc solid
  padding: 0 1.5rem 1rem 0
  margin: 0.3rem 2rem 1rem 0.3rem
  border-top: 0
  border-left: 0
  border-radius: 0 0 1rem 0
  img
    opacity: 0.9
    height: 8rem
    border-radius: 100%
    width: auto
h1
  margin-top: 0rem
  margin-bottom: 0rem
  width: 80%
  margin-left: 10%
  text-align: center
  font-size: 7vw
.hero
  height: 40vh
  overflow: hidden
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
  margin-bottom: 3rem
.hero_image
  border-radius: 1rem
.hero_column
  // display: flex
  // justify-content: center
  
.header
  padding: 1rem
  a
    background: transparent
    color: black
    opacity: 0.4
</style> 
