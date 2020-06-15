import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Original",
    component: () => import("../views/Original.vue")
  },
  {
    path: "/vueHook",
    name: "VueHook",
    component: () => import("../views/VueHook.vue")
  },
  {
    path: "/functional",
    name: "Functional",
    component: () => import("../views/Functional.vue")
  },
  {
    path: "/functionalComponent",
    name: "FunctionalComponent",
    component: () => import("../views/FunctionalComponent.vue")
  },
  {
    path: "/storeComponent",
    name: "StoreComponent",
    component: () => import("../views/StoreComponent.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
