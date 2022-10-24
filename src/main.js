import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-mineda-projetotopicos-6b573a2xcu3.ws-us72.gitpod.io/'

createApp(App).use(store).use(router).mount('#app')
