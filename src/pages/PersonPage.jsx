//Importerar allt jag behöver
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../services/API";
import Button from "react-bootstrap/Button";

//Skapar min PersonPage-komponent
const PersonPage = () => {
  //Alla states jag behöver
  const [person, setPerson] = useState();
  const { id } = useParams();

  //Hämtar en specifik person med angivet ID
  const getPerson = async (id) => {
    const data = await API.getPersonFromAPI(id);
    setPerson(data);
  };

  useEffect(() => {
    getPerson(id);
  }, [id]);

  return (
    <>
      <h1>Welcome to the Star Wars API, built with!</h1>
      <h1>{person.name}</h1>
      <Button variant="success" onClick={getPerson}>
        Show a specific Star Wars character!
      </Button>
    </>
  );
};

export default PersonPage;
