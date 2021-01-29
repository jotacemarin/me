import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Repositories from '../../../src/views/Repositories';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('Repositories component', () => {
    const wrapper = shallowMount(Repositories, {
        localVue,
        vuetify: new Vuetify(),
    });

    it('render Repositories component', () => {
        expect(wrapper.isVisible()).toBeTruthy();
    });
});