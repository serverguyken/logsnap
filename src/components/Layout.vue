<template >
  <div>
    <div class="main">
         <div id="header-comp">
           <Header />
         </div>
         <div id="content-comp">
           <slot></slot>
         </div>
         <div id="footer-comp">
         <Footer />
         </div>
      </div>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
};
</script>