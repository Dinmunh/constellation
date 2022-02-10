<template>
  <!--如果错误码存在，则显示这个组件-->
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/error.png')" />
    <!--显示错误码对应的提示-->
    <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>
// 导入错误码数据
import errorData from "../../datas/error";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ErrorTip",
  setup() {
    const store = useStore();
    return {
      // 获取store中的错误码
      errorCode: computed(() => store.state.errorCode),
      errorData
    };
  }
};
</script>

<style lang='scss'>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;

  img {
    width: 1rem;
    vertical-align: bottom;
  }

  p {
    margin-top: .15rem;
    font-size: .14rem;
    color: #999999;
  }
}
</style>