import "../../../src/index.css";
import "./SelectForm.css";
import { tribes, genders } from "../../assets/data";

interface Params {
  tribe: string;
  gender: string;
}

interface SelectFormProps {
  params: Params;
  setParams: ({ tribe, gender }: { tribe: string; gender: string }) => void;
}

const SelectForm = (props: SelectFormProps) => {
  function handleSubmit(e: any): void {
    e.preventDefault();
    let tribe = "",
      gender = "";
    const selectedTribe = e.target.tribe.value as string,
      selectedGender = e.target.gender.value as string;
    if (selectedTribe !== "null") {
      tribe = selectedTribe;
    }
    if (selectedGender !== "null") {
      gender = selectedGender;
    }
    const userParams = { tribe, gender };
    props.setParams(userParams);
  }

  return (
    <form onSubmit={handleSubmit}>
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
