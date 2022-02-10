<template>
<div class="list">
  <cons-item title="所在年份" :content="data.date" />
  <cons-item title="幸运石头" :content="data.luckeyStone" />
  <Summary type="健康" :content="data.health && data.health[0]" />
  <Summary type="事业" :content="data.career && data.career[0]" />
  <Summary type="爱情" :content="data.love && data.love[0]" />
  <Summary type="财运" :content="data.finance && data.finance[0]" />
  <Summary type="本年" :content="data.mima && `${data.mima.info}。${data.mima.text[0]}`" />
</div>
</template>

<script>
export default {
  name: "YearList",
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.list{
  padding: .15rem .1rem;
  box-sizing: border-box;
}
</style>