<template>
  <div>
<<<<<<< HEAD
    <div class="st-mb-top-header">
      <div class="st-mb-top p-3 bg-white fixed top-0 w-full border-b">
        <div class="flex items-center">
          <div class="mb-icon-menu flex items-center cursor-pointer">
            <div
              class="mb-close"
              v-if="isMobileOpen"
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
              v-if="!isMobileOpen"
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
          <div class="sdkd flex items-center ml-2">
            <router-link to="/dashboard/issues">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-6 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            <span class="font-medium ml-2">Settings</span>
          </div>
        </div>
      </div>
    </div>
    <div id="settings-left" class="settings-ds">
      <aside class="bg-settings-light shadow-sm px-3 py-3 pb-30">
        <div class="left-main space-mb-sides p-2">
          <div class="cmp-pf-con flex items-center  mt-3">
=======
    <div id="settings-left">
      <aside class="bg-white border-r right-border top-0 left-0 h-screen">
        <div class="left-main space-mb-sides p-2">
          <div class="cmp-pf-con flex items-center">
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
            <div class="back-btn p-3">
              <router-link to="/dashboard/issues">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </div>
            <div class="cmp-text">
              <h1 class="text-lg font-medium text-gray-600 ml-1">Settings</h1>
            </div>
          </div>
          <div class="links-con">
            <div class="account-link p-3 mt-3">
              <div class="account-hd flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
<<<<<<< HEAD
                  class="w-5 text-gray-600"
=======
                  class="w-5 text-gray-500"
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
<<<<<<< HEAD
                <div class="acc-txt ml-4">
                  <h1 class="text-sm text-gray-600 font-bold">Account</h1>
                </div>
              </div>

              <ul>
                <li
                  v-for="accLink in accLinks"
                  :key="accLink.name"
                  class="mt-1 settings-link text-sm"
                >
                  <router-link
                    :to="accLink.path"
                  >
                    <div class="link-txt ml-8 rounded px-1 py-2 mt-2 hover:bg-settings-light100">
                      <p class="text-sm font-normal text-black">
                        {{ accLink.name }}
                      </p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="links-con">
            <div class="account-link p-3 mt-3">
              <div class="account-hd flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
               
                <div class="acc-txt ml-4">
                  <h1 class="text-sm text-gray-600 font-bold">Worksapce</h1>
                </div>
              </div>

              <ul>
                <li
                  v-for="workSpaceLink in workSpaceLinks"
                  :key="workSpaceLink.name"
                  class="mt-1 settings-link  text-sm"
                >
                  <router-link
                    :to="workSpaceLink.path"
                  >
                    <div class="link-txt ml-8 px-1 py-2 mt-2 rounded hover:bg-settings-light100">
                      <p class="text-sm  text-black font-normal">
                        {{ workSpaceLink.name }}
                      </p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>


    <div id="settings-left" class="settings-mobile h-screen" v-if="isMobileOpen">
      <aside class="bg-settings-light shadow-lg border-r px-3 py-3 h-screen animate-slideright">
        <div class="left-main space-mb-sides p-2">
          <div class="cmp-pf-con flex items-center">
            <!-- <div class="back-btn p-2 px-0">
              <router-link to="/dashboard/issues">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </div>
            <div class="cmp-text">
              <h1 class="text-lg font-medium text-gray-600 ml-1">Settings</h1>
            </div> -->
          </div>
          <div class="links-con px-3">
            <div class="account-link  mt-3">
              <div class="account-hd flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div class="acc-txt ml-4">
                  <h1 class="text-sm text-gray-600 font-bold">Account</h1>
                </div>
              </div>

              <ul>
                <li
                  v-for="accLink in accLinks"
                  :key="accLink.name"
                  class="mt-1 settings-link text-sm"
                >
                  <router-link
                    :to="accLink.path"
                  >
                    <div class="link-txt ml-8 rounded px-1 py-2 mt-2 hover:bg-settings-light100">
                      <p class="text-sm font-normal text-black">
                        {{ accLink.name }}
                      </p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="links-con is-mobile px-1">
            <div class="workspace-link  mt-6">
              <div class="account-hd flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
               
                <div class="acc-txt ml-4">
                  <h1 class="text-sm text-gray-600 font-bold">Worksapce</h1>
                </div>
              </div>

              <ul>
                <li
                  v-for="workSpaceLink in workSpaceLinks"
                  :key="workSpaceLink.name"
                  class="mt-1 settings-link  text-sm"
                >
                  <router-link
                    :to="workSpaceLink.path"
                  >
                    <div class="link-txt ml-8 px-1 py-2 mt-2 rounded hover:bg-settings-light100">
                      <p class="text-sm  text-black font-normal">
                        {{ workSpaceLink.name }}
                      </p>
=======
                <div class="acc-txt  ml-4">
                  <h1 class="text-sm text-gray-500 font-medium">Account</h1>
                </div>
              </div>
              
              <ul>
                <li class="">
                  <router-link
                    to="/"
                    class="dash-link  hover:bg-gray-100 rounded text-sm"
                  >
                    <div class="link-txt ml-9">
                      <p class="text-sm font-medium text-gray-700">Issues</p>
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftSideSettings",
<<<<<<< HEAD
  data() {
    return {
      accLinks: [
        { name: "Profile", path: "/settings/account/profile" },
        { name: "Notifications", path: "/settings/account/notifications" },
        { name: "Preferences", path: "/settings/account/preferences" },
      ],
      workSpaceLinks: [
        { name: "General", path: "/settings/workspace" },
        { name: "Users", path: "/settings/workspace/users" },
        { name: "Integrations", path: "/settings/workspace/integrations" },
        { name: "API", path: "/settings/workspace/api" },
        { name: "Plans", path: "/settings/workspace/plans" },
        { name: "Billing", path: "/settings/workspace/billing" },
      ],
      isMobileOpen: false
    };
  },
  methods: {
    showMbMenu() {
      this.isMobileOpen = true
    },
    hideMbMenu() {
      this.isMobileOpen = false
    },
  }
=======
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
};
</script>