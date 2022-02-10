<template>
  <div>
    <card
      :name="todayData.name"
      :all-index="todayData.all"
    />
    <num-list :data="todayData" />
    <today-list :data="todayData" />
  </div>
</template>

<script>
import { computed } from "vue";

import useGetData from "../hooks/useGetData";

import NumList from "@/components/NumList";
import TodayList from "@/components/List/TodayList";

export default {
  name: "Today",
  components: {
    NumList,
    TodayList
  },
  setup() {
    // 调用useGetData获取store中的state
    const { state } = useGetData();

    return {
      // 取出store里的‘今天’运势类型的数据
      todayData: computed(() => state.today)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>