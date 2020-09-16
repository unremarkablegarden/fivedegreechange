<template>
    <section>
        <section v-for="(slice, index) in slices" :key="'slice-' + index" :class='sliceClass(slice)'>
            <template v-if="slice.slice_type === 'level'">
                <level :slice="slice"></level>
            </template>
            <template v-if="slice.slice_type === 'text'">
                <text-slice :slice="slice"></text-slice>
            </template>
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"></quote-slice>
            </template>
            <template v-else-if="slice.slice_type === 'image_with_caption'">
                <image-caption-slice :slice="slice"></image-caption-slice>
            </template>
            <template v-else-if="slice.slice_type === 'testimonial'">
                <testimonial-slice :slice="slice"></testimonial-slice>
            </template>
        </section>
    </section>
</template>

<script>
// Imports for all slices
// const Level = () => import("../components/slices/Level.vue");
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ImageCaptionSlice = () => import("../components/slices/ImageCaptionSlice.vue");
const TestimonialSlice = () => import("../components/slices/TestimonialSlice.vue");


export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    // Level,
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
    TestimonialSlice
  },
  methods: {
      sliceClass(slice) {
          if (
                slice.slice_type === 'text' || 
                slice.slice_type === 'testimonial'
            ) {
              return 'slice-border'
        }
      }
  }
}
</script>