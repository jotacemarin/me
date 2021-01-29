import { SET_USER_MUTATIONS } from './mutations';

export const SET_USER_ACTION = 'Action.setUser';

export const actions = {
    [SET_USER_ACTION](context, payload) {
        return context.commit(SET_USER_MUTATIONS, payload);
    },
};

export default actions;