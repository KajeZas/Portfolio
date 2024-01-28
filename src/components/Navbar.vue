<template>
  <div class="d-flex justify-content-center">
    <b-navbar toggleable="lg" class=" w-75 border-bottom border-success">
      <b-navbar-nav class="m-auto">
        <b-nav-item class="text-danger">Kajus Simaska</b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <div>
          <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item>Work</b-nav-item>
          <b-nav-item>Contacts</b-nav-item>
          <b-nav-item>Brief Me</b-nav-item>
        </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

</script>

<style scoped></style>
