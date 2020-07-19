import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      find: Object,
      jobs: Object,
      find2: Object,
      shows: Array,
      isLoading: false,
      fullTime: false,
      show: false,
      location: "",
      finds: "",
      key: "",
      say: 0 ,
    },
    mutations: {
      addCountry: (state, value) => {
        state.country = value;
      },
      liste:(state) => {
          console.log(find)
          state.isLoading = true
          getir(state)
          async function getir(state){
          await fetch( 'https://cors-anywhere.herokuapp.com/' + "https://jobs.github.com/positions.json?description=&location=" )
          .then(response => response.json())
          .then(data => {
            console.log(data+ state);
            state.find = data;
            console.log("find: " + state.find)
            state.jobs = data.slice(0, 5)
            console.log(data[0])
            state.isLoading = false
          }); }
        
      },
      find: (state,find) => {
          console.log(find)
          state.isLoading = true
          getir(state,find)
          async function getir(state,find){
          await fetch( 'https://cors-anywhere.herokuapp.com/' + "https://jobs.github.com/positions.json?description=" + find[0] + "&location=" + find[1] )
          .then(response => response.json())
          .then(data => {
            console.log(data);
            state.jobs = data.slice(0, 5)
            state.find = data
            state.say = 0
            state.isLoading = false
          }); }
            console.log("çalıştı" + state)
      },
      show:(state,key)=>{
        state.jobs.forEach(item => {
          if(key == item.id){
            state.shows = item
          }
        });
      },
      page:(state,up)=>{
        console.log(state.say)
        if(up){
          state.jobs = state.find.slice(state.say*5,state.say*5 + 5);
            state.jobs = state.find.slice((state.say)*5,(state.say)*5 + 5);
          console.log(state.say)
        }else{
            state.jobs = state.find.slice((state.say)*5-5,(state.say)*5);
          console.log(state.say)
        }
      },
      fullTime(state){
        state.find2 = state.find
        state.find = []
        state.find2.forEach(element => {
          if(element.type == "Full Time"){ state.find.push(element) }
        });
      }
      
    }
})