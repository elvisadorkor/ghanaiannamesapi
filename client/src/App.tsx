import { MouseEvent, useState } from "react";
// import axios from "axios";
import "./index.css";
import WelcomeGreetings from "./components/WelcomeGreetings/WelcomeGreetings";
import ghanaFlag from "../public/flag_of_ghana.svg";
import SelectForm from "./components/SelectForm/SelectForm";

function App() {
  const [index, setIndex] = useState<number>(0),
    [greeting, setGreeting] = useState<string>("Welcome!");

  function handleSubmit(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    console.log(`${e.type}`);
  }

  return (
    <div className="App">
      <header className="header">
        <img src={ghanaFlag} alt="Ghanaian flag" className="ghana-flag" />
        <h1>Ghanaian Day Names</h1>
      </header>
      <WelcomeGreetings
        index={index}
        setIndex={setIndex}
        greeting={greeting}
        setGreeting={setGreeting}
      />
      <SelectForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
