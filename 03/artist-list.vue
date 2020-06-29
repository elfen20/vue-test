<template>
  <ul>    
    <box-artist
      v-for="artist in artistlist"
      :key="artist"
      :artist="artist"
    />    
  </ul>
</template>

<script>
let nextId = 1

module.exports = {
    props:{
      artistlist: {
        type: Array
      }
    },
    components: {
      'box-artist': 'url:box-artist.vue',
    }
}
</script>

<style>
.hello {
    background-color: #fee;
}
</style>

