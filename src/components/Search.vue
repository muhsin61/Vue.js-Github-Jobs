
<template>
  <div class="search">
    <form @submit.prevent="find">
        <span class="material-icons mask">business_center</span>
        <input type="text" v-model="$store.state.finds" placeholder=" Title, companies, expertise or benefits">
        <input type="submit" value="Search" >
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods:{
    find(){
      console.log("fid çalıştı.")
      this.$store.commit("find",[this.$store.state.finds,""])
    }
  }
};
</script>

<style scoped>
.search {
  box-sizing: border-box;
  display: flex;
  margin: auto;
  text-align: center;
  position: relative;
  height: 138px;
  border-radius: 8px;
  background-image: url("../assets/find.png");
  margin-bottom: 50px;
  width: 90%;
}
form{
  width: 75%;
  height: 55px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
input{
  height: 51px;
  border: none;
}
.mask{
  position: relative;
  top: 6px;
  color: #B9BDCF;
  padding: 0;
  margin: 0;
}
input[type=text]{
  position: relative;
  width: calc(90% - 105px);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #6b6d75;
  padding-top: 3px;
}
input[type=submit]{
  border: none;
  background: #1E86FF;
  border-radius: 4px;
  width: 100px;
  position: relative;
  top: 2px;
  float: right;
  right: 3px;
  color: #FFFFFF;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}
@media only screen and (max-width: 15cm) {
  .search{
    width: 95%;
  }
  form{
    width: 90%;
  }
}
</style>