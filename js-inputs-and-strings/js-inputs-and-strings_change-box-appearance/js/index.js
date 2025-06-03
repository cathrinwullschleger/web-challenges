console.clear();
const inputColor = document.querySelector('[data-js="input-color"');
const inputBorderRadius = document.querySelector('[data-js="input-radius"');
const inputRotation = document.querySelector('[data-js="input-rotation"');
const box = document.querySelector('[data-js="box"');

inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  box.style.background = `hsl(${hue}, 100%, 60%)`;
});
inputBorderRadius.addEventListener("input", () => {
  const radiusValue = inputBorderRadius.value;
  const maxRadius = inputBorderRadius.max;

  if (radiusValue === maxRadius) {
    box.style.borderRadius = "50%"; // Macht es rund (Kreis) weil CSS bei 50% versteht, dass es den halben dhalben Durchmesser (Radius) der Box nimmt – in alle Richtungen.
  } else {
    box.style.borderRadius = `${radiusValue}px`; // Normales border-radius ( Runde Ecken mit festen Pixelwerten)
  }
});

inputRotation.addEventListener("input", () => {
  const rotationValue = inputRotation.value;
  box.style.transform = `rotate(${rotationValue}deg)`;
});
