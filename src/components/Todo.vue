<template>
  <div class="todo-data pb-10 grid grid-cols-3">
    <div
      :class="[
        todo.cardColor,
        'mt-4 mr-2 todo-card   w-60  p-3 rounded-lg shadow-sm animate-pulse animate-reveal  animate__animated animate__bounceInDown',
      ]"
      v-for="todo in getTodos"
      :key="todo.id"
    >
      <div class="">
        <div class="to-text-con flex">
          <div
            aria-describedby="placeholder-todo-add"
            class="todo-Editor todoText p-1 text-sm text-black font-medium w-10/12 h-24 max-h-sm focus:outline-none border-none resize-none overflow-scroll inline-block"
            contenteditable="true"
            role="textbox"
            ref="todoTitle"
            spellcheck="true"
            style="
              outline: none;
              user-select: text;
              white-space: pre-wrap;
              overflow-wrap: break-word;
            "
            @blur="updateTodoTitle(todo.id, $event)"
            @keyup="updateTodoTitle(todo.id, $event)"
          >
            {{ todo.title }}
          </div>
          <div class="completed ml-4" v-if="todo.completed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="rounded-full w-6 h-6 flex items-center justify-center bg-black text-yellow"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-black text-white text-xs py-1 px-1 w-32 max-w-sm mt-6 rounded-sm focus:outline-none hover:opacity-90"
            @click="completeTodo(todo.id)"
            v-if="!todo.completed"
          >
            Mark as completed
          </button>
          <button
            class="edit-con ml-auto mt-6 bg-main-normal rounded-full h-8 w-8 flex items-center justify-center focus:outline-none hover:opacity-80"
            @click="deleteTodo(todo.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTodos, updateTodo, deleteTodo } from "../config/functions";
import { mapGetters } from "vuex";
export default {
  name: "Todo",
  data() {
    return {
      projectPath: this.$route.fullPath.split("/")[4],
      isEditable: false,
      todos: [],
      completed: false,
    };
  },
  methods: {
    completeTodo(id) {
      updateTodo(this.projectPath, id, {
        completed: true,
      });
    },
    updateTodoTitle(id, event) {
      updateTodo(this.projectPath, id, {
        title: event.target.innerText,
      });
    },
    deleteTodo(id) {
      deleteTodo(this.projectPath,id)
    }
  },
  mounted() {
    console.log(this.$refs);
  },
  created() {
    getTodos(this.projectPath);
  },
  computed: mapGetters(["getTodos"]),
};
</script>