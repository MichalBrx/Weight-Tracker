<script>
import Home from "./subpages/Main.vue";
import Login from "./subpages/Register.vue";

const routes = {
  "/": Home,
  "/login": Login,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <div>
    <component :is="currentView" />
  </div>
</template>
