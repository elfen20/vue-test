<template>
    <div>
        <p class="box-artist"> {{ artist }} </p>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            artist: '- - -',
        }
    }
}
</script>

<style>
.box-artist {
    text-align: left;
}
</style>
