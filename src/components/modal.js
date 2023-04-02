const popupCloseOverlay = document.querySelectorAll(".popup");
//func open close modal window
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

const popupCloseEsc = (evt) => {
  if (
    evt.key === "Escape" ||
    evt.target.classList.contains("popup_opened") ||
    evt.target.classList.contains("popup__close")
  ) {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};
popupCloseOverlay.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      const overlayClose = e.target.closest(".popup");
      closePopup(overlayClose);
    }
  });
});

export { openPopup, closePopup };
