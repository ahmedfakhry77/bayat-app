import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faWhatsapp,
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(faWhatsapp);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

