import { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import WelcomeGreetings from "./components/WelcomeGreetings/WelcomeGreetings";
import ghanaFlag from "./assets/flag_of_ghana.svg";
import SelectForm from "./components/SelectForm/SelectForm";
import NamesTable from "./components/NamesTable/NamesTable";

function App() {
  const [index, setIndex] = useState<number>(0),
    [greeting, setGreeting] = useState<string>("Welcome!"),
    [tribeNames, setTribeNames] = useState([]),
    [params, setParams] = useState({ tribe: "", gender: "" });

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

  // function handleSubmit(e: any): void {
  //   e.preventDefault();
  //   let tribe = "",
  //     gender = "";
  //   const selectedTribe = e.target.tribe.value as string,
  //     selectedGender = e.target.gender.value as string;
  //   if (selectedTribe !== "null") {
  //     tribe = selectedTribe;
  //   }
  //   if (selectedGender !== "null") {
  //     gender = selectedGender;
  //   }
  //   const userParams = { tribe, gender };
  //   setParams(userParams);
  //   console.log(params);
  // }

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
      <SelectForm params={params} setParams={setParams} />
      <NamesTable tribes={tribeNames} />
    </div>
  );
}

export default App;
