// 自定义一个插件，注册全局组件
import Card from "./Card";
import ConsItem from "./ConsItem";
import Summary from "./Summary";

let MyPlugin = {};

// 插件必须有install方法，使得Vue可以使用
MyPlugin.install = function(Vue) {
  // 注册全局组件，这样省去每个页面都要导入和注册组件
  Vue.component(Card.name, Card);
  Vue.component(ConsItem.name, ConsItem);
  Vue.component(Summary.name, Summary);
};

export default MyPlugin;