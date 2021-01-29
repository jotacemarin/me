import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import { persist } from '../plugins';

import main from './main';
import github from './github';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [
        persist,
        createLogger(),
    ],
    modules: {
        main,
        github,
    },
});

export default store;