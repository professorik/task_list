<template>
	<div>
		<InputField
			v-model="newTodoText"
			placeholder="New todo"
			@keydown.enter="addTodo"
		/>
		<ul v-if="todos.length">
			<Item
				v-for="todo in todos"
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
			newTodoText: '',
      todos: []
    }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
</script>
