<template lang="pug">
  .homepage
  
    level(:slice="level", v-for='(level, i) in homepage.body', :key="'slice-'+i", :class="'level-'+(i+1)", :data-name='level.primary.title[0].text.trim()').homepage-section
      
    section.section.blog.homepage-section
      h1 Blog 
      .blog-main(v-if='posts.length !== 0').viewer.columns.is-multiline
        section.blog-post(v-for='post in posts', :key='post.id', v-bind:post='post').item.column.is-one-third
          .widget
            blog-widget(:post='post')
      .blog-main(v-else)
        p No Posts published at this time.
      
</template>

<script>
import BlogWidget from '~/components/BlogWidget.vue'
import Level from '~/components/slices/Level.vue'

if (process.browser) {
  var Masonry = require('masonry-layout');
  var ImagesLoaded = require('imagesloaded');
}


export default {
  name: 'Home',
  components: {
    BlogWidget,
    Level,
  },
  data() {
    return {
      selector: ".viewer",
      options: {
        columnWidth: ".is-one-third",
        percentPosition: true,
        gutter: 0,
        itemSelector: ".item",
        horizontalOrder: true
      }
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
      });
    }
  },
  watch: {
    data() {
      this.loaded();
    }
  },
  mounted() {
    this.loaded();
  },
  computed: {
    HALF () {
      return 200
    }
  },
  transition: {
    // name: 'home',
    mode: 'out-in'
    // mode: 'in-out'
  },
  head () {
    return {
      title: 'five degree change',
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
      homepage.body.forEach(slice => {
        if (slice.primary.subtitle.length) {
          // let subtitle = 
          // subtitle = 'hello'
          slice.primary.subtitle[0].text = slice.primary.subtitle[0].text.replace(' — ', ' —\n')
        }
      })

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

<style lang="sass" scoped>
  .is-one-third
    margin-bottom: 0.5rem
</style>