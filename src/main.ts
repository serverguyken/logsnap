import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/build.css';
import './assets/css/custom.css';
import router from './router/routes';
import store from './store/';
import axios from 'axios';
import { auth } from './config/functions'


const app = createApp(App);

auth.onAuthStateChanged((user: any) => {
    store.dispatch("fetchUser", user)
})

const isUser = auth.onAuthStateChanged((user: any)=> {
    return user
});

app.config.globalProperties.$http = axios;
app.config.globalProperties.$user = isUser;
app.use(router);
app.use(store);
app.mount('#app');

