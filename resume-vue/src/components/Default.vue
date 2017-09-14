<template>
  <section class="main-default" ref="default">
    <div class="content">
      <a class="photo" v-show="showMe"
         :href="msg.url" :style="{background: 'url(' + msg.avatar + ') no-repeat center center/cover'}"></a>
      <div class="des">
        <p class="quote animated zoomIn" v-show="showMe"><span style="color: #edde55">while</span>(<span style="color: #007c6b">!</span>(<span style="color: #f5606f">succeed</span> = <span style="color: #7648af">try</span>()));</p>
        <div class="des-list animated zoomIn" v-show="showMe">
          <p v-for="(item, index) in msg.desList" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'default',
    props: {
      msg: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        showMe: true
      }
    },
    methods: {
      enterAnimate () {
        return
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    top 120px
    .photo
      display block
      width 150px
      height 150px
      outline none
      border-radius 50%
      margin 0 auto
      animation zoomIn 1.5s ease-in-out
      transition transform .5s ease
      &:hover
        transform translateY(-5px) scale(1.1)
    .des
      text-align center
      max-width 90%
      margin 0 auto
      color #fff
      .quote
        position relative
        font-size 30px
        padding 20px 0
        color: #aaa
        text-shadow 1px 1px 5px #555
        &:after
          content ""
          position absolute
          left 10%
          right 10%
          bottom -10px
          height 2px
          border-radius 1.5px
          background-color rgba(255, 255, 255, .6)
      .des-list
        padding-top 20px
        line-height 20px
        font-size 18px
        p
          margin 24px 0
          &:first-child
            font-size 30px
          &:last-child
            color #555
  @keyframes zoomIn
    0%
      transform scale(0)
    70%
      transform scale(1.1)
    100%
      transform scale(1)
</style>
