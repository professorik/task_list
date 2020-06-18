import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      todos: [],
      displayStatus: 'all'
    },
    getters: {
        getTodos: state => {
            return state.todos;
        },
        getTodosWithStatus: state => {
          if (state.displayStatus === 'active'){
      			return state.todos.filter(todo => {
      				return todo.isActive
      			});
          }else if (state.displayStatus === 'completed') {
            return state.todos.filter(todo => {
      				return !todo.isActive
      			});
          }
          return state.todos;
    		},
        isAnyDone: state => {
          for (var i = 0; i < state.todos.length; i++) {
            if (!state.todos[i].isActive) return true;
          }
          return false;
        }
    },
    mutations: {
      addTask (state, task) {
          state.todos.push({
  					id: state.todos.length + 1,
  					text: task.taskText,
            isActive: true
  				});
      },
      removeTodo (state, idToRemove) {
  			state.todos = state.todos.filter(todo => {
  				return todo.id !== idToRemove
  			})
        for (var i = idToRemove - 1; i < state.todos.length; i++) {
          state.todos[i].id--;
        }
        console.log(state.todos);
  		},
      changeTodoStatus (state, idToChange) {
        --idToChange;
        state.todos[idToChange].isActive = !state.todos[idToChange].isActive
        console.log(state.todos);
      },
      changeDisplayStatus (state, newDisplayStatus){
        state.displayStatus = newDisplayStatus;
      },
      clearCompleted (state){
        state.todos = state.todos.filter(todo => {
          return todo.isActive
        });
        for (var i = 0; i < state.todos.length; i++) {
          state.todos[i].id = i + 1;
        }
      }
    }
})
