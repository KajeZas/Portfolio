import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../components/About.vue"),
  },
  {
    path: "/navbar",
    name: "navbar",
    component: () => import("../components/Navbar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
