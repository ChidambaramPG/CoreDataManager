// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyADXzcuMk4LB1d-PQqUMXoHA3jxFwTPyHw",
    authDomain: "businesscard-management.firebaseapp.com",
    databaseURL: "https://businesscard-management.firebaseio.com",
    projectId: "businesscard-management",
    storageBucket: "businesscard-management.appspot.com",
    messagingSenderId: "88980375981",
    appId: "1:88980375981:web:7df109d481bdc4d2407924"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();