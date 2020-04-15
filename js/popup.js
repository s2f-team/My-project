let link = document.querySelector(".user-nav-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let login = popup.querySelector("[name=user-login]");
let password = popup.querySelector("[name=user-password]");
let form = popup.querySelector("form");
let isStorageSupport = true;
let storage = "";

let mapLink = document.querySelector(".btn-contacts");
let mapPopup = document.querySelector(".modal-map");
let mapClose = document.querySelector(".js-contacts-close");

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        console.log("Please enter login and password");
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

// closing modal block by escape
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});
