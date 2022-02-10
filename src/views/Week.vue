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
import { computed } from "vue";

import useGetData from "../hooks/useGetData";

import WeekList from "../components/List/WeekList";

export default {
  name: "Week",
  components: {
    WeekList
  },
  setup() {
    const { state } = useGetData();

    return {
      // 取出store里的‘本周’运势类型的数据
      weekData: computed(() => state.week)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>