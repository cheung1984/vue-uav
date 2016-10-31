import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome-loader'



import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
    this.$store.state.isLoading = true
    next((response) => {
        this.$store.state.isLoading = false
        return response
    });
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
