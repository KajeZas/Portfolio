<template>
  <div id="app">
    <nav>
      <NavBar></NavBar>
    </nav>
    <content class="d-flex justify-content-center">
        <div class="w-75">
          <router-view />
        </div>
    </content>
</div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: inherit;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
