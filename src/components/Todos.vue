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
import Dashboard from "./Dashboard";
import Todo from "./Todo";
export default {
  name: "Todos",
  components: {
    Dashboard,
    Todo,
  },
};
</script>