import { createRouter, createWebHistory } from 'vue-router';


import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import AppHome from './pages/AppHome.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});

export { router };