<template>
  <h1>Welcome to Vue adventure !</h1>

  <marquee> Vue Adevnture </marquee>

  <router-link to="/my-tasks">My Tasks</router-link>

  <p>
    Welcome {{ fullname }}, your age is
    <span v-text="age"></span>
  </p>

  <h3 v-html="htmlData"></h3>

  <RegForm />

  <marks-entry />
</template>

<script>
import MarksEntry from "../components/MarksEntry.vue";
import RegForm from "../components/RegForm.vue";

export default {
  name: "Home",
  components: { RegForm, MarksEntry },
};
</script>

<style scoped>
</style>