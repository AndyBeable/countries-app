<template>
  <ul>
    <li v-for="country in countries" :key="country.name">
      <CountryItem
        :name="country.name"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :flag="country.flags.png"
      />
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

<style scoped>
ul {
  display: flex;
  justify-content: space-evenly;
}
</style>
