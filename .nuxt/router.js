import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9712dd4c = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _b20f1474 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _09074a16 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _42102fc0 = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _6b336824 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/privacy",
    component: _9712dd4c,
    name: "privacy"
  }, {
    path: "/search",
    component: _b20f1474,
    name: "search"
  }, {
    path: "/categories/:slug?",
    component: _09074a16,
    name: "categories-slug"
  }, {
    path: "/posts/:slug?",
    component: _42102fc0,
    name: "posts-slug"
  }, {
    path: "/",
    component: _6b336824,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
