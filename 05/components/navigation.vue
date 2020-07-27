<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Test 05</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item"><router-link to="/page1" class="nav-link">Seite 1</router-link></li>
          <li class="nav-item"><router-link to="/page2" class="nav-link">Seite 2</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style>
</style>