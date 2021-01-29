export const getters = {
    githubUser(state) {
        return state.user;
    },
    avatar(state) {
        return state.user ? state.user.avatar_url : false;
    },
    name(state) {
        return state.user ? state.user.name : false;
    },
    location(state) {
        return state.user ? state.user.location : false;
    },
    email(state) {
        return state.user ? state.user.email : false;
    },
    bio(state) {
        return state.user ? state.user.bio : false;
    },
    htmlUrl(state) {
        return state.user ? state.user.html_url : false;
    },
};

export default getters;