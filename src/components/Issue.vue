<template>
  <div>
    <div class="dash-top-flex flex items-center fixed w-full border-b bg-white">
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
            <span class="px-2 py-1 rounded-sm bg-gray-200 text-xs text-gray-500"
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
          <div
            class="bg-main-dark outline-none rounded px-1 py-1 focus:outline-none"
          >
            <router-link
              :to="{ name: 'Issues', params: { id: getProjectPath } }"
              class="bg-main-dark outline-none rounded px-1 py-1 focus:outline-none flex justify-center items-center"
              @click="openIssueModal = true"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 text-white mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  /></svg
              >
              <p class="text-xs text-white">Back</p>
            </router-link>
          </div>
        </div>
        <div class="add-is tooltip">
          <div class="flex">
            <router-link
              :to="{ name: 'Issues', params: { id: getProjectPath } }"
              @click="openIssueModal = true"
              class="flex items-center rounded px-5 py-1 outline-none focus:outline-none text-black h-8"
            >
              <div class="mr-2"
                ><svg
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
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  /></svg
              ></div>
              <p class="text-sm">Back</p>
            </router-link>
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
          class="absolute z-50 right-0 mr-4 open-cc w-60 bg-white border-t shadow rounded-sm p-2 animate-slide"
          style="margin-top: 11.1rem"
          v-if="openAccAction"
        >
          <div class="gtpsdp">
            <!-- <router-link
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
            </router-link> -->

            <div class="prtd">
              <router-link
                to="/dashboard/projects"
                class="flex px-4 py-2 mt-3 hover:bg-gray-100"
              >
                <div class="text-gray-600">Projects</div>
              </router-link>
            </div>
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
    <div
      ref="dashMBMenu"
      class="dash-mb-sidebar overflow-y-hidden fixed z-50 border-t shadow-lg animate-slideright"
      v-if="open"
    >
      <aside class="bg-white border-r dark:bg-gray-800 h-screen">
        <div class="mb-left-main space-mb-sides p-4">
          <div class="cmp-pf-con flex items-center">
            <div
              class="comp-img rd-cn rounded-xl p-1 bg-gray-100"
              v-if="!compImage"
            >
              <img
                src="https://res.cloudinary.com/serveryguken/image/upload/v1612385665/Projects/logsnap/logo/LogSnap-icon_cp7dgm.png"
                alt="workspace-logo"
                class="w-8"
              />
            </div>
            <div
              class="comp-img bg-blue-600 rd-cn-sm"
              v-if="compImage"
              :style="color"
            >
              <h1 class="text-white font-medium">{{ initals }}</h1>
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

              <li class="mb-1 p-1 dash-link">
                <router-link
                  :to="{ name: 'Todos', params: { id: getRoute } }"
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
                    <p class="text-sm font-medium text-gray-600">Todos</p>
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
                </li> -->
            </ul>
          </div>
        </div>
      </aside>
    </div>

    <div class="issue-con pt-10">
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
import {
  auth,
  getProjectPath,
  getPath,
  getUser,
  getIssue,
  updateIssue,
  db,
  getAuthUser,
  deleteIssue,
} from "../config/functions";
import { mapGetters } from "vuex";
export default {
  name: "Issue",
  data() {
    return {
      open: false,
      openAccAction: false,
      compImage: true,
      initals: "",
      name: "",
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
    showMbMenu: function () {
      this.open = true;
    },
    hideMbMenu: function () {
      this.open = false;
    },
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
    getPath(this.getProjectPath, this.getIssueID, "Issues");
    const getInitials = function (name) {
      var parts = name.split(" ");
      var initials = "";
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== "") {
          initials += parts[i][0];
        }
      }
      return initials;
    };
    getAuthUser().then((user) => {
      getUser(user.uid).then((user) => {
        this.name = user.fullName;
        this.initals = getInitials(this.name);
        this.color = `background-color: ${user.coloruserSetActive};`;
      });
    });
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