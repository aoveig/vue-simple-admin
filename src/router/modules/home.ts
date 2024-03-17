import AppLayout from "@/layout/index.vue";

export default {
  path: "/",
  name: "Home",
  component: AppLayout,
  redirect: "/welcome",
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue")
    }
  ]
};
