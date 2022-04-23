//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import ListGroup from "react-bootstrap/ListGroup";

//Skapar min PeoplePage-komponent
const PeoplePage = () => {
  const [people, setPeople] = useState("");

  const getPeopleFromAPI = async () => {
    //Hämtar alla karaktärer från API:n
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
    <div className="people-page">
      <h1>Welcome to the Star Wars API, built with React!</h1>
      {people && (
        <ListGroup>
          {people.results.map((character) => (
            <ListGroup.Item>{character.name}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default PeoplePage;
