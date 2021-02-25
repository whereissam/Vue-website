import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

createApp(App).use(router).mount('#app')


// "products":[
    //     {"id": 1,
    //      "name": "red chair",
    //      "$": 50,
    //      "detail" : "Lorem",
    //      "color" : ["red", "orange"]
    //     },
    //     {"id": 2,
    //         "name": "odir chair",
    //         "$": 59,
    //         "detail" : "Lorem",
    //         "color" : ["red", "orange"]
    //     }
    // ],