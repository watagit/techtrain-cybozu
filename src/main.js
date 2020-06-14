import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyCGLtL67C83YlrhVnu847NyfrW64FRACPI",
  authDomain: "techtrain-cybozu.firebaseapp.com",
  databaseURL: "https://techtrain-cybozu.firebaseio.com",
  projectId: "techtrain-cybozu",
  storageBucket: "techtrain-cybozu.appspot.com",
  messagingSenderId: "914587199138",
  appId: "1:914587199138:web:85cfd9d3d1bee032fa19fb"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
