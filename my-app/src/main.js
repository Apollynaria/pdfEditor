import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Маршрутизация
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);
app.use(router); // Подключение маршрутизации
app.mount('#app');
