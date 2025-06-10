import { Link, useParams } from "react-router";
import Gryffindor from "../images/01_gryffindor.jpeg";
import Slytherin from "../images/02_slytherin.jpeg";
import Hufflepuff from "../images/03_hufflepuff.jpeg";
import Ravenclaw from "../images/04_ravenclaw.jpeg";
import HogwartsGoldenEmblem from "../images/hogwarts-golden-emblem.jpg";
import hogwartsLasCuatroCasas from "../images/hogwarts_LasCuatroCasas.jpg";

function DetailPage({ characters }) {
  const params = useParams();

  const wizardToShow = characters.find(
    (eachCharacterObj) => eachCharacterObj.name === params.wizardName
  );

  let status = "";
  if (wizardToShow.alive) {
    status = wizardToShow.gender === "female" ? "Viva" : "Vivo";
  } else {
    status = wizardToShow.gender === "female" ? "Muerta" : "Muerto";
  }

  let hogwartsHouseImageSrc = "";
  if (wizardToShow.house === "Gryffindor") {
    hogwartsHouseImageSrc = Gryffindor;
  } else if (wizardToShow.house === "Slytherin") {
    hogwartsHouseImageSrc = Slytherin;
  } else if (wizardToShow.house === "Hufflepuff") {
    hogwartsHouseImageSrc = Hufflepuff;
  } else if (wizardToShow.house === "Ravenclaw") {
    hogwartsHouseImageSrc = Ravenclaw;
  } else if (wizardToShow.house === "") {
    hogwartsHouseImageSrc = HogwartsGoldenEmblem;
  }

  return (
    <>
      <div className="wizard__card">
        <img src={wizardToShow.image || hogwartsLasCuatroCasas} />
        <div className="wizard__information">
          <h2>{wizardToShow.name}</h2>
          <p>Status: {status}</p>
          <p>Species: {wizardToShow.species}</p>
          <p>Gender: {wizardToShow.gender}</p>
          <p>House: {wizardToShow.house}</p>
          <div className="div__hogwartsHouse">
            <img
              src={hogwartsHouseImageSrc}
              alt={`Imagen de la casa ${wizardToShow.house}`}
            />
          </div>
        </div>
      </div>
      <Link className="link" to="/">
        <p className="p__link">
          <i class="fa-solid fa-angle-left"></i>
          Volver Atrás
        </p>
      </Link>
    </>
  );
}

export default DetailPage;
