<template>
  <div>
    <div class="loader-comp">
      <Loader v-if="!isLoaded" />
    </div>
    <div id="page-dashboard" v-if="isLoaded">
      <div
        class="dash-top-flex flex items-center fixed w-full border-b bg-white"
      >
        <div class="dash-mb-icon-menu flex items-center cursor-pointer ml-4">
          <div
            class="mb-close"
            v-show="open"
            v-on:click="hideMbMenu()"
            ref="mbNavClose"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div
            class="mb-open"
            v-show="!open"
            v-on:click="showMbMenu()"
            ref="mbNavOpen"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        <div
          class="dash-header-search ml-2 flex justify-between items-center space-mb-sides p-1 w-full"
        >
          <div class="search-main w-full py-2">
            <div
              class="dash-h-con flex items-center rounded bg-gray-100 py-1 px-2 w-48 max-w-full"
            >
              <div class="search-icon border-r ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <span
                class="px-2 py-1 rounded-sm bg-gray-200 text-xs text-gray-500"
                >Issues</span
              >
              <div class="search-input w-full ml-2">
                <input
                  type="text"
                  placeholder="Search..."
                  class="text-sm text-gray-500 font-medium bg-gray-100 placeholder-gray-500 w-full max-w-full outline-none focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div class="mb-create-issue">
            <button
              class="bg-main-dark outline-none rounded px-1 py-1 focus:outline-none"
              @click="openCreateModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 text-white"
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
          <div class="add-is tooltip">
            <div class="flex">
              <button
                @click="openIssueModal = true"
                class="bg-main-normal rounded px-5 py-1 outline-none focus:outline-none text-white h-8"
              >
                Create
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 ml-3 text-gray-600 cursor-pointer"
                @click="openAccModal"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <!-- <div class="tooltip-text absolute top-0 right-4 mt-10 rounded flex  items-center justify-center bg-gray-800 px-1 py-1">
                  <span class="text-xs text-white" style="font-size:10px">Create issue</span>
                </div> -->
          </div>
          <div
            class="absolute z-50 right-0 mr-4 open-cc bg-white border-t shadow rounded-sm p-2 animate-slide"
            style="margin-top: 10.45rem"
            v-if="openAccAction"
          >
            <div class="gtpsdp">
              <router-link
                to="/settings/account/profile"
                class="acc0slk px-4 py-2 flex items-center hover:bg-gray-100"
              >
                <div class="text-gray-600">Account Settings</div>
                <div class="flfs ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 text-gray-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </router-link>
              <button
                class="lg-btn hover:bg-gray-100 mt-3 w-full text-left px-4 py-2 outline-none focus:outline-none"
                @click="logOut"
              >
                <span class="outline-none focus:outline-none text-gray-600">
                  Log out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard flex flex-col">
        <div id="dash-left" class="dash-left">
          <LeftSideBar />
        </div>
        <div id="dash-middle" class="dash-middle flex-auto">
          <slot></slot>
        </div>
      </div>

      <div
        ref="dashMBMenu"
        class="dash-mb-sidebar overflow-y-hidden z-50 fixed border-t shadow-lg animate-slideright"
        v-if="open"
      >
        <aside class="bg-white border-r dark:bg-gray-800 h-screen">
          <div class="mb-left-main space-mb-sides p-4">
            <div class="cmp-pf-con flex items-center">
              <div
                class="comp-img rd-cn rounded-xl p-1 bg-gray-100"
                v-if="compImage"
              >
                <img
                  src="https://res.cloudinary.com/serveryguken/image/upload/v1612385665/Projects/logsnap/logo/LogSnap-icon_cp7dgm.png"
                  alt="workspace-logo"
                  class="w-8"
                />
              </div>
              <div class="comp-img bg-blue-600 rd-cn-sm" v-if="!compImage">
                <h1 class="text-white font-medium">E</h1>
              </div>
              <div class="cmp-text ml-3">
                <h1 ref="workspaceName" class="text-xs font-medium">
                  {{ name }}
                </h1>
              </div>
            </div>
            <div class="links-con">
              <ul class="mt-4">
                <li class="mb-1 p-1 dash-link">
                  <router-link
                    :to="{ name: 'Issues', params: { id: getRoute } }"
                    class="flex items-center p-2 hover:bg-gray-100 rounded text-sm"
                  >
                    <div class="icon-con">
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
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div class="link-txt ml-3">
                      <p class="text-sm font-medium text-gray-600">Issues</p>
                    </div>
                  </router-link>
                </li>

                <!-- <li class="mb-1 p-1 dash-link">
                  <router-link
                    :to="{ name: 'Backlog', params: { id: getRoute } }"
                    class="dash-link flex items-center p-2 hover:bg-gray-100 rounded text-sm"
                  >
                    <div class="icon-con">
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
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </div>
                    <div class="link-txt ml-3">
                      <p class="text-sm font-medium text-gray-600">Backlog</p>
                    </div>
                  </router-link>
                </li> -->

                <!-- <li class="mb-1 p-1 dash-link">
                  <router-link
                    :to="{ name: 'Todo', params: { id: getRoute } }"
                    class="flex items-center p-2 hover:bg-gray-100 rounded text-sm"
                  >
                    <div class="icon-con">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div class="link-txt ml-3">
                      <p class="text-sm font-medium text-gray-600">Todo</p>
                    </div>
                  </router-link>
                </li> -->

                <li class="mb-1 p-1 dash-link">
                  <router-link
                    to="/dashboard/settings"
                    class="flex items-center p-2 hover:bg-gray-100 rounded text-sm"
                  >
                    <div class="icon-con">
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
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div class="link-txt ml-3">
                      <p class="text-sm font-medium text-gray-600">Settings</p>
                    </div>
                  </router-link>
                </li>
                <li class="mb-1 p-1 dash-link">
                  <button
                    class="lg-btn bg-main-normal shadow rounded text-sm text-white py-1 hover:bg-main-light mt-3 w-24 outline-none focus:outline-none"
                    @click="logOut"
                  >
                    <span
                      class="outline-none focus:outline-none text-sm text-white"
                    >
                      Log out
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <div class="issue-modal " v-if="openIssueModal">
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
                        Create Issue
                      </h3>
                      <div class="mt-2">
                        <p class="text-xs text-gray-600">
                          Summary<span class="text-red-500">&#x2a;</span>
                        </p>
                      </div>
                      <div class="mt-0 w-full">
                        <input
                          type="text"
                          v-model="issue.summary"
                          required
                          ref="summary"
                          class="bg-gray-200 text-sm py-1 text-gray-600 rounded-sm w-full focus:outline-none pl-2 focus:bg-white focus:ring-1 focus:ring-main-normal appearance-none"
                        />
                        <p class="text-xs text-red-600 hidden" ref="summaryError">Summary can't be empty</p>
                      </div>
                      <div class="dsc-group mt-1">
                        <div class="mt-2">
                          <p class="text-xs text-gray-600">
                            Description<span class="text-red-500">&#x2a;</span>
                          </p>
                        </div>
                        <div class="mt-o">
                          <div class="cnt-area border w-full">
                            <textarea
                              name="content"
                              v-model="issue.description"
                              ref="description"
                              required
                              id="descContent"
                              class="w-full p-1 h-30 text-sm max-h-56 focus:outline-none outline-none appearance-none"
                            >
                            </textarea>
                          </div>
                          <p class="text-xs text-red-600 hidden" ref="descriptionError">Summary can't be empty</p>
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
                            <div
                              class="mr-1 mt-1 bg-main-light opacity-80 text-xs rounded-lg px-1 flex items-center"
                              v-for="(tag, index) in issue.tags"
                              :key="index"
                            >
                              <p
                                class="overflow-ellipsis"
                                style="font-size: 0.6rem"
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
                      <div class="drop-file drop-zone upload mt-2">
                        <p class="text-xs text-gray-600">Attachment</p>
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
                      </div>
                      <div class="selectedFile w-full -mt-2" v-if="upLoading">
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
                      </div>
                      <div class="status-select mt-2 w-full">
                        <p class="text-xs text-gray-600">Status</p>
                        <div class="selecxt">
                          <select
                            v-model="issue.status"
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
                            v-model="issue.priority"
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
                    @click="createIssue"
                    type="button"
                    class="w-16 block rounded-md border px-1 py-1 text-xs bg-main-normal font-medium text-white hover:bg-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create
                  </button>
                  <button
                    @click="clearIssueForm"
                    type="button"
                    class="w-16 block rounded-md px-1 py-1 text-xs bg-none font-medium text-main-normal hover:text-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="issueCreated"
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
         <p class="text-gray-600 text-sm ml-1">Issue created successfully</p>
      </div>
     
    </div>
  </div>
