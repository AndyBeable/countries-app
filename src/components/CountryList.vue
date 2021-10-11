<template>
  <ul>
    <li
      v-for="country in countries"
      :key="country.name"
      :flag="country.flag"
      :name="country.name"
      :population="country.population"
      :region="country.region"
      :capital="country.capital"
    >
      <CountryItem />
    </li>
  </ul>
</template>

<script>
import Api from "../api/countries";
import CountryItem from "../components/CountryItem.vue";

export default {
  name: "CountryList",
  components: {
    CountryItem,
  },

  data() {
    return {
      countries: [],
    };
  },

  mounted() {
    Api.fetch().then(({ data }) => {
      this.countries = data;
      console.log(data);
    });
  },
};
</script>
