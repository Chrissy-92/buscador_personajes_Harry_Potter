import { useState } from "react";
import "../styles/App.scss";
import data from "../data/characters.json";

function App() {
  const [characters, setCharacters] = useState(data);

  return (
    <div className="div__container">
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>
      <main className="main">
        <form className="form__search">
          <div>
            <label htmlFor="fullname">Busca por personaje: </label>
            <input onInput={""} type="text" name="fullname" id="fullname" />
          </div>
        </form>
        <ul className="list__characters">
          {characters.map((eachCharacterObj) => (
            <li key={eachCharacterObj.id} className="item__character">
              <img className="img__character" src={eachCharacterObj.image} />
              <p className="data__character"> {eachCharacterObj.name} </p>
              <p className="data__character"> {eachCharacterObj.species} </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
