<template>
  <div class="container" id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="row">
      <div class="col-6 item">
        <h1 class="title">Line chart</h1>
        <FlockBanner>This is a banner!</FlockBanner>
      </div>
      <div class="col-6 item">
        <h1 class="title">Progress bars</h1>
        <div class="flex-row">
          <FlockCircleProgress />
          <FlockCircleProgress color="coral" :percent="56" />
          <FlockCircleProgress color="#43e8d8" :percent="80" />
          <FlockCircleProgress color="#fdaadc" :percent="100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  background-color: #f7f7f7;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.item {
  background-color: #fff;
  min-height: 200px;
  border-radius: 5px;
}
.flex-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.grid-4 {
  background-color: #fff;
  min-height: 200px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.title {
  font: 400 22px/20px "Montserrat", "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  color: rgba(0, 0, 0, 0.57);
  margin: 20px;
  text-align: left;
}
</style>
