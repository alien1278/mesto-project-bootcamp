//user information editing

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

//initialCards
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function initialCardItems() {
  for (i = 0; i < initialCards.length; i++) {
    const cardItem = document.getElementById("cardItem").content;
    const cardNewItem = cardItem.querySelector(".card").cloneNode(true);

    cardNewItem.querySelector(".card__title").textContent =
      initialCards[i].name;
    cardNewItem.querySelector(".card__image").src = initialCards[i].link;

    document.querySelector(".cards").append(cardNewItem);
  }
}

initialCardItems();
