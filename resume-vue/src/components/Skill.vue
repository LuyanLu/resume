<template>
  <section class="main-skill">
    <div class="title animated slideInUp" v-show="showMe">{{ msg.title }}</div>
    <div class="content">
      <div class="contain">
        <div class="skill-grid animated fadeIn duration" v-show="showMe">
          <div class="grid-cell" :class="'-' + item" v-for="(item, index) in msg.skillList" :key="index">{{ item }}</div>
        </div>
        <div class="des">
          <p class="animated fadeIn" v-show="showMe" v-for="(item, index) in msg.desList">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'skill',
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
    color #f0f2f1
  .content
    top 150px
  .contain
    display flex
    justify-content space-between
    flex-wrap wrap
    align-items center
    max-width 1200px
    margin 0 auto
    @supports (display grid)
      .skill-grid
        flex 1 1 500px
        display grid
        height 300px
        padding 0 20px
        grid-template-columns repeat(8, 1fr)
        grid-template-rows repeat(10, 1fr)
        grid-gap 7px
        .grid-cell
          color #fff
          text-align center
          overflow hidden
          text-shadow 1px 1px 1px rgba(0,0,0,.2)
          background #f0f2f1
          border-radius 3px
          box-shadow 0 2px 6px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 4px 2px -2px rgba(0,0,0,.12)
        .-Javascript
          grid-column-start 3
          grid-column-end 6
          grid-row-start 5
          grid-row-end 8
          font-size 30px
          line-height 70px
          background #ff777a
        .-Vue
          grid-column-start 6
          grid-column-end 8
          grid-row-start 6
          grid-row-end 9
          font-size 30px
          line-height 70px
          background #f3df65
        .-CSS
          grid-column-start 4
          grid-column-end 7
          grid-row-start 3
          grid-row-end 5
          font-size 24px
          line-height 50px
          background #12d992
        .-jQuery
          grid-column-start 2
          grid-column-end 3
          grid-row-start 4
          grid-row-end 7
          font-size 14px
          line-height 75px
          background #54d9a3
        .-HTML5
          grid-column-start 5
          grid-column-end 6
          grid-row-start 8
          grid-row-end 11
          font-size 14px
          line-height 75px
          background #54d9a3
        .-Less
          grid-column-start 6
          grid-column-end 9
          grid-row-start 5
          grid-row-end 6
          font-size 16px
          line-height 22px
          background #54d9a3
        .-Webpack
          grid-column-start 7
          grid-column-end 9
          grid-row-start 4
          grid-row-end 5
          font-size 16px
          line-height 20px
          background #6cd9b6
        .-Stylus
          grid-column-start 7
          grid-column-end 8
          grid-row-start 3
          grid-row-end 4
          font-size 16px
          line-height 20px
          background #afeecf
        .-Bootstrap
          grid-column-start 6
          grid-column-end 7
          grid-row-start 2
          grid-row-end 3
          font-size 16px
          line-height 20px
          background #afeecf
        .-Nodejs
          grid-column-start 3
          grid-column-end 5
          grid-row-start 8
          grid-row-end 9
          font-size 16px
          line-height 20px
          background #6cd9b6
        .-Python
          grid-column-start 1
          grid-column-end 2
          grid-row-start 6
          grid-row-end 7
          font-size 16px
          line-height 20px
          background #afeecf
        .-Vuex
          grid-column-start 8
          grid-column-end 9
          grid-row-start 6
          grid-row-end 8
          font-size 16px
          line-height 50px
          background #6cd9b6
        .-React
          grid-column-start 6
          grid-column-end 8
          grid-row-start 9
          grid-row-end 10
          font-size 16px
          line-height 20px
          background #6cd9b6
    @supports not (display grid)
      .skill-grid
        flex 1
        padding-top 4vh
        padding-left 12vw
        .grid-cell
          display inline-block
          margin 5px
          padding 5px 8px 6px
          font-size 20px
          line-height 20px
          color #fff
          text-align center
          background #007c6b
          border-radius 3px
        .-Javascript
          background #ff777a
        .-Vue
          background #ffd04d
        .-CSS
          background #12d992
        .-jQuery
          background #54d9a3
        .-HTML5
          background #54d9a3
        .-Less
          background #54d9a3
        .-Webpack
          background #6cd9b6
        .-Stylus
          background #afeecf
        .-Bootstrap
          background #afeecf
        .-Nodejs
          background #6cd9b6
        .-Python
          background #afeecf
        .-Vuex
          background #6cd9b6
        .-React
          background #6cd9b6
    .des
      flex 1 1 280px
      margin 20px
      text-align center
      color #f0f2f1
      line-height 18px
      font-size 16px
      p
        padding-top 14px
  @media screen and (max-width 600px)
    .content
      top 100px
</style>
