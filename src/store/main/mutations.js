export const SET_LOADING_MUTATIONS = 'Mutations.setLoading';

export const mutations = {
    [SET_LOADING_MUTATIONS](state, loading) {
        state.loading = loading;
    },
};

export default mutations;