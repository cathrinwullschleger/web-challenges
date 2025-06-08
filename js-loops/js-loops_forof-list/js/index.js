console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--

for (const programmingLanguage of programmingLanguages) {
  // for of Schleife von dem Array
  const li = document.createElement("li"); // neues Element li
  li.textContent = programmingLanguage; // inhalt von programmingLanguage ins li

  ol.append(li);
}
