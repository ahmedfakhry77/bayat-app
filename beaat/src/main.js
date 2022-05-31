import Vue from 'vue';


// router
import router from './router.js';


// plugins
import './plugins/axios';
import './plugins/font-awesome';
import './plugins/vue-scroll-to';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// instantiation
Vue.config.productionTip = false;
import App from './App.vue';


new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
