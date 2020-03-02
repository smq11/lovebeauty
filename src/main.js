import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/css/common.css'
import '../src/assets/iconfont/iconfont.css'
import api from './api'
import Tabs from './components/tabs'
import Video from "video.js";
import "video.js/dist/video-js.css";

Vue.config.productionTip = false
Vue.use(Tabs);
Vue.prototype.$api=api
Vue.prototype.$video = Video

if (localStorage.getItem('username')){
  store.commit('setToken',true)
}else {
  store.commit('setToken','')

}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
