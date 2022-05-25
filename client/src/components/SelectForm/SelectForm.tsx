// import { useEffect, useState } from "react";
import "../../../src/index.css";
import "./SelectForm.css";

import { tribes } from "../../assets/data";
import { MouseEventHandler } from "react";

type Props = {
  handleSubmit: MouseEventHandler<Element>;
};

const SelectForm = (props: Props) => {
  return (
    <form>
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

      <button className="search-button" onClick={props.handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SelectForm;
