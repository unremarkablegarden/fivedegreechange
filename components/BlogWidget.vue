<template lang='pug'>
  .inner
    nuxt-link(:to='link').blog-link
      //- div
      .blog-post
        .meta.alt
          .author(v-if='post.data.author_name') {{ post.data.author_name }}
          .author(v-else) Olof Ekman
          .date {{ formattedDate }}
        h2 {{ $prismic.asText(post.data.title) }}
        
        .text(v-if='post.data.excerpt.length')
          prismic-rich-text(:field="post.data.excerpt")
        p.text(v-else) {{ getFirstParagraph(post) }}
        a.more.alt Continue reading &rarr;
        
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['post'],
  data: function() {
    return {
      link: '',
      formattedDate: '',
    }
  },
  name: 'blog-widget',
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (post) {
      const textLimit = 300;
      const slices = post.data.body;
      let firstParagraph = '';
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block){
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });
      
      const limitedText = firstParagraph.substr(0, textLimit)

      // post.data.

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      }
      else {
        return firstParagraph;
      }
    },
  },
  created () {
    this.link = LinkResolver(this.post),
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.post.data.date))
  },
}
</script>

<style lang="sass" scoped>
  $blogtext: #39507F
  a
    background: transparent
    // text-decoration: underline
    transition: all 200ms
    &:hover
      transform: none
      .blog-post
        transition: all 200ms
        // background: #f0f0f0
        background: #C3F4D9
  .blog-link
    // width: 50%
  .blog-post
    padding: 1em 1.4rem
    display: inline-block
    border-radius: 1em
    border: 3px $blogtext solid
  .meta
    color: #39507F
    float: right
    font-size: 0.95rem
    line-height: 1.25rem
    text-align: right
  a.more
    margin-top: 1.7rem
    font-size: 1.15rem
    color: $blogtext
    padding-left: 0
    margin-left: 0
  .text
    font-size: 0.9rem
    line-height: 1.2rem
  h2
    font-size: 2rem
    margin-bottom: 0.5em
    margin-top: 2.8rem
    width: 100%
</style>