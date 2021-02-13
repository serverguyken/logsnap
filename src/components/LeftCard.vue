<template>
  <div>
    <div id="left-card">
      <aside class="bg-white border-r right-border  left-0 h-screen w-48 shadow">
        <div class="left-main space-mb-sides p-4">
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
            <div class="comp-img bg-blue-600 rd-cn-sm" v-if="compImage = false">
              <h1 class="text-white font-medium">E</h1>
            </div>
            <div class="cmp-text ml-3">
              <h1 ref="workspaceName" class="text-xs font-medium">
               {{Name}}
              </h1>
            </div>
          </div>
          <div class="links-con">
            <ul class="mt-4">
              <li class="mb-1 p-1 dash-link">
                <router-link
                  to="/dashboard/issues"
                  class=" flex items-center p-2 hover:bg-gray-100 rounded text-sm"
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
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftCard",
  data() {
    return {
      compImage: false,
    };
  },
  mounted() {
  }
};
</script>