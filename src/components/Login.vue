<template>
    <div>
       <div id="page-login">
      <div class="su-hd pt-3">
        <div class="hd-logo">
          <router-link to="/">
            <img
            src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
            alt="logsnap-logo"
            class="w-auto pt-1 pb-2 ml-auto mr-auto"
          />
          </router-link>
        </div>
        <h1
          class="text-center text-2xl text-gray-dark font-bold pl-5 pr-5 pt-4"
        >
          Login
        </h1>
        <p class="text-center mt-6 text-gray-dim font-normal">
          <span class="text-main-normal" ref="workspaceURL">Log in to kenny.logsnap.site</span>
        </p>

         <div class="ws-url-con form form-workspace bg-white shadow-2xl rounded-lg max-w-lg w-11/12 ml-auto mr-auto p-6  mt-12 mb-10" v-if="!isWorkSpace">
          <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Workspace URL</label
              >
              <div class="flex rounded-md w-full mt-1">
                <input
                  type="text"
                  id="lsWorkspaceURL"
                  ref="lsWorkspaceURL"
                  class="border border-gray-200 rounded-sm p-2 w-10/12 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none border-r-0"
                />
                <span
                  class="wk-url inline-flex  items-center w-24 rounded-sm border border-gray-200 bg-gray-100 text-gray-500 text-sm border-l-0"
                >
                  <span class="ml-1">logsnap.site</span>
                </span>
              </div>
            </div>
            <div class="form-btn mt-4">
                  <button id="workspaceBtn" class="w-full focus:outline-none outline-none rounded-sm bg-main-normal text-white p-2" ref="workspaceBtn" @click="checkWorkspace()">Continue</button>
            </div>
            <div class="error-con mt-4 mb-3" v-if="isWkError">
                    <p ref="lgError" class="text-sm font-medium text-red-600"></p>
            </div>
      </div>
        <div v-show="isWorkSpace"
          class="form form-login shadow-2xl rounded-lg max-w-lg w-11/12 ml-auto mr-auto p-6 mt-5 mb-20"
        >
          <form action="/">
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Email</label
              >
              <input
                type="text"
                id="lsEmail"
                ref="lsEmail"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Password</label
              >
              <input
                type="password"
                id="lsPassword"
                ref="lsPassword"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
             <div class="error-con mt-4 mb-4" v-show="isLgError" >
                    <p ref="lgError" class="text-sm font-medium text-red-600"></p>
            </div>
            <div class="form-btn mt-4">
                  <button id="loginBtn" class="w-full focus:outline-none outline-none rounded-sm bg-main-normal text-white p-2" ref="createBtn">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
  data() {
      return {
          isWkError: false,
          isLgError: false,
          isWorkSpace: false,
          complete: true,
      }
  },
  methods: {
      focusInput() {
          setTimeout(() => {
              this.$refs.lsEmail.focus()
          },1500)
      },
      checkWorkspace() {
         setTimeout(() => {
              this.isWorkSpace  = true;
         },200)
      }
  },
  mounted() {
      this.focusInput();
    //   this.isWorkSpace = true
  }
}
</script>