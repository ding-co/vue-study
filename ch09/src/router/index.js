import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "calculator" */ '../views/CalculatorView.vue')
  },
  {
    path: '/compositionapi',
    name: 'compositionapi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "compositionapi" */ '../views/CompositionApi.vue'
      )
  },
  {
    path: '/compositionapi2',
    name: 'compositionapi2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "compositionapi" */ '../views/CompositionApi2.vue'
      )
  },
  {
    path: '/compositionapi3',
    name: 'compositionapi3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "compositionapi" */ '../views/CompositionApi3.vue'
      )
  },
  {
    path: '/compositionapi4',
    name: 'compositionapi4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "compositionapi" */ '../views/CompositionApi4.vue'
      )
  },
  {
    path: '/compositionapi5',
    name: 'compositionapi5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "compositionapi" */ '../views/CompositionApi5.vue'
      )
  },
  {
    path: '/mixins',
    name: 'mixins',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mixins" */ '../views/MixinsView.vue')
  },
  {
    path: '/customdirectives',
    name: 'customdirectives',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "customdirectives" */ '../views/CustomDirectives.vue'
      )
  },
  {
    path: '/plugins',
    name: 'plugins',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "plugins" */ '../views/PluginsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
