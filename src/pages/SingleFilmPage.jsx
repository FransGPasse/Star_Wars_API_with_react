//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

//Skapar min SingleFilmPage-komponent
const SingleFilmPage = () => {
  const [film, setFilm] = useState();
  const { id } = useParams();

  const getFilmFromAPI = async (id) => {
    //Hämtar datan från API-hämtaren
    const data = await API.getFilmFromAPI(id);
    setFilm(data);
  };

  useEffect(() => {
    getFilmFromAPI(id);
  }, [id]);

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div className="person-page">
      <h1>Here's the Star Wars character!</h1>
      <div className="card-container">
        <Card className="person-card">
          <Card.Header>
            <Card.Title>{film.title}</Card.Title>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleFilmPage;
