import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/build.css';
import './assets/css/custom.css';
import router from './router/routes';
import store from './store/';
import axios from 'axios';
import { useField } from  'vee-validate'

const app = createApp(App);
app.config.globalProperties.$http = axios;

app.use(router);
app.use(store);
app.use(useField)
app.mount('#app');

