<template>
  <div class="list">
    <div v-if="$store.state.show" class="abouts">
      <h1>{{ $store.state.shows.title }}</h1>
      <span class="times up">{{ $store.state.shows.type }}</span>
      <p class="icons" style="text-align:left">
        <span class="material-icons">notifications_none</span>
        {{
        Math.ceil(
        Math.abs(new Date() - new Date($store.state.shows.created_at)) /
        (1000 * 60 * 60 * 24)
        )
        }}
        days ago
      </p>
      <div class="text">
        <div class="miniImg">
          <div v-if="$store.state.shows.company_logo">
            <img :src="$store.state.shows.company_logo" alt="company" />
          </div>
          <h4 v-else>not found</h4>
        </div>
        <div class="ingInfo">
          <h3>{{ $store.state.shows.company }}</h3>
          <p class="icons" style="text-align:left">
            <span class="material-icons">public</span>
            {{ $store.state.shows.location }}
          </p>
        </div>
        <div class="pagesHtml" v-html="$store.state.shows.description"></div>
      </div>
    </div>

    <div v-else>
      <div
        class="show"
        v-for="item in $store.state.jobs"
        :key="item.id"
        @click="showJob(item.id,item.title)"
      >
        <div class="photo">
          <div v-if="item.company_logo" class="chgimg">
            <img :src="item.company_logo" :alt="item.company" />
          </div>
          <p v-else class="imgback">not found</p>
        </div>
        <div class="about">
          <p class="company">{{ item.company }}</p>
          <p class="title">{{ item.title }}</p>
          <p class="times">{{ item.type }}</p>
          <p class="icons">
            <span class="material-icons">public</span>
            {{ item.location }}
            <span class="material-icons">notifications_none</span>
            {{
            Math.ceil(
            Math.abs(new Date() - new Date(item.created_at)) /
            (1000 * 60 * 60 * 24)
            )
            }}
            days ago
          </p>
        </div>
      </div>
      <div class="pages">
        <span @click="page(false)" class="material-icons">keyboard_arrow_left</span>
        <span>{{ $store.state.count + 1 }}</span>
        <span @click="page(true)" class="material-icons">keyboard_arrow_right</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  watch: {
    $route() {
      let route = this.$route.path;
      if (route == "/") {
        this.$store.state.show = false;
      }
    },
  },
  methods: {
    showJob(id, title) {
      this.$router.push("/" + title.split(" " + "," + "%"));
      this.$store.state.show = true;
      this.$store.state.key = id;
      this.$store.commit("show", id);

      let jobDate = new Date(this.$store.state.jobs[0].created_at);
      let diffTime = Math.abs(new Date() - jobDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffTime + " milliseconds");
      console.log(diffDays + " days");
    },
    back() {
      this.$store.state.show = false;
    },
    page(up) {
      console.log(up);
      if (up) {
        if (this.$store.state.count < this.$store.state.find.length / 5 - 1) {
          this.$store.state.count += 1;
          this.$store.commit("page", up);
        }
      } else {
        if (this.$store.state.count > 0) {
          this.$store.commit("page", up);
          this.$store.state.count -= 1;
        }
      }
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
}
.list {
  box-sizing: border-box;
  float: left;
  position: relative;
  width: 70%;
  height: 200px;
}
.pagesHtml {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #334680;
  position: relative;
  width: 90%;
}
.abouts h1 {
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #334680;
  padding: 0;
  margin: 0;
}
.miniImg {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  padding: 0;
  margin: 0;
  top: 10px;
}
.miniImg div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px !important;
  height: 70px !important;
  padding: 0 !important;
  margin: 0 !important;
  float: left;
}
.miniImg img {
  position: relative !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
  border-radius: 4px !important;
}
.miniImg h4 {
  position: relative;
  font-size: 15px;
  display:flex!important;
  justify-content: center;
  align-items: center;
  width: 70px !important;
  height: 70px !important;
  background: #f2f2f2 !important;
  margin: 0 !important;
  padding: 0 !important;
  top: -38px;
}
.ingInfo {
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  position: relative;
  padding-left: 10px; /*değişen */
}
.text div h3 {
  font-size: 18px;
  line-height: 21px;
  color: #334680;
  padding: 0;
  margin: 0;
}
.up {
  position: relative;
  top: -3px !important;
  left: 10px !important;
  border: 7px red solid;

  display: inline-block;
}
.show {
  width: 90%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding-left: 20px;
}
.show:hover {
  cursor: pointer;
  transition: 0.8s;
}
.photo {
  width: 90px;
  height: 90px;
  float: left;
  position: relative;
  padding-top: 10px;
  border-radius: 4px;
}
.imgback {
  background: #f2f2f2;
  width: 90px;
  height: 90px;
  margin: auto;
  display: flex;
  align-items: center; /* horizontal */
  justify-content: center; /* vertical */
}
.chgimg {
  height: 100%;
  display: flex;
  align-items: center; /* horizontal */
  justify-content: center; /* vertical */
}
.chgimg img {
  width: 100%;
  height: auto;
}
p span {
  display: inline-block;
}
.about {
  padding-left: 100px;
  text-align: left;
}
.times {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #334680;
  display: inline-block;
  border: 1px solid #334680;
  margin: 0;
  padding: 5px;
  position: relative;
  top: 5px;
}
.company {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #334680;
}
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #334680;
  margin: 0;
  padding: 0;
}
.abouts {
  float: left;
  text-align: left;
}
.icons {
  text-align: right;
  position: relative;
  bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
  padding-right: 10px;
}
.icons span {
  position: relative;
  top: 8px;
}
.pages {
  float: right;
  cursor: pointer;
  position: relative;
  right: 10%;
}
.pages span {
  border: 1px solid #b7bcce;
  box-sizing: border-box;
  border-radius: 4px;
}
.pages span:nth-child(2) {
  background: #1e86ff;
  padding: 3px 5px 3px 5px;
  margin: 3px;
  border: 1px solid #1e86ff;
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
  position: relative;
  top: -7px;
}
@media only screen and (max-width: 15cm) {
  .list {
    width: 100%;
  }
  .show {
    width: 100%;
  }
  .company {
    font-size: 12px;
    line-height: 14px;
  }
  .title {
    font-size: 16px;
    line-height: 19px;
  }
  .pages {
    right: 10px;
  }
}
</style>
