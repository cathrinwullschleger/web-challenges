console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData.entries());
  console.log("Formulardaten:", data);
  event.target.reset();
  event.target.querySelector('[name="firstName"]').focus();
});
