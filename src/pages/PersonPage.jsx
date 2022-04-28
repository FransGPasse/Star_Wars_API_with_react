//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
    <div className="person-page">
      <h1>Here's the Star Wars character!</h1>
      <div className="card-container">
        <Card className="person-card">
          <Card.Header>
            <Card.Title>{person.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>Gender: {person.gender}</ListGroup.Item>
              <ListGroup.Item>Birth year: {person.birth_year}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PersonPage;
