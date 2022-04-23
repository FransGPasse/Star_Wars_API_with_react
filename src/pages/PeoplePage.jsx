//Importerar allt jag behöver
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import API from "../services/API";

//Skapar min PeoplePage-komponent
const PeoplePage = () => {
  const [people, SetPeople] = useState([]);

  const getPeopleFromAPI = async () => {
    //Hämtar alla karaktärer från API:n
    const data = await API.getPeopleFromAPI();

    SetPeople(data);
  };

  useEffect(() => {
    getPeopleFromAPI();
  }, []);

  console.log(people);

  console.log(people.results);

  const mappedPeople = people.results.map((character) => {
    return character.name;
  });

  console.log("Här är mappedPeople:", mappedPeople);

  return (
    <div className="people-page">
      <h1>Welcome to the Star Wars API, built with React!</h1>
      {mappedPeople.length > 0 && (
        <ListGroup>
          {mappedPeople.map((character) => (
            <ListGroup.Item>{character}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {mappedPeople.length === 0 && <p>No characters found...</p>}
    </div>
  );
};

export default PeoplePage;
