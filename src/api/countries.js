import axios from "axios";

export const fetch = () => {
  return axios.get(
    "https://restcountries.com/v2/all?fields=name,population,region,flags,capital"
  );
};

export default { fetch };
