//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//引入插件
import vueResourece from 'vue-resource';
//引入store
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false;
//使用插件
Vue.use(vueResourece);


//创建vm
new Vue({
    el: '#app',
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})