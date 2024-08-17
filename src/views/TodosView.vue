<script>
import TodoListItem from '../components/TodoListItem.vue'
export default {
	name: 'TodosPanel',
	components: {
		TodoListItem,
	},
	data() {
		return {
			newTodo: '',
			idForTodo: 3,
			filter: 'all',
			isAllChecked: false,
			todos: [
				{ id: 1, title: 'Item 1', completed: false },
				{ id: 2, title: 'Item 2', completed: true },
			]
		}
	},
	methods: {
		addTodo() {
			if (this.newTodo == '') {
				return
			} else {
			}

			const todo = {
				id: this.idForTodo,
				title: this.newTodo,
				completed: false
			}

			this.todos.push(todo)

			this.newTodo = ''
			this.idForTodo++
		},
		deleteTodo(id) {
			this.todos = this.todos.filter(t => t.id !== id)
		},
		filteredTodos() {
			if (this.filter === 'active') {
				return this.todos.filter(t => !t.completed)
			}
			if (this.filter === 'completed') {
				return this.todos.filter(t => t.completed)
			}
			return this.todos
		},
		deleteCompletedTodos() {
			this.todos = this.todos.filter(t => !t.completed)
		},
		getCountOfActiveItems() {
			return this.todos.filter(t => t.completed == false).length
		},
		handelCheckAll(e) {
			const isChecked = e.target.checked
			this.todos.forEach(t => {
				t.completed = isChecked
			})
		},
	}
}
</script>

<template>
	<div class="todos-panel">

		<div class="panel-menu">
			<input type="text" placeholder="Add a new task here :)" v-model="newTodo" @keyup.enter="addTodo()">
			<button @click="addTodo()">Add</button>
		</div>
		<div class="panel-list">
			<ul>
				<TodoListItem v-for="todo in filteredTodos()" :title.sync="todo.title" :id="todo.id"
					:completed.sync="todo.completed" @deleteTodo="deleteTodo" />
			</ul>
		</div>
		<div class="panel-control checks">
			<div class="control-item list-control">
				<input type="checkbox" name="check-all" id="check-all" :checked="!getCountOfActiveItems()"
					@click="handelCheckAll">
				<p for="check-all">Check All</p>
			</div>
			<div class="control-item list-control">
				<p>{{ getCountOfActiveItems() }} items left</p>
			</div>
		</div>
		<div class="panel-control">
			<div class="control-item list-control">
				<button :class="{ active: filter === 'all' }" @click="() => { filter = 'all' }">All</button>
				<button :class="{ active: filter === 'active' }" @click="() => { filter = 'active' }">Active</button>
				<button :class="{ active: filter === 'completed' }"
					@click="() => { filter = 'completed' }">Completed</button>
			</div>
			<div class="control-item">
				<button v-if="!getCountOfActiveItems()" @click="deleteCompletedTodos">Clear Completed</button>
			</div>
		</div>

	</div>
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

button:hover {
	background-color: rgb(211, 211, 211);
}

input {
	border: 0;
	border-radius: .2rem;
}

input:focus {
	outline-style: none;
}

/* Body */

.todos-panel {
	display: flex;
	flex-direction: column;
	gap: .5rem;

	width: 28rem;
}

.panel-menu {
	display: flex;
	height: 2rem;
	gap: .2rem;
}

.panel-menu input {
	width: 100%;
	padding: 0 10px;
	background-color: rgb(234, 234, 234);
}

.panel-list ul {
	list-style: none;
	padding: 0;
}

.panel-control {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
}

.panel-control.checks {
	padding: 5px 15px;
}

.panel-control .control-item {
	display: flex;
	gap: .2rem;
}

.list-control p {
	font-size: .8rem;
	color: rgb(127, 127, 127);
}

/* Body Elements */

.panel-control .list-control button.active {
	background-color: rgb(88, 221, 88);
}

.panel-control .list-control button:hover {
	background-color: rgb(81, 200, 81) !important;
}
</style>