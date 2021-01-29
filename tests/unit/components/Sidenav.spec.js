import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import { routes } from '../../../src/plugins/router';

import Sidenav from '../../../src/components/Sidenav';
import github from '../../../src/store/github';

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const store = new Vuex.Store({
    modules: { github },
});

describe('Sidenav component', () => {
    it('render Sidenav component', () => {
        const wrapper = shallowMount(Sidenav, {
            localVue,
            store,
            vuetify: new Vuetify(),
        });

        expect(wrapper.isVisible()).toBeTruthy();
    });
});

describe('Sidenav navigation', () => {
    const router = new VueRouter({ routes });

    it('go to home ', () => {
        const wrapper = shallowMount(Sidenav, {
            localVue,
            store,
            vuetify: new Vuetify(),
            router,
        });

        wrapper.find('.navbar-brand.js-scroll-trigger').trigger('click');

        expect(wrapper.vm.$route.path).toBe('/');
    });
    
    it('go to other locations', () => {
        const wrapper = shallowMount(Sidenav, {
            localVue,
            store,
            vuetify: new Vuetify(),
            router,
        });
    
        wrapper.findAll('.nav-item').at(0).trigger('click');
    
        expect(wrapper.vm.$route.path).toBe('/about');
    });
});