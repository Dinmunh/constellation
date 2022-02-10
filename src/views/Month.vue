<template xmlns:month-list="http://www.w3.org/1999/html">
  <div>
    <!--month里的all指数是字符串类型，所以这里转为数字后是NaN，就不会显示-->
    <card
      :name="monthData.name"
      :all-index="Number(monthData.all)"
    />
    <month-list :data="monthData" />
  </div>
</template>

<script>
import { computed } from "vue";

import useGetData from "../hooks/useGetData";

import MonthList from "../components/List/MonthList";

export default {
  name: "Month",
  components: {
    MonthList
  },
  setup() {
    const { state } = useGetData();

    return {
      // 取出store里的‘本月’运势类型的数据
      monthData: computed(() => state.month)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>