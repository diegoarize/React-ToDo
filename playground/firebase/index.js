import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD_0W5UDYBXvE1t6N7ASqYlmGvPnMtcrEo",
    authDomain: "arize-todo-app.firebaseapp.com",
    databaseURL: "https://arize-todo-app.firebaseio.com",
    storageBucket: "arize-todo-app.appspot.com",
    messagingSenderId: "945776645210"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Diego',
//     age: 26
//   }
// });

var todosRef = firebaseRef.child('todos');

// todosRef.on('child_added', (snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Todo1'
// });
//
// todosRef.push({
//   text: 'Todo2'
// });

todosRef.once('value').then((snapshot) => {
  console.log(snapshot);
});
