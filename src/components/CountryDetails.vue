<template>
  <div class="details-container">
    <div>
      <img :src="country.flags.svg" />
    </div>
    <div>
      <header>
        <h4>{{ country.name }}</h4>
      </header>
      <div>
        <p>{{ country.nativeName }}</p>
        <p>{{ country.population }}</p>
        <p>{{ country.region }}</p>
        <p>{{ country.subregion }}</p>
        <p>{{ country.capital }}</p>
      </div>
      <div>
        <p>{{ country.topLevelDomain[0] }}</p>
        <p>{{ country.currencies.map((currency) => currency.name).join() }}</p>
        <p>{{ country.languages.map((language) => language.name).join() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.details-container {
  display: flex;
}
</style>
