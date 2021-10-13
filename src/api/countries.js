import axios from "axios";

export const fetch = () => {
  return axios.get(
    "https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital"
  );
};

export const search = (query) => {
  return axios.get(
    `https://restcountries.com/v3.1/name/${query}?fields=name,population,region,flags,capital`
  );
};
export const filter = (selectedRegion) => {
  return axios.get(
    `https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,population,region,flags,capital`
  );
};

export default { fetch, search, filter };
