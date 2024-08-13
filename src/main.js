import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";

const pinia = createPinia();

createApp(App).use(pinia).use(MotionPlugin).mount("#app");
