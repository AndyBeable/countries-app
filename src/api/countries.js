import axios from "axios";

const fields = ["name", "population", "region", "flags", "capital", "cca3"];

export const fetch = () => {
  return axios.get(
    `https://restcountries.com/v3.1/all?fields=${fields.join(",")}`
  );
};

export const search = (query) => {
  const urlFields = fields.join();

  return axios.get(
    `https://restcountries.com/v3.1/name/${query}?fields=${urlFields}`
  );
};

export const fetchCountry = (code) => {
  return axios.get(`https://restcountries.com/v2/alpha/${code}`);
};

export default { fetch, search, fetchCountry };
