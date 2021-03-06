<template>
  <div>
    <Dashboard>
      <div id="Notes-page">
        <div class="notes-main mt-6  h-screen space-mb-sides">
          <h1>Notes</h1>
        </div>
      </div>
    </Dashboard>
  </div>
</template>
<script>
import Dashboard from "./Dashboard";
export default {
  name: "Notes",
  components: {
    Dashboard,
  },
};
</script>