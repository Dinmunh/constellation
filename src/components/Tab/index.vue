<template>
  <div class="tab">
    <!--遍历tab数据，生成对应的tabIcon-->
    <div class="tab-item"
         v-for="(item, index) in tabData"
         :key="index"
    >
      <tab-icon
        :icon-text="item.iconText"
        :path="item.path"
      >
        {{ item.tabText }}
      </tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from "./TabIcon";

import tabData from "@/datas/tab";

import { reactive, toRefs } from "vue";

export default {
  name: "index",
  components: {
    TabIcon
  },
  setup() {
    // 把tab.js里的数据转为响应式的数据
    const state = reactive({ tabData });

    return {
      // 展开state里的tabData
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}
</style>