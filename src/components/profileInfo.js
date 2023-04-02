import { openPopup, closePopup } from "../components/modal.js";

const profileEditPopup = document.querySelector(".popup_edit");
const profileForm = profileEditPopup.querySelector(".popup__form_edit");
const profileEditPopupOpen = document.querySelector(".profile__edit");
const profileEditPopupClose =
  profileEditPopup.querySelector(".popup__close_edit");
const userName = document.getElementById("username-input");
const userDescription = document.getElementById("description-input");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = userDescription.value;
  closePopup(profileEditPopup);
}

export {
  handleProfileFormSubmit,
  profileEditPopup,
  userDescription,
  userName,
  profileName,
  profileDescription,
  profileForm,
  profileEditPopupOpen,
  profileEditPopupClose,
};
