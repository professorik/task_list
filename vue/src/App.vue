<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<TaskList/>
	</div>
</template>

<script>
import TaskList from './elements/TaskList.vue'

export default {
	components: {
		TaskList
	}
}
</script>
