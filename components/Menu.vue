<template lang="pug">
  #menu(:class='{ white: isDark }')
    nav.navbar
      a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample', @click='toggle', :class='{ "is-active": open }')
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
    .inner(:class='{ "is-active": open }').alt
      //- nuxt-link(to='/').menu-item Home
      .txt Work with me
      .pad
        nuxt-link(to='/habit-experiment').menu-item The 1-Month Habit Experiment
        nuxt-link(to='/coaching').menu-item 1 on 1 coaching
        nuxt-link(to='/team-work').menu-item Team development
      nuxt-link(to='/').menu-item Home
      nuxt-link(to='/olof').menu-item About
      nuxt-link(to='/the-blog/').menu-item Blog
      nuxt-link(to='/contact').menu-item Get in touch
    .bg(:class='{ "is-active": open }', @click='toggle') &nbsp;
            
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      open: false,
      isDark: false
    }
  },
  watch: {
    $route: function (r) {
      // console.log('route change')
      // console.log(r);
      this.pathCheck()
      this.open = false
    }
  },
  mounted () {
    this.pathCheck()
  },
  methods: {
    pathCheck (r) {
      let route = r
      if (!route) route = this.$route.path
      
      const darkPaths = [
        '/coaching',
        '/team-work'
      ]
      if (darkPaths.includes(route)) {
        this.isDark = true
      } else {
        this.isDark = false
      }
    },
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="sass" scoped>
$w: 300px

#menu
  position: fixed
  top: 1vw
  left: 1vw
  z-index: 999
.navbar-burger
  display: block
  height: 2rem
  width: 2rem
  transform: scale(2) translate(0.5vw, 0.5vw)
  &:hover
    transform: scale(2) translate(0.5vw, 0.5vw) !important
.navbar
  background: transparent !important
a, a:hover
  background: transparent !important
  transform: scale(1)
  color: rgba(0,0,0,0.8)
.bg
  background: transparent
  position: fixed
  top: 0
  left: $w
  width: calc(100vw - 300px)
  height: 100vh
  // z-index: 888
  transform: translate3d(-100vw,0,0)
  &.is-active
    transform: translate3d(0,0,0)
.inner
  // position: relative
  // z-index: 1001
  transform: translate3d(-$w,0,0)
  transition: all 200ms ease-out
  &.is-active
    transform: translate3d(0,0,0)
    transition: all 200ms ease-out
  // background: rgba(100,100,100,0.15)
  background: rgba(0,0,0,0.01)
  border-right: 2px black solid
  // background: rgba(255,255,255,0.1)
  backdrop-filter: blur(11px)
  position: fixed
  left: 0
  top: 0
  width: $w
  height: 100vh
  padding: 6rem 1rem
.menu-item
  display: block
  line-height: 1.3em
  font-weight: normal
  // margin-bottom: 1.3em
  padding: 0.6em 0
  margin-left: 1em
  opacity: 0.86
  &:before
    content: '✓ '
    opacity: 0
    margin-left: -1.2em
    // overflow: hidden
    // width: 0
    // display: inline-block
  &:hover
    opacity: 1
    &:before
      opacity: 0.5
      
    // padding-left: 0.5em
    // width: 1em
    // &:before
      
.txt
  // text-decoration: underline
  margin-bottom: 0.3em
  opacity: 0.86
  text-transform: uppercase
  font-size: 0.8em
  margin-left: 1em
.pad
  margin-left: 1em

.white
  *
    color: rgba(255,255,255,0.8)
  .inner
    background: rgba(255,255,255,0.05)
    border-color: white
    a:hover
      color: white

</style>