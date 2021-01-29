import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

import ProfileLayout from '../../../src/layouts/ProfileLayout';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('ProfileLayout component', () => {
    it('render ProfileLayout component', () => {
        const wrapper = shallowMount(ProfileLayout, {
            localVue,
            vuetify: new Vuetify(),
        });

        expect(wrapper.isVisible()).toBeTruthy();
    });
});