import "./index.css";
import ghanaFlag from "../public/flag_of_ghana.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={ghanaFlag} alt="Ghanaian flag" className="ghana-flag" />

        <h1>Ghanaian Day Names</h1>
      </header>
      <section>More components to follow</section>
    </div>
  );
}

export default App;
