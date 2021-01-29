<template>
    <v-app id="app">
        <router-view />
    </v-app>
</template>

<script>
import { GithubService } from './services';

import { SET_USER_ACTION } from './store/github/actions';

export default {
    name: 'App',

    beforeMount() {
        this.getUser();
    },

    methods: {
        async getUser() {
            const user = await GithubService.getUser();
            this.$store.dispatch(`github/${SET_USER_ACTION}`, user);
        },
    },
};
</script>

<style lang="scss">
@import'~bootstrap/dist/css/bootstrap.css';
@import './assets/css/styles.css';
</style>
