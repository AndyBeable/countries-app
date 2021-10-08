<template>
  <ul>
    <li v-for="country in countries" :key="country.name">{{ country.name }}</li>
  </ul>
</template>

<script>
import Api from "../api/countries";

export default {
  name: "CountryList",

  data() {
    return {
      countries: [],
    };
  },

  mounted() {
    Api.fetch().then(({ data }) => {
      this.countries = data;
    });
  },
};
</script>
