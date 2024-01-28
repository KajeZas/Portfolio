<template>
  <div class="d-flex justify-content-center">
    <b-navbar toggleable="lg" class="border-bottom border-success">
      <b-navbar-nav class="m-auto">
        <b-nav-item class="text-danger">Kajus Simaska</b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item @click="changeSection('work')">Work</b-nav-item>
          <b-nav-item @click="changeSection('contacts')">Contacts</b-nav-item>
          <b-nav-item @click="changeSection('brief')">Brief Me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    changeSection(section) {
      console.log(`Pasirinkta sekcija: ${section}`);
    },
  },
};
</script>

<style scoped></style>
