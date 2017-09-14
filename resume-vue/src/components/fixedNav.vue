<template>
  <div class="fixed-nav" @mouseover="showIcon" @mouseout="hideIcon">
    <a class="avatar" :href="fixedNav[0].url" ref="avatar">
      <img src="../assets/avatar.jpg" alt="">
    </a>
    <transition name="move">
      <div class="fixed-nav-icon" v-show="iconShow">
        <a v-for="(item, index) in fixedNav" :key="index" :href="item.url" :class="['inner', 'inner-'+(index+1)]">
          <i :class="item.iconClass"></i>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      fixedNav: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        iconShow: false,
        iconShowTimer: null,
        iconHideTimer: null
      }
    },
    methods: {  // 鼠标移到小小球时小球不变
      showIcon () {
        this.iconShow = true
        clearTimeout(this.iconHideTimer)
        this.iconShowTimer = setTimeout(() => {
          this.$refs.avatar.classList.add('animated', 'rubberBand')
        }, 250)
      },
      hideIcon () {
        this.iconShow = false
        clearTimeout(this.iconShowTimer)
        this.iconHideTimer = setTimeout(() => {
          this.$refs.avatar.classList.remove('animated', 'rubberBand')
        }, 250)
      }
    }
  }
</script>

<style lang="stylus">
  .fixed-nav
    .avatar
      position: fixed
      top: 50px
      left: 50px
      width: 80px
      height: 80px
      outline none
      border-radius: 50%
      box-shadow 0 2px 6px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 4px 2px -2px rgba(0,0,0,.12)
      z-index: 2
      img
        width: 80px
        height: 80px
        border-radius: 50%
    .fixed-nav-icon
      position: fixed
      top: 50px
      left: 50px
      width: 80px
      height: 80px
      border-radius: 50%
      transition: all 1.4s ease-in
      z-index: 1
      .inner
        outline none
      &.move-enter-active
        .inner
          transform: translate3d(0, 0, 0)
          transition-timing-function: cubic-bezier(.18, .7, .56, 1.45)
        .inner-1
          transition-delay: .5s
        .inner-2
          transition-delay: .6s
        .inner-3
          transition-delay: .7s
      &.move-enter, &.move-leave-active
        .inner
          transition-timing-function: ease-in-out
        .inner-1
          transform: translate3d(-80px, 0, 0)
          transition-delay: .3s
        .inner-2
          transform: translate3d(-40px, -40px, 0)
          transition-delay: .25s
        .inner-3
          transform: translate3d(0, -80px, 0)
          transition-delay: .2s
      .inner
        display: inline-block
        position: absolute
        width: 30px
        height: 30px
        font-size 25px
        line-height: 32px
        border-radius: 50%
        text-align: center
        background #f0f2f1
        box-shadow 0 2px 6px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 4px 2px -2px rgba(0,0,0,.12)
        transition: all .4s
        i:before
          color #08d9ab
      .inner-1
        right: -48px
        top: 25px
      .inner-2
        right: -25px
        bottom: -25px
      .inner-3
        left: 25px
        bottom: -45px
  .page
    width 100vw
    height 100vh
</style>
