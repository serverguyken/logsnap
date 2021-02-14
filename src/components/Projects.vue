<template >
  <div>
    <div class="loader" v-if="loaded">
      <div class="bar"></div>
    </div>
    <div class="yy ">
      <div class="p-head fixed top-0 w-full bg-white border-b p-2">
        <div class="flex justify-between items-center">
          <div class="ml-3">
            <img
              src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
              alt="logsnap-logo"
            />
          </div>
          <div class="menu-icon">
            <div class="mb-icon-menu flex items-center cursor-pointer">
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
          </div>
        </div>
      </div>
      <div
        class="absolute right-0 mt-14 mr-4 bg-white border-t shadow rounded-sm p-2 animate-slide"
        v-if="open"
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
      <div class="tisdlsd pt-20">
        <div
          class="ssweowe ml-3 p-2 flex items-center justify-between space-mb-sides"
        >
          <h1 class="text-black font-medium text-xl">Projects</h1>
          <div class="create-p-bnt">
            <button
              @click="isModal = true"
              class="bg-main-normal text-white text-sm px-2 py-2 rounded hover:opacity-90 outline-none focus:outline-none"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>
      <div class="skdsd ml-0 mt-3 p-2 space-mb-sides">
        <div class="grid grid-cols-5 border-b border-gray-200 p-2">
          <div class="sd col-start-1">
            <p class="text-sm text-gray-500">Name</p>
          </div>
          <!-- <div class="sd-date col-start-2">
            <p class="text-sm text-gray-500">Date</p>
          </div>
          <div class="sd-lead col-end-5">
            <p class="text-sm text-gray-500">Lead</p>
          </div> -->
        </div>
      </div>
      <div
        class="skdsd ml-0 -mt-4 p-2 space-mb-sides cursor-pointer"
        v-for="projectData in getProjectsDatas"
        :key="projectData.path"
      >
      
          <div class="modal-for-confirm" v-if="isModalOpened">
      <div class="fixed z-10 modal-bg inset-0 overflow-y-auto">
        <div
          class="m-top flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 "
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
          

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle  sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <div
            class="inline-block animate-slideup align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <!-- Heroicon name: outline/exclamation -->
                  <svg
                    class="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Delete Project
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      You're about to delete this project <span class="text-main-normal">{{projectData.name}}</span>. All of its
                      data will be permanently removed. This action cannot be
                      undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
              @click="deleteProject(projectData.path); isModalOpened = false"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
              <button
              @click="cancelDelete"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

        <router-link
          :to="{ name: 'Issues', params: { id: projectData.path } }"
          class="ff flex items-center justify-between border-b border-gray-200 hover:bg-gray-200 p-2 cursor-pointer"
        >
          <div class="sd overflow-hidden overflow-ellipsis w-44">
            <router-link
              :to="{ name: 'Issues', params: { id: projectData.path } }"
              class="text-sm  text-main-dark cursor-pointer hover:underline"
            >
              {{ projectData.name }}
            </router-link>
          </div>
           






          <div
            class="hover:bg-gray-300 rounded relative"
          >
            <svg  @click.prevent="deleteProject(projectData.path); isModalOpened = false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <div
              v-if="actionOpened"
              class="actions-con animate-slidedown absolute w-20 top-0 z-50 mt-5 -ml-16 rounded border-1 border-gray-100"
            >
              <div class="act bg-white shadow">
                <button
                  @click="s"
                  class="text-sm p-2 outline-none focus:outline-none bg-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div
        class="proj-create animate-slidemodalfromright bg-white w-full absolute top-0 h-screen"
        id="_2933"
        v-if="isModal"
        ref="isModal"
      >
        <div class="dkd p-4">
          <div
            class="close-btn hover:bg-gray-100 rd-cn cursor-pointer"
            @click="hideModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-gray-600 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div class="cieednd flex justify-center">
            <div class="pse p-4">
              <h1 class="text-gray-900 font-medium text-2xl">Create Project</h1>
              <div class="di mt-10">
                <div class="dld relative">
                  <label for="name" class="text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    placeholder="Enter a project name"
                    v-model="projName"
                    ref="projName"
                    class="border bg-gray-200 focus:bg-white w-full rounded p-2 mt-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
                  />
                  <div
                    v-if="noName"
                    class="reveal bg-white shadow-sm border border-gray-100 absolute top-0 right-0 z-50 p-2"
                  >
                    <p class="text-xs">Project name can't be empty.</p>
                  </div>
                </div>
                <div class="dld mt-5">
                  <div class="flex justify-between">
                    <label for="name" class="text-sm text-gray-600">ID</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Project ID"
                    v-model="projID"
                    ref="projID"
                    disabled
                    class="border bg-gray-200 focus:bg-white w-full rounded p-2 mt-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-main-normal appearance-none"
                  />

                  <div class="dhf mt-4" v-if="!spinner">
                    <button
                      class="bg-gray-300 text-gray-400 rounded w-24 text-sm py-2 block ml-auto hover:opacity-80"
                      ref="createProjBtn"
                      @click="createProject"
                    >
                      Create
                    </button>
                  </div>
                  <div
                    v-if="spinner"
                    class="relative spn-b form-btn mt-4 w-24 block ml-auto"
                  >
                    <div
                      class="pr-spinner outline-none focus:outline-none rounded bg-main-normal text-white hover:opacity-90"
                      ref="crSpinner"
                    ></div>
                  </div>
                  <p class="mt-4 text-sm text-red-600">{{ error }}</p>
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
import {
  auth,
  createProject,
  generateUID,
  getAllProjects,
} from "../config/functions";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Project",
  data() {
    return {
      open: false,
      noName: false,
      isModal: false,
      isModalOpened: false,
      projName: "",
      loaded: false,
      spinner: false,
      error: "",
      projID: "",
      actionOpened: false,
      projectDatas: [],
    };
  },
  methods: {
    ...mapActions(["deleteProject"]),
    showMbMenu: function () {
      this.$refs.mbNavOpen.classList.add("animate-spin");
      setTimeout(() => {
        this.$refs.mbNavOpen.classList.remove("animate-spin");
        this.open = true;
      }, 100);
    },
    hideMbMenu: function () {
      this.$refs.mbNavClose.classList.add("animate-spin");
      setTimeout(() => {
        this.$refs.mbNavClose.classList.remove("animate-spin");
        this.open = false;
      }, 100);
    },
    logOut() {
      auth.signOut().then(() => {
        this.$router.push({ path: "/login" });
      });
    },
    hideModal() {
      this.isModal = false;
    },
    createProject() {
      const projectData = {
        name: this.projName,
        ID: this.projID,
      };
      createProject(projectData)
        .then((data) =>
          data.update({
            path: data.id,
          })
        )
        .then(() => {
          setTimeout(() => {
            this.loaded = true;
          }, 1200);
        })
        .then(() => {
          setTimeout(() => {
            this.loaded = false;
          }, 3500);
        })
        .catch((error) => {
          if (error) {
            this.error = "Unable to create project please contact support.";
          }
        });
      this.spinner = true;
      this.isModalOpened = false
      setTimeout(() => {
        this.isModal = false;
        this.spinner = false;
        this.projName = "";
      }, 1200);
    },
    openAction: function () {
      if (this.actionOpened === false) {
        this.actionOpened === true;
      } else {
        this.actionOpened = false;
      }
    },
    cancelDelete() {
      this.isModalOpened = false
    }
  },
  mounted() {
    this.isModal;
    this.projID = generateUID();
  },
  watch: {
    isModal: function (changed, notchanged) {
      if (changed === true) {
        setTimeout(() => {
          if (!this.projName) {
            this.$refs.createProjBtn.disabled = true;
            this.$refs.createProjBtn.style.cursor = "not-allowed";
          }
          this.$refs.projName.addEventListener("keyup", () => {
            let reg = /[^a-z0-9]/gi;
            this.projName = this.projName.replace(reg, "");
            if (!this.projName) {
              this.$refs.createProjBtn.disabled = true;
              this.$refs.createProjBtn.classList.remove(
                "bg-main-normal",
                "text-white"
              );
              this.$refs.createProjBtn.style.cursor = "not-allowed";
              this.$refs.createProjBtn.classList.add(
                "bg-gray-300",
                "text-gray-400"
              );
              this.$refs.projName.classList.add("border-red-400");
              this.$refs.projName.classList.add("focus:ring-0");
              this.$refs.projName.classList.remove("focus:ring-1");
              this.noName = true;
            } else {
              this.$refs.createProjBtn.disabled = false;
              this.$refs.createProjBtn.style.cursor = "pointer";
              this.$refs.createProjBtn.classList.remove(
                "bg-gray-300",
                "text-gray-400"
              );
              this.$refs.createProjBtn.classList.add(
                "bg-main-normal",
                "text-white"
              );
              this.$refs.projName.classList.remove("border-red-400");
              this.$refs.projName.classList.remove("focus:ring-0");
              this.$refs.projName.classList.add("focus:ring-1");
              this.noName = false;
            }
          });
        }, 0);
      } else {
        notchanged;
      }
    },
  },
  computed: mapGetters(["getProjectsDatas"]),
  created() {
    getAllProjects();
  },
};
</script>     
