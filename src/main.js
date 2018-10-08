import Vue from 'vue'
import app from './app'
import router from './router'
import $ from 'jquery'
new Vue({
  el: '#app',
  render: h => h(app), router,
})
