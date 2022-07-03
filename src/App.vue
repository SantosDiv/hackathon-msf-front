<template>
  <sidenav
    :custom_class="mcolor"
    :class="[
      isTransparent,
      isRTL ? 'fixed-end' : 'fixed-start',
    ]"
    v-if="showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    :style="isRTL ? 'overflow-x: hidden' : ''"
  >
    <!-- nav -->
    <navbar
      :class="[navClasses]"
      :textWhite="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <!-- <app-footer v-show="showFooter" /> -->
    <configurator
      :toggle="toggleConfigurator"
      :class="[
        showConfig ? 'show' : '',
        hideConfigButton ? 'd-none' : '',
      ]"
    />
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  components: {
    Sidenav,
    Configurator,
    Navbar,
  },
  methods: {
    ...mapMutations("TemplateStore", ["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    ...mapState('TemplateStore', ["mcolor", "isTransparent", "isRTL", "showSidenav", "showNavbar", "showFooter", "showConfig", "hideConfigButton", "isAbsolute"]),
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": this.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.isAbsolute,
        "px-0 mx-4 mt-4": !this.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.isTransparent = "bg-transparent";
  },
};
</script>
