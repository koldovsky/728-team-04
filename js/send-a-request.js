(function () {
  const formSendRequest = document.querySelector(".send-request__form");
  const fullName = document.querySelector(".send-request__form-fullname");
  const tel = document.querySelector(".send-request__form-tel");
  const email = document.querySelector(".send-request__form-email");

  const fullNameError = document.querySelector(
    ".send-request__form-fullname-error"
  );
  const telError = document.querySelector(".send-request__form-tel-error");
  const emailError = document.querySelector(".send-request__form-email-error");

  function showSuccess(input, errorTextArea) {
    errorTextArea.innerText = "";
    if (input.classList.contains("send-request__form-input-err")) {
      input.classList.remove("send-request__form-input-err");
    }
  }

  function showError(input, errorTextArea, errorText) {
    errorTextArea.innerText = errorText;
    if (!input.classList.contains("send-request__form-input-err")) {
      input.classList.add("send-request__form-input-err");
    }
  }

  function checkLength(input, errorTextArea, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        errorTextArea,
        `${input["name"]} must be at least ${min} characters`
      );
      return false;
    } else if (input.value.length > max) {
      showError(
        input,
        errorTextArea,
        `${input["name"]} must be less than ${max} characters`
      );
      return false;
    } else {
      showSuccess(input, errorTextArea);
      return true;
    }
  }

  function checkPhone(input, errorTextArea) {
    const re = /^[0-9]{10,12}$/;
    if (re.test(input.value.trim())) {
      showSuccess(input, errorTextArea);
      return true;
    } else {
      showError(
        input,
        errorTextArea,
        "Incorrect. Please enter 10 or 12 digits"
      );
      return false;
    }
  }

  function checkEmail(input, errorTextArea) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input, errorTextArea);
      return true;
    } else {
      showError(input, errorTextArea, "Email is not valid");
      return false;
    }
  }

  fullName.addEventListener("focusout", (event) =>
    checkLength(fullName, fullNameError, 3, 15)
  );

  tel.addEventListener("focusout", (event) => checkPhone(tel, telError));

  email.addEventListener("focusout", (event) => checkEmail(email, emailError));

  formSendRequest.addEventListener("submit", function (e) {
    if (
      !checkLength(fullName, fullNameError, 3, 15) &&
      !checkPhone(tel, telError) &&
      !checkEmail(email, emailError)
    ) {
      e.preventDefault();
    }
  });
})();
