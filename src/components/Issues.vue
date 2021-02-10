<template>
  <div>
    <div id="page-issues">
      <LeftCard v-if="mobile" />
      <Dashboard>
        <div class="issue-main h-screen p-4">
          <div class="issues-contents">
            <div class="open-closed-filter">
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

            <h1 class="mt-6 text-gray-60">Your Isuues</h1>

<<<<<<< HEAD
                    <div class="issues-comp animate-slide">
=======
                    <div class="issues-comp">
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
                      <IssuesData />
                    </div>
           
          </div>
        </div>
      </Dashboard>
    </div>
  </div>
</template>
<script>
import Dashboard from "./Dashboard";
import LeftCard from "./LeftCard";
import IssuesData from "./IsuuesData";
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
    IssuesData,
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
    }, 1000);
  },
};
</script>