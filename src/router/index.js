import Vue from 'vue'
import VueRouter from 'vue-router'
import InvoiceGenerator from '../components/InvoiceGenerator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/document/:id?',
    component: InvoiceGenerator,
  },
  {
    path: '/document-view/:id',
    name: 'document-view',
    component: InvoiceGenerator,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
