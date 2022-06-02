import { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import WelcomeGreetings from "./components/WelcomeGreetings/WelcomeGreetings";
import ghanaFlag from "./assets/flag_of_ghana.svg";
import SelectForm from "./components/SelectForm/SelectForm";
import NamesTable from "./components/NamesTable/NamesTable";
import { fetchSpecificGenderNames } from "./services/helper";
import { Tribe } from "./types";

function App() {
  const [index, setIndex] = useState<number>(0),
    [greeting, setGreeting] = useState<string>("Welcome!"),
    [tribeNames, setTribeNames] = useState<Tribe[]>([]),
    [tribe, setTribe] = useState(""),
    [gender, setGender] = useState("");

  //Fetch all tribes and names for initial render
  async function fetchAllTribeNames() {
    try {
      const response = await axios.get("https://localhost:7112/api/tribenames");
      const data = await response.data;
      // console.log(data);
      setTribeNames(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAllTribeNames();
  }, []);

  //Fetch gender-specific names for a given tribe based on user selection
  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    const selectedTribe = e.target.tribe.value as string,
      selectedGender = e.target.gender.value as string;
    if (selectedTribe !== "null") {
      setTribe(selectedTribe);
    }
    if (selectedGender !== "null") {
      setGender(selectedGender);
    }
    const filteredNames = await fetchSpecificGenderNames(tribe, gender);
    console.table(filteredNames);
  }

  return (
    <div className="App">
      <header className="header">
        <img src={ghanaFlag} alt="Ghanaian flag" className="ghana-flag" />
        <h1>Ghanaian Tribe Day Names</h1>
      </header>
      <WelcomeGreetings
        index={index}
        setIndex={setIndex}
        greeting={greeting}
        setGreeting={setGreeting}
      />
      <SelectForm handleSubmit={handleSubmit} />
      <NamesTable tribes={tribeNames} />
    </div>
  );
}

export default App;
