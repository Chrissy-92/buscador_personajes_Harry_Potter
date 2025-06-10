import CharacterList from "../components/CharacterList";
function FiltersPage({ filteredCharacters, filters, handleInputFilter }) {
  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()} className="form__search">
        <label htmlFor="name">Busca por personaje: </label>
        <input
          className="input__search"
          onInput={handleInputFilter}
          value={filters.name}
          type="text"
          name="name"
          id="name"
        />
        <br />
        <label htmlFor="house">Selecciona la casa: </label>
        <select
          className="select__house"
          onInput={handleInputFilter}
          value={filters.house}
          name="house"
          id="house"
        >
          <option value="">All Houses Howgarts</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </form>
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default FiltersPage;
