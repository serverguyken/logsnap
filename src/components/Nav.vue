<template>
  <div>
    <div class="ds-nav"></div>
    <div class="mb-nav">
      <div class="flex justify-between items-center p-2 space-mb-sides">
        <div class="logo-img">
          <img
            src="https://res.cloudinary.com/serveryguken/image/upload/v1612386754/Projects/logsnap/logo/LogSnap-main_xppj6x.svg"
            alt="logo-image"
            class="w-auto"
          />
        </div>
        <div class="mb-btn-con flex items-center space-x-2">
          <div class="mb-lg-btn">
            <button class="focus:outline-none">
              <router-link to="/login"> Log in </router-link>
            </button>
          </div>
          <div class="s-btn-con">
            <button class="focus:outline-none">
              <router-link to="/signup"> Sign up </router-link>
            </button>
          </div>
          <div class="mb-icon-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8"
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
</template>
<script>
export default {
  name: "Nav",
};
</script>