//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

//Skapar min PeoplePage-komponent
const PeoplePage = () => {
  const [people, setPeople] = useState("");
  const [page, setPage] = useState(0);

  const getPeopleFromAPI = async () => {
    //Hämtar datan från API-hämtaren
    const data = await API.getPeopleFromAPI();
    setPeople(data);
  };

  useEffect(() => {
    getPeopleFromAPI();
  }, []);

  /*  Här försökte jag först skapa en variabel med de mappade karaktärerna och sen sätta ut de som props men fick det ej att funka. Eller snarare, det funkade men bara enstaka gånger

  const mappedPeople = people.results.map((character) => {
    return character;
  });

  return (
    <div className="people-page">
      <h1>Welcome to the Star Wars API, built with React!</h1>
      {mappedPeople.length > 0 && (
        <ListGroup>
          {mappedPeople.map((character) => (
            <ListGroup.Item>{character.name}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {mappedPeople.length === 0 && <p>No characters found...</p>}
    </div>
  );
}; */

  return (
    <div className="people-card bg-dark">
      <h1 className="people-card bg-dark text-light">
        Here's a list of Star Wars characters!
      </h1>
      <div className="card-container">
        {people &&
          people.results.map((character) => (
            <Card>
              <Card.Header>
                <Card.Title
                  action
                  as={Link}
                  to={`https://swapi.dev/api/people/`}
                >
                  {character.name}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item className="text-info">
                    Gender: {character.gender}
                  </ListGroup.Item>
                  <ListGroup.Item className="text-info">
                    Birth year: {character.birth_year}
                  </ListGroup.Item>
                  <ListGroup.Item className="text-info">
                    Hair color: {character.hair_color}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default PeoplePage;
