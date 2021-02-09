<template>
  <div>
      <div class="issues-data-hd bg-gray-300 text-gray-400 p-2 mt-3">
          <div class="flex items-center justify-between">
              <div class="flex items-center">
                  <div class="issue-name">
                  <h1>ID</h1>
              </div>
              <div class="issue-desc ml-10">
                  <h1>Description</h1>
              </div>
              </div>
               <div class="status-con ml-36">
                  <h1>Status</h1>
              </div>
               <div class="priority -mr-14">
                  <h1>Priority</h1>
              </div>
               <div class="aside-fl-flex flex">
                   <div class="created-at mr-5">
                  <h1>Created At</h1>
              </div>
               <div class="action">
                  <h1>Action</h1>
              </div>
               </div>
          </div>
      </div>
    <div
      class="issues-list mt-3 hover:bg-gray-100 cursor-pointer px-1 py-2 rounded"
      v-for="issue in issues" :key="issue.id"
    >
      <div class="flex justify-between items-center">
        <div class="issues-flex flex items-center">
          <div class="issue-id-con flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 class="text-gray-500 ml-1">{{issue.id}}</h1>
          </div>
          <div class="issue-short-desc ml-2">
            <h1 class="text-gray-800 font-medium ml-1">
              {{issue.description}}
            </h1>
          </div>
        </div>
        <div class="tag-con status-con ml-2">
          <Tag
            :status="issue.status"
            :color="issue.statusColor"
            :backgroundColor="issue.statusBackgroundColor"
            size="p-4"
          />
        </div>
        <div class="priority">

            <h1 :class="issue.priorityColor">{{issue.priority}}</h1>
        </div>
        <div class="aisde-fl flex items-center">
          <div class="created-at mr-5">
            <h1>{{issue.createdAt}}</h1>
          </div>
          <div class="action mr-2">
            <button @click="alert()" class="focus:outline-none outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 text-gray-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tag from "./Tag";
export default {
  name: "IssuesList",
  components: {
    Tag,
  },
  data() {
    return {
      issues: [
        {
          id: "IS#1",
          description: "Fix header on pricing page",
          createdAt: "01/31/2021",
          status: "IN PROGRESS",
          priority: "Low",
          statusColor: "text-status-inProgressDark",
          statusBackgroundColor: "bg-status-inProgressLight",
          priorityColor: "text-green-600", 
          priorityBackgroundColor: "bg-green-900"
        },
        {
          id: "IS#2",
          description: "Login button not working o..",
          createdAt: "02/08/2021",
          status: "DONE",
          priority: "HIGH",
          statusColor: "text-white",
          statusBackgroundColor: "bg-green-400",
          priorityColor: "text-red-600", 
          priorityBackgroundColor: "bg-green-900"
        },
      ],
    };
  },
  methods: {
    alert() {
      alert("clicked");
    },
  },
};
</script>