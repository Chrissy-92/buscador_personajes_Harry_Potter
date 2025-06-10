import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <ul className="list__characters">
      {characters.map((eachCharacterObj) => (
        <li key={eachCharacterObj.id} className="item__character">
          <CharacterCard eachCharacterObj={eachCharacterObj} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
