<template>
  <div>
    <div class="issue-con">
      <div class="issue-id p-4 w-11/12 block ml-auto mr-auto space-mb-sides">
        <div class="flex issue-main-view">
          <div class="issue-data mt-5 break-words w-3/6">
            <p class="text-gray-500 capitalize">{{ getIssueData.id }}</p>
            <div class="issue-summary w-10/12">
              <input
                type="text"
                v-model="getIssueData.summary"
                required
                ref="summary"
                class="py-1 rounded-sm w-full focus:outline-none text-gray-800 font-medium text-2xl appearance-none"
              />
              <p class="mt-1 pr-20 px-0">
                <textarea
                  name="content"
                  v-model="getIssueData.description"
                  ref="description"
                  required
                  id="descContent"
                  class="w-full h-30 max-h-56 focus:outline-none outline-none appearance-none"
                >
                </textarea>
              </p>
              <div class="attach mt-4">
                <h2 class="text-gray-800 font-semibold">Attachments</h2>
                <div class="att-img mt-1">
                  <img
                    v-if="getIssueData.attachmentURL"
                    class="shadow-sm border border-gray-100 h-40 w-60 rounded-lg"
                    :src="getIssueData.attachmentURL"
                    alt="issue-attachemnt"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 flex-auto w-3/6 issue-data">
            <h1 class="text-gray-800 font-semibold">Label</h1>
            <div class="label-group mt-1" v-if="editEnabled">
              <div class="mt-o">
                <input
                  type="text"
                  ref="label"
                  v-model="issue.labels"
                  @input="labelTyped = true"
                  @blur="labelTyped = false"
                  class="bg-gray-200 text-sm py-1 max-w-md text-gray-600 rounded-sm w-full focus:outline-none pl-2 focus:bg-white focus:ring-1 focus:ring-main-normal appearance-none"
                  @keydown.enter="addTag"
                />
                <div class="tags-con relative flex flex-wrap mt-2 pl-0">
                  <div
                    class="mr-1 mt-1 bg-main-light opacity-80 text-xs rounded-lg px-1 flex items-center"
                    v-for="(tag, index) in tags"
                    :key="index"
                  >
                    <p
                      class="overflow-ellipsis"
                      style="font-size: 0.6rem"
                      ref="tag"
                    >
                      {{ tag }}
                    </p>
                    <div class="cancel-label">
                      <svg
                        @click="removeLabel(tag)"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-2 cursor-pointer"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    class="label-suggest absolute z-50 shadow-sm border border-gray-100 top-0 w-full bg-white p-1"
                    v-if="labelTyped"
                  >
                    <div class="label-textx bg-gray-200 p-1">
                      <div class="text-xs flex">
                        <p>{{ issue.labels }}</p>
                        <h1 class="text-xs ml-1">Add Label</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="side-status mt-5">
              <h1 class="text-gray-800 font-semibold">Status</h1>
              <div class="status-select mt-2 w-full">
                <div class="selecxt">
                  <select
                    ref="status"
                    v-model="getIssueData.status"
                    class="w-2/4 bg-gray-200 py-1 text-sm rounded-sm border focus:outline-none outline-none focus:bg-white focus:border=gray-200"
                  >
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="side-priority mt-5 mb-4">
              <h1 class="text-gray-800 font-semibold">Priority</h1>
              <div class="status-select mt-3 w-full">
                <div class="selecxt">
                  <select
                    ref="priority"
                    v-model="getIssueData.priority"
                    class="w-2/4 bg-gray-200 py-1 text-sm rounded-sm border focus:outline-none outline-none focus:bg-white focus:border=gray-200"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 w-full flex justify-end mb-3">
              <button
                @click="updateIssue"
                type="button"
                class="w-16 block rounded-md border px-1 py-1 text-xs bg-main-normal font-medium text-white hover:bg-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Update
              </button>
              <button
                @click="deleteIssue"
                type="button"
                class="w-16 block rounded-md px-1 py-1 text-xs bg-none font-medium text-main-normal hover:text-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="issueUpdated"
      class="fixed z-50 top-5 right-0 bg-white px-3 py-3 shadow rounded-lg mr-5 animate-slide"
    >
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 text-green-600"
          ref="notiColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-gray-600 text-sm ml-1" ref="notiText">
          Issue updated successfully
        </p>
      </div>
    </div>
    <!-- <div class="issue-view">
      <div class="issue-modal">
        <div class="modal">
          <div class="modal-contents">
            <div class="fixed z-50 inset-0 overflow-y-auto">
              <div
                class="flex items-end cr-is-top justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              >
                <div
                  class="fixed inset-0 overflow-x-auto transition-opacity"
                  aria-hidden="true"
                >
                  <div class="absolute inset-0 bg-white"></div>
                </div>
                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                  >&#8203;</span
                >
                <div
                  class="inline-block cr-modal align-bottom  bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="pl-1 pr-1">
                      <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="text-lg leading-6 font-medium text-gray-700"
                          id="modal-headline"
                        >
                          {{getIssueData.summary}}
                        </h3>
                        <div class="mt-2">
                          <p class="text-xs text-gray-600">
                            Summary<span class="text-red-500">&#x2a;</span>
                          </p>
                        </div>
                        <div class="mt-0 w-full">
                          <input
                            type="text"
                            v-model="getIssueData.summary"
                            required
                            ref="summary"
                            class="bg-gray-200 text-sm py-1 text-gray-600 rounded-sm w-full focus:outline-none pl-2 focus:bg-white focus:ring-1 focus:ring-main-normal appearance-none"
                          />
                          <p
                            class="text-xs text-red-600 hidden"
                            ref="summaryError"
                          >
                            Summary can't be empty
                          </p>
                        </div>
                        <div class="dsc-group mt-1">
                          <div class="mt-2">
                            <p class="text-xs text-gray-600">
                              Description<span class="text-red-500"
                                >&#x2a;</span
                              >
                            </p>
                          </div>
                          <div class="mt-o">
                            <div class="cnt-area border w-full">
                              <textarea
                                name="content"
                                v-model="getIssueData.description"
                                ref="description"
                                required
                                id="descContent"
                                class="w-full p-1 h-30 text-sm max-h-56 focus:outline-none outline-none appearance-none"
                              >
                              </textarea>
                            </div>
                            <p
                              class="text-xs text-red-600 hidden"
                              ref="descriptionError"
                            >
                              Summary can't be empty
                            </p>
                          </div>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">Attachment</p>

                        <div class="issur-att">
                          <img :src="getIssueData.attachmentURL" alt="issue-attachment" />
                        </div>
                        <div class="status-select mt-2 w-full">
                          <p class="text-xs text-gray-600">Status</p>
                          <div class="selecxt">
                            <select
                              ref="status"
                              v-model="getIssueData.status"
                              class="w-2/4 bg-gray-200 py-1 text-sm rounded-sm border focus:outline-none outline-none focus:bg-white focus:border=gray-200"
                            >
                              <option value="Open">Open</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Fixed">Fixed</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </div>
                        </div>
                        <div class="status-select mt-3 w-full">
                          <div class="selecxt">
                            <p class="text-xs text-gray-600">Priority</p>
                            <select
                              ref="priority"
                              v-model="getIssueData.priority"
                              class="w-2/4 bg-gray-200 py-1 text-sm rounded-sm border focus:outline-none outline-none focus:bg-white focus:border=gray-200"
                            >
                              <option value="Low">Low</option>
                              <option value="Medium">Medium</option>
                              <option value="High">High</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 w-full flex justify-end">
                    <button
                      @click="updateIssue"
                      type="button"
                      class="w-16 block rounded-md border px-1 py-1 text-xs bg-main-normal font-medium text-white hover:bg-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Update
                    </button>
                    <button
                      @click="deleteIssue"
                      type="button"
                      class="w-16 block rounded-md px-1 py-1 text-xs bg-none font-medium text-main-normal hover:text-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="issueUpdated"
      class="absolute z-50 top-0 right-0 mt-20 bg-white px-3 py-3 shadow rounded-lg mr-5 animate-slide"
    >
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 text-green-600"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
         <p class="text-gray-600 text-sm ml-1">Issue updated successfully</p>
      </div>
     
    </div> -->
  </div>
