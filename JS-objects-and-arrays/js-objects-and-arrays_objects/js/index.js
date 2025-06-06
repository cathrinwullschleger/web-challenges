console.clear();

// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "Lisa",
  age: 28,
  email: "lisa@gmail.de",
};

// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = "Alex";
const ageOfAlex = 24;

//Sollte es nicht eigetnlich so aussehen?
//Woher weiß Javascript, dass wir den Namen von personAlex ändern wollen, wenn wir den Namen des Objekts nicht angeben?

//personAlex.name = Hans;
//personAlex.Alex = 46;

// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

const personToChange = {
  name: "Kim",
  age: 24,
};

personToChange.name = "Alex";
personToChange.age = 35;

// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 5;
petPluto.breed = "husky";

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
