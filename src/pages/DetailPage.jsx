import { Link, useParams } from "react-router";

function DetailPage({ characters }) {
  const params = useParams();
  console.log(params);

  const wizardToShow = characters.find(
    (eachCharacterObj) => eachCharacterObj.name === params.wizardName
  );

  let status = "";
  if (wizardToShow.alive) {
    status = wizardToShow.gender === "female" ? "Viva" : "Vivo";
  } else {
    status = wizardToShow.gender === "female" ? "Muerta" : "Muerto";
  }

  console.log(wizardToShow);
  return (
    <div>
      <img
        src={
          wizardToShow.image ||
          "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
        }
      />
      <h2>{wizardToShow.name}</h2>
      <p>Status: {status}</p>
      <p>Species: {wizardToShow.species}</p>
      <p>Gender: {wizardToShow.gender}</p>
      <p>House: {wizardToShow.house}</p>
      <Link to="/">Volver Atrás</Link>
    </div>
  );
}

export default DetailPage;
