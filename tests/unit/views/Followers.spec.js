import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Followers from '../../../src/views/Followers';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('Followers component', () => {
    const wrapper = shallowMount(Followers, {
        localVue,
        vuetify: new Vuetify(),
    });

    it('render Followers component', () => {
        expect(wrapper.isVisible()).toBeTruthy();
    });
});