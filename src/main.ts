import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index";

// 引入 unocss
import "virtual:uno.css";
// 引入重制样式
import "@/style/reset.scss";

const app = createApp(App);

app.use(router);
app.mount("#app");
