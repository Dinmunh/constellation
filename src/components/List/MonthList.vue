<template>
  <div class="list">
    <Summary type="健康" :content="data.health" />
    <Summary type="工作" :content="data.work" />
    <Summary type="爱情" :content="data.love" />
    <Summary type="财运" :content="data.money" />
    <Summary type="本月" :content="data.all" />
  </div>
</template>

<script>
export default {
  name: "MonthList",
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: .15rem .1rem;
  box-sizing: border-box;
}
</style>