import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入css和js文件
import '@/assets/css/resets.css';
import '@/assets/css/border.css';
import '@/assets/js/common.js';

// 导入自定义插件
import MyPlugin from "./components/common";

// 插入使用插件的链式调用：use(MyPlugin)
createApp(App).use(store).use(router).use(MyPlugin).mount('#app')
