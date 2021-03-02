import { createApp } from 'vue'
import VantUI from 'vant'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'

createApp(App).use(VantUI).use(router).mount('#app')
