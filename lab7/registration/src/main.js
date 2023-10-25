import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App)
    .use(store)
    .mount('#app')
