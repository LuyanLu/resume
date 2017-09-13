<template>
  <section class="main-works">
    <div class="title animated fadeIn" v-show="showMe">{{ msg.title }}</div>
    <div class="content">
      <ul class="work-list">
        <li class="work-item" v-for="(item, index) in msg.worksList" :key="index">
          <a class="img" :href="item.url" :style="{background: 'url(' + item.img + ') no-repeat center center/cover'}">
            <h4>{{ item.title }}</h4>
          </a>
          <a class="mask" :href="item.url">
            <p>{{ item.des }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'works',
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
  .content
    top 100px
    color #00bfa5
    .work-list
      overflow hidden
      display flex
      flex-direction column
      align-content space-between
      flex-wrap wrap
      width 800px
      max-height 550px
      margin 0 auto
      padding 20px
      color #000
      @media screen and (max-width: 600px)
        /*overflow-y auto*/
        max-height none
        padding 20px 0 20px
      .work-item
        position relative
        width 240px
        height 230px
        border-radius 10px
        transition transform .3s
        @media screen and (max-width: 600px)
          display flex
          justify-content space-between
          width 100vw
          height 160px
          margin-top 20px
        &:nth-child(3)
          width 260px
          height 480px
          @media screen and (max-width: 600px)
            width 100vw
            height 320px
        &:nth-child(2), &:nth-child(5)
          margin-top 20px
        &:hover
          transform scale(1.03)
          @media screen and (max-width: 600px)
            transform scale(1)
          .mask
            opacity 1
        .img
          position relative
          display block
          width 100%
          height 100%
          outline none
          border 3px solid #00bfa5
          border-radius inherit
          box-sizing border-box
          box-shadow 0 2px 6px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 4px 2px -2px rgba(0,0,0,.12)
          @media screen and (max-width: 600px)
            flex 0 0 160px
            margin 0 20px 20px
          h4
            position absolute
            bottom 0
            width 100%
            font-size 20px
            line-height 35px
            text-align center
            color #fff
            background rgba(#00bfa5, .8)
        .mask
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          padding 12px
          box-sizing border-box
          background rgba(0, 0, 0, .7)
          border-radius inherit
          outline none
          cursor pointer
          opacity 0
          transition opacity .3s
          overflow-y hidden
          @media screen and (max-width: 600px)
            position relative
            flex 1
            margin-right 20px
            opacity 1
            background #f0f2f1
            border 3px solid #f0f2f1
          p
            font-size 18px
            line-height 24px
            color #999
            @media screen and (max-width: 600px)
              color #444
  @media screen and (max-width: 600px)
    .title
      color #fff
    .page-section
      height 1200px
</style>
