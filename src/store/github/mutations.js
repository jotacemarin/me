export const SET_USER_MUTATIONS = 'Mutations.setUser';

export const mutations = {
    [SET_USER_MUTATIONS](state, user) {
        state.user = user;
    },
};

export default mutations;