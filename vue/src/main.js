import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
