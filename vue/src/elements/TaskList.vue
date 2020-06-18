<template>
	<div>
		<InputField
			v-model="newTodoText"
			placeholder="New todo"
			@keydown.enter="addTodo"
		/>
		<ul v-if="getTodos.length">
			<Item
				v-for="todo in getTodos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
			/>
		</ul>
		<p v-else>
			Nothing left in the list.
		</p>
	</div>
</template>

<script>
import InputField from './InputField.vue'
import Item from './Item.vue'

let nextTodoId = 1

export default {
	components: {
		InputField, Item
	},
  data () {
    return {
			newTodoText: ''
    }
  },
	computed: {
      getTodos() {
      		return this.$store.getters.getTodos;
      }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.$store.commit('addTask', {
					taskId: nextTodoId++,
					taskText: trimmedText})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.$store.commit('removeTodo', idToRemove)
		}
	}
}
</script>
