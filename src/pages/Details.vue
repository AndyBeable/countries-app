<template>
  <section>
    <CountryDetails :country="country" />
  </section>
</template>

<script>
import Api from "../api/countries";
import CountryDetails from "../components/CountryDetails";
export default {
  components: {
    CountryDetails,
  },
  data() {
    return {
      country: {},
    };
  },
  beforeCreate() {
    Api.fetchCountry(this.$route.params.code).then((response) => {
      this.country = response.data;
      console.log(response.data);
    });
  },
};
</script>
