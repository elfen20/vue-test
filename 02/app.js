Vue.use(httpVueLoader);

new Vue({
    el: '#vue-app',
    components: {
        'my-component': 'url:my-component.vue',
    },
    data: {
        title: 'Test 02',
        message: 'Load the component:',
    }
});
