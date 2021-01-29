import Vue from 'vue';
import VueRouter from 'vue-router';

import ProfileLayout from '../layouts/ProfileLayout';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'profile',
        component: ProfileLayout,
        children: [
            {
                path: '',
                redirect: 'about',
            },
            {
                path: '/about',
                name: 'profile-about',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            },
            {
                path: '/skills',
                name: 'profile-skills',
                component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue'),
            },
            {
                path: '/experience',
                name: 'profile-experience',
                component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue'),
            },
            {
                path: '/repositories',
                name: 'profile-repositories',
                component: () => import(/* webpackChunkName: "repositories" */ '../views/Repositories.vue'),
            },
            {
                path: '/followers',
                name: 'profile-followers',
                component: () => import(/* webpackChunkName: "followers" */ '../views/Followers.vue'),
            },
            {
                path: '/awards',
                name: 'profile-awards',
                component: () => import(/* webpackChunkName: "awards" */ '../views/Awards.vue'),
            },
        ]
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
];

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...routes,
    ],
});

export default router;
