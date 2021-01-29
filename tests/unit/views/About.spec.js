import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import About from '../../../src/views/About';
import github from '../../../src/store/github';

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    modules: { github },
});

describe('About component', () => {
    const wrapper = shallowMount(About, {
        localVue,
        store,
        vuetify: new Vuetify(),
    });

    it('render About component', () => {
        expect(wrapper.isVisible()).toBeTruthy();
    });

    it('list links in About', () => {
        expect(wrapper.findAll('.social-icon').length).toBeGreaterThan(0);
    });
});