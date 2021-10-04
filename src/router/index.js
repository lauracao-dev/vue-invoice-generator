import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../pages/Home.vue'
import InvoiceGenerator from '../components/InvoiceGenerator'
import MainLayout from '../layouts/MainLayout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: MainLayout,
  //   children: [{ path: '', component: Home }]
  // },
  {
    path: '/document/:id?',
    component: InvoiceGenerator,
    // children: [{ path: '', component: InvoiceGenerator }]
  },
  {
    path: '/document-view/:id',
    name: 'document-view',
    component: InvoiceGenerator,
    // children: [{ path: '', component: InvoiceGenerator, name: 'document-view', }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
