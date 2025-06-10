import { useEffect, useState } from "react";
import "../styles/App.scss";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const handleInputFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  const filteredCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(filterCharacter.toLocaleLowerCase())
  );

  return (
    <div className="div__container">
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>
      <main className="main">
        <form className="form__search">
          <label htmlFor="fullname">Busca por personaje: </label>
          <input
            onInput={handleInputFilterCharacter}
            value={filterCharacter}
            className="input__search"
            type="text"
            name="fullname"
            id="fullname"
          />
        </form>
        <CharacterList characters={filteredCharacters} />
      </main>
    </div>
  );
}

export default App;
