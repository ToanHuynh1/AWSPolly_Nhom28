
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCIAbwwJGA1g3Cn4Ri_23Om8ovDOwKN5vw",
    authDomain: "authfirebase-4bbbb.firebaseapp.com",
    databaseURL: "https://authfirebase-4bbbb-default-rtdb.firebaseio.com",
    projectId: "authfirebase-4bbbb",
    storageBucket: "authfirebase-4bbbb.appspot.com",
    messagingSenderId: "788019720763",
    appId: "1:788019720763:web:b03a6aeac4376e53c4a21e"
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
