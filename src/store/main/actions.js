import { SET_LOADING_MUTATIONS } from './mutations';

export const SET_LOADING_ACTION = 'Action.setLoading';

export const actions = {
    [SET_LOADING_ACTION](context, payload) {
        return context.commit(SET_LOADING_MUTATIONS, payload);
    },
};

export default actions;