import { Tribe } from "../../types";

const NameRow = ({ tribe, gender }: { tribe: Tribe; gender: string }) => {
  return (
    <tr>
      <td className="larger">
        {gender === "Male" ? <strong>{tribe.name}</strong> : ""}
      </td>
      <td>{gender}</td>
      {Object.values(
        gender === "Male" ? tribe.maleNames : tribe.femaleNames
      ).map((names, i) => (
        <td key={i}>
          {names.map((n: string) => (
            <p key={n}>{n}</p>
          ))}
        </td>
      ))}
    </tr>
  );
};

const TribeRow = ({ tribe }: { tribe: Tribe }) => {
  return (
    <>
      {/* Male row */}
      <NameRow gender="Male" tribe={tribe} />
      {/* Female row */}
      <NameRow gender="Female" tribe={tribe} />
    </>
  );
};

export default TribeRow;
