Vue.use(httpVueLoader);

var vm = new Vue({
    el: '#vue-app',
    components: {
        'box-artist': 'url:box-artist.vue',
        'my-component': 'url:my-component.vue',
    },
    data: {
        title: 'Test 03',
        data: {},
        message: 'Loading...',
    },
    created: function() {
        fetch('../assets/data/m.json')
        .then(function(response) {
            //console.log(response);
            return response.json();
        })
        .then(function(data) {
            //console.log(data);
            vm.data = data;
            vm.message = 'Loaded.';
        });
    },
});
