import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

const pinia = createPinia();

createApp(App).use(pinia).use(MotionPlugin).mount('#app')
