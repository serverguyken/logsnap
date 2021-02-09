<template>
  <div>       <div class="blocker  absolute w-full h-screen top-0 left-0 right-0 bottom-0" v-if="actionClicked" @click="actionClicked = false">
        
    </div>
    <div class="issues-data-hd bg-gray-300 text-gray-400 p-2 mt-3">
      <div class="grid grid-cols-5">
        <div class="flex items-center">
          <div class="issue-name">
            <h1 class="text-sm">ID</h1>
          </div>
          <div class="issue-desc ml-10">
            <h1 class="text-sm">Description</h1>
          </div>
        </div>
        <div class="status-con col-span-1 col-start-3 ml-3">
          <h1 class="text-sm">Status</h1>
        </div>
        <div class="priority col-start-4">
          <h1 class="text-sm">Priority</h1>
        </div>
        <div class="aside-fl-flex grid grid-cols-2 items-center col-start-5">
          <div class="created-at">
            <h1 class="text-sm">Created At</h1>
          </div>
          <!-- <div class="action col-start-6 col-end-5">
            <h1 class="text-sm">Action</h1>
          </div> -->
        </div>
      </div>
    </div>
        <div
      class="issues-list mt-3 hover:bg-gray-100 cursor-pointer px-1 py-2 rounded"
      v-for="issue in getallIssues"
      :key="issue.id"
    >
      <router-link class="grid grid-cols-5 items-center"  :to="{name: 'Issue', params: {id: issue.id}}">
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
            <h1 class="text-gray-500 ml-1">{{ issue.id }}</h1>
          </div>
          <div class="issue-short-desc ml-2 max-w-xs w-52 whitespace-nowrap">
            <h1
              class="text-gray-800 font-medium ml-1 overflow-hidden overflow-ellipsis"
              ref="description"
            >
              {{ issue.description }}
            </h1>
          </div>
        </div>
        <div class="tag-con status-con ml-2 col-span-1 col-start-3">
          <Tag
            :status="issue.status"
            :color="issue.statusColor"
            :backgroundColor="issue.statusBackgroundColor"
            size="p-4"
          />
        </div>
        <div class="priority col-start-4">
          <h1 :class="issue.priorityColor">{{ issue.priority }}</h1>
        </div>
        <div class="aisde-fl grid grid-cols-2 items-center col-start-5">
          <div class="created-at mr-5">
            <h1 class="text-sm">{{ issue.createdAt }}</h1>
          </div>
          <!-- <div class="relative action mr-4 col-start-6 col-end-5">
            <button @click="showAction()" class="focus:outline-none outline-none">
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
            <div class="action-card-con absolute right-0 top-4 mt-3 z-50 animate-slide" v-if="actionClicked">
              <div
                class="action-card bg-white shadow-xl border border-gray-100 rounded-lg p-4 w-24"
              >
                <div class="card-flex flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <h1 class="text-sm ml-2">View</h1>
                </div>

                <div class="card-flex flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  <h1 class="text-sm ml-2">Edit</h1>
                </div>

                <div class="card-flex flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <h1 class="text-sm ml-2">Delete</h1>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </router-link>
      </div>
  </div>
</template>
<script>
import Tag from "./Tag";
import { mapGetters } from 'vuex';
export default {
  name: "IssuesList",
  components: {
    Tag,
  },
  data() {
    return {
      actionClicked: false,
      issues: []
    }
  },
  methods: {
    showAction() {
     if(this.actionClicked === false) {
       this.actionClicked = true
     }
     else {
       this.actionClicked = false
     }
    },
     editTask: function(task){
            task.editing = false;
            console.log(task);
    }
  },
  mounted() {
    console.log( this.$store.getters.getDoneIssues);
  },
  computed: mapGetters(['getallIssues'])
};
</script>