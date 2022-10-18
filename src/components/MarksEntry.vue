<template>
  <div>
    <p>Enter your marks</p>
    <input v-model="score" :placeholder="myPlaceHolder" type="text" />

    <p :class="{'bg-red': score <50, 'bg-purple': score >= 50 & score<70, 'bg-green': score >=70}">
        Your score is {{ score }}
        <br/>
        You have passed the minimum score</p>
  </div>
</template>

<script>
export default {
  name: "MarksEntry",

  data() {
    return {
      score: 0,
      myPlaceHolder: "Enter your score"
    };
  },
};
</script>

<style scoped>
.bg-red {
  background-color: red;
  color: #ffffff;
}
.bg-green {
  background-color: green;
  color: #45d6de;
}

.bg-purple {
  background-color: purple;
  color: #96e36c;
}
</style>