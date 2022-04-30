//Importerar allt jag behöver
import { useState, useEffect } from "react";
import API from "../services/API";
import { Link } from "react-router-dom";

//Skapar min PeoplePage-komponent
const PeoplePage = () => {
  const [people, setPeople] = useState("");
  const [page, setPage] = useState(0);
  const [buttonValue, setButtonValue] = useState("");

  //Hämtar datan från API-hämtaren i en async-funktion
  const getPeopleFromAPI = async () => {
    const data = await API.getPeopleFromAPI();
    //Sätter datan till "setPeople"
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

  //Skapar en funktion som hämtar nästa sida med karaktärer
  const getNextPage = async (endpoint) => {
    const data = await API.getNextPage(endpoint);
    setPeople(data);
  };

  //Bläddrar mellan sidorna
  useEffect(() => {
    if (!people) {
      return;
    }
    if (buttonValue === "next") {
      getNextPage(people.next);
    } else if (buttonValue === "previous") {
      getNextPage(people.previous);
    }
    setButtonValue("");
  }, [page]);

  return (
    <div>
      <div className="card-wrapper">
        {people &&
          people.results.map((character) => (
            <div className="card">
              <h2 className="name">{character.name}</h2>
              {character.films.length <= 1 && (
                <p>Appears in {character.films.length} movie</p>
              )}
              {character.films.length > 1 && (
                <p>Appears in {character.films.length} movies</p>
              )}

              <Link
                className="button"
                to={`/people/${getIDFromURL(character.url)}`}
              >
                Read more...
              </Link>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => {
            setPage((previousValue) => previousValue - 1);
            setButtonValue("previous");
          }}
          disabled={page === 0}
          className="button"
        >
          Previous page
        </button>
        <p className="page-number">{page}</p>
        <button
          onClick={() => {
            setPage((previousValue) => previousValue + 1);
            setButtonValue("next");
          }}
          disabled={people.count / 10 - 1 <= page}
          className="button"
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default PeoplePage;
