import { Tribe } from "../../types";
import { daysOfTheWeek } from "../../assets/data";
import "./NamesTable.css";

const NamesTable = ({ tribes }: { tribes: Tribe[] }) => {
  return (
    <section className="tribes-section">
      <table>
        <thead>
          <tr>
            <th>Tribes</th>
            <th>Gender</th>
            {daysOfTheWeek.map((d) => (
              <th>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tribes.map((t, i) => (
            <>
              {/* Male row */}
              <tr>
                <td className="larger">
                  <strong>{t.name}</strong>
                </td>
                <td>Male</td>
                {Object.values(t.maleNames).map((names) => (
                  <td>
                    {names.map((n: string) => (
                      <div>{n}</div>
                    ))}
                  </td>
                ))}
              </tr>
              <br />
              {/* Female row */}
              <tr key={t.id}>
                <td></td>
                <td>Female</td>
                {Object.values(t.femaleNames).map((names) => (
                  <td>
                    {names.map((n: string) => (
                      <div>{n}</div>
                    ))}
                  </td>
                ))}
              </tr>
              <br />
              <br />
            </>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NamesTable;
