import { createRouter, createWebHistory } from vue - router
import HomeView from './views/HomeView'
import ProjectView from '.views/ProjectView'
import ContactsView from '.views/ContactView'
import SingleProjectView from '.views/SingleProjectView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },

        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProjectView
        },
    ]
});

export { router };