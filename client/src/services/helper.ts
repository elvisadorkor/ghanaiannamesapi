import axios from "axios";
import { Tribe } from "../types";

const url = "/api/tribenames";

//Set random numbers for the wlecome greetings array
function setRandomIndex(max: number, index: number) {
  let randomIndex = Math.floor(Math.random() * max);
  if (randomIndex === index) {
    setRandomIndex(max, index);
  }
  return randomIndex;
}

/*Fetch names from server based on user selection of tribe*/
async function fetchAllTribeNames() {
  const response = await axios.get(url);
  const data = (await response.data) as Tribe[];
  return data;
}

/*Fetch names from server based on user selection of tribe*/
async function fetchSpecificGenderNames(tribe: string, gender: string) {
  const response = await axios.get(url, {
    params: { tribe, gender },
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export { setRandomIndex, fetchAllTribeNames, fetchSpecificGenderNames };
