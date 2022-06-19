
export default [
    {
        name: 'home',
        path: '/',
        component: () =>import('@/pages/home/index.vue')
    },
    {
        name: 'about',
        path: '/about',
        component: () =>import('@/pages/about/index.vue')
    }
]
