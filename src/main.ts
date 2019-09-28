import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';
Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyAFNmPVAmUephvO4ttOzFfWkbCbDhSholQ",
  authDomain: "pwa-example-4f325.firebaseapp.com",
  databaseURL: "https://pwa-example-4f325.firebaseio.com",
  projectId: "pwa-example-4f325",
  storageBucket: "gs://pwa-example-4f325.appspot.com/",
  messagingSenderId: "202012475861",
  appId: "1:202012475861:web:36111900b38797f3f0bd5c"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BESPL-8MmUHJuWOFdBuD2oSIC7eZbl3zjEKeddmzLuQpeLh8MBoLk01s7xGxrCXJsGJNOIua-_yaGZy6o-6Y4ao");

messaging.requestPermission().then(()=>{
    console.log('Notification permission granted.');
  //get token
  messaging.getToken().then((token)=>{
    console.log(token);
  });
}).catch((err)=>{
  console.log('Unable to get permission to notify.',err);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
