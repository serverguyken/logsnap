<template >
  <div>
    <div class="p-head fixed top-0 w-full bg-white border-b p-2">
      <div class="ml-3">
        <img
          src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
          alt="logsnap-logo"
        />
      </div>
    </div>
    <div class="tisdlsd pt-20">
      <div
        class="ssweowe ml-3 p-2 flex items-center justify-between space-mb-sides"
      >
        <h1 class="text-black font-medium text-xl">Projects</h1>
        <div class="create-p-bnt">
          <button
            class="bg-main-normal text-white text-sm px-2 py-2 rounded hover:opacity-90 outline-none focus:outline-none"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
    <div class="skdsd ml-0 mt-3 p-2 space-mb-sides">
      <div class="grid grid-cols-5 border-b border-gray-200 p-2">
        <div class="sd col-start-1">
          <p class="text-sm text-gray-500">Name</p>
        </div>
        <div class="sd-date col-start-2">
          <p class="text-sm text-gray-500">Date</p>
        </div>
        <div class="sd-lead col-end-5">
          <p class="text-sm text-gray-500">Lead</p>
        </div>
      </div>
    </div>
    <div class="skdsd ml-0 -mt-4 p-2 space-mb-sides cursor-pointer">
      <div
        class="grid grid-cols-5 border-b border-gray-200 hover:bg-gray-200 p-2 cursor-pointer"
      >
        <div class="sd col-start-1 overflow-hidden overflow-ellipsis w-44">
          <router-link to="/"
            class="text-sm capitalize  text-main-dark cursor-pointer hover:underline"
          >
            Ecommerce
          </router-link>
        </div>
        <div class="sd col-start-2 sd-date">
          <p class="text-sm text-gray-600">Feb 21</p>
        </div>
        <div class="sd col-end-5 flex items-center justify-between">
          <div class="grid grid-cols-9 items-center ml-3 sd-date">
              <div class="bg-yellow-500 text-white rd-cn-sm">
            <span class="text-sm" ref="leadName"> SK </span>
          </div>
          <p class="text-sm text-main-dark ml-3">Serverguyken</p>
          </div>
        </div>
        <div class="sd col-end-7 hover:bg-gray-300 rounded flex text-center" @click="alert()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
  methods: {
      alert() {
          alert("clicked")
      }
  }
};
</script>     
