import { createApp } from "vue";
import MyVueApp from "./App.vue";
 
import router from "./router/index"

createApp(MyVueApp)
.use(router)
.mount("#app");
