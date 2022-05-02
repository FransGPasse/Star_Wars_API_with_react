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

    return id + _endpoint;
  };

  if (!person) {
    return <p>There's no character with that ID...</p>;
  }

  return (
    <div className="page person-page">
      <div className="card person-card">
        <h2 className="name">{person.name}</h2>
        <ul className="char-info">
          <li>
            Gender: <span>{person.gender}</span>
          </li>
          <br />
          <li>
            Height: <span>{person.height} cm</span>
          </li>
          <li>
            Weight: <span>{person.mass} kg</span>
          </li>
          <br />
          <li>
            Skin color: <span>{person.skin_color}</span>
          </li>
          <li>
            Hair color: <span>{person.hair_color}</span>
          </li>
          <li>
            Eye color: <span>{person.eye_color}</span>
          </li>
          <br />
          <li>
            Birth year: <span>{person.birth_year}</span>
          </li>
        </ul>
        <ul className="char-films">
          <h3>Appears in: </h3>
          {films &&
            films.map((film) => (
              <Link to={`/films/${getIDFromURL(film)}`} key={film}>
                <li className="link">Movie {getIDFromURL(film)}</li>
              </Link>
            ))}
        </ul>
      </div>
      <Link to="/people" className="button">
        Back to list of characters
      </Link>
    </div>
  );
};

export default PersonPage;
