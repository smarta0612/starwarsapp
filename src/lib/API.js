import axios from "axios";

const baseUrl = "https://swapi.dev/api/";

export function getFilms() {
  return axios.get(`${baseUrl}films/`);
}
