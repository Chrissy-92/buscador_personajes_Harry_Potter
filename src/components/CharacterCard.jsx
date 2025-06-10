import { Link } from "react-router";
import hogwartsLasCuatroCasas from "../images/hogwarts_LasCuatroCasas.jpg";

function CharacterCard({ eachCharacterObj }) {
  let characterPhotoInfo = eachCharacterObj.image || hogwartsLasCuatroCasas;

  return (
    <Link className="link" to={"/detail/" + eachCharacterObj.name}>
      <img
        className="img__character"
        src={characterPhotoInfo}
        alt={`Imagen de ${eachCharacterObj.name}`}
      />
      <div className="character__info">
        <h4> {eachCharacterObj.name} </h4>
        <p> {eachCharacterObj.species} </p>
      </div>
    </Link>
  );
}

export default CharacterCard;
