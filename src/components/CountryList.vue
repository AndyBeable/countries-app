<template>
  <section class="country__container">
    <SearchBar @search="search" />
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
</style>
