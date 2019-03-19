import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify/dist/vuetify.min.css'
import AppHome from './components/AppHome.vue'
import AppLogin from './components/AppLogin.vue'
Vue.use(VueRouter)

Vue.use(Vuetify)
Vue.config.productionTip = false
const router = new VueRouter ({
  routes: [
    {
      path:'/',
      name:'AppHome',
      component:AppHome
    },
   {
     path:'/login',
     name:'AppLogin',
     component:AppLogin
   }    
  ]


});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
