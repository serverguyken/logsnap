<template>
  <div>
    <Layout>
      <div
        class="nspddmm bg-main-dark h-screen flex justify-center items-center"
        id="404_e"
      >
        <div class="mt-12 text-center">
          <img
            src="https://res.cloudinary.com/serveryguken/image/upload/v1613080680/Projects/logsnap/imgs/404_zaabcb.svg"
            class="w-32 block ml-auto mr-auto"
          />
          <h1 class="text-white font-semibold pt-5 mb-5 text-6xl">Not Found</h1>
          <div class="urropw_3pr0">
            <div
              class="border border-main-normal max-w-sm  p-2 mb-10 text-white"
            >
              <p>The requested page does not exist:</p>
              <p class="text-main-normal break-words">{{ isRequestURL }}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import Layout from "./Layout";
export default {
  name: "NotFound",
  props: {
    requestURL: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isRequestURL: this.$route.path,
    };
  },
  components: {
    Layout,
  },
  mounted() {
    this.$props.requestURL = this.isRequestURL;
  },
};
</script>