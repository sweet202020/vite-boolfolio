import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/js/src/dropdown'
import { router } from './router'

createApp(App).use(router).mount('#app')
