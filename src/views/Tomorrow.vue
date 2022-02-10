<template>
  <div>
    <card
      :name="tomorrowData.name"
      :all-index="tomorrowData.all"
    />
    <tomorrow-list :data="tomorrowData" />
  </div>
</template>

<script>
import { computed } from "vue";

import useGetData from "../hooks/useGetData";

import TomorrowList from "../components/List/TomorrowList";

export default {
  name: "Tomorrow",
  components: {
    TomorrowList
  },
  setup() {
    const { state } = useGetData();

    return {
      // 取出store里的‘明天’运势类型的数据
      tomorrowData: computed(() => state.tomorrow)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>