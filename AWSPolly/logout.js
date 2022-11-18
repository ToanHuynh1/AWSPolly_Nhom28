
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmcD0hh6l6t-Ifdajh5AjbGrXetXdsJuI",
  authDomain: "authfirebase-2b26c.firebaseapp.com",
  databaseURL: "https://authfirebase-2b26c-default-rtdb.firebaseio.com",
  projectId: "authfirebase-2b26c",
  storageBucket: "authfirebase-2b26c.appspot.com",
  messagingSenderId: "801604261642",
  appId: "1:801604261642:web:19c68723b4fcf93e1e0cf3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let logoutButton = document.getElementById("logout-button");
console.log(logoutButton);

logoutButton.addEventListener("click", (e) => {
    const auth = getAuth(app);
    signOut(auth)
        .then(() => {
            alert("Đăng xuất thành công");
            location.href = "http://192.168.56.1:8080/AWSPolly/login.html";
        })
        .catch((error) => { });
});
