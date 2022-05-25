import { MouseEvent } from "react";
import "./index.css";
import WelcomeGreetings from "./components/WelcomeGreetings/WelcomeGreetings";
import ghanaFlag from "../public/flag_of_ghana.svg";
import SelectForm from "./components/SelectForm/SelectForm";

function App() {
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
      <WelcomeGreetings />
      <SelectForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
