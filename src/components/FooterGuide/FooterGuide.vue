<template>
  <div class="foot_guide">
    <div href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon004-tiaoxingmachaxun"></i>
      </span>
      <span>外卖</span>
    </div>
    <div href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon004-tiaoxingmachaxun"></i>
      </span>
      <span>搜索</span>
    </div>
    <div href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon004-tiaoxingmachaxun"></i>
      </span>
      <span>订单</span>
    </div>
    <div href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon004-tiaoxingmachaxun"></i>
      </span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .foot_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #FFFFFF
    width 100%
    height 3.125rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.3125rem
      color #999999
      &.on
        color #02A774
      span
        font-size 0.75rem
        margin-top 0.125rem
        margin-bottom 0.125rem
      .iconfont
        font-size 1.375rem
</style>
