const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");

const popupOpen = document.querySelector(".profile__edit");
const popupClose = document.querySelector(".popup__close");

const userName = document.getElementById("username-input");
const userDescription = document.getElementById("description-input");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

function open() {
  popup.classList.add("popup_opened");
  userName.value = profileName.textContent;
  userDescription.value = profileDescription.textContent;
}

function close() {
  popup.classList.remove("popup_opened");
}

function edit(e) {
  e.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = userDescription.value;
  close();
}

popupOpen.addEventListener("click", open);
popupClose.addEventListener("click", close);
popupForm.addEventListener("submit", edit);
