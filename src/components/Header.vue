<template>
  <div>
    <header
      class="ds-nav bg-color fixed z-50 top-0 w-full add-border"
      ref="dsNav"
    >
      <nav
        class="ds-nav-con flex flex-row items-center justify-between space-mb-sides py-4 px-4 ml-auto mr-auto"
      >
        <div class="logo-img">
          <router-link to="/">
            <img
              src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
              alt="logo-image"
              class="w-auto"
            />
          </router-link>
        </div>
        <div class="ds-links">
          <ul class="flex">
            <li
              v-for="link in links"
              :key="link.name"
              class="li-link text-gray-500 text-sm font-medium hover:text-main-normal ml-5 mr-5"
            >
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
            <div
              v-show="intHovered"
              class="int-card absolute ml-32 mt-10"
              ref="intCard"
            >
              <div class="int-card-cnts bg-white shadow w-full p-4">
                <h1>sdd</h1>
                <h1>sdd</h1>
                <h1>sdd</h1>
                <h1>sdd</h1>
              </div>
            </div>
          </ul>
        </div>
        <div class="mb-btn-con flex items-center space-x-2">
          <div class="mb-lg-btn">
            <button
              class="focus:outline-none text-gray-500 font-medium hover:text-main-normal"
            >
              <router-link to="/login"> Log in </router-link>
            </button>
          </div>
          <div class="s-btn-con">
            <router-link to="/signup">
              <button
                class="focus:outline-none bg-main-color text-white font-medium px-4 py-1 rounded hover:opacity-80"
              >
                Sign up
              </button>
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <header class="mb-nav fixed top-0 w-full z-50 bg-white">
      <nav
        class="flex flex-row justify-between items-center p-2 space-mb-sides mt-2 add-border"
        ref="mbNav"
      >
        <div class="logo-img">
          <router-link to="/">
            <img
              src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
              alt="logo-image"
              class="w-auto"
            />
          </router-link>
        </div>
        <div class="mb-btn-con flex items-center space-x-2">
          <div class="mb-lg-btn">
            <button
              class="focus:outline-none text-gray-500 font-medium hover:text-main-normal"
            >
              <router-link to="/login"> Log in </router-link>
            </button>
          </div>
          <div class="s-btn-con">
            <router-link to="/signup">
              <button
                class="focus:outline-none bg-main-color text-white px-2 py-1 rounded hover:opacity-80"
              >
                Sign up
              </button>
            </router-link>
          </div>
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
      </nav>
      <div
        class="mb-nav-card absolute w-full z-50 add-border"
        v-show="open"
        ref="mbNavCard"
      >
        <div class="mb-nav-card-con bg-white space-mb-sides">
          <ul ref="linksRef">
            <li
              v-for="link in links"
              :key="link.name"
              class="li-link pt-3 pb-2 text-gray-600 font-medium"
            >
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      open: false,
      scrollPosition: null,
      intHovered: false,
      links: [
        { name: "Features", path: "/features" },
        // { name: "Integrations", path: "/integrations" },
        { name: "Pricing", path: "/pricing" },
        // { name: "About", path: "/about" },
        // { name: "Contact", path: "/contact" },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 50) {
        console.log(this.$refs.demoBtn);
        this.$refs.dsNav.classList.remove("bg-color");
        this.$refs.dsNav.classList.add("bg-white");
        this.$refs.dsNav.classList.add("shadow");
      } else {
        this.$refs.dsNav.classList.remove("bg-white");
        this.$refs.dsNav.classList.add("bg-color");
        this.$refs.dsNav.classList.remove("shadow");
      }
    },
    showMbMenu: function () {
      this.$refs.mbNavOpen.classList.add("animate-spin");
      this.$refs.mbNavCard.classList.add("animate-slidedown");
      this.$refs.mbNavCard.classList.remove("animate-slideup");
      setTimeout(() => {
        this.$refs.mbNavOpen.classList.remove("animate-spin");
        this.open = true;
      }, 100);
    },
    hideMbMenu: function () {
      this.$refs.mbNavClose.classList.add("animate-spin");
      this.$refs.mbNavCard.classList.remove("animate-slidedown");
      this.$refs.mbNavCard.classList.add("animate-slideup");
      setTimeout(() => {
        this.$refs.mbNavClose.classList.remove("animate-spin");
        this.open = false;
      }, 100);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>