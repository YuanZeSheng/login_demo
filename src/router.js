import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const homeContainer = () => import( /* webpackChunkName: "homeContainer" */ './components/home/homeContainer.vue')
const loginContainer = () => import( /* webpackChunkName: "loginContainer" */ './components/login/loginContainer.vue')

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "homeContainer",
      component: homeContainer
    },
    {
      path: "/login",
      name: "loginContainer",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: loginContainer
    }
  ]
});
