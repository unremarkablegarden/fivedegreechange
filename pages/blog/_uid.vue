<template lang='pug'>
  .blog
    //- xmp {{ document.hero_image.url }}
    .header
      nuxt-link(to='../').alt.back &larr; Back home
      //- .meta.alt
        .date {{ formattedDate }}
    
    .container
      section.section
        .columns(v-if='document.hero_image')
          .column.is-6.is-offset-3
            prismic-image(:field='document.hero_image').hero_image
        h1.blog-title {{ $prismic.asText(document.title) }}
    
    .container
      section.section
        content
          .author.alt
            //- xmp(v-if='document.author_image.url') {{ document }}
            prismic-image(:field='document.author_image', v-if='document.author_image.url').author-image
            img(src='https://images.prismic.io/fivedegreechange/5700d7a9-6198-4ecd-9d63-2f123cc7e531_olof.jpg?auto=compress,format&rect=0,0,1200,1200&w=300&h=300', v-else).author-image
            .author-name(v-if='document.author') {{ document.author }}
            .author-name(v-else) Olof Ekman
            .date {{ formattedDate }}
          slices-block(:slices='slices')
          
    footer-prismic
        
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
  mounted () {
    // console.log();
  },
  head () {
    return {
      title: this.$prismic.asText(this.document.title) + ' | five degree change' || 'Blog | five degree change',
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
          content: this.document.sharing_excerpt || this.$prismic.asText(this.document.excerpt),
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
  async asyncData({ $prismic, params, error }) {
    try{
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      return {
        document: post,
        slices: post.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(post.date)),
      }
    } catch (e) {
      error({ statusCode: 101, message: '?!?!' })
    }
  },

}
</script>

<style lang="sass" scoped>
  .section
    padding-top: 1.5rem
    // padding-top: 0
  .blog
    min-height: 100vh
    background: #f5f5f5
  .back
    opacity: 1 !important
    color: rgba(0,0,0,0.7) !important
  .meta
    color: rgba(0,0,0,0.7) !important
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
  .header
    padding: 1rem
    a
      background: transparent
      color: black
      opacity: 0.4
</style> 
