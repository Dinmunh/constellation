<template>
  <div class="list">
    <cons-item title="今天日期" :content="data.datetime" />
    <cons-item title="配对星座" :content="data.QFriend" />
    <cons-item title="幸运颜色" :content="data.color" />
    <cons-item title="幸运数字" :content="data.number" />
    <Summary type="今日" :content="data.summary" />
  </div>
</template>

<script>
export default {
  name: "TodayList",
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: .15rem .1rem;
  box-sizing: border-box;
  height: 1rem;
}
</style>