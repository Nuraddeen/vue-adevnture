<template>
  <router-view />
</template>

<script>
import MarksEntry from './components/MarksEntry.vue';
import RegForm from "./components/RegForm.vue"

export default {
  name: "MyVueApp",

  components: {
    RegForm,
    MarksEntry
  },

  data() {
    return {
      age: 120,
      fullname: "Hafizu Ringim",
      htmlData: "<h1>The dice is cast! </h1>"
    };
  },

  beforeMount() {
    console.log("before mount");
  },

  mounted() {
    console.log("mounted");
  },

  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
</style>
