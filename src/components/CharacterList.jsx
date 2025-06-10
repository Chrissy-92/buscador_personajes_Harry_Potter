import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <ul className="list__characters">
      {characters.map((eachCharacterObj) => (
        <section className="character__container">
          <li key={eachCharacterObj.id}>
            <CharacterCard eachCharacterObj={eachCharacterObj} />
          </li>
        </section>
      ))}
    </ul>
  );
}

export default CharacterList;
