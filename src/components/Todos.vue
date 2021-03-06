<template>
  <div>
    <div id="page-todo">
      <div class="all-main">
        <Dashboard>
          <div class="td-main h-screen space-mb-sides">
            <div class="mt-5">
              <div class="flex items-center">
                <div class="td-txt">
                  <h1 class="text-black text-3xl font-semibold">Todos</h1>
                </div>
                <button
                  class="add-icon focus:outline-none bg-main-normal text-white rounded-full h-8 w-8 flex items-center justify-center ml-3"
                  @click="colorPicker = true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="color-picker mt-3 animate-reveal animate-ping"
                v-if="colorPicker"
              >
                <div class="colors flex items-center">
                  <div
                    class="color cursor-pointer w-4 h-4 rounded-full flex justify-center items-center bg-yellow"
                    ref="bg-yellow"
                    @click="addTodo('bg-yellow')"
                  ></div>
                  <div
                    class="color cursor-pointer ml-2 w-4 h-4 rounded-full flex justify-center items-center bg-tomato"
                    ref="bg-blue"
                    @click="addTodo('bg-tomato')"
                  ></div>
                  <div
                    class="color cursor-pointer ml-2 w-4 h-4 rounded-full flex justify-center items-center bg-khaki"
                    ref="bg-khaki"
                    @click="addTodo('bg-khaki')"
                  ></div>
                  <div
                    class="color cursor-pointer ml-2 w-4 h-4 rounded-full flex justify-center items-center bg-plum"
                    ref="bg-plum"
                    @click="addTodo('bg-plum')"
                  ></div>
                  <div
                    class="color cursor-pointer ml-2 w-4 h-4 rounded-full flex justify-center items-center bg-salmon"
                    ref="bg-salmon"
                    @click="addTodo('bg-salmon')"
                  ></div>
                </div>
              </div>
            </div>
            <div class="todos gp">
              <div class="todos">
                <div class="todo">
                  <Todo />
                </div>
              </div>
            </div>
          </div>
        </Dashboard>
      </div>
    </div>
  </div>
</template>
<script>
import { createTodo } from "../config/functions";
import Dashboard from "./Dashboard";
import Todo from "./Todo";
export default {
  name: "Todos",
  components: {
    Dashboard,
    Todo,
  },
  data: function () {
    return {
      projectPath: this.$route.fullPath.split("/")[4],
      pickedColor: "",
      colorPicker: false,
      timestamp: Date.now(),
    };
  },
  mounted() {},
  methods: {
    addTodo(color) {
        const todo = {
            id: '',
            title: "This is a Sample todo.",
            cardColor: color,
            timestamp: this.timestamp,
            completed: false
        }
      createTodo(this.projectPath, todo)
      .then(doc => {
          doc.update({
              id: doc.id
          })
          .then(() => {
              this.colorPicker = false
          })
      });
    },
  },
  created() {
    const pickColor = document.querySelectorAll(".color");
    setTimeout(() => {
      console.log(pickColor);
      pickColor.forEach((color) => {
        console.log(color);
      });
    }, 1001);
  },
};
</script>