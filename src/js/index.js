// import $ from 'jquery'
import Vue from 'vue/dist/vue.common.js'

new Vue({
  el: '#login',
  data: {
    inputtext: {}
  },
  methods: {
    btn: function () {
      console.log('1')
      if (!this.inputtext.name) {
        console.log('email地址不能为空')
      } else if (!this.inputtext.password) {
        console.log('密码不能为空')
      } else {
      }
    }
  }
})
