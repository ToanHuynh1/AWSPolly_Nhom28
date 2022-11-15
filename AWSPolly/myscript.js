import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";


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
const auth = getAuth(app);
const database = getDatabase(app);
let signinButton = document.getElementById("signin-button");
let signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let name = document.getElementById("name").value;
  let nohp = document.getElementById("nohp").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        name: name,
        nohp: nohp,
        email: emailSignup,
        password: passwordSignup
      })
        .then(() => {
          // Data saved successfully!
          alert("Đã tạo tài khoản thành công!!!");
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('errorMessage');
    });
});

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate
      })
        .then(() => {
          location.href = "http://192.168.56.1:8080/AWSPolly/index.html";
          alert('Đăng nhập thành công')
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Không tìm thấy tài khoản')
    });
  signOut(auth)
    .then(() => { })
    .catch((error) => { });
});
