<template lang="pug">
  #logo
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
  transform: scale(0.75) translate(20%, -25%)
  .bg 
    // img
    position: relative
    top: 0vw
    right: 0vw
    width: 17vw
    height: 18vw
    z-index: 88
    background: rgba(10,10,10,0.12)
    mask: url(~assets/img/logo-bg.svg) no-repeat center
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
