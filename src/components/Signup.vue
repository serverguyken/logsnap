<template>
  <div>
    <div id="page-signup" class="">
      <div class="su-hd pt-3 mb-10" v-if="!isSignedup">
        <div class="hd-logo">
          <router-link to="/">
            <img
              src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
              alt="logsnap-logo"
              class="w-auto pt-1 pb-2 ml-auto mr-auto"
            />
          </router-link>
        </div>
        <h1 class="text-center text-2xl text-black font-bold pl-5 pr-5 pt-1">
          Join LogSnap
        </h1>

        <p class="text-center mt-6 text-gray-dim font-normal">
          Plan: <span class="text-main-normal" ref="planType"></span>
        </p>
        <div
          class="form shadow-2xl rounded-lg max-w-lg w-11/12 ml-auto mr-auto p-6 mt-5 mb-10"
        >
          <form action="/">
            <div class="error-con mt-4 mb-3">
              <p ref="lgError" class="text-sm font-medium text-red-600">
                {{ error }}
              </p>
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Full Name</label
              >
              <input
                type="text"
                id="fullName"
                ref="fullName"
                v-model="tenantData.fullName"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="error-con mt-4 mb-3">
              <p ref="lgError" class="text-sm font-medium text-red-600">
                {{ fullNameError }}
              </p>
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Email</label
              >
              <input
                type="text"
                id="email"
                ref="email"
                v-model="tenantData.email"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="error-con mt-4 mb-3">
              <p ref="lgError" class="text-sm font-medium text-red-600">
                {{ emailError }}
              </p>
            </div>
            <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Password</label
              >
              <input
                type="password"
                id="password"
                ref="password"
                v-model="tenantData.password"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="error-con mt-4 mb-3">
              <p ref="lgError" class="text-sm font-medium text-red-600">
                {{ passwordError }}
              </p>
            </div>
            <!-- <div class="form-group mt-4">
              <label for="fullName" class="text-gray-dark font-normal"
                >Workspace Name</label
              >
              <input
                type="text"
                id="workspaceName"
                ref="workspaceName"
                v-model="tenantData.workspaceName"
                class="border border-gray-200 rounded-sm p-2 w-full mt-1 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
              />
            </div>
            <div class="error-con mt-4 mb-3">
              <p ref="lgError" class="text-sm font-medium text-red-600">
                {{ workspaceNameError }}
              </p>
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
                  v-model="tenantData.workspaceURL"
                  class="border border-gray-200 rounded-sm p-2 w-10/12 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none border-r-0"
                />
                <span
                  class="wk-url inline-flex items-center w-24 rounded-sm border border-gray-200 bg-gray-100 text-gray-500 text-sm border-l-0"
                >
                  <span class="ml-1">logsnap.app</span>
                </span>
              </div>
            </div>
            <div class="error-con mt-4 mb-3">
              <p ref="lgError" class="text-sm font-medium text-red-600">
                {{ workspaceURLError }}
              </p>
            </div> -->
            <div class="relative form-btn mt-4" v-if="!spinner">
              <button
                @click.prevent="createAccount()"
                ref="createBtn"
                class="w-full outline-none focus:outline-none rounded-sm bg-main-normal text-white p-2 hover:opacity-90"
              >
                Create account
              </button>
            </div>
            <div class="relative spn-b form-btn mt-4" v-if="spinner">
              <div
                class="cr-spinner p-2 w-full outline-none focus:outline-none rounded-sm bg-main-normal text-white hover:opacity-90"
                ref="crSpinner"
              ></div>
            </div>
          </form>
          <div class="al-acc text-center mt-10">
            <span class="text-black font-normal"
              >By signing up, you agree to LogSnap's
              <span
                ><router-link to="/terms" class="text-main-normal">
                  Terms of Service
                </router-link></span
              >and
              <span
                ><router-link to="/privacy" class="text-main-normal">
                  Privacy Policy.
                </router-link></span
              ></span
            >
          </div>
        </div>
        <div class="al-acc text-center mt-2">
          <span class="text-gray-500 font-normal"
            >Already have a LogSnap account?
            <span
              ><router-link to="/login" class="text-main-normal">
                Log in
              </router-link></span
            ></span
          >
        </div>
      </div>
    </div>
    <div class="vrfy h-screen bg-main-normal w-full" v-if="isSignedup">
      <div class="flex justify-center items-center pt-6">
        <div class="dldj">
          <img
            src="https://res.cloudinary.com/serveryguken/image/upload/v1612385665/Projects/logsnap/logo/LogSnap-icon_cp7dgm.png"
            alt="logsnap-logo"
            class="w-10"
          />
        </div>
      </div>
      <div class="info mt-1 p-5">
        <h1 class="text-center text-white text-3xl font-semibold mb-4">
          Almost there!
        </h1>
        <div class="t text-main-light p-4">
          <h1>
            Thank you for joining LogSnap! To finish signing up, you need to
            confirm your email address.
          </h1>

          <!-- <h1 class="mt-4">
            An email confirmation was sent to
            <span class="text-main-normal">{{ getEmail }}</span>
          </h1> -->

          <h1 class="mt-6">Welcome to LogSnap!</h1>
          <h1 class="mt-2">LogSnap Team.</h1>
        </div>
      </div>
      <div class="d mt-2">
        <button
          class="text-white bg-main-dark py-5 rounded w-80 block ml-auto mr-auto hover:opacity-90 outline-none focus:outline-none"
          @click="sendEmailVerification"
          ref="sendEmallinkBtn"
        >
          RESEND VERIFICATION EMAIL
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  auth,
  createUser,
  updateUser,
  sendEmailVerification,
} from "../config/functions";
export default {
  name: "Signup",
  data() {
    return {
      planType: "Free",
      error: "",
      fullNameError: "",
      emailError: "",
      passwordError: "",
      workspaceNameError: "",
      workspaceURLError: "",
      getEmail: "",
      isSignedup: false,
      spinner: false,
      tenantData: {},
    };
  },
  methods: {
    focusInput() {
      setTimeout(() => {
        this.$refs.fullName.focus();
      }, 1500);
    },
    setPlan() {
      let isPlan = localStorage.getItem("planType")
        ? JSON.parse(localStorage.planType)
        : "";
      if (isPlan) {
        this.planType = isPlan.plan;
        this.$refs.planType.innerText = isPlan.plan;
      } else {
        isPlan === this.planType;
        this.$refs.planType.innerText = this.planType;
      }
    },
    validateEmail(value) {
      switch (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        case true:
          this.emailError = "";
          this.$refs.email.classList.remove("border-red-400");
          this.$refs.email.classList.remove("focus:ring-0");
          this.$refs.email.classList.add("focus:ring-1");
          break;
        case false:
          this.emailError = "Invalid Email";
          this.$refs.email.classList.add("border-red-400");
          this.$refs.email.classList.add("focus:ring-0");
          this.$refs.email.classList.remove("focus:ring-1");
          return false;
        default:
          this.emailError = "";
          this.$refs.email.classList.remove("border-red-400");
          this.$refs.email.classList.remove("focus:ring-0");
          this.$refs.email.classList.add("focus:ring-1");
          break;
      }
    },
    validateFullName(value) {
      switch (/^[a-zA-Z]+ [a-zA-Z]+$/.test(value)) {
        case true:
          this.fullNameError = "";
          this.$refs.fullName.classList.remove("border-red-400");
          this.$refs.fullName.classList.remove("focus:ring-0");
          this.$refs.fullName.classList.add("focus:ring-1");
          break;
        case false:
          this.fullNameError =
            "Please enter your full name (first & last name).";
          this.$refs.fullName.classList.add("border-red-400");
          this.$refs.fullName.classList.add("focus:ring-0");
          this.$refs.fullName.classList.remove("focus:ring-1");
          return false;
        default:
          this.fullNameError = "";
          this.$refs.fullName.classList.remove("focus:ring-0");
          this.$refs.fullName.classList.add("focus:ring-1");
          this.$refs.fullName.classList.remove("border-red-400");
          break;
      }
    },
    createAccount() {
      if (!this.tenantData.fullName) {
        this.fullNameError = "Full name is required";
        this.$refs.fullName.classList.add("border-red-400");
        this.$refs.fullName.classList.add("focus:ring-0");
        this.$refs.fullName.classList.remove("focus:ring-1");
        return false;
      } else {
        this.fullNameError = "";
        this.$refs.fullName.classList.remove("border-red-400");
        this.$refs.fullName.classList.add("focus:ring-1");
        this.$refs.fullName.classList.remove("focus:ring-0");
      }
      if (!this.tenantData.email) {
        this.emailError = "Email is required";
        this.$refs.email.classList.add("border-red-400");
        this.$refs.email.classList.add("focus:ring-0");
        this.$refs.email.classList.remove("focus:ring-1");
        return false;
      } else {
        this.emailError = "";
        this.$refs.email.classList.remove("border-red-400");
        this.$refs.email.classList.add("focus:ring-1");
        this.$refs.email.classList.remove("focus:ring-0");
      }
      if (!this.tenantData.password) {
        this.passwordError = "Password is required";
        this.$refs.password.classList.add("border-red-400");
        this.$refs.password.classList.add("focus:ring-0");
        this.$refs.password.classList.remove("focus:ring-1");
        return false;
      } else {
        this.passwordError = "";
        this.$refs.password.classList.remove("border-red-400");
        this.$refs.password.classList.remove("focus:ring-0");
        this.$refs.password.classList.add("focus:ring-1");
      }
      // if(!this.tenantData.workspaceName) {
      //   this.workspaceNameError = "Workspace Name is required"
      //   this.$refs.workspaceName.classList.add("border-red-400")
      //   this.$refs.workspaceName.classList.add("focus:ring-0")
      //   this.$refs.workspaceName.classList.remove("focus:ring-1")
      // }
      //  else {
      //   this.workspaceNameError = ""
      //   this.$refs.workspaceName.classList.remove("border-red-400")
      //   this.$refs.workspaceName.classList.add("focus:ring-1")
      //   this.$refs.workspaceName.classList.remove("focus:ring-0")
      // }
      // if(!this.tenantData.workspaceURL) {
      //   this.workspaceURLError = "Workspace URL is required"
      //   this.$refs.workspaceURL.classList.add("border-red-400")
      //   this.$refs.workspaceURL.classList.add("focus:ring-0")
      //   this.$refs.workspaceURL.classList.remove("focus:ring-1")
      // }
      //  else {
      //   this.workspaceURLError = ""
      //   this.$refs.workspaceURL.classList.remove("border-red-400")
      //    this.$refs.workspaceURL.classList.add("focus:ring-1")
      //   this.$refs.workspaceURL.classList.remove("focus:ring-0")
      // }
      // if (this.validateFullName(this.tenantData.fullName) === false) {
      //   this.$refs.fullName.classList.add("border-red-400");
      //   this.$refs.fullName.classList.add("focus:ring-0");
      //   this.$refs.fullName.classList.remove("focus:ring-1");
      //   return false;
      // }
      // if (this.validateEmail(this.tenantData.email) === false) {
      //   this.$refs.email.classList.add("border-red-400");
      //   this.$refs.email.classList.add("focus:ring-0");
      //   this.$refs.email.classList.remove("focus:ring-1");
      //   return false;
      // }

      // const tenantProperties = this.tenantData
      // const planType = this.planType

      if (
        this.tenantData.fullName &&
        this.tenantData.email &&
        this.tenantData.password
      ) {
        // this.$http.post('http://localhost:5000/api/v1/tenant/create', {
        //   tenantProperties,
        //   planType
        // })
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        auth
          .createUserWithEmailAndPassword(
            this.tenantData.email,
            this.tenantData.password
          )
          .then((data) => {
            data.user.updateProfile({
              displayName: this.tenantData.fullName,
            });
            createUser(data.user.uid, this.tenantData).then(() => {
              updateUser(data.user.uid, {
                planType: this.planType,
                coloruserSetActive: randomColor
              });
            });
          })
          .then(() => {
            localStorage.isEmail = this.tenantData.email;
            this.isEmail = localStorage.isEmail;
            sendEmailVerification();
            this.spinner = true;
            setTimeout(() => {
              this.isSignedup = true;
            }, 2200);
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/invalid-email":
                this.emailError = "Invalid email.";
                break;
              case "auth/weak-password":
                this.passwordError = "Password too weak.";
                break;
              case "auth/email-already-in-use":
                this.emailError = "Email address is alredy in use.";
                break;
            }
          });
      }
    },
    sendEmailVerification() {
      const email = localStorage.isEmail
        ? localStorage.isEmail
        : "nospecified@email.com";
      sendEmailVerification();
      this.isEmail = email;
      this.$refs.sendEmallinkBtn.innerText = "EMAIL VERIFICATION SENT";
      this.$refs.sendEmallinkBtn.disabled = true;
      setTimeout(() => {
        this.$refs.sendEmallinkBtn.disabled = true;
        this.$refs.sendEmallinkBtn.innerText = "RESEND VERIFICATION EMAIL";
      }, 1000);
    },
  },
  mounted() {
    if (this.isSignedup === false) {
      this.$refs.email.addEventListener("keyup", () => {
        this.validateEmail(this.tenantData.email);
      });
      this.$refs.fullName.addEventListener("keyup", () => {
        this.validateFullName(this.tenantData.fullName);
      });
      this.focusInput();
      this.setPlan();
    }
    // this.$refs.workspaceName.addEventListener("keyup", () => {
    //   let reg = /[^a-z0-9]/gi;
    //   this.tenantData.workspaceName = this.tenantData.workspaceName
    //     .toLowerCase()
    //     .replace(reg, "");
    //   this.tenantData.workspaceURL = this.tenantData.workspaceName
    // });
    // this.$refs.workspaceURL.addEventListener("keyup", () => {
    //   let reg = /[^a-z0-9]/gi;
    //   this.tenantData.workspaceURL = this.tenantData.workspaceURL
    //     .toLowerCase()
    //     .replace(reg, "");

    //   this.tenantData.workspaceName = this.tenantData.workspaceURL;
    // })
  },
};
</script>
