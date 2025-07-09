import Chance from "chance";

const chance = new Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  profession: chance.profession(),
};
export default function handler(request, response) {
  if (!character) {
    response.status(404).json({ status: "no character found" });
    return;
  }
  response.status(200).json(character);
}
