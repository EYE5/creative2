import Vue from "vue";
import VueRouter from "vue-router";
import Feed from "@/views/feed.vue";
import Favorite from "@/views/favorite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "feed",
    component: Feed,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
