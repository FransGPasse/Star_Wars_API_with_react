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

const getFilmsFromAPI = async () => {
  const res = await axios.get(`${BASE_URL}films`);
  return res.data;
};

const getFilmFromAPI = async (id) => {
  const res = await axios.get(`${BASE_URL}films/${id}`);
  return res.data;
};

const getNextPage = async (endpoint) => {
  const res = await axios.get(`${endpoint}`);
  return res.data;
};

const functions = {
  getPeopleFromAPI,
  getPersonFromAPI,
  getFilmsFromAPI,
  getFilmFromAPI,
  getNextPage,
};

export default functions;
