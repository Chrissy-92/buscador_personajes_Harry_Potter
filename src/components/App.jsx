import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "../styles/App.scss";
import FiltersPage from "../pages/FiltersPage";
import DetailPage from "../pages/DetailPage";

function App() {
  const [characters, setCharacters] = useState([]);
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

  const handleInputFilter = (ev) => {
    const { id, value } = ev.target;
    setFilters({
      ...filters,
      [id]: value,
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
        <Routes>
          <Route
            path="/"
            element={
              <FiltersPage
                filteredCharacters={filteredCharacters}
                filters={filters}
                handleInputFilter={handleInputFilter}
              />
            }
          />
          <Route
            path="/detail/:wizardName"
            element={<DetailPage characters={characters} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
