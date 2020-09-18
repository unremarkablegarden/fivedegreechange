<template lang='pug'>
  .level-component
    .inner
      prismic-rich-text.title(:field="slice.primary.title", v-if='slice.primary.title.length')
      prismic-rich-text.title(:field="slice.primary.subtitle", v-if='slice.primary.subtitle.length')
      
      .content(v-for='(item, i) in slice.items', :key='i')      
        .alt(v-if='strong(item)').cta
          prismic-rich-text(:field='item.content')
        div(v-else)
          prismic-rich-text(:field='item.content')
      
</template>

<script>
export default {
  props: ['slice'],
  name: 'level',
  methods: {
    strong (item) {
      let spans = item.content[0].spans || false
      if (spans.length) {
        spans = spans[0].type || false
        if (spans === 'strong') spans = true
        else spans = false
      } else {
        spans = false
      }
      return spans
    }
  }
}
</script>

<style lang="sass" scoped>
.cta
  margin-top: 3em
// .level-component
// .inner
  // background: #000
// .textslice
//   a
//     text-decoration: underline
</style>