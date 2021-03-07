import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
// import P5 from 'p5'

createApp(App).use(router).mount('#app')
// createApp(P5).use(router).mount('#p5')