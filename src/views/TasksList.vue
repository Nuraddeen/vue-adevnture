<template>
  <router-link :to="{name: 'home'}" >Go to home</router-link>
  <h1>my tasks</h1>

  <ul>
   <li>
    <Task percentCompleted="67" taskName="Learn VueJs" />
   </li>

  </ul>
</template>

<script>
import Task from '../components/Task.vue';
export default { components: { Task } };
</script>

<style scoped>
</style>