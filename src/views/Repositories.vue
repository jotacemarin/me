<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <h2 class="mb-5">Repositories</h2>
            <div
                v-for="repo in repos"
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
                :key="repo.id"
                :id="formatId(repo.full_name)"
            >
                <div class="flex-grow-1">
                    <a :href="repo.html_url" target="_blank">
                        <h3 class="mb-0">{{ repo.name }}</h3>
                    </a>
                    <div class="subheading mb-3 d-flex align-items-center">
                        <span v-if="repo.language">{{ repo.language }}</span>
                        <a
                            class="copy-ssh social-icon"
                            @click="clone(repo)"
                        >
                            <i class="far fa-clipboard" />
                        </a>

                        <v-tooltip
                            v-model="repo.copied"
                            right
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <span
                                    v-bind="attrs"
                                    v-on="on"
                                />
                            </template>

                            <span>Copied!</span>
                        </v-tooltip>
                    </div>
                    <div>{{ repo.description }}</div>
                    <p>{{ formatDate(repo.pushed_at) }}</p>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-primary">
                        {{ formatDate(repo.created_at) }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { MomentUtils } from '../utils';
import { GithubService } from '../services';

export default {
    name: 'Repositories',

    data: () => ({
        repos: [],
    }),

    beforeMount() {
        this.getRepos();
    },

    methods: {
        async getRepos() {
            const repos = await GithubService.getRepos();
            this.repos = repos.map(e => ({ ...e, copied: false }));
        },
        formatDate(date) {
            return MomentUtils.display(date);
        },
        formatId(name) {
            return name.replace('/', '-').replace('.', '-');
        },
        clone(repo) {
            const { ssh_url } = repo;
            this.$clipboard(`git clone ${ssh_url}`);
            repo.copied = true;
            setTimeout(() => repo.copied = false, 2000);
        },
    },
};
</script>

<style lang="scss" scoped>
.copy-ssh.social-icon {
    font-size: 1rem;
    margin-left: 0.5rem;
    &:first-child { margin-left: 0; }
}
</style>