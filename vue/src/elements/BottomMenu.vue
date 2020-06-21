<template>
  <div>
    <button
     v-for="status in ['All', 'Active', 'Completed']"
     :key="status"
     @click="changeDisplayStatus(status)">
     {{ status }}
   </button>
    <button v-if="isAnyDone" @click="clearCompleted">
      Clear completed
    </button>
    <p>
      {{getTaskListLength}} left
    </p>
  </div>
</template>

<script>
export default {
    computed:{
      getTaskListLength(){
          let todosLength = this.$store.getters.getCountOfTodosLeft;
          if (todosLength === 1){
            return todosLength + " item";
          }
          return todosLength + " items";
      },
      isAnyDone(){
          return this.$store.getters.isAnyDone;
      }
    },
    methods:{
        changeDisplayStatus(newDisplayStatus){
            this.$store.commit('changeDisplayStatus', newDisplayStatus)
        },
        clearCompleted(){
            this.$store.commit('clearCompleted')
        }
    }
};
</script>
