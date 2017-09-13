<template>
  <div id="app">
    <fix-nav :fixedNav="fixedNav"></fix-nav>
    <div class="nav-dot" v-show="!isMobile">
      <ul>
        <li v-for="(item, index) in titleList"
            :class="[{'active-dot': curIndex === index}, 'item']"
            @click="goto(index)">
          <em class="dot">
            <i :class="item.iconClass"></i>
          </em>
          <span class="dot-title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <div class="main" ref="main"
         @mousewheel="mouseWheelHandler($event)" @DOMMouseScroll="mouseWheelHandler($event)">
      <transition-group tag="div" :name="slide" mode="in-out"
                        :enter-active-class="enterClass"
                        :leave-active-class="leaveClass"
                        @after-enter="enterHandler"
                        @leave="slidingHandler">
        <component v-for="(item, index) in pageList"
                   key="index" v-show="showMe(index)" :is="item"
                   :class="[(index + 1) % 2 !== 0 ? 'bg-color-blue' : 'bg-color-white', 'page-section', 'animate-duration']"
                   :msg="db[index]" :isMobile="isMobile" ref="component">
        </component>
      </transition-group>
    </div>
    <div class="-arrow" v-show="!isMobile && curIndex !== (pageList.length - 1)" @click="arrowClick"><i class="icon-arrow"></i></div>
  </div>
</template>

<script>
  import Contact from './components/Contact'
  import Default from './components/Default'
  import Info from './components/Info'
  import Skill from './components/Skill'
  import Works from './components/Works'
  import fixNav from './components/fixedNav'
  import { oneTime, mobileCheck, _throttleV2 } from './util'
  import { fixedNav, titleList, message, info, skill, works, contact } from './db.js'
  export default {
    name: 'app',
    components: {
      Contact,
      Default,
      Info,
      Skill,
      Works,
      fixNav
    },
    data () {
      return {
        pageList: ['Default', 'Info', 'Skill', 'Works', 'contact'],
        curIndex: 0,
        direction: 'up',
        slide: 'slide-up',
        sliding: false,   // 一次只滑一页
        isMobile: false,
        fixedNav,
        titleList,
        db: [message, info, skill, works, contact]
      }
    },
    computed: {
      pageNum () {
        return this.pageList.length
      },
      prevIndex () {
        return this.curIndex !== 0 ? this.curIndex - 1 : null
      },
      nextIndex () {
        return this.curIndex !== this.pageNum - 1 ? this.curIndex + 1 : null
      },
      isOdd () {
        return (this.curIndex + 1) % 2 !== 0
      },
      enterClass () {
        return 'animated ' + (this.direction === 'up' ? 'slideInUp' : 'slideInDown')
      },
      leaveClass () {
        return 'animated ' + (this.direction === 'up' ? 'slideOutUp' : 'slideOutDown')
      }
    },
    created () {
      if (!mobileCheck()) {
        return
      }
      this.isMobile = true
    },
    mounted () {
      if (this.isMobile) {
        this.$refs.main.classList.remove('main')
        this.$refs.main.classList.add('mobile-main')
      }
    },
    methods: {
      mouseWheelHandler (e) {
        (_throttleV2((e) => {
          if (this.sliding || (e.wheelDelta < 0 && this.curIndex === this.pageNum - 1) || (e.wheelDelta > 0 && this.curIndex === 0) || (e.detail > 0 && this.curIndex === this.pageNum - 1) || (e.detail < 0 && this.curIndex === 0)) {
            return
          }
          this.sliding = true
          if (e.wheelDelta < 0 || e.detail > 0) {
            this.direction = 'up'
            this.slide = 'slide-up'
            this.curIndex++
          } else {
            this.direction = 'down'
            this.slide = 'slide-down'
            this.curIndex--
          }
        }, 100, 300))(e)
      },
      slidingHandler (el, done) {   // 一次只滑一页
        oneTime(el, 'animationend', () => {
          this.sliding = false
          done()
        })
      },
      goto (index) {
        this.direction = index > this.curIndex ? 'up' : 'down'
        this.slide = index > this.curIndex ? 'slide-up' : 'slide-down'
        this.curIndex = index
      },
      enterHandler () {   // 每页的showMe为true执行动画
        this.$refs.component[this.curIndex].enterAnimate()
      },
      showMe (index) {
        if (this.isMobile) {
          return true
        }
        return this.curIndex === index
      },
      arrowClick () {
        if (this.sliding) {
          return
        }
        this.direction = 'up'
        this.slide = 'slide-up'
        this.curIndex++
      }
    }
  }
</script>

<style lang="stylus">
  body
    background #00bfa5
  .bg-color-blue
    background #00bfa5
  .bg-color-white
    background #f0f2f1
  .animate-duration
    animation-duration .7s

  .main
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #eee
    overflow hidden
  .page-section
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    height 100%
    overflow hidden

  .mobile-main
    .title
      font-size 30px
    .main-default
      height 100%
    .main-info
      transform translateY(100vh)
      .intro
        color #f0f2f1
    .main-skill
      transform translateY(200vh)
    .main-works
      transform translateY(300vh)
    .main-contact
      transform translateY(calc(300vh + 1200px))
    .bg-color-white
      background #00bfa5
  .-arrow
    position absolute
    bottom 20px
    left 50%
    width 20px
    height 35px
    z-index 100
    cursor pointer
    transform translateX(-50%)
    animation arrowAnimate 1.5s ease-in-out infinite
    i:before
      color #666
      font-weight bold

  @keyframes arrowAnimate
    0%
      bottom 10px
      opacity .8
    50%
      bottom 20px
      opacity 1
    80%
      bottom 22px
      opacity .4
    100%
      bottom 22px
      opacity 0

  .content
    position absolute
    top 200px
    left 0
    right 0
    bottom 0
  .title
    position absolute
    top 150px
    left 20%
    right 20%
    text-align center
    font-size 36px
  @media screen and (max-width: 1366px)
    .title
      top 70px
  @media screen and (max-width: 600px)
    .fixed-nav
      display none
    .nav-dot
      display none

  .nav-dot
    position fixed
    right 40px
    top 50%
    transform translateY(-50%)
    font-size 14px
    text-align center
    z-index 1
    .item
      position relative
      width 24px
      height 24px
      margin 18px auto
      line-height 24px
      .dot
        position absolute
        top 50%
        left 20px
        width 12px
        height 12px
        font-size 9px
        line-height 14px
        background saturate(#00bfa5, 40%)
        border-radius 50%
        box-shadow 0 2px 6px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 4px 2px -2px rgba(0,0,0,.12)
        opacity .8
        cursor pointer
        transition all .3s ease
        transform translateY(-50%)
        i
          opacity 0
          z-index -1
          &::before
            color: #f0f2f1
        &:hover
          transform translateY(-50%) scale(3)
          opacity 1
          box-shadow 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)
          i
            opacity 1
        &:hover+span
          opacity 1
      .dot-title
        position absolute
        display inline-block
        opacity 0
        z-index 1
        transition all .3s ease
        width 60px
        left -70px
        text-align center
        background saturate(#00bfa5, 40%)
        color #f0f2f1
        border-radius 3px 0 0 3px
        font-weight bold
        &:after
          content ""
          position absolute
          right -12px
          width 0
          height 0
          border-top 12px solid transparent
          border-left 12px solid saturate(#00bfa5, 40%)
          border-bottom 12px solid transparent

    .active-dot
      .dot
        transform translateY(-50%) scale(3)
        opacity 1
        box-shadow 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)
        i
          opacity 1
</style>
