import { Tribe } from "../../types";
import { daysOfTheWeek } from "../../assets/data";
import "./NamesTable.css";
import TribeRow from "../TribeRow/TribeRow";

const NamesTable = ({ tribes }: { tribes: Tribe[] }) => {
  return (
    <section className="tribes-section">
      <table>
        <thead>
          <tr>
            <th>Tribes</th>
            <th>Gender</th>
            {daysOfTheWeek.map((d, i) => (
              <th key={i}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tribes.map((t) => (
            <TribeRow tribe={t} key={t.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NamesTable;
