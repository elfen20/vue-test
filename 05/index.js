// index.js
Vue.use(httpVueLoader);
Vue.use(VueRouter);

AppComponents = {
    navigation: httpVueLoader('components/navigation.vue'),
    page1: httpVueLoader('components/page1.vue'),
    page2: httpVueLoader('components/page2.vue'),
};

var app = new Vue({
    el: '#vue-app',
    template: '<div><navigation/><router-view/></div>',
    components: AppComponents,
    router: new VueRouter({
        routes: [
            { path: '/', component: AppComponents.page1 },
            { path: '/page1', component: AppComponents.page1 },
            { path: '/page2', component: AppComponents.page2 },
        ]
    })
});
