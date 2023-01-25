import { createRouter, createWebHistory } from 'vue-router'
import SkillsView from './views/SkillsView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactsView from './views/ContactsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import NotFoundView from './views/NotFoundView.vue'
import DashboardView from './views/DashboardView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/skills',
            name: 'skills',
            component: SkillsView
        },
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView
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
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },
    ]
});

export { router };