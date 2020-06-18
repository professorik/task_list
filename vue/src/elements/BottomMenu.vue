<template>
  <div>
    <button @click="changeDisplayStatus('all')">
      All
    </button>
    <button  @click="changeDisplayStatus('active')">
      Active
    </button>
    <button  @click="changeDisplayStatus('completed')">
      Completed
    </button>
    <button v-if="isAnyDone" @click="clearCompleted">
      Clear completed
    </button>
    <p>
      {{getTaskListLength}} items left
    </p>
  </div>
</template>

<script>
export default {
    computed:{
      getTaskListLength(){
          return this.$store.state.todos.length;
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
