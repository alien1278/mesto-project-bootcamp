import "./index.css";
import {
  enableValidation,
  openPopup,
  closePopup,
  handleProfileFormSubmit,
  profileEditPopup,
  userDescription,
  userName,
  profileName,
  profileDescription,
  profileForm,
  profileEditPopupOpen,
  profileEditPopupClose,
  addCard,
  addCardPopup,
  addCardForm,
  cardAddPopupOpen,
  cardAddPopupClose,
  showPhotoPopupClose,
  showPhotoPopup,
  createCard,
  profileAva,
  profileEditAvaPopupClose,
  profileEditAvaPopupOpen,
  profileEditAvaPopup,
  profileAvaForm,
  handleProfileAvaFormSubmit,
  prependCard,
} from "./components";
import {
  getCards,
  addNewCard,
  like,
  dislike,
  deleteCard,
  getUserInfo,
} from "./components/api";

const popupCloseOverlays = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest(".popup");
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener("click", () => closePopup(popup));
});

popupCloseOverlays.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closePopup(item);
    }
  });
});
//popup edit UserInfo listeners
profileEditPopupOpen.addEventListener("click", () => {
  openPopup(profileEditPopup);

  userName.value = profileName.textContent;
  userDescription.value = profileDescription.textContent;
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

//popup edit Avatar listeners
profileEditAvaPopupOpen.addEventListener("click", () => {
  openPopup(profileEditAvaPopup);
});

profileAvaForm.addEventListener("submit", handleProfileAvaFormSubmit);

//popup add Card listeners
cardAddPopupOpen.addEventListener("click", () => {
  openPopup(addCardPopup);
});
addCardForm.addEventListener("submit", addCard);

export let userInfo;
////
Promise.all([getUserInfo(), getCards()])
  .then(([userData, cards]) => {
    userInfo = userData;
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAva.src = userData.avatar;
    cards.forEach((card) => {
      prependCard(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_type_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
