export default {
  path: "/",
  name: "Home",
  redirect: "/welcome",
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue")
    }
  ]
};
