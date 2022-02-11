<template>
  <div id="app">
    <stop-watch/>
  </div>
</template>

<script>
import StopWatch from './components/StopWatch.vue'  

//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    StopWatch    //컴포넌트
		//HelloWorld
  }
  //data() {
   // return{
    //    message: 'Oh Yes'
   // }
 // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>