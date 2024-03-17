import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router";

// 自动导入 modules 中的所有路由模块
const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts"],
  {
    eager: true
  }
);

const routes: RouteRecordRaw[] = [];

Object.values(modules).forEach(value => {
  routes.push(value.default);
});

const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
