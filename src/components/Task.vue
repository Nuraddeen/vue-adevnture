<template>
  <div style="width: 300px; border: 1px solid #004499">
    <div :style="taskStyle">
      {{ taskName }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["percentCompleted", "taskName"],

  computed: {
    bgColor() {
      let bgCol = "red";

      if (this.percentCompleted >= 70) bgCol = "green";
      else if (this.percentCompleted >= 50) bgCol = "orange";
      return bgCol;
    },
    taskStyle() {
      return {
        width: this.percentCompleted + "%",
        backgroundColor: this.bgColor,
      };
    },
  },
};
</script>

<style scoped>
</style>