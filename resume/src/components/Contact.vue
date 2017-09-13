<template>
  <section class="main-contact">
    <div class="title animated slideInUp" v-show="showMe">{{ msg.title }}</div>
    <div class="content">
      <div class="msg-des">
        <p v-for="(item, index) in msg.desList" :key="index">{{ item }}</p>
      </div>
      <div class="msg-type" ref="contactType">
        <a class="item animated flipInX" v-show="showMe" v-for="(item, index) in msg.typeList" :key="index"
           :href="item.url">
          <i :class="item.iconClass"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'contact',
    props: {
      msg: {
        type: Object,
        default: {}
      },
      isMobile: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showMe: this.isMobile,
        img: require('../../static/img/wechat.jpg')
      }
    },
    mounted () {
      document.styleSheets[0].insertRule('.item:nth-child(4):after { background: url(../../' + this.img + ') no-repeat center center/100px 100px, #f0f2f1 }', 0)
    },
    methods: {
      enterAnimate () {
        this.showMe = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    color #f0f2f1
  .content
    margin 0 auto
    text-align center
    color #f0f2f1
    .msg-des
      font-size 24px
      line-height 40px
      text-shadow 1px 1px 1px #777
      p:first-child
        color #ff777a
      p:nth-child(3)
        color #e6cd54
    .msg-type
      margin-top 80px
      a:not(:first-child)
        margin-left 30px
      .item
        display inline-block
        outline none
        width 46px
        height 46px
        border-radius 50%
        border 1px solid #fff
        font-size 38px
        line-height 48px
        &:first-child
          font-size 36px
        &:nth-child(4)
          position relative
          font-size 32px
          &:before
            display none
            content ''
            position absolute
            top -15px
            left 14px
            border-left 8px solid transparent
            border-right 8px solid transparent
            border-top 12px solid #f0f2f1
            opacity 0
            transition opacity .5s
          &:after
            display none
            content ''
            position absolute
            top -125px
            left -33px
            width 110px
            height 110px
            border-radius 3px
            opacity 0
            transition opacity .5s
          &:hover
            &:before
              display block
              opacity 1
            &:after
              display block
              opacity 1
</style>
