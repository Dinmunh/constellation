// 导入获取数据的函数
import { getData } from "./request";

export default async (store) => {
  // 获取当前store里的星座名和运势类型
  const consName = store.state.consName;
  const type = store.state.type;

  // 通过getData函数从聚合数据api那获取数据
  const data = await getData(consName, type);

  if (data.error_code) {
    // 如果错误代码不为0，则表示有错误发生，把state里的错误代码设置为获取的值
    store.commit("setErrorCode", data.error_code);
  } else {
    // 如果错误代码为0，则表示数据正常，修改当前的运势类型的数据
    store.commit("setData", data);
  }
}