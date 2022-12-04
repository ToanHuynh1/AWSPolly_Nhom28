
let logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", (e) => {
    const auth = getAuth(app);
    signOut(auth)
        .then(() => {
            alert("Đăng xuất thành công");
            location.href = "http://127.0.0.1:8080/login.html";
        })
        .catch((error) => { });
});
