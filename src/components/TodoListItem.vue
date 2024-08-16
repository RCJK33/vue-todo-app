<script>
export default {
	name: 'TodoListItem',
	props: [
		'id',
		'title',
		'completed',
	]
}
</script>

<template>
	<li>
		<input type="checkbox" name="" :id="id" :checked="completed" @input="$emit('update:completed')" />
		<p>{{ title }}</p>
		<button @click="$emit('deleteTodo', id)">X</button>
	</li>
</template>

<style scoped>
/* Elements */
button {
	border: 0;
	padding: .2rem .8rem;
	border-radius: 3px;
	transition: background-color .2s ease-in-out;
	cursor: pointer;
}

li button {
	margin-left: auto;
	border-radius: 1rem;
	background-color: transparent;
}

li button:hover {
	margin-left: auto;
	border-radius: 1rem;
	background-color: white;
}
/* Body */

li {
	display: flex;
	gap: 1rem;
	border-radius: 3px;
	padding: 5px 15px;
	transition: background-color .1s ease-in-out;
}

li:hover {
	background-color: rgb(242, 242, 242);
}
</style>