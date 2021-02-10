<template>
  <div>
    <div id="page-settings">
      <div class="settings flex flex-row  h-screen">
        <div id="left" class="w-60 side-left h-screen fixed left-0 overflow-y-scroll">
          <LeftSideBarSettings />
        </div>
        <div
          id="middle"
          class="flex-auto main left-border h-screen space-mb-sides bg-white"
        >
          <div class="pages px-10 mt-10 pl-60">
            <div class="page">
                 <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftSideBarSettings from "./LeftSideBarSettings";
export default {
  name: "Dashboard",
  data() {
    return {
    };
  },
  components: {
    LeftSideBarSettings,
  },
  mounted() {
  },
};
</script>