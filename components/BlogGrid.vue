<template lang="pug">
  .blog-grid
    section.section.blog.homepage-section
      .blog-main(v-if='posts && posts.length !== 0').viewer.columns.is-multiline
        section.blog-post(v-for='post in posts', :key='post.id', v-bind:post='post').item.column.is-one-third
          .widget
            blog-widget(:post='post')
      .blog-main(v-else)
        p No Posts published at this time.
        
    //- footer-prismic  
</template>

<script>
import BlogWidget from '~/components/BlogWidget.vue'
import Level from '~/components/slices/Level.vue'

if (process.browser) {
  var Masonry = require('masonry-layout');
  var ImagesLoaded = require('imagesloaded');
}


export default {
  name: 'BlogGrid',
  components: {
    BlogWidget,
    Level,
    // FooterPrismic
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
      }
    };
  },
  props: {
    posts: {
      type: Array,
      default: []
    }
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
    data () {
      this.loaded()
    }
  },
  mounted () {
    this.loaded()
  },
  computed: {
    HALF () {
      return 200
    }
  },
  
}
</script>

<style lang="sass" scoped>
  .is-one-third
    margin-bottom: 0.5rem
</style>