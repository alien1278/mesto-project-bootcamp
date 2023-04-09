import { showPhotoPopup } from "../components/showPhoto.js";
import { getCards, addNewCard, like, dislike, deleteCard } from "./api";
import {
  openPopup,
  updateButtonCaption,
  closePopup,
} from "../components/modal.js";
import { userInfo } from "./profileInfo";

const addCardPopup = document.querySelector(".popup_add");
const addCardForm = addCardPopup.querySelector(".popup__form_add");
const cardAddPopupOpen = document.querySelector(".profile__add-card");
const cardAddPopupClose = addCardPopup.querySelector(".popup__close_add");
const nameCard = document.getElementById("name-card-input");
const urlCard = document.getElementById("url-card-input");
const popupName = document.querySelector(".popup__name");
const popupImage = document.querySelector(".popup__image");
const cards = document.querySelector(".cards");

const buttonSubmitCard = document.querySelector(".popup__submit_add");

function addCard(e) {
  e.preventDefault();
  updateButtonCaption(buttonSubmitCard, "Создание...");
  addNewCard(nameCard.value, urlCard.value)
    .then((res) => {
      prependCard(res);
      // res.name, res.link
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateButtonCaption(buttonSubmitCard, "Создать");
      closePopup(addCardPopup);
    });

  // nameCard.value = "";
  // urlCard.value = "";
  e.target.reset();
}

//func create card
function createCard(card) {
  const cardItem = document.getElementById("card-item").content;
  const cardNewItem = cardItem.querySelector(".card").cloneNode(true);

  cardNewItem.querySelector(".card__title").textContent = card.name;
  cardNewItem.querySelector(".card__like-counter").textContent =
    card.likes.length;
  // console.log(card.likes.length);
  const image = cardNewItem.querySelector(".card__image");
  image.src = card.link;
  image.alt = card.name;
  image.addEventListener("click", () => {
    popupName.textContent = card.name;
    popupImage.src = card.link;
    popupImage.alt = "Изображение " + card.name;
    openPopup(showPhotoPopup);
  });

  const cardLike = cardNewItem.querySelector(".card__like");

  if (card.likes.some((likedUser) => likedUser._id === userInfo._id)) {
    cardLike.classList.add("card__like_active");
  }

  cardLike.addEventListener("click", (e) => {
    toggleLike(card._id, cardNewItem);
  });

  const cardDelete = cardNewItem.querySelector(".card__delete");
  if (card.owner._id === userInfo._id) {
    cardDelete.classList.add("card__delete_active");
  }
  cardDelete.addEventListener("click", (e) =>
    deleteCardIcon(e, cardNewItem, card._id)
  );
  return cardNewItem;
}
function prependCard(card) {
  const cardNewItem = createCard(card);
  cards.prepend(cardNewItem);
}

//func delete card
function deleteCardIcon(e, cardEl, id) {
  deleteCard(id)
    .then((data) => {
      cardEl.remove(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getCards().then((result) => {
  result.forEach((card) => {
    prependCard(card);
  });
});

function toggleLike(id, cardEl) {
  const likeButton = cardEl.querySelector(".card__like");
  const likeCount = cardEl.querySelector(".card__like-counter");

  if (!likeButton.classList.contains("card__like_active")) {
    like(id)
      .then((data) => {
        likeButton.classList.add("card__like_active");
        likeCount.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dislike(id)
      .then((data) => {
        likeButton.classList.remove("card__like_active");
        likeCount.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export {
  addCard,
  addCardPopup,
  addCardForm,
  cardAddPopupOpen,
  cardAddPopupClose,
  createCard,
};
