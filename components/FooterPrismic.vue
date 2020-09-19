<template lang='pug'>
  footer.footer
    mailchimp
</template>

<script>
import Mailchimp from '~/components/Mailchimp.vue'

export default {
  name: 'FooterPrismic',
  components: {
    Mailchimp
  }
}
</script>

<style lang="sass" scoped>
  .footer
    background: rgba(0,0,0,0.07)
</style>