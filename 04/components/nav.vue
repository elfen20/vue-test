<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Test 04</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="showPage('page1')">Seite 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="showPage('page2')">Seite 2</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
module.exports = {
    props:{
    },
    components: {
    },
    methods: {
      showPage: function(page) {
//        console.log("emit " + page);
        this.$emit("show-page", page);
      }
    }
}
</script>

<style>
</style>