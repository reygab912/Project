import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjBAV8XflgLtsxds1lGH9nyYJrkIas1RM",
  authDomain: "campus-cart-661b9.firebaseapp.com",
  projectId: "campus-cart-661b9",
  storageBucket: "campus-cart-661b9.firebasestorage.app",
  messagingSenderId: "285894314507",
  appId: "1:285894314507:web:97abf1b790a5f020a0950e",
  measurementId: "G-707SVLTJW4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "success.html"; 
    })
    .catch((error) => {
      alert(error.message);
    });
});
