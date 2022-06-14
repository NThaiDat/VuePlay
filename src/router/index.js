import {createRouter, createWebHistory} from 'vue-router'
// import home from "@/views/Home";
import LatThe from "@/views/LatThe";
import RanSanMoi from "@/views/RanSanMoi";
import notFound from "@/views/NotFound";

const routes = [

    {
        path: "/",
        name: "Home",
    },
    {
        path: '/LatThe',
        name :"Lat The",
        component: LatThe
    },
    {
        path: '/Ran',
        name :"Ran",
        component: RanSanMoi
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: notFound,
    }



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
