<template>
  <p :style="{backgroundColor: city, height: '100px'}">User Registration Form</p>
  <form action="">
    Enter your city
    <input v-model="city" type="text" />

    <button type="submit">Submit</button>

    <br />
    <p :style="notifStyle">Your city is {{ city }}</p>
  </form>
</template>

<script>
export default {
  name: "RegForm",

  data() {//data is a function which returns an object
    return {
      city: "Katsina",
      notifStyle : {
        width: '50%',
        color: '#004488',
        backgroundColor: 'orange'
      }
    }
  }
};
</script>

<style scoped>
</style>