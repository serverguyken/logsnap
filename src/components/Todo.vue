<template>
  <div class="todo-data grid grid-cols-3">
    <div class="mt-4 mr-2 todo-card bg-red-400 w-60 p-3 rounded-lg shadow-sm" v-for="todo in todos" :key="todo.id">
      <div class="">
        <div class="to-text-con">
          <div
            aria-describedby="placeholder-todo-add"
            class="todo-Editor todoText bg-red-400 p-1 text-sm text-black font-medium w-full max-h-sm focus:outline-none border-none resize-none overflow-scroll"
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
            
          >{{todo.title}}</div>
        </div>
        <button
          class="edit-con focus:outline-none ml-auto mt-6 bg-main-normal rounded-full h-8 w-8 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4 text-white"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Todo",
  data() {
      return {
         isEditable: false,
          todos: [
            {title: "sss"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            {title: "ddd"},
            ]
      }
  },
  mounted() {
    console.log(this.$refs.todoTitle.innerHTML);
  }
};
</script>