import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue');
const ProjectsView = () => import('@/views/ProjectsView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const ProjectView = () => import('@/views/ProjectView.vue');


const router = createRouter({
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectView,
      props: true
    }
  ]
})

export default router
