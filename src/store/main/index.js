import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const state = {
    loading: false,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};