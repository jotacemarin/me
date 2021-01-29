import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

export const apiService = {
    init() {
        Vue.use(VueAxios, axios);
    },

    get(resources, params = {}) {
        return Vue.axios.get(resources, params);
    },
};

export { GithubService } from './github.service';

export default apiService;