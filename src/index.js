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
  profileEditAvaPopupClose,
  profileEditAvaPopupOpen,
  profileEditAvaPopup,
  profileAvaForm,
  handleProfileAvaFormSubmit,
} from "./components";

//popup edit UserInfo listeners
profileEditPopupOpen.addEventListener("click", () => {
  openPopup(profileEditPopup);

  userName.value = profileName.textContent;
  userDescription.value = profileDescription.textContent;
});
profileEditPopupClose.addEventListener("click", () =>
  closePopup(profileEditPopup)
);
profileForm.addEventListener("submit", handleProfileFormSubmit);

//popup edit Avatar listeners
profileEditAvaPopupOpen.addEventListener("click", () => {
  openPopup(profileEditAvaPopup);
});
profileEditAvaPopupClose.addEventListener("click", () =>
  closePopup(profileEditAvaPopup)
);
profileAvaForm.addEventListener("submit", handleProfileAvaFormSubmit);

//popup add Card listeners
cardAddPopupOpen.addEventListener("click", () => {
  openPopup(addCardPopup);
});
cardAddPopupClose.addEventListener("click", () => closePopup(addCardPopup));
addCardForm.addEventListener("submit", addCard);

//popup show photo listeners
showPhotoPopupClose.addEventListener("click", () => closePopup(showPhotoPopup));

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_type_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
