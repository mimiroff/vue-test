<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
}

.container {
  margin: 20px auto;
  max-width: 1200px;
  font-size: 16px;
}
</style>
