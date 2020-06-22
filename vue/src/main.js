import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import router from './router/router.js'

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
