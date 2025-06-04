console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

let hasTriedToSubmit = false;

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
  successMessage.style.display = "block";
}

function hideSuccessMessage() {
  successMessage.style.display = "none";
}

// ✅ Erfolgsmeldung ausblenden am Anfang
hideTosError();
hideSuccessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hasTriedToSubmit = true;

  if (!tosCheckbox.checked) {
    showTosError();
    hideSuccessMessage();
    return;
  }

  hideTosError();
  showSuccessMessage();

  // eslint-disable-next-line no-alert
  alert("Complaint submitted!");
});

tosCheckbox.addEventListener("change", () => {
  if (!hasTriedToSubmit) return;

  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
