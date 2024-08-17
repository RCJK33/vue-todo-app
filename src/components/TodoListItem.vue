<script>
export default {
	name: 'TodoListItem',
	props: [
		'id',
		'title',
		'completed',
	],
	data() {
		return {
			editing: false
		}
	},
	methods: {
		handleCompleted(e) {
			this.$emit('update:completed', e.target.checked)

		},
		handleTitle(e) {
			this.$emit('update:title', e.target.value)
		},
		deleteTodo () {
			this.$emit('deleteTodo', this.id)
		},
		handleEditing() {
			this.editing = true
			this.$nextTick(() => {
				this.$refs.editInput.focus()
			})
		}
	}
}
</script>

<template>
	<li>
		<input type="checkbox" :checked="completed" @input="handleCompleted" />
		<input class="text" v-if="editing" ref="editInput" type="text" :value="title" @input="handleTitle"
			@keyup.enter="editing = false" @blur="editing = false"/>
		<div class="text" v-else :class="{ checked: completed }" @dblclick="handleEditing()">{{ title }}</div>
		<button @click="deleteTodo">X</button>
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

input {
	border: 0;
	background-color: transparent;
	font-size: 1rem;
	font-family: inherit;
	color: inherit;
	width: fit-content;
}

input:focus {
	outline-style: none;
}

/* Body */

li {
	display: flex;
	gap: 1rem;
	border-radius: 3px;
	height: 2rem;
	padding: 5px 15px;
	transition: background-color .1s ease-in-out;
}

li:hover {
	background-color: rgb(242, 242, 242);
}

.text {
	font-size: 1rem;
	font-family: inherit;
	color: inherit;
	flex: 1;
}

.checked {
	text-decoration: line-through;
}
</style>