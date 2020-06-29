<template>
    <div>
        <p>Main</p>
        <component v-bind:is="currentPageComponent"></component>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
        }
    },
    components: {
        page1: "url:components/page1.vue",
        page2: "url:components/page2.vue"
    },
    props:{
        bodypage : {
            type: String,
            default: "page1",
        }
    },
    computed: {
        currentPageComponent: function() {
            return this.bodypage;
        }
    }
}
</script>

<style>
</style>