import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import AboutUs from "../components/AboutUs.vue";
import PostView from "../views/PostView.vue";
import PostDetail from "../components/PostDetail.vue";
import AddPost from "../components/AddPost.vue";
import UpdatePost from "../components/UpdatePost.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostView,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: PostDetail,
    },
    {
      path: "/add",
      name: "add",
      component: AddPost,
    },
    {
      path: "/update/:id",
      name: "update",
      component: UpdatePost
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
