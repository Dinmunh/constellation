<template>
  <!--设置跳转路由的标签-->
  <router-link
    :to="path"
    class="tab-icon"
  >
    <!--tab的圆形图标-->
    <i class="icon">{{ iconText }}</i>
    <!--圆形图标下的文字-->
    <p class="text">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: "TabIcon",
  props: {
    iconText: String,
    path: String
  }
};
</script>

<style lang="scss" scoped>
.tab-icon {
  display: inline-block;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: .25rem;
    height: .25rem;
    border-radius: 50%;
    background-color: #ddd;
    color: #999;
    font-size: .12rem;
    transition: all .5s;
  }

  .text {
    font-size: .12rem;
    text-align: center;
    margin-top: .02rem;
    color: #999;
    transition: color .5s;
  }

  // 路由激活时，底下tab显示的样式
  &.router-link-active {
    .icon {
      background-color: #DB7093;
      color: #fff;
    }

    .text {
      color: #DB7093;
    }
  }
}
</style>