import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    find: Object,
    jobs: Object,
    tempFind: Object,
    shows: Array,
    isLoading: false,
    fullTime: false,
    show: false,
    location: "",
    finds: "",
    key: "",
    count: 0,
  },
  mutations: {
    addCountry: (state, value) => {
      state.country = value;
    },
    liste: (state) => {
      console.log(find);
      state.isLoading = true;
      getJobs(state);
      async function getJobs(state) {
        await fetch('https://cors-anywhere.herokuapp.com/' + "https://jobs.github.com/positions.json?description=&location=")
          .then(response => response.json())
          .then(data => {
            console.log(data + state);
            state.find = data;
            state.jobs = data.slice(0, 5);
            state.isLoading = false;
          });
      }

    },
    find: (state, find) => {
      state.isLoading = true;
      getJobs(state, find);
      async function getJobs(state, find) {
        await fetch('https://cors-anywhere.herokuapp.com/' + "https://jobs.github.com/positions.json?description=" + find[0] + "&location=" + find[1])
          .then(response => response.json())
          .then(data => {
            console.log(data);
            state.jobs = data.slice(0, 5);
            state.find = data;
            state.count = 0;
            state.isLoading = false;
          });
      }
    },
    show: (state, key) => {
      state.jobs.forEach(item => {
        if (key == item.id) {
          state.shows = item;
        }
      });
    },
    page: (state, up) => {
      if (up) {
        state.jobs = state.find.slice(state.count * 5, state.count * 5 + 5);
        state.jobs = state.find.slice((state.count) * 5, (state.count) * 5 + 5);
      } else {
        state.jobs = state.find.slice((state.count) * 5 - 5, (state.count) * 5);
      }
    },
    fullTime(state) {
      state.tempFind = state.find;
      state.find = [];
      state.tempFind.forEach(element => {
        if (element.type == "Full Time") { state.find.push(element) }
      });
    }
  }
})