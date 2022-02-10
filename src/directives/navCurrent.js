// 注册自定义指令
// 这个指令的作用是点击NavItem可以切换样式和数据
export default {
  /*  mounted函数在组件第一次渲染时生效的函数
      el：指令所在的那个组件，即该指令被哪个dom元素所使用
      binding：指令的一些参数，其中value属性包含组件传递给指令的参数
      vnode：虚拟节点
    */
  mounted(el, binding, vnode) {
    // 获取指令上的配置参数
    const { className, activeClass, curIdx } = binding.value;

    // 获取NavItem集合
    const oNavItem = el.getElementsByClassName(className);

    // 给索引值为curIdx的NavItem添加一个新类名，为激活状态的类名
    // 拼接前面要加空格，避免与旧类名连接在一起
    oNavItem[curIdx].className += ` ${activeClass}`;
  },

  // updated函数是在点击别的子组件时，生效的函数
  updated(el, binding, vnode) {
    const { className, activeClass, curIdx } = binding.value;

    // 获取旧的上一个NavItem的配置参数
    const oldOptios = binding.oldValue;

    const oNavItem = el.getElementsByClassName(className);

    // 将旧的NavItem的类名改为未激活状态的类名
    oNavItem[oldOptios.curIdx].className = ` ${className}`;

    // 将新点击的NavItem的类名添加上激活状态的类名
    oNavItem[curIdx].className += ` ${activeClass}`;
  }
};