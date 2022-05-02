//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import { Link, useParams } from "react-router-dom";

//Skapar min SingleFilmPage-komponent
const SingleFilmPage = () => {
  const [film, setFilm] = useState();
  const params = useParams();

  const getFilmFromAPI = async (id) => {
    //Hämtar datan från API-hämtaren
    const data = await API.getFilmFromAPI(id);
    setFilm(data);
  };

  useEffect(() => {
    getFilmFromAPI(params.id);
  }, [params.id]);

  //Johans helper function för att få ut ett ID från URL:n, tack så mycket
  const getIDFromURL = (url) => {
    const [_endpoint, id] = url
      .replace("https://swapi.dev/api/people", "")
      .slice(0, -1)
      .split("/");

    return id + _endpoint;
  };

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page film-page">
      <div className="card film-card">
        <h2 className="name">{film.title}</h2>
        <h4>Episode {film.episode_id}</h4>
        <ul className="film-info">
          <li>
            Director: <span>{film.director}</span>
          </li>
          <li>
            Producers: <span>{film.producer}</span>
          </li>
          <br />
          <li>
            Released on: <span>{film.release_date}</span>
          </li>
          <br />
          <p>
            <span>Opening crawl:</span>
          </p>
          <li className="opening-crawl"> "{film.opening_crawl}"</li>
          <br />
        </ul>
        <ul className="char-info">
          {film &&
            film.characters.map((character) => (
              <Link to={`/people/${getIDFromURL(character)}`} key={character}>
                <li className="link">Character {getIDFromURL(character)}</li>
              </Link>
            ))}
        </ul>
      </div>
      <Link to="/films" className="button">
        Back to list of films
      </Link>
    </div>
  );
};

export default SingleFilmPage;
