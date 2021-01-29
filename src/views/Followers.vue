<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <h2 class="mb-5">Followers</h2>

            <div
                v-for="follower in followers"
                class="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5"
                :key="follower.id"
            >
                <div class="mr-5">
                    <img
                        class="img-profile rounded-circle mx-auto mb-2"
                        :src="follower.avatar_url"
                        alt="foto de perfil"
                    >
                </div>
                <div class="flex-grow-1">
                    <a :href="follower.html_url" target="_blank">
                        <h3 class="mb-0">{{ follower.login }}</h3>
                        <div class="subheading mb-3">
                            {{ formatUrl(follower.html_url) }}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { GithubService } from '../services';

export default {
    name: 'Followers',

    data: () => ({
        followers: [],
    }),

    beforeMount() {
        this.getFollowers();
    },

    methods: {
        async getFollowers() {
            this.followers = await GithubService.getFollowers();
        },
        formatUrl(name) {
            return name.replace('https://', '');
        },
    },
};
</script>

<style lang="scss" scoped>
.img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(76, 36, 154, 0.2);
}
</style>