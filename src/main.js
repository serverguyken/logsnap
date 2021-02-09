import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/build.css';
import './assets/css/custom.css';
import router from './router/routes';



createApp(App).use(router).mount('#app')

