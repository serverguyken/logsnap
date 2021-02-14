<template>
  <div>
    <div class="issue-view">
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
                  <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                  >&#8203;</span
                >
                <div
                  class="inline-block cr-modal align-bottom w-5/6 bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
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
                        <div class="label-group mt-1">
                          <div class="mt-o">
                            <div class="">
                              <p class="text-xs text-gray-600">
                                Label<span class="text-red-500">&#x2a;</span>
                              </p>
                            </div>
                            <input
                              type="text"
                              ref="label"
                              v-model="issue.labels"
                              @input="labelTyped = true"
                              class="bg-gray-200 text-sm py-1 text-gray-600 rounded-sm w-full focus:outline-none pl-2 focus:bg-white focus:ring-1 focus:ring-main-normal appearance-none"
                              @keydown.enter="addTag"
                            />
                            <div
                              class="tags-con relative flex flex-wrap mt-2 pl-0"
                            >
                              <!-- <div
                                class="mr-1 mt-1 bg-main-light opacity-80 text-xs rounded-lg px-1 flex items-center"
                                v-for="(tag, index) in getIssueData.tags"
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
                              </div> -->



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
                        <!-- <div class="drop-file drop-zone upload mt-2">
                          
                          <div
                            class="flex justify-center mt-2 border-2 py-2 border-gray-200 border-dashed"
                          >
                            <p class="text-xs">
                              <span
                                ><button
                                  @click="handleFileUpload"
                                  class="text-xs text-main-normal focus:outline-none outline-none bg-white hover:underline"
                                >
                                  Upload
                                </button></span
                              >
                            </p>
                          </div>
                          <input
                            type="file"
                            class="input-dsnone"
                            ref="uploadBtn"
                            name="isFileName"
                            accept="image/x-png,image/gif,image/jpeg"
                          />
                        </div> -->
                        <p class="text-xs text-gray-600 mt-2">Attachment</p>

                        <div class="issur-att">
                          <img :src="getIssueData.attachmentURL" alt="" />
                        </div>
                        <!-- <div class="selectedFile w-full -mt-2" v-if="upLoading">
                          <div class="flex justify-between items-center">
                            <div class="file-preview">
                              <div class="flex">
                                <img
                                  :src="attachmentURL"
                                  alt=""
                                  ref="selectedfile"
                                  class="w-6"
                                />
                                <p ref="isFileName" class="ml-1 text-xs"></p>
                              </div>
                              <div class="flex justify-between">
                                <div class="upload-progress ml-7">
                                  <p v-if="upLoading" class="text-xs">
                                    {{ uploadValue.toFixed() + "%" }}
                                  </p>
                                  <progress
                                    :value="uploadValue"
                                    class="appearance-none w-96 h-1"
                                  ></progress>
                                </div>
                              </div>
                            </div>
                            <div
                              class="file-size cancel-con flex items-center -ml-8"
                            >
                              <p class="text-xs mr-1">{{ fileSize }}</p>
                              <div
                                class="delete-btn hover:bg-gray-200 cursor-pointer rounded-2xl p-1"
                                v-if="upLoading"
                                @click="deleteFile"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="w-5 text-gray-600 cursor-pointer"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div> -->
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
     
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getIssue, updateIssue, db,getAuthUser, deleteIssue } from "../config/functions";
export default {
  name: "Issue",
  data() {
    return {
      issue: [],
      tags: [],
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
       const tagsNewValue = this.$refs.tag.innerHTML
      const statusNewValue = this.$refs.status.value;
      const priorityNewValue = this.$refs.priority.value;
      let statusColor = "";
      let statusBackgroundColor ="";
      let priorityColor = "";
      let priorityBackgroundColor = "";
      console.log(
        summaryNewValue,
        descriptionNewValue,
        tagsNewValue,
        statusNewValue,
        priorityNewValue
      );

      if(this.$refs.status.value === "Open") {
        statusColor = "text-white" 
        statusBackgroundColor = "bg-green-400"
      }
      if(this.$refs.status.value === "In Progress") {
        statusColor = "text-status-inProgressDark" 
        statusBackgroundColor = "bg-status-inProgressLight"
      }
      if(this.$refs.status.value === "Fixed") {
        statusColor = "text-green-500" 
        statusBackgroundColor = "bg-green-200"
      }
      if(this.$refs.status.value === "Closed") {
        statusColor = "text-red-500" 
        statusBackgroundColor = "bg-red-200"
      }
      if(this.$refs.priority.value === "Low") {
        priorityColor = "text-white" 
        priorityBackgroundColor = "bg-yellow-300"
      }
      if(this.$refs.priority.value === "Medium") {
        priorityColor = "text-white" 
        priorityBackgroundColor = "bg-green-400"
      }
      if(this.$refs.priority.value === "High") {
        priorityColor = "text-white" 
        priorityBackgroundColor = "bg-red-600"
      }

        updateIssue(this.getProjectPath,this.getIssueID, {
            summary: summaryNewValue,
            description: descriptionNewValue,
            status: statusNewValue,
            tags: this.tags,
            priority: priorityNewValue,
            statusColor: statusColor,
            statusBackgroundColor: statusBackgroundColor,
            priorityColor: priorityColor,
            priorityBackgroundColor: priorityBackgroundColor
        })
        this.issueUpdated = true
        setTimeout(() => {
            this.$router.push({path: `/dashboard/project/issues/${this.getProjectPath}`})
        },1500)
    },
    deleteIssue() {
      if(confirm(`You are about to delete this issue, ${this.$refs.summary.value}`)) {
            deleteIssue(this.getProjectPath,this.getIssueID)
      }
      else {
          return false
      }
    },
    resetInput() {
      this.$refs.label.value = "";
      this.issue.labels = "";
    },
  },
  mounted() {
    console.log(this.getProjectPath, this.getIssueID);
  },
  computed: mapGetters(["getIssueData"]),
  created() {
    getIssue(this.getProjectPath, this.getIssueID);
    getAuthUser().then(user => {
            db.collection("users").doc(user.uid).collection("projects")
            .doc(this.getProjectPath)
            .collection("issues")
            .doc(this.getIssueID)
            .get()
            .then(data => {
                const oldTags = data.data().tags
                oldTags.forEach(tag => {
                    this.tags.push(tag)
                })
            })
    })
  }, 
};
</script>