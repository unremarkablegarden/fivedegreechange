<template lang="pug">
  nuxt-link(to='/')#logo
    .bg
      span &nbsp;
      //- img(src='~assets/img/logo-bg.svg')
    .fg
      img(src='~assets/img/logo.svg')
</template>

<style lang="sass">
#logo
  // position: absolute
  position: fixed
  right: 3vw
  top: 3vw
  width: 18vw
  z-index: 999
  transform: scale(0.8) translate(20%, -25%)
  &:hover
    background: transparent
  .bg 
    // img
    position: relative
    top: 0vw
    right: 0vw
    width: 17vw
    height: 18vw
    z-index: 88
    // background: rgba(10,10,10,0.1)
    background: rgba(150,150,150,0.15)
    mask: url(~assets/img/logo-bg.svg) no-repeat center
    backdrop-filter: blur(11px)
    // border: 1px white solid
    // border: 1px blue solid
  .fg img
    position: relative
    top: 1.3vw
    right: -2vw
    width: 15vw
    height: auto
    z-index: 99
    opacity: 0.9
  .bg
    position: absolute
    
</style>
