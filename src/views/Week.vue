<template>
  <div>
    <card
      :name="weekData.name"
      :all-index="weekData.all"
    />
    <week-list :data="weekData" />
  </div>
</template>

<script>
// 取出onMounted生命周期函数和useStore函数
import { computed, onActivated, onMounted, ref } from "vue";
import { useStore } from "vuex";

// 从service里取出
import getData from "../services";

import WeekList from "../components/List/WeekList";

export default {
  name: "Week",
  components: {
    WeekList
  },
  setup() {
    // useStore函数会返回store对象
    const store = useStore();
    const state = store.state;
    // 定义一个状态变量，保存当前是什么星座
    const status = ref("");

    // 在组件挂载的时候获取数据，存到store里
    onMounted(() => {
      // 将store传给getData函数
      getData(store);
      // 保存当前的星座
      status.value = state.consName;
    });

    // 在路由激活时，执行回调函数
    onActivated(() => {
      // 如果当前的状态变量的星座和store中的不一样
      if (status.value !== state.consName) {
        // 重新获取数据
        getData(store);
        // 修改状态变量为store中的星座
        status.value = state.consName;
      }
    });

    return {
      // 取出store里的‘今天’运势类型的数据
      weekData: computed(() => state.week)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>