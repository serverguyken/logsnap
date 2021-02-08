<template>
  <div>
    <footer class="sticky bottom-0  bg-gray-800 w-full text-white">
      <hr class="add-border" />
      <div class="footer-con flex justify-between items-center space-mb-sides py-4 px-4 ml-auto mr-auto">
        <div class="footer-logo -ml-1">
          <router-link to="/">
            <img
            src="https://res.cloudinary.com/serveryguken/image/upload/v1612562269/Projects/logsnap/logo/LogSnap-logo-white_zfkjtu.svg"
            alt="LogSnap-logo"
          />
          </router-link>
        </div>
        <div class="footer-txt">
          <ul class="footer-links flex flex-row items-center">
            <li class="ml-5 hover:text-main-normal font-normal"><a href="https://docs.logsnap.site">Docs</a></li>
            <li v-for="link in links" :key="link.name" class="ml-5 hover:text-main-normal font-normal">
              <router-link :to="link.route">{{link.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        { name: "Features", route: "/features" },
        { name: "Terms of Service", route: "/terms" },
        { name: "Privacy", route: "/privacy" },
      ],
    };
  },
};
</script>