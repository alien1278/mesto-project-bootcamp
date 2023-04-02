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
} from "./components";

showPhotoPopupClose.addEventListener("click", () => closePopup(showPhotoPopup));
// // edit listeners
profileEditPopupOpen.addEventListener("click", () => {
  openPopup(profileEditPopup);

  userName.value = profileName.textContent;
  userDescription.value = profileDescription.textContent;
});
profileEditPopupClose.addEventListener("click", () =>
  closePopup(profileEditPopup)
);
profileForm.addEventListener("submit", handleProfileFormSubmit);

// add card listeners
cardAddPopupOpen.addEventListener("click", () => {
  openPopup(addCardPopup);
});
cardAddPopupClose.addEventListener("click", () => closePopup(addCardPopup));
addCardForm.addEventListener("submit", addCard);

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_type_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
