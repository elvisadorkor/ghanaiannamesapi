import axios from "axios";

//Set random numbers for the wlecome greetings array
function setRandomIndex(max: number, index: number) {
  let randomIndex = Math.floor(Math.random() * max);
  if (randomIndex === index) {
    setRandomIndex(max, index);
  }
  return randomIndex;
}

/*Fetch names from server based on user selection of tribe and gender*/
async function fetchNames(tribe: string, gender: string) {
  const url = "/api/names";
  const response = await axios.get(url, {
    params: { tribe, gender },
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export { setRandomIndex, fetchNames };
