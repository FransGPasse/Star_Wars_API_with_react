//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import ListGroup from "react-bootstrap/ListGroup";
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

    return id;
  };

  return (
    <div className="films-page">
      <h1>Here's a list of Star Wars films!</h1>
      <div className="card-container">
        {films &&
          films.results.map((film) => (
            <div className="card">
              <h2 className="name">{film.title}</h2>
              <ul>
                <li>Episode {film.episode_id}</li>
                <li>Director: {film.director}</li>
                <li>Released on {film.release_date}</li>
                <li>"Opening crawl": {film.opening_crawl}</li>
                <li>Producers: {film.producer}</li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllFilmsPage;
