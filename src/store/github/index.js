import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const state = {
    user: null,
};

export { actions, mutations, getters };

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};