import { Link } from "react-router";

function CharacterCard({ eachCharacterObj }) {
  return (
    <Link className="link" to={"/detail/" + eachCharacterObj.name}>
      <img
        className="img__character"
        src={
          eachCharacterObj.image ||
          "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
        }
      />
      <div className="character__info">
        <h4> {eachCharacterObj.name} </h4>
        <p> {eachCharacterObj.species} </p>
      </div>
    </Link>
  );
}

export default CharacterCard;
