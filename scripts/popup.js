let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".profile__edit");
let popupClose = document.querySelector(".popup__close");

function popupOpen() {
  popup.classList.add("popup_opened");
}
function popupClose() {
  popup.classList.remove("popup_opened");
}

popupOpen.addEventListener("click", popupOpen);
popupClose.addEventListener("click", popupClose);
