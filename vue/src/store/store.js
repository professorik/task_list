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
        getCountOfTodosLeft: state => {
          let count = 0;
          state.todos.forEach((i) => {
            if (i.isActive) ++count;
          });
          return count;
        },
        getTodosWithStatus: state => {
          if (['active', 'completed'].includes(state.displayStatus)) {
              return state.todos.filter(todo => {
               return todo.isActive === (state.displayStatus !== 'completed')
             });
          }
           return state.todos;
        },
        isAnyDone: state => {
           return state.todos.filter(t => !t.isActive).length
        }
    },
    mutations: {
      initialiseStore(state) {
			// Check if the ID exists
  			if(localStorage.getItem('store')) {
  				// Replace the state object with the stored item
  				this.replaceState(
  					Object.assign(state, JSON.parse(localStorage.getItem('store')))
  				);
  			}
  		},
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
        state.displayStatus = newDisplayStatus.toLowerCase();
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
