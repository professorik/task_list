<template>
  <input type="text" v-model='mval' class="input" @input="$emit('update:value', $event.target.value)" @keydown.enter="enterPress">
</template>

<script>
export default {
  data() {
    return {
      mval:''
    }
  },
  watch: {
    value(val) {
        this.mval = val
    }
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    enterPress: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
