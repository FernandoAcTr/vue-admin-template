import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import { Routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.Dashboard,
      component: Dashboard,
    },
    {
      path: '/maps',
      name: 'Maps',
      children: [
        {
          path: 'map',
          name: Routes.Map,
          component: () => import('../views/Map.vue'),
        },
        {
          path: 'map-marker',
          name: Routes.MapMarker,
          component: () => import('../views/MapMarker.vue'),
        },
        {
          path: 'street-view',
          name: Routes.StreetView,
          component: () => import('../views/StreetView.vue'),
        },
      ],
    },
    {
      path: '/tables',
      name: Routes.Tables,
      component: () => import('../views/Tables/Tables.vue'),
    },
    {
      path: '/charts',
      name: Routes.Charts,
      component: () => import('../views/Charts/Charts.vue'),
    },
    {
      path: '/cards',
      name: Routes.Cards,
      component: () => import('../views/Cards/Cards.vue'),
    },
    {
      path: '/contact',
      name: Routes.Contact,
      component: () => import('../views/Contact/Contact.vue'),
    },
    {
      path: '/calendar',
      name: Routes.Calendar,
      component: () => import('../views/Calendar.vue'),
    },
    {
      path: '/taskboard',
      name: Routes.Taskboard,
      component: () => import('../views/Taskboard.vue'),
    },
    {
      path: '/pagination',
      name: Routes.Pagination,
      component: () => import('../views/Pagination/Pagination.vue'),
    },
    {
      path: '/products',
      name: Routes.Products,
      component: () => import('../views/Products.vue'),
    },
  ],
})

export default router
