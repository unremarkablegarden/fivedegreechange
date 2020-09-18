<template lang="pug">
  #logo
    .bg
      img(src='~assets/img/logo-bg.svg')
    .fg
      img(src='~assets/img/logo.svg')
</template>

<style lang="sass">
#logo
  position: absolute
  right: 3vw
  top: 3vw
  width: 18vw
  .bg img
    position: relative
    top: 0vw
    right: 0vw
    width: 18vw
    height: auto
    z-index: 88
  .fg img
    position: relative
    top: 0.3vw
    right: -1.3vw
    width: 15vw
    height: auto
    z-index: 99
  .bg
    position: absolute
    
</style>
