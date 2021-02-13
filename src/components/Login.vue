<template>
  <div>
    <div id="page-login">
      <div class="su-hd pt-3 pb-60">
        <div class="hd-logo">
          <router-link to="/">
            <img
              src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
              alt="logsnap-logo"
              class="w-60 pt-1 pb-2 ml-auto mr-auto"
            />
          </router-link>
        </div>
        <h1 class="text-center text-2xl text-black font-bold pl-5 pr-5 pt-4">
        </h1>
        <!-- <p class="text-center mt-6 text-gray-dim font-normal">
          <span class="text-main-normal" ref="workspaceURL">Log in to kenny.logsnap.app</span>
        </p> -->

        <div
          class="ws-url-con form form-workspace bg-white shadow-2xl rounded-lg max-w-lg w-11/12 ml-auto mr-auto p-6 mt-12 mb-10"
          v-if="!isWorkSpace"
        >
          <div class="form-group mt-4">
            <label for="fullName" class="text-gray-dark font-normal"
              >Workspace URL</label
            >
            <div class="flex rounded-md w-full mt-1">
              <input
                type="text"
                placeholder="Enter your workplace name"
                id="getWorkSpaceName"
                ref="getWorkSpaceName"
                v-model="getWorkSpaceName"
                class="border border-gray-200 rounded-sm p-2 w-10/12 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none border-r-0"
              />
              <span
                class="wk-url inline-flex items-center w-24 rounded-sm border border-gray-200 bg-gray-100 text-gray-500 text-sm border-l-0"
              >
                <span class="ml-1">logsnap.app</span>
              </span>
            </div>
          </div>
          <div class="form-btn mt-4">
            <button
              id="workspaceBtn"
              class="w-full focus:outline-none outline-none rounded-sm bg-main-normal text-white p-2"
              ref="workspaceBtn"
              @click="checkWorkspace"
            >
              Continue
            </button>
          </div>
          <div class="error-con mt-4 mb-3" v-if="isWkError">
            <p ref="lgError" class="text-sm font-medium text-red-600"></p>
          </div>
        </div>
        <div
          v-show="isWorkSpace"
          class="form form-login shadow-2xl rounded-lg max-w-lg w-11/12 ml-auto mr-auto p-6 mt-5 mb-20"
        >
          <div class="error-con mt-2 mb-2">
            <p
              ref="isErrorText"
              class="text-sm font-medium text-red-600 text-center"
            >
              {{ isError }}
            </p>
          </div>
          <div
          v-if="isPasswrodReset"
            class="error-con mt-2 mb-2 p-1 rounded bg-red-100 w-64 ml-auto mr-auto animate-reveal"
          >
            <p
              ref="isErrorText"
              class="text-sm font-medium text-red-600 text-center"
            >
              The password is not correct.
            </p>
            <div class="text-center"
              ><span class="text-red-600 text-sm">Did</span>
              <router-link
                to="/reset"
                class="text-main-dark text-sm hover:underline"
              >
                you forget your password?</router-link
              ></div
            >
          </div>
          <form action="/">
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Email</label
              >
              <input
                type="text"
                id="lsEmail"
                ref="isEmail"
                v-model="isEmail"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="error-con mt-4 mb-4">
              <p ref="isEmailText" class="text-sm font-medium text-red-600">
                {{ isEmailError }}
              </p>
            </div>
            <div class="form-group mt-4">
              <label for="password" class="text-gray-dark font-normal"
                >Password</label
              >
              <input
                type="password"
                id="lsPassword"
                ref="isPassword"
                v-model="isPassword"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="error-con mt-4 mb-4">
              <p ref="isPasswordText" class="text-sm font-medium text-red-600">
                {{ isPasswordError }}
              </p>
            </div>
            <div class="form-btn mt-4" v-if="!spinner">
              <button
                id="loginBtn"
                class="w-full focus:outline-none outline-none rounded-sm bg-main-normal text-white p-2 hover:opacity-80"
                ref="signInBtn"
                @click.prevent="signInUser"
              >
                Log In
              </button>
            </div>
            <div class="relative spn-b form-btn mt-4" v-if="spinner">
              <div
                class="cr-spinner p-2 w-full outline-none focus:outline-none rounded-sm bg-main-normal text-white hover:opacity-90"
                ref="crSpinner"
              ></div>
            </div>
          </form>
          <div class="fp-b mt-3">
            <button
              class="text-main-dark text-right outline-none focus:outline-none hover:opacity-80"
            >
              Forgot Password?
            </button>
          </div>
        </div>
        <div class="text-center mb-5">
        <p class="text-gray-600">Don't have a LogSnap account? <router-link to="/signup" class="text-main-normal hover:opacity-80">Sign Up</router-link></p>
      </div>
        <div class="text-center">
        <p class="text-gray-600">&copy; 2021 Echodesk Technology</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { auth, getAuthUser } from "../config/functions";
