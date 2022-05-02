import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

window.Kakao.init('3941106f430bf6761039e07b7715dbb1')
