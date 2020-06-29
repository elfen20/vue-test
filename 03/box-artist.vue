<template>
    <li>
        {{ artist }}
    </li>
</template>

<script>
module.exports = {
    data: function() {
        return {}
    },
    props: {
        artist: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>
.box-artist {
    text-align: left;
}
</style>
