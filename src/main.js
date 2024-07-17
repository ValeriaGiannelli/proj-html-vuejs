import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

//Import di bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


createApp(App).use(router).mount('#app')
