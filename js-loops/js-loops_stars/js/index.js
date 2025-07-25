console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.setAttribute(
      "src",
      i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg"
    );

    starContainer.append(star);

    star.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(star);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(0);
