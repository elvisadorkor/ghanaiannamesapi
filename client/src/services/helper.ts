import axios from "axios";
import { Tribe } from "../types";

const url = "https://localhost:7112/api/tribenames";

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
  const config = {
    params: { gender },
  };
  const response = await axios.get(`${url}/${tribe}`, config);
  return response.data;
}

export { setRandomIndex, fetchAllTribeNames, fetchSpecificGenderNames };
