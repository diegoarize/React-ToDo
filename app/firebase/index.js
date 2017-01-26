import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyD_0W5UDYBXvE1t6N7ASqYlmGvPnMtcrEo",
      authDomain: "arize-todo-app.firebaseapp.com",
      databaseURL: "https://arize-todo-app.firebaseio.com",
      storageBucket: "arize-todo-app.appspot.com",
      messagingSenderId: "945776645210"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
