<template>
  <div id="app">
    <hello-world :msg= "message"/> 
  </div>
</template>

<script>
//import StopWatch from './components/StopWatch.vue'  
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
    //StopWatch    //컴포넌트
  },
  data() {
    return{
        message: 'Oh Yes'
    }
  }
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
