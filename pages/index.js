const popupAdd = document.querySelector(".popup_add");
const popupEdit = document.querySelector(".popup_edit");
const popupPhoto = document.querySelector(".popup_photo");

const popupFormEdit = popupEdit.querySelector(".popup__form_edit");
const popupFormAdd = popupAdd.querySelector(".popup__form_add");

const popupOpenEdit = document.querySelector(".profile__edit");
const popupCloseEdit = popupEdit.querySelector(".popup__close_edit");
const popupOpenAdd = document.querySelector(".profile__add-card");
const popupCloseAdd = popupAdd.querySelector(".popup__close_add");
const popupClosePhoto = popupPhoto.querySelector(".popup__close_photo");

const userName = document.getElementById("username-input");
const userDescription = document.getElementById("description-input");
const nameCard = document.getElementById("name-card-input");
const urlCard = document.getElementById("url-card-input");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardName = document.querySelector(".card__title");
const cardUrl = document.querySelector(".card__image");

const popupName = document.querySelector(".popup__name");
const popupImage = document.querySelector(".popup__image");

//func open close modal window
function open(popup) {
  popup.classList.add("popup_opened");
}
function close(popup) {
  popup.classList.remove("popup_opened");
}
//func edit profile info
function edit(e) {
  e.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = userDescription.value;
  close(popupEdit);
}
//func add new card
function addCard(e) {
  e.preventDefault();
  card(nameCard.value, urlCard.value);
  close(popupAdd);
}

//func create card
function card(name, imageSrc) {
  // imageSrc = imageSrc ? imageSrc : "./images/defaultPhoto.png";
  const cardItem = document.getElementById("cardItem").content;
  const cardNewItem = cardItem.querySelector(".card").cloneNode(true);

  cardNewItem.querySelector(".card__title").textContent = name;
  cardNewItem.querySelector(".card__image").src = imageSrc;

  const cardLike = cardNewItem.querySelector(".card__like");
  cardLike.addEventListener("click", likeCard);

  const cardPhotoOpen = cardNewItem.querySelector(".card__image");
  cardPhotoOpen.addEventListener("click", () => {
    popupName.textContent = name;
    popupImage.src = imageSrc;
    open(popupPhoto);
  });
  popupClosePhoto.addEventListener("click", () => close(popupPhoto));

  const cardDelete = cardNewItem.querySelector(".card__delete");
  cardDelete.addEventListener("click", deleteCard);

  document.querySelector(".cards").prepend(cardNewItem);
}

// edit listeners
popupOpenEdit.addEventListener("click", () => {
  open(popupEdit);

  userName.value = profileName.textContent;
  userDescription.value = profileDescription.textContent;
});
popupCloseEdit.addEventListener("click", () => close(popupEdit));
popupFormEdit.addEventListener("submit", edit);

// add card listeners
popupOpenAdd.addEventListener("click", () => {
  open(popupAdd);

  nameCard.value = "";
  urlCard.value = "";
});
popupCloseAdd.addEventListener("click", () => close(popupAdd));
popupFormAdd.addEventListener("submit", addCard);

//initialCards array
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
//func add initial Cards from array
function initialCardItems() {
  for (i = 0; i < initialCards.length; i++) {
    card(initialCards[i].name, initialCards[i].link);
  }
}
initialCardItems();

//func toggle like button
function likeCard(e) {
  e.target.classList.toggle("card__like_active");
}
//func delete card
function deleteCard(e) {
  e.target.closest(".card").remove();
}
//func open fullphoto

// function openCard(name, imageSrc) {
//   popupName.textContent = name;
//   popupImage.src = imageSrc;
//   open(popupPhoto);
// }
