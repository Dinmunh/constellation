<template>
  <!--
    使用自定义指令v-nav-current来实现导航栏切换
    给v-nav-current传入配置参数：
      className：未激活状态的类名
      activeClass：激活状态的类名
      curIdx：当前点击的NavItem索引值

    这里还需要一个自定义事件，来获取子组件NavItem中的index
  -->
  <div
    class="nav-bar"
    v-nav-current="{
    className: 'nav-item',
    activeClass: 'nav-current',
    curIdx
    }"
    @click="navClick($event)"
  >
    <div class="scroll-wrapper">
      <!--设置导航栏内容的宽度-->
      <div class="nav-wrapper" :style="`width: ${navData.length * 0.8}rem`">
        <nav-item
          v-for="(item, index) in navData"
          :key="index"
          :item="item"
          :index="index"
        >
        </nav-item>
      </div>
    </div>
  </div>
</template>

<script>
import navData from "@/datas/nav";
import NavItem from "./Item";

import { ref } from "vue";
import { useStore } from "vuex";

// 导入自定义指令
import { navCurrent } from "@/directives";
import getData from '@/services'

export default {
  name: "NavBar",
  components: {
    NavItem
  },
  // 注册自定义指令
  directives: {
    navCurrent
  },
  setup() {
    // 初始化一个curIdx
    const curIdx = ref(0);
    // 获取store对象
    const store = useStore();

    const navClick = (e) => {
      // 获取被点击的NavItem元素
      const tar = e.target;
      // 获取该元素里的索引值
      const idx = tar.dataset.index;
      // 获取该元素的文本内容，即星座名
      const consName = tar.innerText;
      // 把该元素的索引值赋值给curIdx
      curIdx.value = idx;
      // 修改store里的consName
      store.commit("setConsName", consName);
      // 获取点击后的数据
      getData(store);
    };

    return {
      navData,
      curIdx,
      navClick
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-x
}

.nav-bar {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;

  .scroll-wrapper {
    height: 0.46rem;
    overflow-x: scroll;
    overflow-y: hidden;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>