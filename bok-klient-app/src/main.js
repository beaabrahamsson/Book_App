import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import './../node_modules/Bulma/CSS/bulma.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
