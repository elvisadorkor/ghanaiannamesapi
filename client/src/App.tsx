import "./index.css";
import WelcomeGreetings from "./components/WelcomeGreetings/WelcomeGreetings";
import ghanaFlag from "../public/flag_of_ghana.svg";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={ghanaFlag} alt="Ghanaian flag" className="ghana-flag" />
        <h1>Ghanaian Day Names</h1>
      </header>
      <WelcomeGreetings />
      <Filters />
    </div>
  );
}

export default App;
