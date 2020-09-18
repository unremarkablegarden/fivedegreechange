<template>
    <div>
        <section v-for="(slice, index) in slices" :key="'slice-' + index" :class='"slice-" + slice.slice_type'>
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
            
            <template v-else-if="slice.slice_type === 'table'">
                <table-slice :slice="slice"></table-slice>
            </template>
            
            <template v-else-if="slice.slice_type === 'check_list'">
                <checklist-slice :slice="slice"></checklist-slice>
            </template>
            
            <template v-else-if="slice.slice_type === 'call_to_action'">
                <cta-slice :slice="slice"></cta-slice>
            </template>
            
            <template v-else-if="slice.slice_type === 'columns'">
                <columns-slice :slice="slice"></columns-slice>
            </template>
        </section>
    </div>
</template>

<script>
// Imports for all slices
// const Level = () => import("../components/slices/Level.vue");
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ImageCaptionSlice = () => import("../components/slices/ImageCaptionSlice.vue");

const TestimonialSlice = () => import("../components/slices/TestimonialSlice.vue");
const TableSlice = () => import("../components/slices/TableSlice.vue");const ChecklistSlice = () => import("../components/slices/ChecklistSlice.vue");const CtaSlice = () => import("../components/slices/CtaSlice.vue");
const ColumnsSlice = () => import("../components/slices/ColumnsSlice.vue");


export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    // Level,
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
    TestimonialSlice,
    TableSlice,
    ChecklistSlice,
    CtaSlice,
    ColumnsSlice
  },
  methods: {
    //   sliceClass(slice) {
    //       if (
    //             slice.slice_type === 'text' || 
    //             slice.slice_type === 'testimonial'
    //         ) {
    //           return 'slice-border'
    //         }
    //         else {
    //             return slice.slice_type
    //         }
    //   }
  }
}
</script>