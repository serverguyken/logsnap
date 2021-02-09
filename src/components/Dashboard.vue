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

        <div class="dash-header-search ml-2 w-full">
          <div class="w-full py-2 px-6">
            <div
              class="dash-h-con flex items-center rounded bg-gray-100 py-2 px-2 w-3/6 max-w-full"
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

      <div ref="dashMBMenu"
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
                  Echodesk Technology
                </h1>
              </div>
            </div>
            <div class="links-con">
              <ul class="mt-4">
                <li class="mb-1 p-1 dash-link">
                  <router-link
                    to="/dashboard/issues"
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
                    to="/dashboard/backlog"
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
                    to="/dashboard/todo"
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
  </div>
</template>
<script>
import Loader from "./Loader";
import LeftSideBar from "./LeftSideBar";

export default {
  name: "Dashboard",
  data() {
    return {
      isScrolling: false,
      componetLoaded: false,
      isLoaded: false,
      compImage: true,
      open: false,
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
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  },
};
</script>