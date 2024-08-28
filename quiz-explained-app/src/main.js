import { createApp } from 'vue'

import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import './style.css'
import App from './App.vue'
import { router } from './router'



createApp(App).use(router).mount('#app')
