import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCJ2s8l0-E5QDJ-PEGTEga7rlfYPAN7SpY",
  authDomain: "dextedoodleforum.firebaseapp.com",
  databaseURL: "https://dextedoodleforum.firebaseio.com",
  projectId: "dextedoodleforum",
  storageBucket: "dextedoodleforum.appspot.com",
  messagingSenderId: "541907899808",
  appId: "1:541907899808:web:6d5700019c884ff425c0c5",
  measurementId: "G-VMLLEEJ19S"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();