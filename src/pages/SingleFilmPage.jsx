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
    <div className="person-page">
      <h1>Here's the Star Wars movie!</h1>

      <h2 className="name">{film.title}</h2>
      <ul>
        <li>Episode {film.episode_id}</li>
        <br />
        <li>Director: {film.director}</li>
        <li>Producers: {film.producer}</li>
        <br />
        <li>Released on {film.release_date}</li>
        <br />
        <li>"Opening crawl": {film.opening_crawl}</li>
        {/*         <li>Characters {film.characters}</li> */}
        <br />
      </ul>
      <ul className="char-info">
        {film &&
          film.characters.map((character) => (
            <Link to={`/people/${getIDFromURL(character)}`} key={character}>
              <li className="link">Character {getIDFromURL(character)}</li>
            </Link>
          ))}
        <li></li>
      </ul>
      <Link to="/films" className="button">
        Back to list of films
      </Link>
    </div>
  );
};

export default SingleFilmPage;
