<template>
  <div id="app">    
      <photo-preview :msg="msgTxt"></photo-preview>
  </div>
</template>

<script>
export default {
  name: 'app',  
  data () {
      return {   
        msgTxt: "你好"       
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
