export const cards = [
  {
    question:
      "In the Kingdom Hearts series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    isBookmarked: false,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["hewhomustnotbenamed", "danielradcliffe", "abracadabra"],
    isBookmarked: false,
  },
  {
    question:
      'In the game series "The Legend of Zelda" what is the name of the main character?',
    answer: "Link",
    tags: ["linktothepast", "linkbetweenworlds", "linkbetweenages"],
    isBookmarked: false,
  },
];

export function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);
}

const cardList = document.querySelector(".card-list");
const newCardElement = Card(newCard);
cardList.prepend(newCardElement);

event.target.reset();
event.target.elements.question.focus();
// To prevent the need to rerender, we add the new card to the DOM directly
export function Form() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = /* html */ `
		<label for="question">Your question:</label>
		<textarea
			id="question"
			rows="7"
			name="question"
			maxlength="150"
			data-js="input-question"
		></textarea>
		<span class="form__character-count">
			<span data-js="amount-left-question"></span> characters left
		</span>
		<label for="answer">Your answer:</label>
		<textarea
			id="answer"
			rows="7"
			name="answer"
			maxlength="150"
			data-js="input-answer"
		></textarea>
		<span class="form__character-count">
			<span data-js="amount-left-answer"></span> characters left
		</span>
		<label for="tags">Tags:</label>
		<input id="tags" type="text" name="tags" />
		<button class="form__submit-button" type="submit">Submit</button>
	`;
  const formFields = form.querySelectorAll('[data-js*="input"]');
  const counterOutputs = form.querySelectorAll("[data-js*=amount-left]");

  formFields.forEach((formField, index) => {
    counterOutputs.forEach((output) => {
      output.innerText = formField.maxLength;
    });
    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      counterOutputs[index].innerText = currentAmountLeft;
    });
  });

  form.addEventListener("submit", handleFormSubmit);

  return form;
}
const formFields = form.querySelectorAll('[data-js*="input"]');
const counterOutputs = form.querySelectorAll("[data-js*=amount-left]");

formFields.forEach((formField, index) => {
  counterOutputs.forEach((output) => {
    output.innerText = formField.maxLength;
  });
  formField.addEventListener("input", () => {
    const currentAmountLeft = formField.maxLength - formField.value.length;
    counterOutputs[index].innerText = currentAmountLeft;
  });
});

form.addEventListener("submit", handleFormSubmit);

return form;
