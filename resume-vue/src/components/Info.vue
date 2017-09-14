<template>
  <section class="main-info">
    <div class="title animated slideInUp" v-show="showMe">{{ msg.title }}</div>
    <div class="content">
      <div>
        <ul class="msg-list">
          <li class="msg-item animated zoomIn" v-show="showMe" v-for="(item, index) in msg.infoList" :key="index">
            <div class="cont">
              <div class="svg">
                <i :class="item.iconClass"></i>
              </div>
              <div class="intro">
                <span>{{ item.key }}</span>/<span>{{ item.value }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="msg-des">
        <p class=" animated flipInX" v-show="showMe" v-for="(item, index) in msg.desList">{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'info',
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
        showMe: this.isMobile
      }
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
    color #00bfa5
  .msg-list
    max-width 800px
    margin 0 auto
    display flex
    justify-content space-around
    flex-wrap wrap
    font-size 18px
    .msg-item
      width 100px
      margin 0 20px
      .cont
        .svg
          position relative
          width 90px
          height 90px
          margin 0 auto
          background #00bfa5
          border-radius 50%
          box-shadow 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)
          i
            font-size 45px
            line-height 90px
            margin-left 22px
        .intro
          text-align center
          margin-top 20px
          color #00bfa5
          @media screen and (max-width 600px)
            margin 20px 0
            font-size 12px
            color #f0f2f1
  .msg-des
    text-align center
    line-height 24px
    padding-top 50px
    font-size 18px
    color #666
    p
      padding-top 18px
  @media screen and (max-width 1366px)
    .content
      top 160px
  @media screen and (max-width 600px)
    .content
      top 80px
    .title
      top 30px
      color #fff
    .msg-des
      padding-top 15px
      line-height 16px
      font-size 14px
</style>
