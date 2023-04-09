const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, addButton, config) => {
  if (hasInvalidInput(inputList, config)) {
    // addButton.classList.remove(config.inactiveButtonClass);
    // addButton.setAttribute("disabled", true);
    disableButton(addButton, config);
    // console.log(config.inactiveButtonClass);
  } else {
    // addButton.classList.add(config.inactiveButtonClass);
    // addButton.removeAttribute("disabled");
    enabledButton(addButton, config);
    // console.log(config.inactiveButtonClass);
  }
};
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);
  formElement.addEventListener("reset", () => {
    disableButton(buttonElement, config);
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      toggleButtonState(inputList, buttonElement, config);
      checkInputValidity(formElement, inputElement, config);
    });
  });
};
function disableButton(addButton, config) {
  addButton.classList.remove(config.inactiveButtonClass);
  addButton.setAttribute("disabled", true);
  // addButton.disabled = true;
}

function enabledButton(addButton, config) {
  addButton.classList.add(config.inactiveButtonClass);
  // addButton.disbaled = false;
  addButton.removeAttribute("disabled");
}
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

export { enableValidation };
