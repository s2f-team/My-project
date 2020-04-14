let link = document.querySelector(".user-nav-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");

let login = popup.querySelector("[name=user-login]");
let password = popup.querySelector("[name=user-password]");

let form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log(login.value);
    console.log(password.value);

    if (!login.value || !password.value){
        console.log("Please enter login and password");
    }
});