</template>
<script>
import {  getProjectPath, getPath } from "../config/functions";
import { mapGetters } from "vuex";
import {
  getIssue,
  updateIssue,
  db,
  getAuthUser,
  deleteIssue,
} from "../config/functions";
export default {
  name: "Issue",
  data() {
    return {
      issue: [],
      tags: [],
      editEnabled: true,
      labelTyped: false,
      issueUpdated: false,
      getProjectPath: this.$route.fullPath.split("/")[5],
      getIssueID: this.$route.fullPath.split("/")[6],
    };
  },
  methods: {
    addTag() {
      const val = this.issue.labels;
      if (val === "") {
        return false;
      }
      this.tags.push(val);
      this.resetInput();
      this.labelTyped = false;
      // const array = this.issue.tags
      // const duplicates  = array.filter((e, i, a) => a.indexOf(e) !== i)
      // this.$refs.label.addEventListener('keypress',  () =>{
      //   if(array === duplicates) {
      //     this.resetInput();
      //   return false
      // }
      // })
    },
    removeLabel(istag) {
      const removeItem = this.tags.filter((tag) => tag !== istag);
      this.tags = removeItem;
    },
    updateIssue() {
      const summaryNewValue = this.$refs.summary.value;
      const descriptionNewValue = this.$refs.description.value;
      const statusNewValue = this.$refs.status.value;
      const priorityNewValue = this.$refs.priority.value;
      let statusColor = "";
      let statusBackgroundColor = "";
      let priorityColor = "";
      let priorityBackgroundColor = "";

      if (this.$refs.status.value === "Open") {
        statusColor = "text-white";
        statusBackgroundColor = "bg-green-400";
      }
      if (this.$refs.status.value === "In Progress") {
        statusColor = "text-status-inProgressDark";
        statusBackgroundColor = "bg-status-inProgressLight";
      }
      if (this.$refs.status.value === "Fixed") {
        statusColor = "text-green-500";
        statusBackgroundColor = "bg-green-200";
      }
      if (this.$refs.status.value === "Closed") {
        statusColor = "text-red-500";
        statusBackgroundColor = "bg-red-200";
      }
      if (this.$refs.priority.value === "Low") {
        priorityColor = "text-white";
        priorityBackgroundColor = "bg-yellow-300";
      }
      if (this.$refs.priority.value === "Medium") {
        priorityColor = "text-white";
        priorityBackgroundColor = "bg-green-400";
      }
      if (this.$refs.priority.value === "High") {
        priorityColor = "text-white";
        priorityBackgroundColor = "bg-red-600";
      }

      updateIssue(this.getProjectPath, this.getIssueID, {
        summary: summaryNewValue,
        description: descriptionNewValue,
        status: statusNewValue,
        tags: this.tags,
        priority: priorityNewValue,
        statusColor: statusColor,
        statusBackgroundColor: statusBackgroundColor,
        priorityColor: priorityColor,
        priorityBackgroundColor: priorityBackgroundColor,
      });
      this.issueUpdated = true;
      setTimeout(() => {
        this.$router.push({
          path: `/dashboard/project/issues/${this.getProjectPath}`,
        });
      }, 1800);
    },
    deleteIssue() {
      if (
        confirm(
          `You are about to delete this issue, ${this.$refs.summary.value}`
        )
      ) {
        deleteIssue(this.getProjectPath, this.getIssueID);
        this.issueUpdated = true;
        setTimeout(() => {
          this.$refs.notiColor.classList.remove("text-green-600");
          this.$refs.notiColor.classList.add("text-red-600");
          this.$refs.notiText.textContent = "Issue deleted successfully";
        }, 0);
        setTimeout(() => {
          this.$router.push({
            path: `/dashboard/project/issues/${this.getProjectPath}`,
          });
        }, 1000);
      } else {
        return false;
      }
    },
    resetInput() {
      this.$refs.label.value = "";
      this.issue.labels = "";
    },
  },
  computed: mapGetters(["getIssueData"]),
  mounted() {
      // getProjectPath(this.getProjectPath)
      console.log(this.getIssueID);
      getPath(this.getProjectPath,this.getIssueID,"Issues")
  },
  created() {
    getIssue(this.getProjectPath, this.getIssueID);
    getAuthUser().then((user) => {
      db.collection("users")
        .doc(user.uid)
        .collection("projects")
        .doc(this.getProjectPath)
        .collection("issues")
        .doc(this.getIssueID)
        .get()
        .then((data) => {
          const oldTags = data.data().tags;
          oldTags.forEach((tag) => {
            this.tags.push(tag);
          });
        });
    });
  },
};
</script>