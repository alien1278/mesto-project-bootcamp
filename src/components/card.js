import {
  showPhotoPopupClose,
  showPhotoPopup,
} from "../components/showPhoto.js";
import { openPopup, closePopup } from "../components/modal.js";
const addCardPopup = document.querySelector(".popup_add");
const addCardForm = addCardPopup.querySelector(".popup__form_add");
const cardAddPopupOpen = document.querySelector(".profile__add-card");
const cardAddPopupClose = addCardPopup.querySelector(".popup__close_add");
const nameCard = document.getElementById("name-card-input");
const urlCard = document.getElementById("url-card-input");
const popupName = document.querySelector(".popup__name");
const popupImage = document.querySelector(".popup__image");
const cards = document.querySelector(".cards");

function addCard(e) {
  e.preventDefault();
  prependCard(nameCard.value, urlCard.value);
  closePopup(addCardPopup);
  nameCard.value = "";
  urlCard.value = "";
}

//func create card

function createCard(name, imageSrc) {
  // тут создаете карточку и возвращаете ее
  const cardItem = document.getElementById("card-item").content;
  const cardNewItem = cardItem.querySelector(".card").cloneNode(true);

  cardNewItem.querySelector(".card__title").textContent = name;

  const image = cardNewItem.querySelector(".card__image");
  image.src = imageSrc;
  image.alt = name;
  image.addEventListener("click", () => {
    popupName.textContent = name;
    popupImage.src = imageSrc;
    popupImage.alt = "Изображение " + name;
    openPopup(showPhotoPopup);
  });

  const cardLike = cardNewItem.querySelector(".card__like");
  cardLike.addEventListener("click", toggleLike);

  const cardDelete = cardNewItem.querySelector(".card__delete");
  cardDelete.addEventListener("click", deleteCard);
  return cardNewItem;
}
function prependCard(name, imageSrc) {
  // imageSrc = imageSrc ? imageSrc : "./images/defaultPhoto.png";
  const cardNewItem = createCard(name, imageSrc);
  cards.prepend(cardNewItem);
  // cardSection.prepend(cardNewItem);
}
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
function renderInitialCards() {
  for (let i = 0; i < initialCards.length; i++) {
    prependCard(initialCards[i].name, initialCards[i].link);
  }
}
renderInitialCards();

//func toggle like button
function toggleLike(e) {
  e.target.classList.toggle("card__like_active");
}
//func delete card
function deleteCard(e) {
  e.target.closest(".card").remove();
}

export {
  addCard,
  addCardPopup,
  addCardForm,
  cardAddPopupOpen,
  cardAddPopupClose,
};
