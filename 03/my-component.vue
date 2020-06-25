<template>
          <ul>
            <li v-for="item in artists" :key="item.value">
              {{ item }}
            </li>
          </ul>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'world',
            artists: vm.data.artists,
        }
    }
}
</script>

<style>
.hello {
    background-color: #fee;
}
</style>

