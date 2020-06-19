var app = new Vue({
    el: '#vue-app',
    components: {
        'my-component': httpVueLoader('my-component.vue')
    },
    data: {
        title: 'Test 02',
        message: 'Load the component:'
    }
});
