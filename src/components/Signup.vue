<template>
  <div>
    <div id="page-signup">
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
          Create you free LogSnap account
        </h1>

        <p class="text-center mt-6 text-gray-dim font-normal">
          Plan: <span class="text-main-normal" ref="planType"></span>
        </p>
        <div
          class="form shadow-2xl rounded-lg max-w-lg w-11/12 ml-auto mr-auto p-6 mt-5 mb-10"
        >
          <form action="/">
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Full Name</label
              >
              <input
                type="text"
                id="fullName"
                ref="fullName"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Email</label
              >
              <input
                type="text"
                id="email"
                ref="email"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Password</label
              >
              <input
                type="text"
                id="password"
                ref="password"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Workspace Name</label
              >
              <input
                type="text"
                id="workspaceName"
                ref="workspaceName"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Workspace URL</label
              >
              <div class="flex rounded-md w-full mt-1">
                <input
                  type="text"
                  id="workspaceURL"
                  ref="workspaceURL"
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
                  <button id="createBtn" class="w-full outline-none focus:outline-none rounded-sm bg-main-normal text-white p-2">Create account</button>
            </div>
          </form>
               <div class="al-acc text-center mt-10">
            <span class="text-black font-normal ">By signing up, you agree to LogSnap's <span><router-link to="/terms" class="text-main-normal">
             Terms of Service
            </router-link></span>and <span><router-link to="/privacy" class="text-main-normal">
             Privacy Policy.
            </router-link></span></span>
        </div>
        </div>
        <div class="al-acc text-center mt-2 mb-10">
            <span class="text-gray-500 font-normal">Already have a LogSnap account? <span><router-link to="/login" class="text-main-normal">
             Log in
            </router-link></span></span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "./Footer";
export default {
  name: "Signup",
  components: {
    Footer,
  },
  data() {
    return {
      planType: "Free",
    }
  },
  methods: {
      focusInput() {
          setTimeout(() => {
              this.$refs.fullName.focus()
          },1500)
      },
      setPlan() {
        let isPlan = localStorage.getItem("planType") ? JSON.parse(localStorage.planType) : ""
        if(isPlan) {
          this.planType = isPlan.plan
          this.$refs.planType.innerText = isPlan.plan
        }
        else {
          isPlan === this.planType
          this.$refs.planType.innerText = this.planType
        }
        console.log(this.planType);
      }
  },
  mounted() {
      this.focusInput();
      this.setPlan();
      this.$refs.workspaceName.addEventListener('keyup', () => {
        let reg = /[^a-z0-9]/gi
        this.$refs.workspaceName.value = this.$refs.workspaceName.value.toLowerCase().replace(reg,"")
        this.$refs.workspaceURL.value =  this.$refs.workspaceName.value
      })
      this.$refs.workspaceURL.addEventListener('keyup', () => {
        let reg = /[^a-z0-9]/gi
        this.$refs.workspaceURL.value = this.$refs.workspaceURL.value.toLowerCase().replace(reg,"");
        
        this.$refs.workspaceName.value =  this.$refs.workspaceURL.value
      })
  },
  watch: {
    setPlan() {
      console.log("ok");
    }
  }
};
</script>
