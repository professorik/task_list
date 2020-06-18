<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<p>{{ count }}</p>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
		<TaskList/>
	</div>
</template>

<script>
import TaskList from './elements/TaskList.vue'
import store from './store/store.js'

export default {
	components: {
		TaskList
	},
	computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
}
</script>
