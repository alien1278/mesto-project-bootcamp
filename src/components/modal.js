const popupCloseOverlays = document.querySelectorAll(".popup");
//func open close modal window
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
}

const handleEscape = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};
popupCloseOverlays.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closePopup(item);
    }
  });
});

function updateButtonCaption(button, caption) {
  button.textContent = caption;
}

export { openPopup, closePopup, updateButtonCaption };
