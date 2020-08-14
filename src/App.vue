<template>
  <div id="app">
    <router-view></router-view>
    <div v-if="$store.state.isLoading">
      <span class="material-icons ara">search</span>
    </div>
    <div v-else>
      <h1 id="h1">
        <strong>Github</strong> jobs
      </h1>
      <Search />
      <Select />
      <List />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Select from "./components/Select.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Search,
    Select,
    List,
  },
  created: function () {
    this.$store.commit("liste", "true");
    //this.$router.push('/deneme')
  },
};
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
#h1 {
  position: relative;
  padding-left: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #282538;
}
.ara {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 200px;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
@keyframes example {
  0% {
    font-size: 30px;
  }
  50% {
    font-size: 50px;
  }
  100% {
    font-size: 30px;
  }
}
</style>
