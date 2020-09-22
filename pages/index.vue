<template lang="pug">
  .homepage
    //- xmp {{ homepage }}
    prismic-link(:field='homepage.news_link')
      .news(v-if='homepage.news.length')
        prismic-rich-text(:field='homepage.news')
      
    level(:slice="level", v-for='(level, i) in homepage.body', :key="'slice-'+i", :class="'level-'+(i+1)", :data-name='level.primary.title[0].text.trim().toLowerCase()', :data-ref='level.primary.ref').homepage-section
      
    section.section.blog.homepage-section(data-ref='blog')
      h1 Blog 
      .blog-main(v-if='posts.length !== 0').viewer.columns.is-multiline
        section.blog-post(v-for='post in posts', :key='post.id', v-bind:post='post').item.column.is-one-third
          .widget
            blog-widget(:post='post')
      .blog-main(v-else)
        p No Posts published at this time.
        
    footer-prismic  
</template>

<script>
import BlogWidget from '~/components/BlogWidget.vue'
import Level from '~/components/slices/Level.vue'
import FooterPrismic from '~/components/FooterPrismic.vue'
// import scrollIntoView from 'scroll-into-view'

if (process.browser) {
  var Masonry = require('masonry-layout');
  var ImagesLoaded = require('imagesloaded');
}


export default {
  name: 'Home',
  components: {
    BlogWidget,
    Level,
    FooterPrismic
  },
  data() {
    return {
      selector: ".viewer",
      options: {
        columnWidth: ".is-one-third",
        percentPosition: true,
        gutter: 0,
        itemSelector: ".item",
        // horizontalOrder: true
      },
      hash: this.$route.hash
    };
  },
  methods: {
    loaded() {
      // all images are loaded
      ImagesLoaded(this.selector, () => {
        this.$emit("masonry-images-loaded");
        // activate mansonry grid
        let masonry = new Masonry(this.selector, this.options);
        this.$emit("masonry-loaded", masonry);
        // this.scrollToAnchorPoint()
      });
    },
    scrollToAnchorPoint() {
      if (this.hash) {
        const refName = this.hash.replace('#', '')
        const el = this.$children.find(e => e.$attrs['data-ref'] === refName)
        console.log(el);
        el.$el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  watch: {
    data () {
      this.loaded()
    }
  },
  mounted () {
    this.loaded()
    this.$nextTick(function () {
      this.scrollToAnchorPoint()  
    })
  },
  computed: {
    HALF () {
      return 200
    }
  },
  transition: {
    // name: 'home',
    // mode: 'out-in'
    // mode: 'in-out'
  },
  head () {
    return {
      title: 'five degree change',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.homepage.sharing_image.url || '/bwlogo.png',
        }, {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'five degree change',
        }, {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        }, {
          hid: 'og:url',
          name: 'og:url',
          content: 'http://fivedegreechange.com/',
        }, {
          hid: 'og:title',
          name: 'og:title',
          content: this.homepage.sharing_title || 'How about some change?',
        }, {
          hid: 'og:description',
          name: 'og:description',
          content: this.homepage.sharing_excerpt || 'I make it a bit easier to get a bit better. Most people approach change like this: they turn their life upside down, adopt a crazy, punishing routine, achieve some success initially, and then everything falls apart after a few weeks and they fall into a pit of despair and self-loathing. If that’s you, let me tell you about a different approach.',
        },
      ]
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      const homepage = (await $prismic.api.getSingle('homepage')).data

      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings : '[my.post.date desc]' }
      )
      
      // console.log(homepage.body)
      if ('body' in homepage) {
        if (homepage.body.length) {
          homepage.body.forEach(slice => {
            if (slice.primary.subtitle.length) {
              // let subtitle = 
              // subtitle = 'hello'
              slice.primary.subtitle[0].text = slice.primary.subtitle[0].text.replace(' — ', ' —\n')
            }
          })
        }
      }

      return {
        homepage,
        posts: blogPosts.results,
        // image: homepageContent.image.url,
      }
    } catch (e) {
      // Returns error page
      // error({ statusCode: 404, message: 'Page not found' })
      error({ statusCode: 303, message: JSON.stringify(e) })
    }
  },
}
</script>

<style lang="sass">
.news
  position: absolute
  z-index: 99
  right: 4vw
  top: calc(95vh - 16vw)
  border-radius: 15vw
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  padding: 0 1.5vw
  font-style: italic
  box-shadow: 0 0 20px 7px rgba(255,255,255,0.5)
  font-size: calc(10px + 0.3vw)
  width: 16vw
  height: 16vw
  backdrop-filter: blur(11px)
  background: rgba(255,255,255,0.1)
  border: 2px white solid
  transform-origin: center
  transform: rotate(-10deg)
  animation-name: news
  animation-duration: 666ms
  animation-timing-function: ease-in-out
  animation-iteration-count: infinite
  animation-direction: alternate
  a
    text-decoration: underline
    &:hover
      background: transparent
      color: black
  p
    padding: 0.5rem 0 0 0 !important
    margin: 0 !important

.is-one-third
  margin-bottom: 0.5rem

@keyframes news
  0%
    transform: scale(1) rotate(-12deg)
  // 50%
  //   transform: scale(1.5)
  100%
    transform: scale(1.08) rotate(-3deg)

</style>