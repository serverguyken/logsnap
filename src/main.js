import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/build.css';
import './assets/css/custom.css';
import router from './router/routes';
import store from './store/';
import axios from 'axios';
import { useField } from  'vee-validate'
import { auth } from './config/functions'


const app = createApp(App);

auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user)
})

const isUser = auth.onAuthStateChanged(user => {
    return user
});

app.config.globalProperties.$http = axios;
app.config.globalProperties.$user = isUser;
app.use(router);
app.use(store);
app.use(useField);
app.mount('#app');