</template>
<script>
import Loader from "./Loader";
import LeftSideBar from "./LeftSideBar";
import {
  auth,
  db,
  getUser,
  getAuthUser,
  uploadFile,
  createIssue,
} from "../config/functions";
export default {
  name: "Dashboard",
  data() {
    return {
      isScrolling: false,
      componetLoaded: false,
      isLoaded: false,
      compImage: true,
      open: false,
      projectName: "",
      openAccAction: false,
      openIssueModal: false,
      content: "",
      name: "",
      tinyAPIKey: "",
      labelTyped: false,
      isFileName: "",
      fileSize: "",
      attachmentURL: "",
      uploadValue: 0,
      upLoading: false,
      issue: {
        tags: [],
        attachmentURL: null,
        statusColor: "",
        statusBackgroundColor: "",
        priorityColor: "",
        priorityBackgroundColor: "",
      },
      getRoute: this.$route.fullPath.split("/")[4],
      issueCreated: false,
    };
  },
  components: {
    Loader,
    LeftSideBar,
  },
  methods: {
    showMbMenu: function () {
      this.open = true;
    },
    hideMbMenu: function () {
      this.open = false;
    },
    test() {},
    openAccModal() {
      if (this.openAccAction === true) {
        this.openAccAction = false;
      } else {
        this.openAccAction = true;
      }
    },
    logOut() {
      auth.signOut().then(() => {
        this.$router.push({ path: "/login" });
      });
    },
    addTag() {
      const val = this.issue.labels;
      if (val === "") {
        return false;
      }
      this.issue.tags.push(val);
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
      const removeItem = this.issue.tags.filter((tag) => tag !== istag);
      this.issue.tags = removeItem;
    },
    resetInput() {
      this.$refs.label.value = "";
      this.issue.labels = "";
    },
    handleFileUpload() {
      this.$refs.uploadBtn.click();
      this.$refs.uploadBtn.addEventListener("change", (e) => {
        if (e.target.files) {
          this.upLoading = true;
        }
        const fullPath = e.target.value;
        if (fullPath) {
          const startIndex =
            fullPath.indexOf("\\") >= 0
              ? fullPath.lastIndexOf("\\")
              : fullPath.lastIndexOf("/");
          let isFileName = fullPath.substring(startIndex);
          if (isFileName.indexOf("\\") === 0 || isFileName.indexOf("/") === 0) {
            isFileName = isFileName.substring(1);
          }
          localStorage.isFileName = isFileName;
          setTimeout(() => {
            this.$refs.isFileName.innerText = isFileName;
          }, 0);
        }
        this.fileSize = e.target.files[0].size;
        const uploadRef = uploadFile(
          `${this.getRoute}/${this.isFileName}`,
          (this.isFileName = e.target.files[0])
        );
        uploadRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            error;
          },
          () => {
            this.uploadValue = 100;
            uploadRef.snapshot.ref.getDownloadURL().then((url) => {
              this.attachmentURL = url;
              this.issue.attachmentURL = url;
            });
          }
        );
      });
    },
    deleteFile() {
      this.upLoading = false;
      this.$refs.uploadBtn.value = "";
    },
    createIssue() {
      if(this.$refs.summary.value === "") {
        this.$refs.summaryError.style.display = "block"
         this.$refs.summary.classList.add("border","border-red-500")
         this.$refs.summary.classList.remove("focus:ring-1")
        return false
      }
      else {
        this.$refs.summaryError.style.display = "none"
         this.$refs.summary.classList.remove("border","border-red-500")
          this.$refs.summary.classList.add("focus:ring-1")
      }
      if(this.$refs.description.value === "") {
        this.$refs.descriptionError.style.display = "block"
         this.$refs.description.classList.add("border","border-red-500")
          this.$refs.description.classList.remove("focus:ring-1")
        return false
      }
      else {
        this.$refs.descriptionError.style.display = "none"
         this.$refs.description.classList.remove("border","border-red-500")
          this.$refs.description.classList.add("focus:ring-1")
      }
      if(this.issue.status === "Open") {
        this.issue.statusColor = "text-white" 
        this.issue.statusBackgroundColor = "bg-green-400"
      }
      if(this.issue.status === "In Progress") {
        this.issue.statusColor = "text-status-inProgressDark" 
        this.issue.statusBackgroundColor = "bg-status-inProgressLight"
      }
      if(this.issue.status === "Fixed") {
        this.issue.statusColor = "text-green-500" 
        this.issue.statusBackgroundColor = "bg-green-200"
      }
      if(this.issue.status === "Closed") {
        this.issue.statusColor = "text-red-500" 
        this.issue.statusBackgroundColor = "bg-red-200"
      }
      if(this.issue.priority === "Low") {
        this.issue.priorityColor = "text-white" 
        this.issue.priorityBackgroundColor = "bg-yellow-300"
      }
      if(this.issue.priority === "Medium") {
        this.issue.priorityColor = "text-white" 
        this.issue.priorityBackgroundColor = "bg-green-400"
      }
      if(this.issue.priority === "High") {
        this.issue.priorityColor = "text-white" 
        this.issue.priorityBackgroundColor = "bg-red-600"
      }
      if(this.$refs.summary.value !== "" && this.$refs.description.value !== "") {
        createIssue(this.getRoute, this.issue)
        .then(docRef => {
          docRef.update({
            id: docRef.id,
            projectid: this.getRoute
          })
        })
        .then(() => {
          this.issue.tags = []
          this.issue.summary = ""
          this.issue.description = ""
          this.issue.statusColor = ""
          this.issue.statusBackgroundColor = ""
          this.issue.priorityColor = ""
          this.issue.priorityBackgroundColor = ""
          this.issue.labels = ""
          this.$refs.summary.value = ""
          this.$refs.description.value = ""
          this.$refs.label.value = ""
          this.openIssueModal = false;
          this.$refs.uploadBtn.value = "";
          this.upLoading = false;
          this.issueCreated = true
            setTimeout(() => {this.issueCreated = false},1500)
        })
          
        .catch((error) => {
          error
        });
      }
    },
    clearIssueForm() {
      if (this.issue !== []) {
        if (
          confirm(
            "You are currently creating an issue, any changes you made would not be saved"
          )
        ) {
          document.getElementsByTagName("input").forEach(input => {
            input.value === ""
          })
          this.issue.tags = []
          this.openIssueModal = false;
           this.issue.summary = ""
          this.issue.description = ""
          this.issue.statusColor = ""
          this.issue.statusBackgroundColor = ""
          this.issue.priorityColor = ""
          this.issue.priorityBackgroundColor = ""
          this.issue.labels = ""
          this.$refs.summary.value = ""
          this.$refs.description.value = ""
          this.$refs.label.value = ""
          this.$refs.uploadBtn.value = "";
          this.upLoading = false;
        } else {
          return false;
        }
      }
    },
    generateColor(background, color, type) {
      switch(type) {
        case "Open": 
           return {
             color : "text-white",
             background :"bg-green-400"
           }
        case "In Progress": 
          color = "text-status-inProgressDark"
          background = "bg-status-inProgressLight"
          break;
        case "Fixed": 
          color = "text-green-500"
          background = "bg-green-200"
          break;
        case "Closed": 
          color = "text-red-500"
          background = "bg-red-200"
          break;
        case "Low": 
          color = "text-white"
          background = "bg-yellow-300"
          break;
          case "Medium": 
          color = "text-white"
          background = "bg-green-400"
          break;
        case "High": 
          color = "text-white"
          background = "bg-red-600"
          break;
        
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
    getAuthUser().then((user) => {
      getUser(user.uid).then((data) => {
        this.name = data.fullName;
      });
    });
    // if(this.openIssueModal) {
    //   this.$refs.label.addEventListener('keyup', () => {
    //     this.labelTyped = true
    //   })
    // }
  },
  created() {
    this.tinyAPIKey = process.env.VUE_APP_EDITOR_API_KEY;
    // if (this.$refs.description !== "" && this.$refs.summary !== "") {
    //   window.addEventListener("beforeunload", (event) => {
    //     event.returnValue = `Are you sure you want to leave?`;
    //   });
    // }
    // if (this.$refs.description !== "" && this.$refs.summary !== "") {
    //   window.onbeforeunload = function () {
    //     return "handle your events or msgs here";
    //   };
    // }
  },
};
</script>