import "../../../src/index.css";
import "./SelectForm.css";
import { tribes, genders } from "../../assets/data";

interface SelectFormProps {
  handleSubmit: (e: any) => void;
}

const SelectForm = (props: SelectFormProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <select name="tribe" id="tribe-select">
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
        <select name="gender" id="gender-select">
          {genders.map((gender, i) => {
            return (
              <option id="tribe-option" key={i} value={Object.keys(gender)}>
                {Object.values(gender)}
              </option>
            );
          })}
        </select>
      </div>

      <button type="submit" className="search-button">
        <div className="button-div">Filter</div>
      </button>
    </form>
  );
};

export default SelectForm;
