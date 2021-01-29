import Vue from 'vue';
import App from './App.vue';
import { vuetify, router, clipboard } from './plugins';
import { store } from './store';
import { apiService } from './services';

Vue.config.productionTip = false;
apiService.init();
clipboard.init();

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
