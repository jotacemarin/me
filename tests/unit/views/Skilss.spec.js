import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Skills from '../../../src/views/Skills';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('Skills component', () => {
    const wrapper = shallowMount(Skills, {
        localVue,
        vuetify: new Vuetify(),
    });

    it('render Skills component', () => {
        expect(wrapper.isVisible()).toBeTruthy();
    });

    it('list elements in Skills', () => {
        expect(wrapper.findAll('.list-inline-item').length).toBeGreaterThan(0);
        expect(wrapper.findAll('.fa-li').length).toBeGreaterThan(0);
    });
});