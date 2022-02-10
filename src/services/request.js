import { axiosGet } from "../libs/http";

// 定义获取数据的函数，需要星座名consName和运势类型type：today，tomorrow，week，month，year
function getData(consName, type) {
  // 把请求包裹在promise里返回，使得后面可以使用async/await操作
  return new Promise((resolve, reject) => {
    axiosGet({
      // 请求的url里拼接上两个参数
      url: `/api/constellation/getAll?consName=${consName}&type=${type}`,
      success(data) {
        // 成功的回调函数
        resolve(data);
      },
      error(err) {
        // 失败的回调函数
        reject(err);
      }
    });
  });
}

export { getData };