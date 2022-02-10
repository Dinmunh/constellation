<template>
  <div>
    <card
      :name="yearData.name"
      :all-index="yearData.all"
    />
    <year-list :data="yearData" />
  </div>
</template>

<script>
import { computed } from "vue";

import useGetData from "../hooks/useGetData";

import YearList from "../components/List/YearList";

export default {
  name: "Year",
  components: {
    YearList
  },
  setup() {
    const { state } = useGetData();

    return {
      // 取出store里的‘本年’运势类型的数据
      yearData: computed(() => state.year)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>