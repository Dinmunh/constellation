<template>
  <div class="num-list">
    <num-item
      v-for="(item, index) in numData"
      :key="index"
      :item="item"
      :data="data"
    />
  </div>
</template>

<script>
import numData from "@/datas/num";

import NumItem from "./Item";

export default {
  name: "index",
  components: {
    NumItem
  },
  props: {
    data: Object
  },
  setup() {
    return {
      numData
    };
  }
};
</script>

<style lang="scss" scoped>
.num-list {
  display: flex;
  flex-direction: row;
  margin: .15rem 0;
  padding: .1rem;
  box-shadow: .02rem .02rem .05rem #999999;
}
</style>