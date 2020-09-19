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
        nuxt-link(to='/page/habit-experiment').menu-item The 1-Month Habit Experiment
        nuxt-link(to='/page/coaching').menu-item 1 on 1 coaching
        nuxt-link(to='/page/team-work').menu-item Team coaching
      nuxt-link(to='/page/olof').menu-item About
      nuxt-link(to='/the-blog/').menu-item Blog
      nuxt-link(to='/page/get-in-touch').menu-item Get in touch
            
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
        '/page/coaching',
        '/page/team-work'
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
.inner
  $w: 300px
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
  font-weight: bold
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
  margin-bottom: 0.7em
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