import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

const getPeopleFromAPI = async () => {
  const res = await axios.get(`${BASE_URL}people`);
  return res.data;
};

const getPersonFromAPI = async (id) => {
  const res = await axios.get(`${BASE_URL}people/${id}`);
  return res.data;
};

//Johans helper function för att
const getIdFromUrl = (url) => {
  const [_endpoint, id] = url
    .replace("https://swapi.dev/api/", "")
    .slice(0, -1)
    .split("/");

  return id;
};

export default {
  getPeopleFromAPI,
  getPersonFromAPI,
  getIdFromUrl,
};
