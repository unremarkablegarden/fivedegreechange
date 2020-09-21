<template lang='pug'>
  footer.footer
    
    mailchimp
    
    hr
    
    .links1
      //- a(:href='email', taget='_blank') email
      nuxt-link(to='/page/contact/') contact
      span •
      nuxt-link(to='/the-blog/') blog
      span •
      a(href='https://www.instagram.com/5degreechange/', taget='_blank') instagram
      span •
      a(href='https://www.linkedin.com/in/carlolofekman/', taget='_blank') linkedin
    .links2
      nuxt-link(to='/page/imprint/') imprint
      span •
      nuxt-link(to='/page/terms-of-service/') terms of service
      
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
    opacity: 0.8
    padding-bottom: 4vw
    .txt
      margin-top: 1.2vw
    hr
      margin: 1.5vw auto 2.5vw
      padding: 0
      // width: 66%
      width: 420px
      border: 0
      background: rgba(255,255,255,0.5)
      border-radius: 3px
      height: 2px
      
    a
      color: rgba(0,0,0,0.9)
      border-bottom: 1px transparent solid
      text-transform: uppercase
      display: inline-block
      margin: 0 0.5rem
      background: transparent !important
      &:hover
        transform: none
        background: none
        color: black
        border-bottom: 1px black solid
</style>