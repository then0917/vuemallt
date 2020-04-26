import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



// import axios from 'axios'
// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000

// axios({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// }).then(res => {
//   console.log(res);
// })


// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// })]).then(res => {
//   console.log(res)
// })


// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log('res1:', res1);
//   console.log('res2:', res2);
// }))