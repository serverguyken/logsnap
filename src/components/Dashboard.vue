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
          <div class="w-full py-2">
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
          <div class="add-is tooltip">
            <div class="flex">
              <button
                @click="openCreateModal"
                class="bg-main-normal flex rounded px-2 py-1 outline-none focus:outline-none"
              >
                <!-- <svg
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
                  </svg> -->
                <span class="text-white font-medium text-sm">Create</span>
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
            class="absolute z-50 right-0 mr-4 bg-white border-t shadow rounded-sm p-2 animate-slide"
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

                <li class="mb-1 p-1 dash-link">
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
                </li>

                <li class="mb-1 p-1 dash-link">
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
                </li>

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
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <div class="issue-modal">
      <div class="modal">
        <div class="modal-contents">
          <div class="fixed z-50 inset-0 overflow-y-auto">
            <div
              class="flex items-end cr-is-top justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            >
              <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
              <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <!-- This element is to trick the browser into centering the modal contents. -->
              <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
                >&#8203;</span
              >
              <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
              <div
                class="inline-block cr-modal align-bottom w-5/6 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        class="text-lg leading-6 font-medium text-gray-700"
                        id="modal-headline"
                      >
                        Create Issue
                      </h3>
                      <div class="mt-2">
                        <p class="text-xs text-gray-600">Summary</p>
                      </div>
                      <div class="mt-0 w-full">
                        <input
                          type="text"
                          class="bg-gray-300 text-sm py-1 text-gray-600 rounded-sm w-full focus:outline-none pl-2 focus:bg-white focus:ring-1 focus:ring-main-normal appearance-none"
                        />
                      </div>
                      <div class="mt-2">
                        <p class="text-xs text-gray-600">Description</p>
                      </div>
                      <div class="mt-o">
                        <textarea id="editor" ref="editor"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 w-full flex justify-end">
                  <button
                    type="button"
                    class="w-16 block rounded-md border px-1 py-1 text-xs bg-main-normal font-medium text-white hover:bg-main-dark focus:outline-none outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create
                  </button>
                  <button
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
  </div>
</template>
<script>
import Loader from "./Loader";
import LeftSideBar from "./LeftSideBar";
import { auth, getUser, getAuthUser } from "../config/functions";
export default {
  name: "Dashboard",
  data() {
    return {
      isScrolling: false,
      componetLoaded: false,
      isLoaded: false,
      compImage: true,
      open: false,
      openAccAction: false,
      name: "",
      tinyAPIKey: "",
      content: "",
      getRoute: this.$route.fullPath.split("/")[4],
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
    test() {
      console.log("away");
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
  },
  created() {
    this.tinyAPIKey = process.env.VUE_APP_EDITOR_API_KEY;
  },
};
</script>