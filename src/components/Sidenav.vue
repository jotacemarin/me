<template>
    <aside class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" :href="home">
            <span class="d-block d-lg-none">
                {{ name }}
            </span>
            <span class="d-none d-lg-block">
                <img
                    class="img-fluid img-profile rounded-circle mx-auto mb-2"
                    :src="avatar"
                    :alt="alt"
                />
            </span>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li v-for="page in pages" :key="page.title" class="nav-item">
                    <router-link class="nav-link js-scroll-trigger" :to="page.path">
                        {{ page.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template> 

<script>
import { mapGetters } from 'vuex';
import { routes } from '../plugins/router';

const profile = 0;

export default {
    name: 'Sidenav',

    data: () => ({
        home: routes[profile].path,
        pages : [
            ...routes[profile].children
                .filter(({ name }) => !!name && !name.includes('awards'))
                .map(({ name, path }) => ({ title: name.replace('profile-', ''), path })),
        ],
    }),

    computed: {
        ...mapGetters('github', ['avatar', 'name']),
        alt: function() {
            return `Foto de perfil de ${this.name}`;
        },
    },
};
</script>

<style lang="scss">
.v-navigation-drawer__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.v-list-item__content {
    text-align: center;
}
.v-list-item__title {
    text-transform: uppercase;
    font-size: 36px;
}
.me-aside {
    width: 100%;
}
</style>