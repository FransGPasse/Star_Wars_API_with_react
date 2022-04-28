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

  //Johans helper function för att få ut ett ID från URL:n, tack så mycket
  const getIDFromURL = (url) => {
    const [_endpoint, id] = url
      .replace("https://swapi.dev/api/people", "")
      .slice(0, -1)
      .split("/");

    return id;
  };

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
                  as={Link}
                  to={`/people/${getIDFromURL(character.url)}`}
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
