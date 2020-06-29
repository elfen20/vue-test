Vue.use(httpVueLoader);

var vm = new Vue({
    el: '#vue-app',
    components: {
        'artist-list': 'url:artist-list.vue',
    },
    data: {
        title: 'Test 03',
        data: {},
        alist: ["A", "B", "C"],
        message: 'Loading...',
    },
    methods: {
        press: function() {
            console.log("Press");
           this.alist = this.data.artists;
        }
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
