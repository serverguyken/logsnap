<template>
  <div>
    <div id="page-issues">
      <LeftCard v-if="mobile" />
      <Dashboard>
        <div class="">
          <div
            class="issues-con issue-view   bg-white border-r h-screen px-1 p-3"
          >
            <div class="search-con fixed z-50 top-0  bg-white">
              <div class="flex items-center rounded bg-gray-100 py-1 mt-3">
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
                  class="px-1 py-0 rounded-sm bg-gray-200 text-xs text-gray-500"
                  >Issues</span
                >
                <div class="search-input w-full ml-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="text-xs text-gray-500 font-medium bg-gray-100 placeholder-gray-500 w-full outline-none focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="bottom  pt-10 ">
              <div class="open-closed-filter mt-4">
                <div class="o-c flex items-center">
                  <div class="o">
                    <button
                      @click="isFilteredOpenShow()"
                      ref="openBtn"
                      class="text-xs px-2 py-1 border border-gray-300 text-gray-300 outline-none focus:outline-none"
                    >
                      OPEN<span ref="openCount">(48)</span>
                    </button>
                  </div>
                  <div class="c">
                    <button
                      @click="isFilteredClosedShow()"
                      ref="closedBtn"
                      class="text-xs px-2 py-1 border border-l-0 border-gray-300 text-gray-300 outline-none focus:outline-none"
                    >
                      CLOSED<span ref="closedCount">(196)</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="list">
                skssxssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
            </div>
            </div>

            
                
          </div>
            <!-- Bottom ends -->
        </div>
      </Dashboard>
    </div>
  </div>
</template>
<script>
import Dashboard from "./Dashboard";
import LeftCard from "./LeftCard";
export default {
  name: "Issues",
  data() {
    return {
      mobile: false,
      isFilterOpen: true,
      isFilterClosed: false,
    };
  },
  components: {
    Dashboard,
    LeftCard,
  },
  methods: {
    showMbMenu: function () {
      this.$refs.mbNavOpen.classList.add("animate-spin");
      setTimeout(() => {
        this.$refs.mbNavOpen.classList.remove("animate-spin");
        document.getElementById("aside-left").style.display = "block";
      }, 100);
    },
    hideMbMenu: function () {
      this.$refs.mbNavClose.classList.add("animate-spin");
      setTimeout(() => {
        this.$refs.mbNavClose.classList.remove("animate-spin");
        this.open = false;
      }, 100);
    },
    isFilteredOpenShow() {
      this.$refs.openBtn.classList.add("active");
      this.$refs.closedBtn.classList.remove("active");
      this.isFilterOpen = true;
      this.isFilterClosed = false;
      const isFiltredState = "isFilterOpen";
      localStorage.isFiltredState = isFiltredState;
    },
    isFilteredClosedShow() {
      this.$refs.openBtn.classList.remove("active");
      this.$refs.closedBtn.classList.add("active");
      this.$refs.openBtn.classList.add("border-r-0");
      this.isFilterClosed = true;
      this.isFilterOpen = false;
      const isFiltredState = "isFilterClosed";
      localStorage.isFiltredState = isFiltredState;
    },
  },
  mounted() {
    setTimeout(() => {
        switch (localStorage.isFiltredState) {
      case "isFilterOpen":
        this.isFilteredOpenShow();
        break;
      case "isFilterClosed":
        this.isFilteredClosedShow();
        break;
      default:
        this.isFilteredOpenShow();
        break;
    }
    },1000)
  },
};
</script>