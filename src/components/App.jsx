import { useEffect, useState } from "react";
import "../styles/App.scss";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  // const [filterCharacter, setFilterCharacter] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    house: "",
  });

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const handleInputFilterCharacter = (ev) => {
    setFilters({
      ...filters,
      name: ev.target.value,
    });
  };

  const handleInputFilterHouse = (ev) => {
    setFilters({
      ...filters,
      house: ev.target.value,
    });
  };

  const filteredCharacters = characters
    .filter((eachCharacter) =>
      eachCharacter.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase())
    )
    .filter((eachCharacter) => eachCharacter.house.includes(filters.house));

  return (
    <div className="div__container">
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>
      <main className="main">
        <form onSubmit={(ev) => ev.preventDefault()} className="form__search">
          <label htmlFor="fullname">Busca por personaje: </label>
          <input
            onInput={handleInputFilterCharacter}
            value={filters.name}
            className="input__search"
            type="text"
            name="fullname"
            id="fullname"
          />
          <select
            onInput={handleInputFilterHouse}
            value={filters.house}
            name="house"
            id="house"
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </form>
        <CharacterList characters={filteredCharacters} />
      </main>
    </div>
  );
}

export default App;
