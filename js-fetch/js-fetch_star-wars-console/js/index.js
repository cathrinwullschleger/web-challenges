console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("data: ", data);
  console.log("eye-color of R2-D2: ", data.results[2].eye_color);
}

fetchData();
