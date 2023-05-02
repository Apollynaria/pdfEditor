import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";

const routes = [
    {
        path:"/saveFile",
        name:"App",
        alias:"/fsdsdfsdfdsf",
        component: App,
        meta:{
            title:"Сохранить файл"
        }
    }
]


const router = createRouter({
    history: createWebHistory(), // указываем, что будет создаваться история посещений веб-страниц
    routes, // подключаем маршрутизацию
});

export default router;