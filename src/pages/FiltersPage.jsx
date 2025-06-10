import CharacterList from "../components/CharacterList";
function FiltersPage({
  filteredCharacters,
  filters,
  handleInputFilter,
  handleResetFilters,
}) {
  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()} className="form__search">
        <label className="label__search" htmlFor="name">
          Busca por personaje:{" "}
        </label>
        <input
          className="input__search"
          onInput={handleInputFilter}
          value={filters.name}
          type="text"
          name="name"
          id="name"
        />
        <br />
        <label className="label__select" htmlFor="house">
          Selecciona la casa:{" "}
        </label>
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
        <br />
        <button className="reset-button" onClick={handleResetFilters}>
          <i class="fa-solid fa-arrow-rotate-right"></i>
          Reset
        </button>
      </form>
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default FiltersPage;
