import { createRouter, createWebHistory } from "vue-router";

import Today from "../views/Today";


const routes = [
  {
    path: "/",
    name: "today",
    component: Today
  },
  {
    path: "/tomorrow",
    name: "tomorrow",
    // 组件懒加载，点击的时候再加载对应的组件
    component: () => import("../views/Tomorrow")
  },
  {
    path: "/week",
    name: "week",
    component: () => import("../views/Week")
  },
  {
    path: "/month",
    name: "month",
    component: () => import("../views/Month")
  },
  {
    path: "/year",
    name: "year",
    component: () => import("../views/Year")
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
