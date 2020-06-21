<template>
  <li>
    <button @click="$emit('changeStatus', todo.id)">
      O
    </button>
    <template v-if="todo.isActive">{{ todo.text }}</template>
    <del v-else>{{ todo.text }}</del>
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
