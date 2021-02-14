<template>
  <div>
    <h1></h1>
    <!-- <div id="issue-edit" class="flex justify-center items-center">
            {{$route.params}}
            <h1>{{issue}}</h1>
        </div> -->
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "EditIssue",
  props: {
    projectid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      issue: "",
    };
  },
  methods: {
    ...mapActions(["viewIssue"]),
  },
  mounted() {
    this.issue = this.$store.getters.getIssue(this.$route.params.id);
  },
};
</script>