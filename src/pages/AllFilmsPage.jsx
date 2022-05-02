//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import { Link } from "react-router-dom";

//Skapar min AllFilmsPage-komponent
const AllFilmsPage = () => {
  const [films, setFilms] = useState("");

  const getFilmsFromAPI = async () => {
    //Hämtar datan från API-hämtaren
    const data = await API.getFilmsFromAPI();
    setFilms(data);
  };

  useEffect(() => {
    getFilmsFromAPI();
  }, []);

  //Johans helper function för att få ut ett ID från URL:n, tack så mycket
  const getIDFromURL = (url) => {
    const [_endpoint, id] = url
      .replace("https://swapi.dev/api/films", "")
      .slice(0, -1)
      .split("/");

    return id + _endpoint;
  };

  return (
    <div className="page movie-page">
      <h1>Here's a list of Star Wars films!</h1>
      <div className="films-card-wrapper">
        {films &&
          films.results.map((film) => (
            <div className="card" key={film.title}>
              <h2 className="name">{film.title}</h2>
              <ul>
                <p>Episode {film.episode_id}</p>
              </ul>
              <Link className="button" to={`/films/${getIDFromURL(film.url)}`}>
                Read more...
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllFilmsPage;
