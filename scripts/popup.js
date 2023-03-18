let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".profile__edit");
let popupClose = document.querySelector(".popup__close");

function open() {
  popup.classList.add("popup_opened");
}
function close() {
  popup.classList.remove("popup_opened");
}

popupOpen.addEventListener("click", open);
popupClose.addEventListener("click", close);

// function editProfile(name, description) {}
