<template>
  <div class="list">
    <cons-item title="本周日期" :content="data.date" />
    <Summary type="工作" :content="data.work" />
    <Summary type="学业" :content="data.job" />
    <Summary type="恋爱" :content="data.love" />
    <Summary type="财运" :content="data.money" />
  </div>
</template>

<script>
export default {
  name: "WeekList",
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