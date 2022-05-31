import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
Vue.axios.defaults.headers.common['Accept-Language'] = 'ar';