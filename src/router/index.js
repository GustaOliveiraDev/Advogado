import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/homeViews'
const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Contato",
    name: "Contato",
    component: () =>
      import( "../views/contatoViews.vue"),
  },

  {
    path: "/Sobrenos",
    name: "SobreNós",
    component: () =>
      import( "../views/SobreViews.vue"),
  },

  {
    path: "/Atuacao",
    name: "Atuacao",
    component: () =>
      import( "../views/atuacaoViews.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;