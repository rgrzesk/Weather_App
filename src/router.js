import { createRouter, createWebHistory } from 'vue-router';


import NotFound from './pages/NotFound.vue';
import MainPage from './pages/MainPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [  
        {path: '' , redirect: '/mainpage' },
        {path:'/mainpage', component:MainPage},
        {path:'/:notFound(.*)', component: NotFound}
        
    ],
});

export default router;