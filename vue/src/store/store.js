import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      todos: []
    },
    getters: {
        getTodos: state => {
            return state.todos;
        },
    },
    mutations: {
      addTask (state, task) {
          state.todos.push({
  					id: task.taskId,
  					text: task.taskText
  				});
      },
      removeTodo (state, idToRemove) {
  			state.todos = state.todos.filter(todo => {
  				return todo.id !== idToRemove
  			})
  		}
    }
})
