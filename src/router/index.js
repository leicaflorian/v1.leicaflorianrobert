import {createRouter, createWebHistory} from 'vue-router'
import About from "../views/About"
import Contacts from "../views/Contacts"
import Portfolio from "../views/Portfolio"


const routes = [
  {
    path: '/about',
    name: 'About',
    meta: {index: 1},
    component: About,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: {index: 2},
    component: Portfolio
  },
  {
    path: '/contacts',
    name: 'Contatti',
    meta: {index: 3},
    component: Contacts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.path === "/") {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }

    // always scroll 10px above the element #main
    return {
      // could also be
      // el: document.getElementById('main'),
      el: '#pagesContainer',
      behavior: 'smooth',
    }
  },
})

export {router}
