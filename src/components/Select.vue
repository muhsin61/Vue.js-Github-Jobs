<template>
  <div class="select">
    <div v-if="$store.state.show" class="info">
      <button @click="back">
        <span class="material-icons">keyboard_backspace</span>Back to Search
      </button>
      <h1>HOW TO APPLY</h1>
      <p v-html="$store.state.shows.how_to_apply"></p>
    </div>
    <div v-else class="slc">
      <div class="chck">
        <input type="checkbox" v-model="$store.state.fullTime" @change="checked()" />
        <span>Full Time</span>
      </div>
      <br />
      <h1>Location</h1>
      <div class="src">
        <span class="material-icons">public</span>
        <form @submit.prevent="find">
          <input
            v-model="$store.state.location"
            type="text"
            placeholder="City, state, zip code or country"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  methods: {
    back() {
      this.$store.state.show = false;
      this.$router.push("/");
    },
    checked() {
      if (this.$store.state.fullTime) {
        this.$store.commit("fullTime");
      }
    },
    find() {
      this.$store.commit("find", ["", this.$store.state.location]);
    },
  },
};
</script>

<style scoped>
.select {
  box-sizing: border-box;
  float: left;
  position: relative;
  width: 30%;
  height: auto;
  padding-left: 60px;
}
.info {
  font-family: Poppins;
  font-style: normal;
  text-align: left;
  position: relative;
  width: 80%;
}
.info button {
  position: relative;
  display: inline-block;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #1e86ff;
  cursor: pointer;
}
.info button span {
  display: inline-block;
  position: relative;
  top: 6px;
}
.info h1 {
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
}
.info p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
  overflow: hidden;
}
.slc {
  position: relative;
  font-family: Poppins;
  font-style: normal;
  padding-left: 20px;
}
.chck {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
  padding: 0;
  margin: -10px;
}
.slc h1 {
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
}
span {
  position: relative;
  top: -3px;
}
span:nth-last-child(2) {
  position: relative;
  display: inline-block;
  top: 42px;
  left: -5px;
  z-index: 3;
}
form {
  position: relative;
  left: -10px;
  padding-bottom: 20px;
}
input[type="text"] {
  background: #ffffff;
  position: relative;
  width: 80%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 15px;
  padding-left: 30px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
}
input[type="checkbox"] {
  position: relative;
  width: 18px;
  height: 18px;
}
@media only screen and (max-width: 15cm) {
  .select {
    width: 100%;
    padding-left: 10px;
  }
  .slc {
    padding-left: 10px;
  }
}
</style>