import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Profile = () =>
    import ('../views/profile/Profile')

const Display = () =>
    import ('../views/display/Display')

//安装插件
Vue.use(VueRouter)


// 2创建route规则
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/display',
        component: Display
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router