import { closePopup } from "../components/modal.js";
import { getUserInfo, editUserInfo, editUserAvatar } from "../components/api";
import { updateButtonCaption } from "./utils";
import { userInfo } from "../index";
const profileEditPopup = document.querySelector(".popup_edit");
const profileEditPopupOpen = document.querySelector(".profile__edit");
const profileEditPopupClose =
  profileEditPopup.querySelector(".popup__close_edit");
const profileForm = profileEditPopup.querySelector(".popup__form_edit");
const profileEditAvaPopup = document.querySelector(".popup_edit-ava");
const profileEditAvaPopupOpen = document.querySelector(".profile__avatar-edit");
const profileEditAvaPopupClose = profileEditAvaPopup.querySelector(
  ".popup__close_edit-ava"
);
const profileAvaForm = profileEditAvaPopup.querySelector(
  ".popup__form_edit-ava"
);

const userName = document.getElementById("username-input");
const userDescription = document.getElementById("description-input");
const userAvatar = document.getElementById("url-ava-input");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileAva = document.querySelector(".profile__avatar");

const buttonSubmitProfie = document.querySelector(".popup__submit_edit");
const buttonSubmitAva = document.querySelector(".popup__submit_edit-ava");

function handleProfileFormSubmit(e) {
  e.preventDefault();
  updateButtonCaption(buttonSubmitProfie, "Сохранение...");
  editUserInfo(userName.value, userDescription.value)
    .then((userData) => {
      profileName.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closePopup(profileEditPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateButtonCaption(buttonSubmitProfie, "Сохранить");
    });
}
function handleProfileAvaFormSubmit(e) {
  e.preventDefault();
  updateButtonCaption(buttonSubmitAva, "Сохранение...");
  editUserAvatar(userAvatar.value)
    .then((userData) => {
      profileAva.src = userData.avatar;
      closePopup(profileEditAvaPopup);
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateButtonCaption(buttonSubmitAva, "Сохранить");
    });
}
// export let userInfo;

// getUserInfo().then((result) => {
//   userInfo = result;
//   profileName.textContent = result.name;
//   profileDescription.textContent = result.about;
//   profileAva.src = result.avatar;
// });

export {
  handleProfileFormSubmit,
  handleProfileAvaFormSubmit,
  profileEditPopup,
  profileAva,
  userDescription,
  userName,
  profileName,
  profileDescription,
  profileForm,
  profileEditPopupOpen,
  profileEditPopupClose,
  profileAvaForm,
  profileEditAvaPopupClose,
  profileEditAvaPopupOpen,
  profileEditAvaPopup,
};
