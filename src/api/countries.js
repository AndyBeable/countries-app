import axios from "axios";

const fields = ["name", "population", "region", "flags", "capital"];

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

export default { fetch, search };
