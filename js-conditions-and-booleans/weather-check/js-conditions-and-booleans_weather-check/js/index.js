// Change this value to test different "weather" conditions.
console.log("How is the weather today?");
const weather = "sunny";

//switch (weather) {
//case "rainy":
//console.log("It's raining, don't forget your umbrella");
// break;
//case "sunny":
// console.log("It's sunny!");
// break;
//case "snowy":
// console.log("It's snowing, stay warm!");
//break;

//default:
//console.log("I'm not sure what the weather is like.");
//}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (weather) {
  case "sunny":
    if (temperature > 20) {
      console.log("It's sunny and warm!");
    } else {
      console.log("It's sunny, but a bit chilly!");
    }
    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella");
    break;
  case "snowy":
    if (temperature < 0) {
      console.log("Freezing snow!");
    } else {
      console.log("It's snowing, stay warm!");
    }
    break;

  default:
    console.log("I'm not sure what the weather is like.");
}
