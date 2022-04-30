//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import { Link, useParams } from "react-router-dom";

//Skapar min PersonPage-komponent
const PersonPage = () => {
  const [person, setPerson] = useState();
  const params = useParams();

  const getPersonFromAPI = async (id) => {
    //Hämtar datan från API-hämtaren
    const data = await API.getPersonFromAPI(id);
    setPerson(data);
  };

  useEffect(() => {
    getPersonFromAPI(params.id);
  }, [params.id]);

  if (!person) {
    return <p>There's no character with that ID...</p>;
  }

  return (
    <div className="card">
      <h2>{person.name}</h2>
      <ul className="char-info">
        <li>Gender: {person.gender}</li>
        <hr />
        <li>Height: {person.height} cm</li>
        <li>Weight: {person.weight} kg</li>
        <hr />
        <li>Skin color: {person.skin_color}</li>
        <li>Hair color: {person.hair_color}</li>
        <li>Eye color: {person.eye_color}</li>
        <hr />
        <li>Birth year: {person.birth_year}</li>
        <Link to="/people" className="button">
          Back to list of characters
        </Link>
      </ul>
    </div>
  );
};

export default PersonPage;
