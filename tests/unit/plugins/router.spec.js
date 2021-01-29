import { shallowMount, createLocalVue }from '@vue/test-utils';

import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

import App from '../../../src/App.vue';
import { routes } from '../../../src/plugins/router';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuetify);
localVue.use(Vuex);

describe('router', () => {
    const store = new Vuex.Store({
        modules: {}
    });

    const router = new VueRouter({ routes });

    const wrapper = shallowMount(App, {
        localVue,
        store,
        vuetify: new Vuetify(),
        router,
    });

    it('Go to Home', async () => {
        wrapper.vm.$router.push({ path: '' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/about');
    });

    it('Go to about', async () => {
        wrapper.vm.$router.push({ name: 'profile-about' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/about');
    });

    it('Go to skills', async () => {
        wrapper.vm.$router.push({ name: 'profile-skills' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/skills');
    });

    it('Go to experience', async () => {
        wrapper.vm.$router.push({ name: 'profile-experience' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/experience');
    });

    it('Go to repositories', async () => {
        wrapper.vm.$router.push({ name: 'profile-repositories' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/repositories');
    });

    it('Go to followers', async () => {
        wrapper.vm.$router.push({ name: 'profile-followers' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/followers');
    });

    it('Go to awards', async () => {
        wrapper.vm.$router.push({ name: 'profile-awards' });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).toBe('/awards');
    });
});