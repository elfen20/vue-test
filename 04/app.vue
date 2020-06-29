<template>
  <div>
    <navigation @show-page="showPage"></navigation>
    <mainbody v-bind:bodypage="currentPage"></mainbody>
  </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
          currentPage: "page1",
        }
    },
    components: {
      navigation: "url:components/nav.vue",
      mainbody: "url:components/main.vue",
    },
    methods: {
      showPage: function(page) {
        // console.log("goto page " + page);
        this.currentPage = page;
      }
    }
}
</script>

<style>
</style>

