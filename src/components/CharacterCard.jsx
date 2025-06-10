function CharacterCard({ eachCharacterObj }) {
  return (
    <>
      <img
        className="img__character"
        src={
          eachCharacterObj.image ||
          "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
        }
      />
      <p className="data__character"> {eachCharacterObj.name} </p>
      <p className="data__character"> {eachCharacterObj.species} </p>
    </>
  );
}

export default CharacterCard;
