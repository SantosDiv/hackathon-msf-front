import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import AgendaShowView from "@/views/Agendas/AgendaShowView.vue";
import AgendaEdit from "@/views/Agendas/AgendaEdit.vue";
import Tables from "@/views/Tables.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import FontsNews from "@/views/FontsNews.vue";
import NewStakeholder from "@/views/Stakeholders/NewStakeholder.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/agenda/:id",
    name: "Detalhes",
    component: AgendaShowView,
  },
  {
    path: "/agenda-edit/:id",
    name: "Edição de tema",
    component: AgendaEdit,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/stakeholder/new",
    name: "Criar ator",
    component: NewStakeholder,
  },
  {
    path: "/fonts",
    name: "Fontes de notícias",
    component: FontsNews,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
