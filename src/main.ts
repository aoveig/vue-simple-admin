import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index";

// 引入重制样式
import "@/style/reset.scss";
// 引入全局样式
import "@/style/index.scss";
// 引入 tailwind
import "@/style/tailwind.css";

// 引入全局组件
import SimpleIcon from "@/components/SimpleIcon/index.vue";

const app = createApp(App);

app.component("SimpleIcon", SimpleIcon);

app.use(router);
app.mount("#app");
