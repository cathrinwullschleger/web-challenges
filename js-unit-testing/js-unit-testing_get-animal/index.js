export function getAnimal(animalPluralName) {
  if (animalPluralName === "cats") {
    return "I totally love cats!";
  } else if (typeof animalPluralName === "string") {
    return `I like ${animalPluralName}!`;
  } else {
    return "I do not like animals at all!";
  }
}
