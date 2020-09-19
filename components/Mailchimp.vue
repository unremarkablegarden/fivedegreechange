<template lang='pug'>
.mailchimp.container
  section.section#mc_embed_signup
    form#mc-embedded-subscribe-form.validate(action='https://health.us3.list-manage.com/subscribe/post?u=e2d6d2c00fd193d5431b473e9&id=244264a68a', method='post', name='mc-embedded-subscribe-form', target='_blank', novalidate)
      #mc_embed_signup_scroll
        .mc-field-group.has-text-centered
          //- label(for='mce-EMAIL') Email
          p Join the mailing list
          
          .formy
            input#mce-FNAME(type='text', name='FNAME', placeholder='First name').input.name
            input.required.email#mce-EMAIL(type='email', name='EMAIL', placeholder='Email address').input
            input#mc-embedded-subscribe.button(type='submit', value='Subscribe', name='subscribe')
        .clear
          #mce-responses.clear
            .response#mce-error-response(style='display:none')
            .response#mce-success-response(style='display:none')
        div(style='position: absolute; left: -5000px;', aria-hidden='true')
          input(type='text', name='b_e2d6d2c00fd193d5431b473e9_244264a68a', tabindex='-1')

//- #mc_embed_signup
  form#mc-embedded-subscribe-form.validate(action='https://health.us3.list-manage.com/subscribe/post?u=e2d6d2c00fd193d5431b473e9&id=244264a68a', method='post', name='mc-embedded-subscribe-form', target='_blank', novalidate)
    #mc_embed_signup_scroll
      .mc-field-group
        label(for='mce-EMAIL') Email Address
        input.required.email#mce-EMAIL(type='email', name='EMAIL')
      .mc-field-group
        label(for='mce-FNAME') First Name
        input#mce-FNAME(type='text', name='FNAME')
      .mc-field-group
        label(for='mce-LNAME') Last Name
        input#mce-LNAME(type='text', name='LNAME')
      #mce-responses.clear
        .response#mce-error-response(style='display:none')
        .response#mce-success-response(style='display:none')
      div(style='position: absolute; left: -5000px;', aria-hidden='true')
        input(type='text', name='b_e2d6d2c00fd193d5431b473e9_244264a68a', tabindex='-1')
      .clear
        input#mc-embedded-subscribe.button(type='submit', value='Subscribe', name='subscribe')


</template>

<script>
export default {
  name: 'Mailchimp'
}
</script>

<style lang='sass' scoped>
.mailchimp
  // padding-bottom: 5vw
  font-size: 0.9rem
.section
  margin-top: 0
  // padding-top: 6vw
  // padding-bottom: 7vw
  // border-top: 1px black solid
  // box-shadow: 0 0 100px 50px rgba(0,0,0,.1)
  // background: rgba(0,0,0,0.07)
  // border-width: 1px 0
*:focus
  outline: none
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05)
  border-color: #aaa
#mc-embedded-subscribe
  background: #f5f5f5
  border-radius: 0 0.5em 0.5em 0
  &:hover
    background: black
    color: white
#mc-embedded-subscribe, .input
  border: 1.3px rgba(0,0,0,0.6) solid
.name
  // margin-right: 6px
  width: 120px
  border-right: 0
  border-radius: 0.5em 0 0 0.5em
.email
  width: 180px
  border-right: 0
  border-radius: 0
.formy
  // display: flex
  color: black
  *
    font-family: 'gtmono', monospace
    letter-spacing: -0.05em
    line-height: 1.5em
    box-shadow: 0
    font-size: 0.9rem
</style>