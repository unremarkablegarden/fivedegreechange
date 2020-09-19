<template lang='pug'>
  footer.footer
    
    mailchimp
    
    hr
    
    .links
      a(:href='email', taget='_blank') email
      a(href='https://www.instagram.com/5degreechange/', taget='_blank') instagram
      a(href='https://www.linkedin.com/in/carlolofekman/', taget='_blank') linkedin
      
    .txt
      span five degree change
      br
      span Schudomastrasse 26
      br
      span 12055 Berlin
      
</template>

<script>
import Mailchimp from '~/components/Mailchimp.vue'

export default {
  name: 'FooterPrismic',
  components: {
    Mailchimp
  },
  data: function () {
    return {
      email: 'mailto:olof@fivedegreechange.com'
    }
  }
}
</script>

<style lang="sass" scoped>
  .footer
    background: rgba(0,0,0,0.07)
    text-align: center
    font-size: 0.8rem
    letter-spacing: 0
    line-height: 1.5em
    hr
      margin: 2.5vw auto 1.8vw
      padding: 0
      // width: 66%
      width: 420px
      
    a
      color: rgba(0,0,0,0.9)
      border-bottom: 1px transparent solid
      text-transform: uppercase
      display: inline-block
      margin: 1rem
      &:hover
        transform: none
        background: none
        color: black
        border-bottom: 1px black solid
</style>