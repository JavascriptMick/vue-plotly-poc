// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Test from './components/test'
import Users from './components/users'
import Plot from './components/plot'


Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Plot},
    { path: '/test', component: Test},
    { path: '/users', component: Users}
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
    <ul>
    <li><router-link to="/">Plot</router-link></li>
    <li><router-link to="/test">Test</router-link></li>
    <li><router-link to="/users">Users</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
  `
}).$mount('#app')
