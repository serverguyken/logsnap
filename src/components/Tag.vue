<template>
  <div>
    <div class="tag w-16 max-w-md text-center">
      <div :class="[rounded,color,backgroundColor,textSize]">{{status}}</div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Tag",
    props: {
      rounded: {
        type: String,
        default: "rounded-sm"
      },
      status: {
        type: String,
            default: ""
      },
        color: {
            type: String,
            default: "text-main-dark"
        },
        backgroundColor: {
            type: String,
            default: "bg-main-light"
        },
        textSize: {
          type: String,
          default: "text-xs"
        }
    },
};
</script>

<style scoped>
  span {
    border-radius: 20px;
    padding: 5px 8px;
  }
  @media (max-width: 600px) {
    span {
      font-size: 12px;
    }
  }
</style>