<template>
    <div class="hello">Hello {{who}} {{message}}</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'world'
        }
    }
}
</script>

<style>
.hello {
    background-color: #fee;
}
</style>

