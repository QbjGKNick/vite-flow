<template>
  <div>
    <input type="text" v-model="todo" />

    <button @click="addTodo">添加内容</button>

    <TodoList :todos="todos" />
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue"
import TodoList from "./todo-list"
const todo = ref("")
const todos = ref<string[]>([])

const addTodo = () => {
  if (!todo.value) return
  todos.value.push(todo.value)
}
</script>

<style scoped></style>
