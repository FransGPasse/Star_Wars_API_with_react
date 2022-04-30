//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import { Link, useParams } from "react-router-dom";

//Skapar min PersonPage-komponent
const PersonPage = () => {
  const [person, setPerson] = useState();
  const [films, setFilms] = useState([]);
  const params = useParams();

  const getPersonFromAPI = async (id) => {
    //Hämtar datan från API-hämtaren
    const data = await API.getPersonFromAPI(id);
    setPerson(data);
    setFilms(data.films);
  };

  useEffect(() => {
    getPersonFromAPI(params.id);
  }, [params.id]);

  //Johans helper function för att få ut ett ID från URL:n, tack så mycket
  const getIDFromURL = (url) => {
    const [_endpoint, id] = url
      .replace("https://swapi.dev/api/films", "")
      .slice(0, -1)
      .split("/");

    return id;
  };

  if (!person) {
    return <p>There's no character with that ID...</p>;
  }

  return (
    <div>
      <div className="card char-card">
        <h2>{person.name}</h2>
        <ul className="char-info">
          <li>Gender: {person.gender}</li>
          <br />
          <li>Height: {person.height} cm</li>
          <li>Weight: {person.mass} kg</li>
          <br />
          <li>Skin color: {person.skin_color}</li>
          <li>Hair color: {person.hair_color}</li>
          <li>Eye color: {person.eye_color}</li>
          <br />
          <li>Birth year: {person.birth_year}</li>
        </ul>
        <ul className="char-films">
          <h3>Appears in: </h3>
          {films &&
            films.map((film) => (
              <Link to={`/films/${getIDFromURL(film)}`}>
                <li>Movie {getIDFromURL(film)}</li>
              </Link>
            ))}
        </ul>
        <Link to="/people" className="button">
          Back to list of characters
        </Link>
      </div>
    </div>
  );
};

export default PersonPage;
