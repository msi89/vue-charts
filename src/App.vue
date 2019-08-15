<template>
  <div class="container" id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="row">
      <div class="col-6 item">
        <h1 class="title">Line chart</h1>
        <div class="flex-col">
          <line-chart :data="chartData" :colors="chartColors" legend="bottom" :dataset="dataset"/>
        </div>
      </div>
      <div class="col-6 item ">
        <h1 class="title">Progress bars</h1>
        <div class="flex-row">
          <circle-progress />
          <circle-progress color="coral" :percent="56"/>
          <circle-progress color="#43e8d8" :percent="80"/>
          <circle-progress color="#fdaadc" :percent="100"/>
          <ProgressG :value="50" :width="140" :height="35"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressG from '@/components/Progress'
import CircleProgress from '@/components/CircleProgress'
export default {
  name: 'app',
  components: {
    ProgressG,CircleProgress
  },
  data(){
    return{
      chartData: [
        {name: 'График за сегодня', data: [["09", 2], ["10", 5], ["11", 3], ["12", 10], ["13", 15], ["14", 25], ["15", 30], ["16", 30], ["17", 35], ["18", 45], ["19", 50]]},
        {name: 'График за вчера', data: [["09", 10], ["10", 20], ["11", 20], ["12", 20], ["13", 30], ["14", 30], ["15", 35], ["16", 38], ["17", 40], ["18", 43], ["19", 43]]}
      ],
      chartColors:["#294D9C", "#DEDEDE"],
      dataset:{
        borderWidth: 1
      }
    }
  }

}
</script>

<style>
*,*::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  background-color: #f7f7f7
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  width: 80%;
  margin: 0 auto;
}
.row{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.item{
  background-color: #fff;
  min-height: 200px;
  border-radius: 5px;
}
.flex-row{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-col{
  display: flex;
  flex-direction: column;
}
.grid-4{
  background-color: #fff;
  min-height: 200px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4,1fr)
}
.title{
  font: 400 22px/20px 'Montserrat', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgba(0, 0, 0, 0.57);
  margin: 20px;
  text-align: left;
}
</style>
