<template>
  <div>
    <div id="settings-left">
      <aside class="bg-white border-r right-border top-0 left-0 h-screen">
        <div class="left-main space-mb-sides p-2">
          <div class="cmp-pf-con flex items-center">
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
                  class="w-5 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
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
};
</script>