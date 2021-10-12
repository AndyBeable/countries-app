<template>
  <section class="country__container">
    <div class="country__search__container">
      <SearchBar @search="search" />
      <SearchFilter @filter="filter" />
    </div>
    <ul>
      <li v-for="country in countries" :key="country.name">
        <CountryItem :country="country" />
      </li>
    </ul>
  </section>
</template>

<script>
import Api from "../api/countries";
import CountryItem from "../components/CountryItem.vue";
import SearchBar from "../components/SearchBar.vue";
import SearchFilter from "../components/SearchFilter.vue";

export default {
  name: "CountryList",
  components: {
    CountryItem,
    SearchBar,
    SearchFilter,
  },

  data() {
    return {
      countries: [],
    };
  },

  mounted() {
    this.fetchAll();
  },

  methods: {
    fetchAll() {
      Api.fetch().then(({ data }) => {
        this.countries = data;
      });
    },
    search(query) {
      Api.search(query)
        .then(({ data }) => {
          this.countries = data;
        })
        .catch(() => {
          this.fetchAll();
        });
    },
    filter(selectedRegion) {
      Api.filter(selectedRegion).then(({ data }) => {
        this.countries = data;
      });
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
}

.country__container {
  padding: 0 6rem;
}

.country__search__container {
  display: flex;
  justify-content: space-between;
}
</style>
