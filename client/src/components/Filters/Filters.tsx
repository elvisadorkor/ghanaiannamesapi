// import { useEffect, useState } from "react";
import "../../../src/index.css";

const tribes = [
  { null: "-- Select a tribe --" },
  { fante: "Fante" },
  { ashanti: "Ashanti" },
  { ga: "Ga-Adange" },
  { ewe: "Ewe" },
  { "mole-dagbon": "Mole-Dagbon" },
  { guan: "Guan" },
  { dagomba: "Dagomba" },
];

const Filters = () => {
  return (
    <section>
      <div>
        <select name="tribes" id="tribe-select">
          {tribes.map((tribe, i) => {
            return (
              <option id="tribe-option" key={i} value={Object.keys(tribe)}>
                {Object.values(tribe)}
              </option>
            );
          })}
          ;
        </select>
      </div>

      <div>
        <select name="genders" id="gender-select">
          <option value="">-- Select gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
