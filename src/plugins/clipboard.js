import Vue from 'vue';
import Clipboard from 'v-clipboard';

export const clipboard = {
    init() {
        Vue.use(Clipboard);
    },
};

export default clipboard;