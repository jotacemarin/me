<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <div class="name-container">
                <h1 class="mb-0">
                    {{ firstPart }} 
                    <br />
                    <span class="text-primary">
                        {{ lastPart }}
                    </span>
                </h1>
            </div>
            <div class="subheading mb-5">
                {{ location }}
                <a v-if="email" :href="`mailto:${email}`">{{ email }}</a>
            </div>
            <p class="lead mb-5">
                {{ bio }}
            </p>
            <div class="social-icons">
                <a
                    v-for="soc in social"
                    :key="soc.href"
                    class="social-icon"
                    :href="soc.href"
                    target="_blank"
                >
                    <i :class="soc.icon" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'About',

    computed: {
        ...mapGetters('github', ['name', 'location', 'email', 'bio', 'htmlUrl']),
        firstPart: function () {
            const { array, half } = this.cut(this.name);
            return array.filter((_, i) => i < half).join(' ');
        },
        lastPart: function () {
            const { array, half } = this.cut(this.name);
            return array.filter((_, i) => i >= half).join(' ');
        },
        social: function () {
            return [
                { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/julio-c-marin-g' },
                { icon: 'fab fa-github', href: this.htmlUrl },
                { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=100042237137945' },
                { icon: 'fab fa-twitter', href: 'https://twitter.com/jotacemarin' },
                { icon: 'fab fa-youtube', href: 'https://www.youtube.com/channel/UCKg7nNMaFxcvQ2tU1XXdJKQ' },
                { icon: 'fab fa-twitch', href: 'https://www.twitch.tv/chulet4_pdf' },
            ];
        },
    },

    methods: {
        cut(name) {
            if (!name) return { array: [], half: 0 };
            const array = name.split(' ');
            const half = Math.floor(array.length / 2);
            return { array, half };
        },
    },
};
</script>

<style lang="scss" scoped>
.name-container {
    width: 100%;
    h1.mb-0 {
        width: 100%;
        overflow-x: hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.social-icon {
    margin-bottom: .5rem;
}
</style>