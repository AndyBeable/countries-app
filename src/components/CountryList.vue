<template>
  <div>
    <SearchBar />
    <ul>
      <li v-for="country in countries" :key="country.name">
        <CountryItem
          :name="country.name"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
          :flag="country.flags.png"
          :country="countries"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api/countries";
import CountryItem from "../components/CountryItem.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "CountryList",
  components: {
    CountryItem,
    SearchBar,
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