// import store from "../store"
export default {
  name: "Login",
  data() {
    return {
      getWorkSpaceName: "",
      isWorkSpaceName: "",
      isWkError: false,
      isLgError: false,
      isPasswrodReset: false,
      isError: "",
      isWorkSpace: true,
      isEmailError: "",
      isPasswordError: "",
      isEmail: "",
      isPassword: "",
      spinner: false,
      complete: true,
    };
  },
  methods: {
    focusEmailInput() {
      setTimeout(() => {
        this.$refs.isEmail.focus();
      }, 1500);
    },
    focusWknameInput() {
      setTimeout(() => {
        this.$refs.getWorkSpaceName.focus();
      }, 0);
    },
    // checkWorkspace() {
    //   getTenant(this.isWorkSpaceName).then(data => {
    //     console.log(data.workspaceName);
    //     if(data.workspaceName) {
    //       store.commit("SET_WORKSPACE_NAME", data.workspaceName)
    //     }
    //   })
    //   // setTimeout(() => {
    //   //   this.isWorkSpace = true;
    //   // }, 200);
    // },
    validateEmail(value) {
      switch (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        case true:
          this.isEmailError = "";
          this.$refs.isEmail.classList.remove("border-red-400");
          this.$refs.isEmail.classList.remove("focus:ring-0");
          this.$refs.isEmail.classList.add("focus:ring-1");
          break;
        case false:
          this.isEmailError = "Invalid Email";
          this.$refs.isEmail.classList.add("border-red-400");
          this.$refs.isEmail.classList.add("focus:ring-0");
          this.$refs.isEmail.classList.remove("focus:ring-1");
          return false;
        default:
          this.isEmailError = "";
          this.$refs.isEmail.classList.remove("border-red-400");
          this.$refs.isEmail.classList.remove("focus:ring-0");
          this.$refs.isEmail.classList.add("focus:ring-1");
          break;
      }
    },
    signInUser() {
      if (!this.isEmail) {
        this.isEmailError = "Email is required";
        this.$refs.isEmail.classList.add("border-red-400");
        this.$refs.isEmail.classList.add("focus:ring-0");
        this.$refs.isEmail.classList.remove("focus:ring-1");
        return false;
      } else {
        this.isEmailError = "";
        this.$refs.isEmail.classList.remove("border-red-400");
        this.$refs.isEmail.classList.remove("focus:ring-0");
        this.$refs.isEmail.classList.add("focus:ring-1");
      }

      if (!this.isPassword) {
        this.isPasswordError = "Password is required";
        this.$refs.isPassword.classList.add("border-red-400");
        this.$refs.isPassword.classList.add("focus:ring-0");
        this.$refs.isPassword.classList.remove("focus:ring-1");
        return false;
      } else {
        this.isPasswordError = "";
        this.$refs.isPassword.classList.remove("border-red-400");
        this.$refs.isPassword.classList.remove("focus:ring-0");
        this.$refs.isPassword.classList.add("focus:ring-1");
      }
      if (this.validateEmail(this.isEmail) === false) {
        this.$refs.isEmail.classList.add("border-red-400");
        this.$refs.isEmail.classList.add("focus:ring-0");
        this.$refs.isEmail.classList.remove("focus:ring-1");
        return false;
      }
      if (this.isEmail && this.isPassword) {
        auth
          .signInWithEmailAndPassword(this.isEmail, this.isPassword)
          .then((data) => {
           if(!data.user.emailVerified) {
             this.isPasswrodReset = false
             this.isError = "Please verify your email before you log in."
           }
           else {
              this.spinner = true;
            this.isPasswrodReset = false
            this.isError = ""
            setTimeout(() => {
              this.$router.push({ path: "/dashboard/projects" });
              localStorage.removeItem("isEmail")
            }, 1200);
           }
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/wrong-password":
                this.isError = "";
                this.isPasswrodReset = true
                break;
              case "auth/too-many-requests":
                this.isError = "Too many request | Account disabled.";
                this.isPasswrodReset = false
                break;
              default:
                this.isError = "The email or password is not correct.";
                 this.isPasswrodReset = false
                break;
            }
          });
      }
    },
  },
  mounted() {
    if(this.isWorkSpace) {
      this.focusEmailInput()
    }
    if(this.isWorkSpace === false) {
      this.focusWknameInput()
    }
    this.$refs.isEmail.addEventListener("keyup", () => {
      this.validateEmail(this.isEmail);
    });
    getAuthUser().then(user => {
      if(user) {
        this.$router.push({path: '/dashboard/projects'})
      }
    })
  },
};
</script>