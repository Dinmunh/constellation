<template>
  <div id="app">
    <my-header>星座运势</my-header>
    <nav-bar />
    <error-tip />
    <div class="scroll">
      <!--如果错误码不为0，则显示组件-->
      <router-view v-slot="{ Component }" v-if="!errorCode">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
    <tab />
  </div>
</template>

<script>
import MyHeader from "./components/Header";
import NavBar from "./components/NavBar";
import Tab from "./components/Tab";
import ErrorTip from "./components/ErrorTip";

import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "APP",
  components: {
    MyHeader,
    NavBar,
    ErrorTip,
    Tab
  },
  setup() {
    const store = useStore();
    const state = store.state;
    const router = useRouter();

    // 刚进入页面或刷新页面时，重置到'今天'的页面
    router.push("/");
    store.commit("setType", "today");

    // watch的两个参数分别是侦听的数据source，和数据变化时的回调函数cb
    watch(() => {
      // 这里侦听的是响应式对象的属性，所以数据源可以使用函数形式
      // 侦听当前路由名字的变化
      return router.currentRoute.value.name;
    }, (value) => {
      // 路由变化时，就修改state的运势类型
      store.commit("setType", value);
    });

    return {
      errorCode: computed(() => state.errorCode)
    };
  }
};
</script>

<style lang="scss">
.scroll::-webkit-scrollbar {
  display: none;
}

.scroll {
  position: relative;
  height: calc(100vh - 0.44rem);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
