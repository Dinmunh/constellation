import axios from "axios";

// 导入聚合的key值
import { JUHE_APPKEY } from "../configs/keys";

// 封装一个http请求
function axiosGet(options) {
  // 在请求里带上聚合的key值作为参数
  axios(options.url + "&key=" + JUHE_APPKEY)
    // axios返回的是promise
    .then((res) => {
      // 使用options里自定义的成功回调
      options.success(res.data);
    })
    .catch((err) => {
      // 使用options里自定义的失败回调
      options.error(err);
    });
}

// 导出封装的请求
export { axiosGet };