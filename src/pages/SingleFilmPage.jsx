//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

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

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div className="person-page">
      <h1>Here's the Star Wars movie!</h1>
      <div className="card-container">
        <Card className="person-card">
          <Card.Header>
            <Card.Title>{film.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>Director: {film.director}</ListGroup.Item>
              <ListGroup.Item>Episode: {film.episode_id}</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleFilmPage;
