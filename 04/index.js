Vue.use(httpVueLoader);
var app = new Vue({
    el: '#vue-app',
    template: "<app/>",
    components: {
        'app': 'url:app.vue',
    },
});
