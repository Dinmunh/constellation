import { onActivated, onMounted, ref } from "vue";
import { useStore } from "vuex";

// 从service里取出getData函数
import getData from "../services";

export default function useGetData() {
  // useStore函数会返回store对象
  const store = useStore();
  const state = store.state;
  // 定义一个状态变量，保存当前是什么星座
  const status = ref("");

  // 在组件挂载的时候获取数据，存到store里
  onMounted(() => {
    // 将store传给getData函数
    getData(store);
    // 保存当前的星座
    status.value = state.consName;
  });

  // 在路由激活时，执行回调函数
  onActivated(() => {
    // 如果当前的状态变量的星座和store中的不一样
    if (status.value !== state.consName) {
      // 重新获取数据
      getData(store);
      // 修改状态变量为store中的星座
      status.value = state.consName;
    }
  });

  // 返回state供不同页面使用
  return {
    state
  };
}