<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'

export default {
  name: 'app',
  components: {
    Tabbar
  },
  created: function(){
    this.$router.push('/');
  }
}
</script>

<style>
*{ margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{font-size:16px;}
a{text-decoration:none;}
ul{list-style:none;}
em,i{font-style:normal;}
input::-webkit-input-placeholder{color:#ccc;}
input::-moz-placeholder{/* Mozilla Firefox 4 to 18 */color:#ccc;}
input::-moz-placeholder{ /* Mozilla Firefox 19+ */color:#ccc;}
</style>
