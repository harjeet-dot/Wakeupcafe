const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("submitform");
const loginErrorMsg = document.getElementById("errormsg1");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "Pass123") {

        window.location.replace('home.html');

    } else {

        loginErrorMsg.style.opacity = 1;
    }
})