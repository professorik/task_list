<template>
	<div>
		<InputField
			v-model="newTodoText"
			placeholder="New todo"
			@keydown.enter="addTodo"
		/>
		<template v-if="getTodos.length">
				<ul>
					<Item
						v-for="todo in getTodosList()"
						:key="todo.id"
						:todo="todo"
						@remove="removeTodo"
						@changeStatus="changeTodoStatus"
					/>
				</ul>
				<BottomMenu/>
		</template>
		<p v-else>
			Nothing left in the list.
		</p>
	</div>
</template>

<script>
import InputField from './InputField.vue'
import Item from './Item.vue'
import BottomMenu from './BottomMenu.vue'

export default {
	components: {
		InputField, Item, BottomMenu
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
		getTodosList (){
				return this.$store.getters.getTodosWithStatus;
		},
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.$store.commit('addTask', {taskText: trimmedText})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.$store.commit('removeTodo', idToRemove)
		},
		changeTodoStatus (idToChange) {
			this.$store.commit('changeTodoStatus', idToChange)
		}
	}
}
</script>
